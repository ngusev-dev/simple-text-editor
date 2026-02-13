import { Bold, Italic, Underline } from "lucide-react";
import { useEditorContext } from "../../context";

import styles from "./text-bar-header.module.css";
import ToolBarButton from "./ToolBarButton";

export default function TextBarHeader() {
  const { execCommand } = useEditorContext();

  return (
    <div className={styles.header}>
      <ToolBarButton onClick={() => execCommand("bold")}>
        <Bold size={16} />
      </ToolBarButton>
      <ToolBarButton onClick={() => execCommand("italic")}>
        <Italic size={16} />
      </ToolBarButton>
      <ToolBarButton onClick={() => execCommand("underline")}>
        <Underline size={16} />
      </ToolBarButton>

      {/*<button onClick={() => execCommand("insertParagraph")}>Параграф</button>
      <button onClick={() => execCommand("insertUnorderedList")}>
        • Маркированный список
      </button>
      <button onClick={() => execCommand("insertOrderedList")}>
        1. Нумерованный список
      </button>*/}
    </div>
  );
}
