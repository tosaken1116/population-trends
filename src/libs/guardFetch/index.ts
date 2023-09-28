import type { ZodType } from 'zod';

export const guardFetch = async <T, S extends ZodType<T>>(
  url: string,
  schema: S,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const parsed = schema.safeParse(await response.json());

  if (!parsed.success) {
    throw new Error('Data validation failed');
  }

  return parsed.data;
};
