import type { CityAPIResponse } from "@services/getCityByNameService"

export const mockCityApiResponse: CityAPIResponse = {
  id: '1',
  name: 'Campinas',
  sys: {
    country: 'BR'
  },
  coord: {
    lon: -47.11,
    lat: -22.90
  }
}

