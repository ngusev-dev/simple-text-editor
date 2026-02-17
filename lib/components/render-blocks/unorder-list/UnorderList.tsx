import styles from "./unorder-list.module.css";

export function UnorderList(props: { attributes: any; children: any }) {
  return (
    <ul {...props.attributes} className={styles.unorderList}>
      {props.children}
    </ul>
  );
}
