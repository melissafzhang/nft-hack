import spacerStyles from "./Space.module.css";
export default function HSpace({ size }: { size: "xs" | "sm" | "md" | "lg" }) {
  return <div className={spacerStyles[`${size}Horizontal`]}></div>;
}
