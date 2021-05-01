export interface BinTreeNode {
  id: number | string
  left?: BinTreeNode | null
  right?: BinTreeNode | null
}

export type LeftOrRight = keyof Omit<BinTreeNode, "id">
