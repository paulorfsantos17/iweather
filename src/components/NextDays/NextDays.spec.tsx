import { render, screen } from "@testing-library/react-native"

import { NextDays } from "."
import clearDay from "@assets/clear_night.svg"


const DataNextDays = [
  {
    day: '18/07',
    min: '30°c',
    max: '36°c',
    icon: clearDay,
    weather: 'Céu Limpo'
  },
  {
    day: '19/07',
    min: '32°c',
    max: '34°c',
    icon: clearDay,
    weather: 'Céu Limpo'
  },
  {
    day: '20/07',
    min: '20°c',
    max: '24°c',
    icon: clearDay,
    weather: 'Nublado'
  },
  {
    day: '21/07',
    min: '32°c',
    max: '34°c',
    icon: clearDay,
    weather: 'Céu Limpo'
  },
  {
    day: '22/07',
    min: '21',
    max: '26°c',
    icon: clearDay,
    weather: 'Chuvoso'
  }
]
  


describe("COMPONENT: NextDays", () =>  {
  it("should be show title and value.", () => { 
    render( <NextDays data={DataNextDays} />    )

    expect(screen.getByText('19/07')).toBeTruthy()
  })
})