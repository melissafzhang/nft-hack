import useReferrals from "../hooks/useReferrals";
import useFanCoinInfo from "../hooks/useFanCoinInfo";
import CopyInput from "./CopyInput";

import Body from "./Body";
import ContainerStyles from "./LightModule.module.css";
import HSpace from "./HSpace";
import VSpace from "./VSpace";
import SocialShare from "./SocialShare";
import styles from "./ReferralModule.module.css";
import CreatorCoinIcon from "./CreatorCoinIcon";
export default function ReferralModule({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) {
  const [link, numReferrals, isLoading] = useReferrals();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Body size="largeBody" type="onBackground">
        Refer a friend
      </Body>
      <HSpace size="sm" />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Body size="body" type="onBackground">
          ✨
        </Body>
        <VSpace size="xs" />
        <CreatorCoinIcon size="small" hasShadow />
        <VSpace size="xs" />
        <Body size="body" type="onBackground">
          {amount} {currency} / referral
        </Body>
      </div>
      <HSpace size="sm" />
      <div className={ContainerStyles.container}>
        <CopyInput text={link} />
        <HSpace size="sm" />
        <div style={{ display: "flex" }}>
          <div
            style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Body size="smallBody" type="onBackgroundLight">
              Or share via...
            </Body>
            <HSpace size="sm" />
            <SocialShare />
          </div>
          <VSpace size="sm" />
          <div className={styles.numReferralsContainer}>
            <div className={styles.numReferralsText}>Your referrals</div>
            <div className={styles.numReferralsNumber}>{numReferrals}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
