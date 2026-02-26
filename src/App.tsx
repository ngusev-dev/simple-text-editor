import styles from "./index.module.css";

import TextEditor from "../lib/components/text-editor/TextEditor";
import { useRef } from "react";
import type { EditorRef } from "../lib/types";

function App() {
  const ref = useRef<EditorRef>(null);

  return (
    <div className={styles.wrapper}>
      <TextEditor ref={ref} />
    </div>
  );
}

export default App;
