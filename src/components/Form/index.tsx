/* eslint-disable react-hooks/exhaustive-deps */
import { ErrorMessage } from "@hookform/error-message"
import isEqual from "lodash.isequal"
import React from "react"
import { useForm } from "react-hook-form"

import { ERRORS, MESSAGES } from "../../constants"
import BinaryTree from "../../tree"
import InputFile from "../InputFile"

import {
  countItems,
  getFileText,
  validateFileContent,
  validateTextArea,
} from "./Form.handlers"
import { BinaryTreeFormInput, Props } from "./Form.interfaces"

export default function Form({ binaryTree, setBinaryTree }: Props) {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    trigger,
    watch,
  } = useForm<BinaryTreeFormInput>()
  const [fileValue, setFileValue] = React.useState<Array<
    number | number[]
  > | null>(null)

  const textAreaLength = fileValue ? countItems(fileValue) * 3 : 4
  const currentFile = watch("fileToRead")

  React.useEffect(() => {
    if (fileValue && validateFileContent(fileValue)) {
      const btInstance = new BinaryTree(fileValue)
      setValue("objectView", JSON.stringify(btInstance.root, null, 2))
      trigger("objectView")
      if (!isEqual(btInstance.root, binaryTree)) {
        setBinaryTree(null)
      }
    }
  }, [fileValue])

  const onFileUpload = (content: string) => {
    try {
      const parsedData = JSON.parse(content)
      setFileValue(parsedData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileRead = async () => {
    const content = await getFileText(currentFile)
    if (content) {
      const validFile = await trigger("fileToRead")
      if (validFile) {
        onFileUpload(content)
      }
    }
  }

  React.useEffect(() => {
    handleFileRead()
  }, [currentFile])

  const clearForm = () => {
    reset()
    setBinaryTree(null)
    setFileValue(null)
  }

  const onSubmit = (data: BinaryTreeFormInput) => {
    const btInstance = new BinaryTree()
    btInstance.root = JSON.parse(data.objectView)
    setBinaryTree(btInstance)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="row g-3 my-3">
      <div className="col-12">
        <InputFile
          errors={errors}
          id="fileToRead"
          label={MESSAGES.INPUT_FILE_LABEL}
          register={register}
          placeholder="Please upload a valid JSON file."
        />
      </div>
      <div className="col-12">
        <label htmlFor="objectView">{MESSAGES.TEXTAREA_LABEL}</label>
        <div className="input-group has-validation">
          <textarea
            className={"form-control".concat(
              errors.objectView ? " is-invalid" : ""
            )}
            id="objectView"
            rows={textAreaLength}
            placeholder={MESSAGES.TEXTAREA_PLACEHOLDER}
            {...register("objectView", {
              required: { message: ERRORS.REQUIRED_FIELD, value: true },
              validate: (value) => validateTextArea(value),
            })}
          />
          <ErrorMessage
            errors={errors}
            name="objectView"
            render={({ message }: { message: string }) => (
              <div className="invalid-feedback" role="alert">
                {message ?? ERRORS.INVALID_JSON}
              </div>
            )}
          />
        </div>
      </div>
      <div className="col-12">
        <input
          type="submit"
          className="btn btn-success me-3"
          value={MESSAGES.BTN_SUBMIT_LABEL}
          title={MESSAGES.BTN_SUBMIT_TITLE}
        />
        <button
          type="button"
          className="btn btn-danger me-3"
          onClick={clearForm}
          title={MESSAGES.BTN_CLEAR_TITLE}
        >
          {MESSAGES.BTN_CLEAR_LABEL}
        </button>
      </div>
    </form>
  )
}
