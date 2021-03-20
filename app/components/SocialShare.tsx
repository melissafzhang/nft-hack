import styles from "./SocialShare.module.css";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import HSpace from "./HSpace";
export default function SocialShare({ shareUrl }: { shareUrl: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SocialIcon type="sms" />
      <EmailShareButton url={shareUrl}>
        <SocialIcon type="email" />
      </EmailShareButton>
      <TwitterShareButton url={shareUrl}>
        <SocialIcon type="twitter" />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl}>
        <SocialIcon type="whatsApp" />
      </WhatsappShareButton>
    </div>
  );
}
type SocialType = "sms" | "email" | "twitter" | "whatsApp";

const SocialIcon = ({ type }: { type: SocialType }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className={styles.iconContainer}>
        <img src={`/images/${type}.png`} className={styles.icon} />
      </div>
      <HSpace size="xs" />
      <div className={styles.text}>{getSocialName(type)}</div>
    </div>
  );
};

const getSocialName = (type: SocialType) => {
  switch (type) {
    case "sms":
      return "SMS";
    case "email":
      return "Email";
    case "twitter":
      return "Twitter";
    case "whatsApp":
      return "WhatsApp";
  }
};
