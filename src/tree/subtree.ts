import { BinTreeNode } from "./tree.interfaces"

const subtree = (
  root?: BinTreeNode | null
): { node: BinTreeNode | null; dist: number } => {
  if (!root) {
    return { node: null, dist: 0 }
  }

  const left = subtree(root.left)
  const right = subtree(root.right)

  if (left.dist > right.dist) {
    return { node: left.node, dist: left.dist + 1 }
  }

  if (left.dist < right.dist) {
    return { node: right.node, dist: right.dist + 1 }
  }

  return { node: root, dist: left.dist + 1 }
}

function subtreeWithAllDeepest(root: BinTreeNode) {
  return subtree(root).node
}

export { subtreeWithAllDeepest }
