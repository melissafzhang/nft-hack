import styles from "./RewardOptionModule.module.css";
import Body from "./Body";
import VSpace from "./VSpace";
import useFanCoinInfo from "../hooks/useFanCoinInfo";

export default function RewardOptionModule({
  type,
  title,
  description,
  cost,
  currency,
  image,
}: {
  type: "nft" | "generic";
  title: string;
  description: string;
  cost: number;
  currency: string;
  image: string;
}) {
  const info = useFanCoinInfo();
  const progress: number = (info.amount / cost) * 100;

  const handleRedemption = ({ type, cost, currency }): void => {
    if (type === "nft") {
    } else if (type === "generic") {
    } else {
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.rewardImageContainer}>
        <img src={image} />
      </div>
      <div className={styles.text}>
        <Body bold type="onBackground" size="body">
          {title}
        </Body>
        <VSpace size="sm" />
        <Body type="onBackground" size="body">
          {description}
        </Body>
      </div>
      {info.amount >= cost ? (
        <div
          className={styles.redeemButtonContainer}
          onClick={() => handleRedemption({ type, cost, currency })}
        >
          <Body bold type="background" size="body">
            {cost} pts
          </Body>
        </div>
      ) : (
        <div>
          <Body bold type="onBackground" size="smallBody">
            {info.amount}/{cost}
          </Body>
          <div className={styles.progressBarContainer}>
            <div
              style={{
                backgroundColor: "var(--primary)",
                borderRadius: 3,
                height: "100%",
                width: `${progress}%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
