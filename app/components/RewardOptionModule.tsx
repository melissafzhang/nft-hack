import styles from "./RewardOptionModule.module.css";
import Body from "./Body";
import VSpace from "./VSpace";
import useFanCoinInfo from "../hooks/useFanCoinInfo";
import { abi } from "../abi/BaseCreatorRewards.json";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const handleRedemption = async ({ type, cost, currency }): Promise<void> => {
    if (type === "nft") {
      await window.ethereum.enable();
      var web3 = new Web3(window["ethereum"])
      const contract = new web3.eth.Contract(abi, "0xf8a29c3006ee61a5724a708abc7b3c591fbb2783")
      const result = await contract.methods.createItem(window.ethereum.selectedAddress, 1).send({ from: window.ethereum.selectedAddress });
      info.amount -= 1400;
      toast("NFT Minted successfully!");
    } else if (type === "generic") {
    } else {
    }
  };

  return (
    <div className={styles.container}>
              <ToastContainer />
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
