import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container, errorIcon, errorText } from './css/error.css';

import { Typography } from '@/components/ui/Typography';

export const PrefectureCheckBoxesErrorPresentation: React.FC = () => (
  <div className={container}>
    <FontAwesomeIcon
      icon={faCircleExclamation}
      shake
      size="2x"
      className={errorIcon}
    />
    <Typography className={errorText}>
      都道府県の取得中にエラーが発生しました
    </Typography>
  </div>
);
