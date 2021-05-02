import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import Form from "../index"
import { MESSAGES } from "../../../constants"

describe("Form", () => {
  beforeEach(() => {
    render(<Form binaryTree={null} setBinaryTree={() => {}} />)
  })

  it("should display required error when the textarea is blank", async () => {
    fireEvent.submit(
      screen.getByRole("button", { name: MESSAGES.BTN_SUBMIT_LABEL })
    )

    expect(await screen.findAllByRole("alert")).toHaveLength(1)
  })

  it("should display matching error when the textarea is invalid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Object View/i }), {
      target: {
        value: "test",
      },
    })

    fireEvent.submit(
      screen.getByRole("button", { name: MESSAGES.BTN_SUBMIT_LABEL })
    )

    expect(await screen.findAllByRole("alert")).toHaveLength(1)
    expect(
      (screen.getByRole("textbox", {
        name: /Object View/i,
      }) as HTMLInputElement).value
    ).toBe("test")
  })

  it("should not display error when value is valid", async () => {
    fireEvent.input(screen.getByRole("textbox", { name: /Object View/i }), {
      target: {
        value: JSON.stringify({
          id: 1,
          left: {
            id: 2,
          },
          right: {
            id: 3,
            left: null,
            right: {
              id: 5,
            },
          },
        }),
      },
    })

    fireEvent.submit(
      screen.getByRole("button", { name: MESSAGES.BTN_SUBMIT_LABEL })
    )

    await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0))
  })
})
