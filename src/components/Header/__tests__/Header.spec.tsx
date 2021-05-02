import { render, screen } from "@testing-library/react"
import Header from "../index"
import { MESSAGES } from "../../../constants"

describe("Header", () => {
  beforeEach(() => {
    render(<Header />)
  })

  it("should display the Header title", () => {
    expect(screen.getByRole("banner")).toHaveTextContent(MESSAGES.TITLE)
  })
})
