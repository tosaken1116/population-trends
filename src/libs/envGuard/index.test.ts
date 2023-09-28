import { envGuard } from '.';

describe('envGuard libs', () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalEnv = process.env;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('環境変数が設定されているとき 値を返す', () => {
    const key = 'TEST_KEY';
    const value = 'TEST_VALUE';
    process.env[key] = value;

    expect(envGuard(key)).toBe(value);
  });

  it('設定していない変数にアクセスした時エラーが出る', () => {
    const key = 'UNDEFINED_KEY';

    expect(() => envGuard(key)).toThrowError(
      `Environment variable ${key} is not defined`
    );
  });
});
