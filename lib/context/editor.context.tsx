import { createContext, useContext, useRef, useState } from "react";
import type { EditorContextType } from "../types";

export const EditorContext = createContext<EditorContextType>({
  editorRef: null,
  editorData: "",
  onChangeEditorData: () => {},
  execCommand: () => {},
});

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [editorData, setEditorData] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);

  const onChangeEditorData = (data: string) => setEditorData(data);

  const execCommand = (command: string, value?: string) => {
    if (!editorRef.current) return;
    document.execCommand(command, false, value);
  };

  return (
    <EditorContext.Provider
      value={{ editorRef, editorData, onChangeEditorData, execCommand }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error(
      "useEditorContext должен быть использован внутри EditorProvider",
    );
  }

  return context;
};
