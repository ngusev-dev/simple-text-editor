import { Bold, Italic, Underline } from "lucide-react";

import styles from "./text-bar-header.module.css";
import ToolBarButton from "./ToolBarButton";
import { EditorService } from "../../services";
import { useSlate } from "slate-react";

export default function TextBarHeader() {
  const editor = useSlate();

  return (
    <span className={styles.header}>
      <ToolBarButton
        className={
          EditorService.isActiveMark(editor, "bold") ? styles.active : ""
        }
        onClick={() => EditorService.toggleBoldMark(editor)}
      >
        <Bold size={16} />
      </ToolBarButton>
      <ToolBarButton
        className={
          EditorService.isActiveMark(editor, "italic") ? styles.active : ""
        }
        onClick={() => EditorService.toggleItalicMark(editor)}
      >
        <Italic size={16} />
      </ToolBarButton>
      <ToolBarButton
        className={
          EditorService.isActiveMark(editor, "underline") ? styles.active : ""
        }
        onClick={() => EditorService.toggleUnderlineMark(editor)}
      >
        <Underline size={16} />
      </ToolBarButton>
    </span>
  );
}
