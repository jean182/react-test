import BinaryTree from "../index"

const array = [1, [2], [3, null, [5]]]

const binaryObject = {
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
}

const subtree = { id: 5 }

describe("Binary Tree Class", () => {
  describe("Creates a root node", () => {
    describe("Without passing an argument in the constructor", () => {
      it("initializes the root to null", () => {
        const obj = new BinaryTree()
        expect(obj.root).toEqual(null)
      })
    })

    describe("Passing an array as an argument", () => {
      it("initializes Node using a valid array", () => {
        const obj = new BinaryTree(array)
        expect(obj.root).toEqual(binaryObject)
      })
    })
  })

  describe("Creates a binary subtree", () => {
    describe("Without passing an argument in the constructor", () => {
      it("initializes the subtree to null because there's not root node", () => {
        const obj = new BinaryTree()
        expect(obj.subtreeWithAllDeepest()).toEqual(null)
      })
    })

    describe("Passing an array as an argument", () => {
      it("finds the subtree of the root node", () => {
        const obj = new BinaryTree(array)
        expect(obj.subtreeWithAllDeepest()).toEqual(subtree)
      })
    })
  })
})
