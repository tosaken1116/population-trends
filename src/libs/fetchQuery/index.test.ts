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
});
