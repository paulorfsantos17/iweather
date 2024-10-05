import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe("SERVICE: getWeatherByCityService",  () =>  {
  it("should be return weather api data formatted", () => { 
    jest.spyOn(api, "get").mockResolvedValue({data: mockWeatherAPIResponse })
    const response = getWeatherByCityService({latitude: 0, longitude: 0})
    console.log("🚀 ~ it ~ response:", response)
  })
})