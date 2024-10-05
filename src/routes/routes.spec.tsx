import {  act, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import type { CityProps } from "@services/getCityByNameService";
import { render } from "@__mocks__/libs/customRender";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__mocks__/api/mockWeatherAPIResponse";

describe("ROUTES",  () =>  {
  it('should be render Search screen when not city selected',async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.findByText(/escolha um local/i))
    expect(title).toBeTruthy()
  });

  it('should be render Dashboard when has city selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse})
    const city: CityProps = { id: '1', name: 'New York', longitude: -74, latitude: 40 };
    await saveStorageCity(city)
    await act(() => waitFor(()=>  render(<Routes />) )) 

    const title = screen.getByText(city.name)
    expect(title).toBeTruthy()
  });
})