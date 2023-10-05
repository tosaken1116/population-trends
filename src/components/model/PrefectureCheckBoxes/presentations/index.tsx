import { usePrefectureCheckBoxes } from '../hooks';

import { container } from './css/base.css';
import { prefectureItem, selectedItem } from './css/index.css';

import type { Response } from '@/app/api/v1/prefectures/schema';

import { CheckBox } from '@/components/ui/CheckBox';

type Props = {
  onChange: (target: Response['result'][number]) => void;
  prefectures: Response['result'] | undefined;
  selectedPrefectures: Response['result'][number]['prefCode'][];
};

export const PrefectureCheckBoxesPresentation: React.FC<Props> = ({
  onChange,
  prefectures,
  selectedPrefectures,
}) => (
  <ul className={container}>
    {prefectures?.map((prefecture) => {
      const selected = selectedPrefectures.includes(prefecture.prefCode);
      return (
        <li key={prefecture.prefCode} className={prefectureItem}>
          <CheckBox
            checked={selected}
            labelText={prefecture.prefName}
            onChange={(): void => {
              onChange(prefecture);
            }}
            className={selected ? selectedItem : ''}
            size="m"
          />
        </li>
      );
    })}
  </ul>
);

export const PrefectureCheckBoxesContainer: React.FC = () => {
  const { onChange, prefectures, selectedPrefectures } =
    usePrefectureCheckBoxes();

  return (
    <PrefectureCheckBoxesPresentation
      onChange={onChange}
      prefectures={prefectures}
      selectedPrefectures={selectedPrefectures}
    />
  );
};
