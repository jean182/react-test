import { render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { useForm } from "react-hook-form"

import InputFile from "../index"
import { MESSAGES } from "../../../constants"
import { BinaryTreeFormInput } from "../../Form/Form.interfaces"

function Component() {
  const {
    formState: { errors },
    register,
  } = useForm<BinaryTreeFormInput>()
  return (
    <InputFile
      errors={errors}
      id="fileToRead"
      label={MESSAGES.INPUT_FILE_LABEL}
      register={register}
      placeholder="Please upload a valid JSON file."
    />
  )
}

describe("InputFile", () => {
  const { getByLabelText } = render(<Component />)

  it("Uploads the file and store it in the input", () => {
    const content = JSON.stringify([1, [2], [3, null, [5]]])
    const blob = new Blob([content], { type: "text/plain" })
    const file = new File([blob], "file.json")
    const imageInput = getByLabelText("Tree Source") as HTMLInputElement
    user.upload(imageInput, file)
    // @ts-ignore

    expect(imageInput.files[0]).toStrictEqual(file)
    expect(imageInput.files).toHaveLength(1)
  })
})
