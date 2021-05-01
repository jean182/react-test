import { BinTreeNode, LeftOrRight } from "./tree.interfaces"
import { buildNode } from "./utils"

function transformArrayToBinaryTree(array: any[]) {
  const insertNode = (
    acc: BinTreeNode,
    curr: number | (number | number[] | null)[] | null,
    index: number
  ) => {
    let node = acc
    let key: LeftOrRight
    while (node.id !== curr) {
      key = index % 2 === 1 ? "left" : "right"
      if (!node[key]) {
        node[key] = Array.isArray(curr)
          ? curr.reduce<BinTreeNode | null>(
              (acc, curr, index) =>
                acc
                  ? insertNode(acc, curr, index)
                  : buildNode(curr as number | string | null),
              null
            )
          : buildNode(curr)
        break
      }
      node = node[key] as BinTreeNode
    }
    return acc
  }

  return array.reduce<BinTreeNode | null>(
    (acc, curr, index) =>
      acc == null
        ? buildNode(curr as number | string | null)
        : insertNode(acc, curr, index),
    null
  )
}

export { transformArrayToBinaryTree }
