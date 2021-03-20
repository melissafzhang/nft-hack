import styles from "./SocialShare.module.css";
export default function SocialShare({
  shareText,
  ogImage,
  ogDescription,
}: {
  shareText: string;
  ogImage: string;
  ogDescription: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SocialIcon type="sms" />
      <SocialIcon type="email" />
      <SocialIcon type="twitter" />
      <SocialIcon type="whatsApp" />
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
