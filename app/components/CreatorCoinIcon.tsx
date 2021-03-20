import styles from "./CreatorCoinIcon.module.css";
import useFanCoinInfo from "../hooks/useFanCoinInfo";

export default function CreatorCoinIcon({
  hasShadow,
  size,
}: {
  hasShadow?: boolean;
  size: "small" | "medium";
}) {
  const { coinImageUrl } = useFanCoinInfo();

  return (
    <div
      className={[
        styles.coin,
        styles[size],
        hasShadow ? styles.shadow : undefined,
      ].join(" ")}
    >
      <img src={coinImageUrl} className={styles.image} />
    </div>
  );
}
