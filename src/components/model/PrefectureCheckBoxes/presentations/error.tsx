import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { container } from './css/base.css';
import {
  errorIcon,
  errorMessage,
  errorText,
  loadingContainer,
  overlay,
} from './css/error.css';
import { PrefectureCheckBoxesLoadingPresentation } from './loading';

import { Typography } from '@/components/ui/Typography';

export const PrefectureCheckBoxesErrorPresentation: React.FC = () => (
  <div className={container} data-testid="error">
    <div className={loadingContainer}>
      <PrefectureCheckBoxesLoadingPresentation />
    </div>
    <div className={overlay}>
      <div className={errorMessage}>
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
    </div>
  </div>
);
