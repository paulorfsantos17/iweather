import { render, screen } from "@testing-library/react-native"
import { Day } from "."

import clearDay from "@assets/clear_night.svg"

const dayData = {
  day: '18/07',
  min: '30°c',
  max: '36°c',
  icon: clearDay,
  weather: 'Céu Limpo'
}

describe("COMPONENT: Day", () =>  {
  it("should be render day", () =>  {
    render(<Day data={dayData} />)
    expect(screen.getByText("18/07")).toBeTruthy()
  })

})