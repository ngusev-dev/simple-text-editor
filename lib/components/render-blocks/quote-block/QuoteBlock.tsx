import styles from "./quote-block.module.css";

export function QuoteBlock(props: { attributes: any; children: any }) {
  return (
    <blockquote className={styles.quote} {...props.attributes}>
      {props.children}
    </blockquote>
  );
}
