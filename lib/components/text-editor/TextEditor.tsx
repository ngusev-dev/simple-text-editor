import { EditorProvider } from "../../context";
import TextArea from "../text-area/TextArea";
import TextBarHeader from "../text-bar-header/ToolBarHeader";
import styles from "./text-editor.module.css";

function TextEditor() {
  // const [html, setHtml] = useState("");
  // const editorRef = useRef<HTMLDivElement>(null);

  // const exec = (command: string, value?: string) => {
  //   document.execCommand(command, false, value);

  //   if (editorRef.current) {
  //     const selection = window.getSelection();

  //     if (selection?.rangeCount) {
  //       const range = selection.getRangeAt(0);
  //       const container = range.commonAncestorContainer.parentElement;

  //       const targetElement = findTargetElement(container, command, value);
  //       if (targetElement) {
  //         applyClassToElement(targetElement, command, value);
  //       }
  //     }

  //     setHtml(editorRef.current.innerHTML);
  //   }
  // };

  // const findTargetElement = (
  //   container: Element | null,
  //   command: string,
  //   value?: string,
  // ): HTMLElement | null => {
  //   if (!container) return null;

  //   // Если есть маппинг классов для команды
  //   if (commandClassNames[command]) {
  //     const classesMap = commandClassNames[command];

  //     // Ищем элемент по селектору
  //     for (const [tag, _] of Object.entries(classesMap)) {
  //       if (
  //         tag === "*" ||
  //         tag === value ||
  //         container.tagName.toLowerCase() === tag
  //       ) {
  //         return (
  //           (container.closest(tag) as HTMLElement) ||
  //           (container as HTMLElement)
  //         );
  //       }
  //     }
  //   }

  //   return container as HTMLElement;
  // };

  // const applyClassToElement = (
  //   element: HTMLElement,
  //   command: string,
  //   value?: string,
  // ) => {
  //   if (!commandClassNames[command]) return;

  //   const classesMap = commandClassNames[command];
  //   let targetClass: string | undefined;

  //   // Находим нужный класс
  //   for (const [tag, className] of Object.entries(classesMap)) {
  //     if (
  //       tag === "*" ||
  //       element.tagName.toLowerCase() === tag ||
  //       value === tag
  //     ) {
  //       targetClass = className;
  //       break;
  //     }
  //   }

  //   if (targetClass) {
  //     // Удаляем старые классы и добавляем новый
  //     Object.values(commandClassNames[command]).forEach((cls) => {
  //       element.classList.remove(cls);
  //     });
  //     element.classList.add(targetClass);
  //   }
  // };

  return (
    <EditorProvider>
      <div className={styles.textEditor}>
        <TextBarHeader />
        <TextArea />
      </div>
    </EditorProvider>
  );
}

export default TextEditor;
