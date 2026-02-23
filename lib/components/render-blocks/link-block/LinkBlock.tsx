import { useFocused, useSelected } from "slate-react";

import styles from "./link.module.css";

export const LinkBlock = (props: {
  element: any;
  attributes: any;
  children: any;
}) => {
  const selected = useSelected();
  const focused = useFocused();

  return (
    <span className={styles.elementLink}>
      <a {...props.attributes} href={props.element.url}>
        {...props.children}
      </a>
      {selected && focused && (
        <span className={styles.linkPopup} contentEditable={false}>
          <a href={props.element.url} rel="noreferrer" target="_blank">
            {props.element.url}
          </a>
        </span>
      )}
    </span>
  );
};
