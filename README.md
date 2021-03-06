# Binary Tree Viewer

This project allows the user to upload a JSON file with a valid array structure and returns a binary tree in two different outputs:

## Run the project

In the project directory run the following:

If using nvm you can do:

### `nvm use stable` or if you have the config in your terminal just do `nvm use`

_The latest stable version of node as today is 14.15.3_

Install the dependencies:

### `yarn install`

To start the project

### `yarn start`

## Data Structure (Solution 1)

Given an array with this shape `[id, leftChild, rightChild]` we need to transform it to an object with this structure:

```ts
interface BinTreeNode {
  id: number | string
  left?: BinTreeNode | null
  right?: BinTreeNode | null
}
```

The interface as you can see is slightly different than the one in the test document provided, I decided to allow the left and right property be undefined and nullable as well, this enhancement was done in order to match the example provided in the document:

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

_As you can see the right and left fields are not always present in the BinTreeNode and the left/right can be null as well._

I also decided to go with a class based approach for handling the structure, that is on the `src/tree/index.ts` file.

## UI (Solution 2)

For the UI I decided to go simple and use an UI library for the layout, in this case I'm using bootstrap and some custom scss located in `src/styles`. I normally use styled components but I think bootstrap allows to build the UI quick and fast, without compromising responsiveness and a11y.

Also I'm using function based components with hooks which is different than the class based approach on the `mobx-react-test-master`, I decided to go with this approach without any particular reason, I just enjoy to write code using react hooks.

In the `src/components/Form/` is located every file related to the form functionality.

The Binary Tree Output is located in `src/components/TreeView/`

Other than that the rest of the components are for displaying the UI.

The form is using react-hook-form to handle the form state and validation, it makes working with forms way easier and speed up the proccess of writing forms.

For the output area everything should be doing what is supposed to, functionality regarding subtrees and displaying the data.

As a **bonus** I added the following:

- A clear button, to make it easier to try a new file.
- Labels to each form input.
- Form validation with error messages.
- The output layout was changed to look like a binary tree without losing any of the required functionality;
- Hover on a node will highlight all it's childs.
- The site is fully responsive, the binary tree container is horizontally scrollable if the device is less than the `lg` bootstrap breakpoint `992px`.
- Unit testing the components using react testing library.

### Notes

- I removed the Fetch button, the requirements did not mention it and the validation is still working as expected without it (the UI flow is more user friendly IMHO).
- The file upload file is not required, it will be validated only if you upload one file(So the user can test inputs without uploading something).
- You must press the Process button to generate a binary tree output. When you upload a valid file and there's already an output, the output will be cleared and you will need to submit the new one. I find this as a valid approach because since the user can edit the text area I believe that if a new structure is added the user should be able to confirm (by submitting) if they want to generate a new output.

## Smallest subtree (Solution 3)

For the UI since I'm displaying the output in a different way I used a background-color green for coloring the smallest subtree and its nodes (if any), all the other nodes should be using the default background and default border.

The function that calculates the subtree is located in `src/tree/index.ts`, it is a class that does all the binary structure handling.

## Misc

Last but not least there's a constants folder `src/constants` which has some variables for error messages. I added a header and a footer to improve the layout.

The screenshots are located in `src/screenshots`

Also there's some json files to try out in `src/data` if you want to test the binary tree structure.

## Screenshots

### Layout

![Layout](https://github.com/jean182/react-test/blob/main/src/screenshots/empty-layout.png?raw=true)

### Form and Output

![Form and Output](https://github.com/jean182/react-test/blob/main/src/screenshots/form-and-output.png?raw=true)

### Form Errors

![Form Errors](https://github.com/jean182/react-test/blob/main/src/screenshots/form-errors.png?raw=true)

### Output

![Output](https://github.com/jean182/react-test/blob/main/src/screenshots/output.png?raw=true)

### Responsive Basic Structure

![Responsive Basic Structure](https://github.com/jean182/react-test/blob/main/src/screenshots/responsive-basic.png?raw=true)

### Responsive Complex Structure (Horizontal Scrolling)

![Responsive Complex Structure (Horizontal Scrolling)](https://github.com/jean182/react-test/blob/main/src/screenshots/responsive-complex.gif?raw=true)

## Final Thoughts

I really enjoy making this test, it was a pretty nice challenge to work with binary trees and render them using recursion (because normally you work with iterations).

I did add unit tests for both the data structure and the components.

I just add prettier to format the code, with a few basic rules, I did not add eslint even though it would be ideal as well.

I didn't include a global state manager because I thought the scope of the app was very litle so I decided to do the state management using react `useState` hook and `react-hook-form` form state handling.

Feel free to reach out if you need something.
