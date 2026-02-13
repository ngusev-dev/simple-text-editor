import styles from "./index.module.css";

import TextEditor from "../lib/components/text-editor/TextEditor";

function App() {
  return (
    <div className={styles.wrapper}>
      <TextEditor />
    </div>
  );
}

export default App;
