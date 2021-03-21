import { RewardOption } from "../types";
export default function useEarnInfo(): Array<RewardOption> {
  return [
    {
      type: "generic",
      title: "Ask me anything!",
      description: "Ask me literally anything, and I’ll do my best to answer.",
      cost: 1200,
      currency: "$MATT",
      image: "/images/ama.png",
    },
    {
      type: "nft",
      title: "Genesis NFT",
      description: "NFT description goes here... lorem ipsum",
      cost: 1400,
      currency: "$MATT",
      image: "/images/nft.png",
    },
    {
      type: "nft",
      title: "Video call",
      description: "Chat to me on a video call!",
      cost: 2500,
      currency: "$MATT",
      image: "/images/other.png",
    },
  ];
}
