import type { Ref } from "react";
import type { Descendant } from "slate";

export interface EditorProps {
  ref: Ref<unknown>;
  initialValue?: Descendant[];
}

export interface EditorRef {
  getContent: Descendant[];
  getContentString: string;
}
