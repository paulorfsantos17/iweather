import { render, screen } from "@testing-library/react-native"
import  { WeatherItem } from "."

import dropIcon from "@assets/drop.svg"

describe("COMPONENT: WeatherItem", () =>  {
  it("should be show title and value.", () => { 
    render(
    <WeatherItem
      icon={dropIcon}
      title="Umidade"
      value="81%"
      />
    )

    const title = screen.getByText('Umidade')
    const value = screen.getByText('81%')

    expect(title).toBeTruthy()
    expect(value).toBeTruthy()
  })
})