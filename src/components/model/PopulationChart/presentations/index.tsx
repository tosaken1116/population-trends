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

type Props = {
  data: VisibleData;
};

export const PopulationChartPresentation: React.FC<Props> = ({ data }) => (
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

        <Legend />
        <Tooltip />
        {data.map(({ prefecture, data }) => (
          <Line
            key={prefecture}
            dataKey="value"
            data={data}
            name={prefecture}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const PopulationChartContainer: React.FC = () => {
  const { visibleData } = usePopulationChart();

  if (visibleData == null || visibleData.length === 0) {
    return <PopulationChartEmptyPresentation />;
  }
  return <PopulationChartPresentation data={visibleData} />;
};
