import { render, screen } from "@testing-library/react"
import Layout from "../index"
import { MESSAGES } from "../../../constants"

describe("Layout", () => {
  const mainText = "Test"
  beforeEach(() => {
    render(
      <Layout>
        <p>{mainText}</p>
      </Layout>
    )
  })

  it("should display the Header title", () => {
    expect(screen.getByRole("banner")).toHaveTextContent(MESSAGES.TITLE)
  })

  it("should display the Footer title and the current date", () => {
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      `${MESSAGES.MADE_BY}${new Date().getFullYear()}`
    )
  })

  it("should display the children content", () => {
    expect(screen.getByRole("main")).toHaveTextContent(mainText)
  })
})
