import { useEditorContext } from "../../context";

import styles from "./text-area.module.css";

export default function TextArea() {
  const { editorRef, onChangeEditorData } = useEditorContext();

  return (
    <div
      id="text-editor"
      className={styles.editor}
      ref={editorRef}
      contentEditable
      onInput={() => onChangeEditorData("default")}
      aria-label="Text editor"
    />
  );
}
