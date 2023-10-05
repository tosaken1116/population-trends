import { object, string } from 'zod';

import { guardFetch } from '.';

global.fetch = jest.fn();

describe('guardFetch libs', () => {
  const testUrl = 'http://test.com';

  const testSchema = object({
    name: string(),
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('レスポンスの型が正しい場合データを返す', async () => {
    const responseData = { name: 'John Doe' };

    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData),
    };

    (global.fetch as jest.Mock).mockResolvedValue(response);

    const result = await guardFetch(testUrl, testSchema);
    expect(result).toEqual(responseData);
  });

  it('レスポンスの型が正しくない場合エラーを返す', async () => {
    const responseData = { name: 123 };

    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData),
    };

    (global.fetch as jest.Mock).mockResolvedValue(response);

    await expect(guardFetch(testUrl, testSchema)).rejects.toThrow(
      'Data validation failed'
    );
  });
});
