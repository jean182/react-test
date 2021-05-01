import { ErrorMessage } from "@hookform/error-message"
import React from "react"
import { useForm } from "react-hook-form"

import { ERRORS } from "../../constants"
import { countItems, transformArrayToBinaryTree } from "../../tree"
import InputFile from "../InputFile"
import {
  getFileText,
  validateFileContent,
  validateTextArea,
} from "./Form.handlers"

import { BinaryTreeFormInput, Props } from "./Form.interfaces"

export default function Form({ setBinaryTree }: Props) {
  const {
    formState: { errors },
    getValues,
    handleSubmit,
    register,
    reset,
    setValue,
    trigger,
  } = useForm<BinaryTreeFormInput>()
  const [fileValue, setFileValue] = React.useState<Array<
    number | number[]
  > | null>(null)

  const textAreaLength = fileValue ? countItems(fileValue) * 3 : 4

  React.useEffect(() => {
    if (fileValue) {
      if (validateFileContent(fileValue)) {
        const tree = transformArrayToBinaryTree(fileValue)
        setValue("objectView", JSON.stringify(tree, null, 2))
        trigger("objectView")
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileValue])

  const onFileUpload = (content: string) => {
    try {
      const parsedData = JSON.parse(content)
      if (validateFileContent(parsedData)) {
        setFileValue(parsedData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileRead = async () => {
    const content = await getFileText(getValues("fileToRead"))
    trigger("fileToRead")
    if (content) {
      onFileUpload(content)
    }
  }

  const onSubmit = (data: BinaryTreeFormInput) => {
    setBinaryTree(JSON.parse(data.objectView))
  }

  const clearForm = () => {
    reset()
    setBinaryTree(null)
    setFileValue(null)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="binaryTreeForm"
      className="row g-3 my-3"
    >
      <div className="col-12">
        <InputFile
          errors={errors}
          id="fileToRead"
          label="Tree Source"
          register={register}
          placeholder="Please upload a valid JSON file."
        />
      </div>
      <div className="col-12">
        <button
          type="button"
          onClick={handleFileRead}
          className="btn btn-primary"
        >
          Fetch
        </button>
      </div>
      <div className="col-12">
        <label htmlFor="objectView">Object View</label>
        <div className="input-group has-validation">
          <textarea
            className={"form-control".concat(
              errors.objectView ? " is-invalid" : ""
            )}
            id="objectView"
            rows={textAreaLength}
            {...register("objectView", {
              required: { message: ERRORS.REQUIRED_FIELD, value: true },
              validate: (value) => validateTextArea(value),
            })}
          />
          <ErrorMessage
            errors={errors}
            name="objectView"
            render={({ message }: { message: string }) => (
              <div className="invalid-feedback">
                {message ?? ERRORS.INVALID_JSON}
              </div>
            )}
          />
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-success me-3"
          form="binaryTreeForm"
        >
          Process
        </button>
        <button type="button" className="btn btn-danger" onClick={clearForm}>
          Clear
        </button>
      </div>
    </form>
  )
}
