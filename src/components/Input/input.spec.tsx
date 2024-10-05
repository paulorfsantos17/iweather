import {render, screen} from  '@testing-library/react-native'
import { Input } from '.'

describe("Component: Input",  () =>  {
  it("should be able render activityIndicator ", () =>  {
    const wrapper =  render(<Input isLoading />)

    const activityIndicator = screen.queryByTestId("activity-indicator")

    expect(activityIndicator).toBeTruthy()
  })

  it("not should be able render activityIndicator ", () =>  {
    const wrapper =  render(<Input  />)

    const activityIndicator = screen.queryByTestId("activity-indicator")

    expect(activityIndicator).toBeNull()
  })
})