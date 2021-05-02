import { render, screen } from "@testing-library/react"
import Footer from "../index"
import { MESSAGES } from "../../../constants"

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it("should display the Footer title and the current date", () => {
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      `${MESSAGES.MADE_BY}${new Date().getFullYear()}`
    )
  })
})
