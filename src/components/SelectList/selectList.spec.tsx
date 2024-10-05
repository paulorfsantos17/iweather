import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "."
import type { CityProps } from "@services/getCityByNameService"

describe('Component: SelectList',  () => {
  it('should be return city details selected', () => {
    const data : CityProps[]= [
      {
      id: '1',
      name: "Campinas",
      latitude: 123,
      longitude: 456
    },
      {
      id: '2',
      name: "Campo Grande",
      latitude: 789,
      longitude: 987
    }
  ]
  const onPress = jest.fn()

    render(<SelectList  data={data} onPress={onPress} onChange={() => {}}/>)
    const selectedCity = screen.getByText(/Campo/i)

    fireEvent.press(selectedCity)
    expect(onPress).toHaveBeenCalledTimes(1)
    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it('not should be show options when data props is empty', () => {
    render(<SelectList  data={[]} onPress={() => {}} onChange={() => {}}/>)
    const selectList = screen.getByTestId('options')

    expect(selectList.children).toHaveLength(0)
  })
})