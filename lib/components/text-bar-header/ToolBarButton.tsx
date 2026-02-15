import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./text-bar-header.module.css";

interface IToolBarButton extends PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> {}

export default function ToolBarButton({
  children,
  className,
  ...props
}: IToolBarButton) {
  return (
    <button {...props} className={`${styles.toolbarButton} ${className}`}>
      {children}
    </button>
  );
}
