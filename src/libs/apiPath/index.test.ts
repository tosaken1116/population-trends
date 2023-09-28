import { envGuard } from '../envGuard';

import { getApiPath } from '.';

import { apiPath } from '@/constants/api/route';

jest.mock('../envGuard');
jest.mock('../../constants/api/route');

describe('getApiPath', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the production API URL when NODE_ENV is production', () => {
    (envGuard as jest.Mock)
      .mockImplementationOnce(() => 'production')
      .mockImplementationOnce(() => 'https://prod.example.com');

    (apiPath as jest.Mock).mockImplementation((url: string) => url);

    expect(getApiPath()).toBe('https://prod.example.com');
  });

  it('should return the development API URL when NODE_ENV is not production', () => {
    (envGuard as jest.Mock)
      .mockImplementationOnce(() => 'development')
      .mockImplementationOnce(() => 'https://dev.example.com');

    (apiPath as jest.Mock).mockImplementation((url: string) => url);

    expect(getApiPath()).toBe('https://dev.example.com');
  });
});
