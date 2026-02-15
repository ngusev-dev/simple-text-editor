import { Editor, type BaseEditor } from "slate";

class editorService {
  isActiveMark(editor: BaseEditor, type: string) {
    const marks = Editor.marks(editor);
    return marks ? (marks as Record<string, boolean>)[type] === true : false;
  }

  toggleBoldMark(editor: BaseEditor) {
    const isActive = this.isActiveMark(editor, "bold");

    if (isActive) {
      Editor.removeMark(editor, "bold");
      return;
    }

    Editor.addMark(editor, "bold", true);
  }

  toggleItalicMark(editor: BaseEditor) {
    const isActive = this.isActiveMark(editor, "italic");

    if (isActive) {
      Editor.removeMark(editor, "italic");
      return;
    }

    Editor.addMark(editor, "italic", true);
  }

  toggleUnderlineMark(editor: BaseEditor) {
    const isActive = this.isActiveMark(editor, "underline");

    if (isActive) {
      Editor.removeMark(editor, "underline");
      return;
    }

    Editor.addMark(editor, "underline", true);
  }
}

export const EditorService = new editorService();
