import { envGuard } from '../envGuard';

import { apiPath } from '@/constants/api/route';

export const getApiPath = (): ReturnType<typeof apiPath> => {
  if (envGuard('NODE_ENV') == 'production') {
    return apiPath(`${envGuard('PROD_API_URL')}`);
  } else {
    return apiPath(`${envGuard('DEV_API_URL')}`);
  }
};
