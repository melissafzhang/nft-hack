import styles from "./Text.module.css";
export default function Body({
  children,
  type = "onBackground",
  size = "body",
}: {
  children: React.ReactNode;
  type: string;
  size: "body" | "largeBody" | "smallBody";
}) {
  return (
    <span className={[styles[size], styles[type]].join(" ")}>{children}</span>
  );
}
