export const apiPath = (baseUrl: string) =>
  ({
    v1: {
      population: {
        composition: {
          perYear: `${baseUrl}/api/v1/population/composition/perYear`,
        },
      },
      prefectures: `${baseUrl}/api/v1/prefectures`,
    },
  }) as const;
