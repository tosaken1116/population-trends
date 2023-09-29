import { z } from 'zod';

export const ResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    boundaryYear: z.number(),
    data: z.array(
      z.object({
        label: z.string(),
        data: z.array(
          z.object({
            year: z.number(),
            value: z.number(),
          })
        ),
      })
    ),
  }),
});

export type Response = z.infer<typeof ResponseSchema>;

export const RequestParamSchema = z.object({
  cityCode: z.string().refine((data) => !isNaN(+data), {
    params: { input: 'id' },
  }),
  prefCode: z.string().refine((data) => !isNaN(+data), {
    params: { input: 'id' },
  }),
});
