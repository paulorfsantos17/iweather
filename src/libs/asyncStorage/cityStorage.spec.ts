import type { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";
const newCity: CityProps = { id: '1', name: 'New York', longitude: -74, latitude: 40 };
describe('STORAGE: CityStorage', () => {
  it("should be return null when don't have a city stored",async   () =>  {
    const response = await  getStorageCity()
    expect(response).toBeNull();
  })

  it("should  be return city stored",  async () =>  {
    await saveStorageCity(newCity)

    const response = await getStorageCity()
    expect(response).toEqual(newCity);
  })
  it("should  be remove city stored",  async () =>  {

    await saveStorageCity(newCity)

    await removeStorageCity()

    const response = await getStorageCity()
    expect(response).toBeNull();
  })
  
});