import { object, string } from 'zod';

import { fetchQuery } from '.';

describe('fetchQuery libs', () => {
  it('クエリパラメータがある時 パラメータ付きでurlを返す', () => {
    const url = 'http://example.com';
    const params = new URLSearchParams({ foo: 'bar', baz: 'qux' });

    const result = fetchQuery(url, params);
    expect(result).toBe('http://example.com?foo=bar&baz=qux');
  });

  it('クエリパラメータがない時に ?より後が空白でurlを返す', () => {
    const url = 'http://example.com';
    const params = new URLSearchParams();

    const result = fetchQuery(url, params);
    expect(result).toBe('http://example.com?');
  });

  it('バリデーションスキーマがある時に正しいクエリパラメータを渡すとパラメータ付きでurlを返す', () => {
    const testSchema = object({
      name: string(),
    });

    const url = 'http://example.com';

    const params = new URLSearchParams({ name: 'user' });

    const result = fetchQuery(url, params, testSchema);
    expect(result).toBe('http://example.com?name=user');
  });

  it('バリデーションスキーマがある時に間違ったクエリパラメータを渡すとエラーを返す', () => {
    const testSchema = object({
      name: string(),
    });

    const url = 'http://example.com';
    const params = new URLSearchParams({ number: '123' });

    expect(() => fetchQuery(url, params, testSchema)).toThrowError(
      'Data validation failed'
    );
  });
});
