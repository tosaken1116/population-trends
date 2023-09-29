import { z } from 'zod';

export const ResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(
    z.object({
      prefCode: z.number(),
      prefName: z.string(),
    })
  ),
});

export type Response = z.infer<typeof ResponseSchema>;
