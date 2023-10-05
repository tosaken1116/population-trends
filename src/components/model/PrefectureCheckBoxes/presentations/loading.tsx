import {
  checkboxStyle,
  container,
  labelStyle,
  prefectureItem,
} from './css/loading.css';

import { Skeleton } from '@/components/ui/Skeleton';

export const PrefectureCheckBoxesLoadingPresentation: React.FC = () => (
  <ul className={container} data-testid="loading">
    {[...Array<number>(47)].map((_: number, i: number) => (
      <li key={i} className={prefectureItem}>
        <div className={checkboxStyle}>
          <Skeleton width={24} height={24} rounded="m" />
        </div>
        <div className={labelStyle}>
          <Skeleton width={64} height={24} rounded="m" />
        </div>
      </li>
    ))}
  </ul>
);
