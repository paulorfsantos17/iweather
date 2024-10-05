import { mockCityApiResponse } from "__test__/mocks/mockCityAPIResponse"
import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe('API: getCityByNameService', () =>  {
  it('should return a city details',  async () =>  {
    
    jest.spyOn(api, "get").mockResolvedValue({
      data  : mockCityApiResponse
    })
    const response = await getCityByNameService('Campinas')

    expect(response.length).toBeGreaterThan(0)
  })

})