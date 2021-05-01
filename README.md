# Binary Tree Viewer

This project allows the user to upload a JSON file with a valid array structure and returns a binary tree in two different outputs:

## Data Structure

Given an array with this shape `[id, leftChild, rightChild]` we need to transform it to an object with this structure:

```ts
interface BinTreeNode {
  id: number | string
  left?: BinTreeNode | null
  right?: BinTreeNode | null
}
```

The interface as you can see is slightly different than the one in the test document provided, I decided to allow the left and right property undefined and nullable as well, this enhancement was done in order to match the example provided in the document:

```json
{
  "id": 1,
  "left": {
    "id": 2
  },
  "right": {
    "id": 3,
    "left": null,
    "right": {
      "id": 5
    }
  }
}
```

_As you can see the right and left fields are not always in present in the BinTreeNode and the left/right can be null as well._

I also decided to go with a functional approach, so all the data handling is on the src/tree folder, and they're mostly functions to validate and parse the data.

## UI

For the UI I decided to go simple and use an UI library for the layout, in this case I'm using bootstrap and some custom scss located in `src/styles`. I normally use styled components but I think bootstrap allows to build the UI quick and fast, without compromising responsiveness and a11y.

Also I'm using function based components with hooks which is different than the class based approach on the `mobx-react-test-master`, I decided to go with this approach without any particular reason, I just enjoy to write code using react hooks.

The form is using react-hook-form to handle the form state and validation, it makes working with forms way easier and speed up the proccess of writing forms.

As a **bonus** for the form I added the following:

- A clear button, to make it easier to try a new file.
- Labels to each form input.
- Form validation with error messages.

For the output area I change the whole layout to make it look more like a binary tree without losing any of the solutions to the given problems in the doc.

The site is fully responsive, the binary tree container is horizontally scrollable if the device is less than the `lg` bootstrap breakpoint `992px`.

## Misc

Last but not least there's a constants folder `src/constants` which has some variables for error messages. I added a header and a footer to improve the layout.

<!-- ## Screenshots

###
![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true) -->
