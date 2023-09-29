import type { ZodSchema } from 'zod';

import { BAD_REQUEST } from '@/constants/api/status';

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
    throw new Error(BAD_REQUEST);
  }
  return `${url}?${params.toString()}`;
};
