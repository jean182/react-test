import {
  BinTreeNode,
  Item,
  LeftOrRight,
  NonArrayItem,
  SubTree,
} from "./tree.interfaces"

export default class BinaryTree {
  private _root: BinTreeNode | null

  constructor(arr?: any[]) {
    this._root = arr ? this.arrayToBinaryTree(arr) : null
  }

  subtreeWithAllDeepest = () => {
    return this.subtree(this.root).node
  }

  get root() {
    return this._root
  }

  set root(value) {
    this._root = value
  }

  private arrayToBinaryTree(arr: any[]) {
    const insertNode = (acc: BinTreeNode, curr: Item, index: number) => {
      let node = acc
      let key: LeftOrRight
      const value = this.getId(curr)

      while (node.id !== value) {
        key = index % 2 === 1 ? "left" : "right"
        if (!node[key]) {
          if (Array.isArray(curr)) {
            node[key] = this.arrayToBinaryTree(curr)
          } else {
            node[key] = value ? { id: value } : null
          }

          break
        }
      }
      return acc
    }

    return arr.reduce(insertNode, { id: arr[0] })
  }

  private subtree(root?: BinTreeNode | null): SubTree {
    if (!root) {
      return { node: null, dist: 0 }
    }

    const left = this.subtree(root.left)
    const right = this.subtree(root.right)

    if (left.dist > right.dist) {
      return { node: left.node, dist: left.dist + 1 }
    }

    if (left.dist < right.dist) {
      return { node: right.node, dist: right.dist + 1 }
    }

    return { node: root, dist: left.dist + 1 }
  }

  private getId(item: Item): NonArrayItem {
    if (Array.isArray(item)) {
      return item[0]
    }
    return item
  }
}
