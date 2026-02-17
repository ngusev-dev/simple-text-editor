import styles from "./order-list.module.css";

export function OrderList(props: { attributes: any; children: any }) {
  return (
    <ol {...props.attributes} className={styles.orderList}>
      {props.children}
    </ol>
  );
}
