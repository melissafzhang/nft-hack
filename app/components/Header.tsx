import styles from "./Header.module.css";
import useFanCoinInfo from "../hooks/useFanCoinInfo";

export default function Header({ title }: { title: string }) {
  const info = useFanCoinInfo();
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.coin}>
          <img src={info.coinImageUrl} className={styles.image} />
        </div>
        <span className={styles.coinAmount}>{info.amount}</span>
      </div>
    </div>
  );
}
