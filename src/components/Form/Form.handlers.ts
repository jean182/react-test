import { ERRORS } from "../../constants"

import { instanceOfBinTree, notAStringOrNumber } from "../../tree"

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
  try {
    const file = files[0]
    const data = await new Response(file).text()
    return validateFileContent(JSON.parse(data))
  } catch {
    return false
  }
}
