import { usePrefectureCheckBoxes } from '../hooks';

import { container, prefectureItem, selectedItem } from './css/index.css';

import { CheckBox } from '@/components/ui/CheckBox';

export const PrefectureCheckBoxesPresentation: React.FC = () => {
  const { onChange, prefectures, selectedPrefectures } =
    usePrefectureCheckBoxes();

  return (
    <ul className={container}>
      {prefectures?.map((prefecture) => {
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
};
