import styles from "./Header.module.css";
import useFanCoinInfo from "../hooks/useFanCoinInfo";
import CreatorCoinIcon from "./CreatorCoinIcon";
import VSpace from "./VSpace";
export default function Header({ title }: { title: string }) {
  const info = useFanCoinInfo();
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <VSpace size="xs" />
        <CreatorCoinIcon size="medium" />
        <VSpace size="xs" />
        <span className={styles.coinAmount}>{info.amount}</span>
      </div>
    </div>
  );
}
