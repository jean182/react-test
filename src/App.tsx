import React from "react"

import Form from "./components/Form"
import Layout from "./components/Layout"
import TreeView from "./components/TreeView"

import "./styles/main.scss"

import BinaryTree from "./tree"

function App() {
  const [binaryTree, setBinaryTree] = React.useState<BinaryTree | null>(null)

  const changeBinaryTree = (btInstance: BinaryTree | null) => {
    setBinaryTree(btInstance)
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="display-4"> Process the input into a tree</h1>

        <p className="lead">
          This project lets you upload a JSON file. Then it displays a{" "}
          <strong>binary tree object</strong> in the textarea input (if it is a
          valid array structure) and allows you to modify the input and then
          process the result (if the textarea is a valid JSON) to view it in an
          interactive way.
        </p>

        <Form binaryTree={binaryTree} setBinaryTree={changeBinaryTree} />
        {binaryTree && <TreeView binaryTree={binaryTree} />}
      </div>
    </Layout>
  )
}

export default App
