import styles from "./Text.module.css";
export default function Body({
  children,
  type = "onBackground",
  size = "body",
  bold = false,
}: {
  children: React.ReactNode;
  type: string;
  size: "body" | "largeBody" | "smallBody";
  bold?: boolean;
}) {
  return (
    <span
      className={[
        styles[size],
        styles[type],
        bold ? styles.bold : undefined,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
