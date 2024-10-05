import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";
const cityData = {
  id: '1',
  name: 'New York',
  longitude: 123,
  latitude: 456,
}
describe("CONTEXT: CityContext", () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), {wrapper: CityProvider});
    await waitFor(() => act(() => result.current.handleChanceCity(cityData)))

    expect(result.current.city?.name).toBe('New York');
  });
})