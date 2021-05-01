import { subtreeWithAllDeepest } from "../../tree"
import { BinTreeNode } from "../../tree/tree.interfaces"
import { Props } from "./Tree.interfaces"

export default function Tree({ binaryTree }: Props) {
  const subtree = subtreeWithAllDeepest(binaryTree)

  const renderTree = (node?: BinTreeNode | null) => {
    if (!node) {
      return node === null ? (
        <li>
          <span>&nbsp;&nbsp;</span>
        </li>
      ) : null
    }

    const hasChildren = node.left || node.right

    return (
      <li {...(node.id === subtree?.id && { className: "subtree" })}>
        <span>{node.id}</span>
        {hasChildren && (
          <ul>
            {renderTree(node.left)}
            {renderTree(node.right)}
          </ul>
        )}
      </li>
    )
  }

  return (
    <div className="my-3 container-tree">
      <h2>Output</h2>
      <div className="tree">
        <ul>{renderTree(binaryTree)}</ul>
      </div>
    </div>
  )
}
