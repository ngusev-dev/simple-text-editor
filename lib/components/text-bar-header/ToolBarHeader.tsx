import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Underline,
} from "lucide-react";

import styles from "./text-bar-header.module.css";
import ToolBarButton from "./ToolBarButton";
import { EditorService } from "../../services";
import { useSlate } from "slate-react";

const BUTTON_SIZE = 16;

export default function TextBarHeader() {
  const editor = useSlate();

  const isActiveMarkButton = (mark: string) =>
    EditorService.isActiveMark(editor, mark) ? styles.active : "";

  const toggleMarkHandler = (mark: string) => {
    EditorService.toggleMark(editor, mark);
  };

  const isActiveNodeButton = (type: string) =>
    EditorService.isActiveNode(editor, type) ? styles.active : "";

  const toggleNodeHandler = (type: string) => {
    EditorService.transformBlock(editor, type);
  };

  return (
    <span className={styles.header}>
      <ToolBarButton
        className={isActiveMarkButton("bold")}
        onClick={() => toggleMarkHandler("bold")}
      >
        <Bold size={BUTTON_SIZE} />
      </ToolBarButton>
      <ToolBarButton
        className={isActiveMarkButton("italic")}
        onClick={() => toggleMarkHandler("italic")}
      >
        <Italic size={BUTTON_SIZE} />
      </ToolBarButton>
      <ToolBarButton
        className={isActiveMarkButton("underline")}
        onClick={() => toggleMarkHandler("underline")}
      >
        <Underline size={BUTTON_SIZE} />
      </ToolBarButton>
      <ToolBarButton
        className={isActiveNodeButton("quote")}
        onClick={() => toggleNodeHandler("quote")}
      >
        <Quote size={BUTTON_SIZE} />
      </ToolBarButton>
      <ToolBarButton
        className={isActiveNodeButton("ol")}
        onClick={() => EditorService.transformList(editor, "ol")}
      >
        <ListOrdered size={BUTTON_SIZE} />
      </ToolBarButton>
      <ToolBarButton
        className={isActiveNodeButton("ul")}
        onClick={() => EditorService.transformList(editor, "ul")}
      >
        <List size={BUTTON_SIZE} />
      </ToolBarButton>
    </span>
  );
}
