import BinaryTree from "../../tree"

export interface BinaryTreeFormInput {
  fileToRead: File[]
  objectView: string
}

export interface Props {
  binaryTree: BinaryTree | null
  setBinaryTree: (btInstance: BinaryTree | null) => void
}
