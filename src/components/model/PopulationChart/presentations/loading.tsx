import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container } from './css/base.css';

import { Typography } from '@/components/ui/Typography';

export const PopulationChartLoadingPresentation: React.FC = () => (
  <div className={container} data-testid="loading">
    <FontAwesomeIcon size="3x" icon={faSpinner} spin />
    <Typography variant="h1">データを取得中...</Typography>
  </div>
);
