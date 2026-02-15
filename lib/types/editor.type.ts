import type { BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";

export type CustomEditor = BaseEditor & ReactEditor;
export type FormattedText = { text: string; bold?: true };
