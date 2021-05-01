import { BinTreeNode } from "./tree.interfaces"

function buildNode(id: number | string | null): BinTreeNode | null {
  return id !== null
    ? {
        id: typeof id === "number" ? Number(id) : String(id),
      }
    : null
}

const countItems = (arr: any[]): number => {
  return arr.reduce(
    (acc, curr) => acc + (Array.isArray(curr) ? countItems(curr) : 1),
    0
  )
}

function notAStringOrNumber(item: unknown) {
  return typeof item !== "number" && typeof item !== "string"
}

function stringOrNumber(item: unknown) {
  return typeof item === "number" || typeof item === "string"
}

function instanceOfBinTree(object: any): object is BinTreeNode {
  if (typeof object !== "object") return false

  return "id" in object
}

export {
  buildNode,
  countItems,
  instanceOfBinTree,
  notAStringOrNumber,
  stringOrNumber,
}
