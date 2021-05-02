export type NonArrayItem = string | number | null

export type Item = NonArrayItem | any[]

export interface BinTreeNode {
  id: number | string
  left?: BinTreeNode | null
  right?: BinTreeNode | null
}

export interface SubTree {
  node: BinTreeNode | null
  dist: number
}

export type LeftOrRight = keyof Omit<BinTreeNode, "id">
