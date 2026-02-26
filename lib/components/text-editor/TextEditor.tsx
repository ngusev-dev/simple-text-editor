import { useImperativeHandle, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

import TextBarHeader from "../text-bar-header/ToolBarHeader";
import withLinks from "../../plugins/withLinks";
import { useRenderBlocks } from "../../hooks";

import styles from "./text-editor.module.css";
import type { EditorProps } from "../../types";

const defaultInitialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

function TextEditor({ ref, initialValue = defaultInitialValue }: EditorProps) {
  const [editor] = useState(() => withReact(withLinks(createEditor())));

  const { renderBlocks, renderLeaf } = useRenderBlocks();

  useImperativeHandle(ref, () => {
    return {
      getContent: () => editor.children,
      getContentString: () => JSON.stringify(editor.children, null, 2),
    };
  });

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
