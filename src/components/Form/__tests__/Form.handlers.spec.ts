import {
  countItems,
  getFileText,
  validateFileContent,
  validateNewFile,
  validateTextArea,
} from "../Form.handlers"

describe("#countItems", () => {
  it("returns 0 if the array is empty", () => {
    expect(countItems([])).toEqual(0)
  })

  it("returns the valid count for a one dimensional array", () => {
    expect(countItems([1, 2, 3])).toEqual(3)
  })

  it("returns the valid count for a two dimensional array", () => {
    expect(countItems([1, 2, [3, 4]])).toEqual(4)
  })

  it("returns the valid count for a really nested array", () => {
    expect(countItems([1, 2, [3, [4, 5, [6, 7]], [8, 9]]])).toEqual(9)
  })
})

describe("#getFileText", () => {
  const content = JSON.stringify({ id: 1 })
  const blob = new Blob([content], { type: "text/plain" })
  const file = new File([blob], "file.json")

  it("returns the contents on the file", async () => {
    expect(await getFileText([file])).toEqual(content)
  })
})

describe("#validateFileContent", () => {
  it("returns false if the array is empty", () => {
    expect(validateFileContent([])).toBeFalsy()
  })

  it("returns false if the array first item is not a string or a number", () => {
    expect(validateFileContent([{}])).toBeFalsy()
  })

  it("returns false if the item is not an array", () => {
    expect(validateFileContent({})).toBeFalsy()
  })

  it("returns true if the item is a valid array", () => {
    expect(validateFileContent([1, [2], [3, null, [5]]])).toBeTruthy()
  })
})

describe("#validateNewFile", () => {
  describe("Invalid file", () => {
    const content = JSON.stringify({ id: 1 })
    const blob = new Blob([content], { type: "text/plain" })
    const file = new File([blob], "file.json")

    it("returns false if the uploaded file did not pass the #validateFileContent result", async () => {
      expect(await validateNewFile([file])).toBeFalsy()
    })
  })

  describe("Valid file", () => {
    const content = JSON.stringify([1, [2], [3, null, [5]]])
    const blob = new Blob([content], { type: "text/plain" })
    const file = new File([blob], "file.json")

    it("returns false if the uploaded file did not pass the #validateFileContent result", async () => {
      expect(await validateNewFile([file])).toBeTruthy()
    })
  })
})

describe("#validateTextArea", () => {
  it("returns false if the item is not an instance of BinTree", () => {
    expect(validateTextArea("[]")).toBeFalsy()
  })

  it("returns true if the item is not an instance of BinTree", () => {
    expect(validateTextArea(JSON.stringify({ id: 1 }))).toBeTruthy()
  })
})
