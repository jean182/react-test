import { BinTreeNode } from "../../tree/tree.interfaces"

export interface BinaryTreeFormInput {
  fileToRead: File[]
  objectView: string
}

export interface Props {
  binaryTree: BinTreeNode | null
  setBinaryTree: React.Dispatch<React.SetStateAction<BinTreeNode | null>>
}
