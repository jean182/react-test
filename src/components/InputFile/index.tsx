import { ErrorMessage } from "@hookform/error-message"
import { ERRORS } from "../../constants"
import { validateNewFile } from "../Form/Form.handlers"

import { Props } from "./InputFile.interfaces"

export default function InputFile({
  errors,
  id,
  label,
  placeholder,
  register,
}: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="input-group has-validation">
        <input
          accept="application/JSON"
          className={"form-control".concat(
            errors.fileToRead ? " is-invalid" : ""
          )}
          {...register("fileToRead", {
            required: false,
            validate: (value) => validateNewFile(value),
          })}
          id={id}
          placeholder={placeholder}
          type="file"
        />
        <ErrorMessage
          errors={errors}
          name="fileToRead"
          render={({ message }: { message: string }) => (
            <div className="invalid-feedback">
              {message ?? ERRORS.INVALID_JSON}
            </div>
          )}
        />
      </div>
    </>
  )
}
