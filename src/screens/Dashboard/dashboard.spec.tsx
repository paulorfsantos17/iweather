import { mockWeatherAPIResponse } from "@__mocks__/api/mockWeatherAPIResponse";
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__mocks__/libs/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import type { CityProps } from "@services/getCityByNameService";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityApiResponse } from "@__mocks__/api/mockCityAPIResponse";

describe('SCREEN: Dashboard', () => {
  beforeAll(async () => {

    const city: CityProps = {
      id: '1',
      name: 'rio do sul',
      longitude: 123,
      latitude: 456
    }

    await saveStorageCity(city)
  })
  it('should be show city weather',async  () => {
    jest.spyOn(api, 'get').mockResolvedValue(({data: mockWeatherAPIResponse}))
    render(<Dashboard />)

    const cityName = await waitFor(() =>  screen.findByText(/rio do sul/i))
    expect(cityName).toBeTruthy()

  });

  it('should  be show another selected whether', async () => {
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({data: mockWeatherAPIResponse})
      .mockResolvedValueOnce({data: mockCityApiResponse})
      .mockResolvedValueOnce({data: mockWeatherAPIResponse})
    
      const {debug} = render(<Dashboard />)
      await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))
      const cityName  =  'Campinas'

      await waitFor(() => act(() => {
        const search = screen.getByTestId("search-input")
        fireEvent.changeText(search, cityName)
      }))

      await waitFor(() => act(() => {
        fireEvent.press(screen.getByText(cityName, {exact: false}))
      }))

      expect(screen.getByText(cityName, {exact: false})).toBeTruthy()



  });
});