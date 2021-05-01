import { DeepMap, FieldError, UseFormRegister } from "react-hook-form"

import { BinaryTreeFormInput } from "../Form/Form.interfaces"

export interface Props {
  errors: DeepMap<BinaryTreeFormInput, FieldError>
  id: string
  label: string
  placeholder?: string
  register: UseFormRegister<BinaryTreeFormInput>
}
