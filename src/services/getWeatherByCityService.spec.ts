import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("SERVICE: getWeatherByCityService",  () =>  {
  it("should be return weather api data formatted",async  () => { 
    jest.spyOn(api, "get").mockResolvedValue({data: mockWeatherAPIResponse })
    const response = await  getWeatherByCityService({latitude: 0, longitude: 0})

    expect(response).toHaveProperty("today")
  })
})