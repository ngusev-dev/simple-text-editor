import { Editor, Element, Transforms, type BaseEditor } from "slate";

class editorService {
  isActiveMark(editor: BaseEditor, type: string) {
    const marks = Editor.marks(editor);
    return marks ? (marks as Record<string, boolean>)[type] === true : false;
  }

  toggleMark(editor: BaseEditor, type: string) {
    const isActive = this.isActiveMark(editor, type);

    if (isActive) {
      Editor.removeMark(editor, type);
      return;
    }

    Editor.addMark(editor, type, true);
  }

  transformBlock(editor: BaseEditor, blockType: string) {
    const isActiveTypeBlock = this.isActiveNode(editor, blockType);

    Transforms.setNodes(
      editor,
      { type: isActiveTypeBlock ? "paragraph" : blockType } as any,
      {
        match: (n) => Editor.isBlock(editor, n as any) && Element.isElement(n),
      },
    );
  }

  transformList(editor: BaseEditor, listType: "ol" | "ul") {
    const isList = this.isActiveNode(editor, listType);

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        ["ol", "ul"].includes((n as any).type as string),
      split: true,
    });

    Transforms.setNodes(editor, {
      type: isList ? "paragraph" : "li",
    } as any);

    if (!isList) {
      Transforms.wrapNodes(editor, { type: listType, children: [] } as any);
    }
  }

  isActiveNode(editor: BaseEditor, type: string) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as any).type === type,
    });
    return !!match;
  }
}

export const EditorService = new editorService();
