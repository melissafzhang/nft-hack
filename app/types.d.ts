export type EarnOption = {
  type: "subscribe" | "referral";
  amount: number;
  currency: string;
};

export type RewardOption = {
  type: "nft" | "generic";
  title: string;
  description: string;
  cost: number;
  currency: string;
  image: string;
};
