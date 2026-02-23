import type { BaseEditor } from "slate";

const withLinks = (editor: BaseEditor) => {
  const { isInline } = editor;

  editor.isInline = (element) =>
    (element as any).type === "link" ? true : isInline(element);

  return editor;
};

export default withLinks;
