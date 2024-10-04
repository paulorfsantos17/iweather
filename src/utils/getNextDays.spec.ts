import { getNextDays } from "./getNextDays"

it("should be return the next fixe days", () =>  {
  const days = getNextDays()
  expect(days.length).toBe(5)

})
it("should be return the next fixe days 2", () =>  {
  const days = getNextDays()
  expect(days.length).toBe(5)

})