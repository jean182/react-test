import { ERRORS } from "../../constants"
import { BinTreeNode } from "../../tree/tree.interfaces"

function notAStringOrNumber(item: unknown) {
  return typeof item !== "number" && typeof item !== "string"
}

function instanceOfBinTree(object: any): object is BinTreeNode {
  if (typeof object !== "object") return false

  return "id" in object
}

export const countItems = (arr: any[]): number => {
  return arr.reduce(
    (acc, curr) => acc + (Array.isArray(curr) ? countItems(curr) : 1),
    0
  )
}

export function validateFileContent(data: unknown) {
  try {
    if (!Array.isArray(data)) {
      throw new Error(ERRORS.NOT_AN_ARRAY)
    }

    if (data.length === 0) {
      throw new Error(ERRORS.EMPTY_ARRAY)
    }

    const firstItem = data[0]
    if (notAStringOrNumber(firstItem)) {
      throw new Error(ERRORS.INVALID_ARRAY_STRUCTURE)
    }
  } catch {
    return false
  }
  return true
}

export function validateTextArea(value: string) {
  try {
    return instanceOfBinTree(JSON.parse(value))
  } catch {
    return false
  }
}

export async function getFileText(files: File[]) {
  try {
    const file = files[0]
    return await new Response(file).text()
  } catch {
    return null
  }
}

export async function validateNewFile(files: File[]) {
  if (files.length === 0) return true
  try {
    const file = files[0]
    const data = await new Response(file).text()
    return validateFileContent(JSON.parse(data))
  } catch {
    return false
  }
}
