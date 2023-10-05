import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { usePopulationChart } from '../hooks';

import { container } from './css/base.css';
import { PopulationChartEmptyPresentation } from './empty';

import type { VisibleData } from '../hooks';

import { PRIMARY } from '@/constants/colors';

type Props = {
  data: VisibleData;
  activePrefectures: string[];
  handleActivePrefectures: (prefecture: string) => void;
};

export const PopulationChartPresentation: React.FC<Props> = ({
  data,
  activePrefectures,
  handleActivePrefectures,
}) => (
  <div className={container}>
    <ResponsiveContainer width="99%" height="80%">
      <LineChart
        width={1000}
        height={1000}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          dataKey="value"
          tick={{
            fontSize: 12,
          }}
        />
        <XAxis dataKey="year" type="category" allowDuplicatedCategory={false} />

        <Legend
          onClick={(data: { value: string }): void => {
            handleActivePrefectures(data.value);
          }}
        />
        <Tooltip />
        {data.map(({ prefecture, data }) => (
          <Line
            key={prefecture}
            dataKey="value"
            data={data}
            name={prefecture}
            stroke={
              activePrefectures.length > 0 &&
              !activePrefectures.includes(prefecture)
                ? '#ccc'
                : PRIMARY.light
            }
            strokeWidth={
              activePrefectures.length == 0
                ? 1
                : !activePrefectures.includes(prefecture)
                ? 1
                : 4
            }
            onClick={(): void => handleActivePrefectures(prefecture)}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const PopulationChartContainer: React.FC = () => {
  const { visibleData, handleActivePrefectures, activePrefectures } =
    usePopulationChart();

  if (visibleData == null || visibleData.length === 0) {
    return <PopulationChartEmptyPresentation />;
  }
  return (
    <PopulationChartPresentation
      data={visibleData}
      activePrefectures={activePrefectures}
      handleActivePrefectures={handleActivePrefectures}
    />
  );
};
