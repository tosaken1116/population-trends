import { envGuard } from '@/libs/envGuard';

export const WITH_TOKEN_HEADER = {
  'X-API-KEY': envGuard('API_KEY'),
};
