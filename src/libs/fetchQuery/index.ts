export const fetchQuery = (url: string, params: URLSearchParams): string => {
  const query = new URLSearchParams(params);
  return `${url}?${query.toString()}`;
};
