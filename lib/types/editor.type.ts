import type { RefObject } from "react";

export interface EditorContextType {
  editorRef: RefObject<HTMLDivElement | null> | null;
  editorData: string;
  onChangeEditorData: (data: string) => void;
  execCommand: (command: string, value?: string) => void;
}
