import { container } from './css/base.css';

import { Typography } from '@/components/ui/Typography';

export const PopulationChartEmptyPresentation: React.FC = () => (
  <div className={container} data-testid="empty">
    <Typography variant="h1">🍃</Typography>
    <Typography variant="h1">データが選択されていません</Typography>
  </div>
);
