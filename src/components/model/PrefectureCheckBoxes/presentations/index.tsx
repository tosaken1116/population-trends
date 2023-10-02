import { container, prefectureItem, selectedItem } from './css/index.css';

import type { Response } from '@/app/api/v1/prefectures/schema';

import { CheckBox } from '@/components/ui/CheckBox';

type Props = {
  onChange: (target: Response['result'][number]) => void;
  prefectures: Response['result'];
  selectedPrefectures: Response['result'];
};

export const PrefectureCheckBoxesPresentation: React.FC<Props> = ({
  onChange,
  selectedPrefectures,
  prefectures,
}) => (
  <ul className={container}>
    {prefectures.map((prefecture) => {
      const selected = selectedPrefectures.includes(prefecture);
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
