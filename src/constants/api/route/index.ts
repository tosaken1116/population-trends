export const apiPath = (baseUrl: string) =>
  ({
    v1: {
      population: {
        composition: {
          perYear: `${baseUrl}/api/v1/population/composition/perYear`,
        },
      },
    },
  }) as const;
