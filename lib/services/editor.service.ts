import {
  Editor,
  Element,
  Path,
  Range,
  Transforms,
  type BaseEditor,
  type BaseRange,
} from "slate";
import { ReactEditor } from "slate-react";

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

    ReactEditor.focus(editor as any);
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

    ReactEditor.focus(editor as any);
  }

  isActiveNode(editor: BaseEditor, type: string) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as any).type === type,
    });
    return !!match;
  }

  removeLink(editor: BaseEditor, selection: BaseRange) {
    Transforms.unwrapNodes(editor, {
      at: selection,
      match: (n) =>
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        (n as any).type === "link",
    });
  }

  insertLink(editor: BaseEditor) {
    const { selection } = editor;

    ReactEditor.focus(editor as any);

    let url: string | null = "";
    let link = {
      type: "link",
      url,
      children: [{ text: "Ссылка" }],
    };

    if (!!selection) {
      const [parentNode, parentPath] = Editor.parent(
        editor,
        selection.focus.path,
      );

      if ((parentNode as any).type === "link") {
        this.removeLink(editor, selection);
        return;
      }

      url = prompt("Enter a URL");
      if (!url) return;

      link = {
        ...link,
        url,
      };

      if (editor.isVoid(parentNode)) {
        Transforms.insertNodes(
          editor,
          {
            type: "link",
            children: [link],
          } as any,
          {
            at: Path.next(parentPath),
            select: true,
          } as any,
        );
      } else if (Range.isCollapsed(selection)) {
        Transforms.insertNodes(editor, link, { select: true });
      } else {
        Transforms.wrapNodes(editor, link, { split: true });
        Transforms.collapse(editor, { edge: "end" });
      }
    } else {
      Transforms.insertNodes(editor, {
        type: "link",
        children: [link],
      } as any);
    }
  }
}

export const EditorService = new editorService();
