import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container } from './css/base.css';
import { errorIcon, errorText } from './css/error.css';

import { Typography } from '@/components/ui/Typography';

export const PopulationChartErrorPresentation: React.FC = () => (
  <div className={container} data-testid="error">
    <FontAwesomeIcon
      icon={faCircleExclamation}
      shake
      size="2x"
      className={errorIcon}
    />
    <Typography variant="h1" className={errorText}>
      都道府県の取得中にエラーが発生しました
    </Typography>
  </div>
);
