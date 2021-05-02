import { render, screen } from "@testing-library/react"
import TreeView from "../index"
import BinaryTree from "../../../tree"
import { countItems } from "../../Form/Form.handlers"

const array = [1, [2], [3, null, [5]]]

describe("TreeView", () => {
  beforeEach(() => {
    render(<TreeView binaryTree={new BinaryTree(array)} />)
  })

  it("should display the same list items as the array count", async () => {
    expect(await screen.findAllByRole("listitem")).toHaveLength(
      countItems(array)
    )
  })
})
