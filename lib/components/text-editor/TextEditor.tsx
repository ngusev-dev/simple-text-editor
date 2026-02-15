import { Editable, Slate, withReact } from "slate-react";
import styles from "./text-editor.module.css";
import { createEditor } from "slate";
import { useState } from "react";
import TextBarHeader from "../text-bar-header/ToolBarHeader";
import { useRenderBlocks } from "../../hooks";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const { renderBlocks, renderLeaf } = useRenderBlocks();

  return (
    <div className={styles.textEditor}>
      <Slate editor={editor} initialValue={initialValue}>
        <TextBarHeader />
        <Editable
          renderElement={renderBlocks}
          renderLeaf={renderLeaf}
          className={styles.editor}
        />
      </Slate>
    </div>
  );
}

export default TextEditor;
