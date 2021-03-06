import spacerStyles from "./Space.module.css";
export default function VSpace({ size }: { size: "xs" | "sm" | "md" | "lg" }) {
  return <div className={spacerStyles[size]}></div>;
}
