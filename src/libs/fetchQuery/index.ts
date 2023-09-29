import type { ZodSchema } from 'zod';

export const fetchQuery = (
  url: string,
  params: URLSearchParams,
  schema?: ZodSchema
): string => {
  if (!schema) {
    return `${url}?${params.toString()}`;
  }
  const paramsObj = Object.fromEntries(params.entries());

  const parsed = schema.safeParse(paramsObj);
  if (!parsed.success) {
    throw new Error('Data validation failed');
  }
  return `${url}?${params.toString()}`;
};
