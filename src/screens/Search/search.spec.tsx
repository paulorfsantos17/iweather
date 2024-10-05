import { render, screen, fireEvent, waitFor } from "@__mocks__/libs/customRender";
import { Search } from ".";
import { api } from "@services/api";
import { mockCityApiResponse } from "@__mocks__/api/mockCityAPIResponse";

describe("SCREEN: Search", () => {
  it('should be show city option', async () => {
    
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityApiResponse })

    render(<Search />)
    const searchInput = screen.getByTestId("search-input")
    fireEvent.changeText(searchInput, "Campinas" )

    const option = await waitFor(() => screen.findByText(/campinas/i))
    expect(option).toBeTruthy();

  });
})