import type { CityProps } from "@services/getCityByNameService";
import { getStorageCity, saveStorageCity } from "./cityStorage";

describe('STORAGE: CityStorage', () => {
  it("should be return null when don't have a city stored",async   () =>  {
    const response = await  getStorageCity()
    expect(response).toBeNull();
  })

  it("should  be return city stored",  async () =>  {
    const newCity: CityProps = { id: '1', name: 'New York', longitude: -74, latitude: 40 };
    await saveStorageCity(newCity)

    const response = await getStorageCity()
    expect(response).toEqual(newCity);
  })
  
});