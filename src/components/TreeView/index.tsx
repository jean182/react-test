import { BinTreeNode } from "../../tree/tree.interfaces"
import { Props } from "./TreeView.interfaces"

export default function TreeView({ binaryTree }: Props) {
  const subtree = binaryTree.subtreeWithAllDeepest()

  const renderTree = (node?: BinTreeNode | null) => {
    if (!node) {
      return node === null ? (
        <li>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
        <ul>{renderTree(binaryTree.root)}</ul>
      </div>
    </div>
  )
}
