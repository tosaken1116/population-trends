import { chartContainer, checkboxesContainer } from './index.css';

import { CategoryTab } from '@/components/model/CategoryTab';
import { PopulationChart } from '@/components/model/PopulationChart';
import { PrefectureCheckBoxes } from '@/components/model/PrefectureCheckBoxes';

export const Screen: React.FC = () => (
  <div>
    <div className={checkboxesContainer}>
      <PrefectureCheckBoxes />
    </div>
    <CategoryTab />
    <div className={chartContainer}>
      <PopulationChart />
    </div>
  </div>
);
