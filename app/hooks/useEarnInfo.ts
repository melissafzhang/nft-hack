import { EarnOption } from "../types";
export default function useEarnInfo(): Array<EarnOption> {
  return [
    { type: "subscribe", amount: 50, currency: "$MATT" },
    { type: "referral", amount: 50, currency: "$MATT" },
  ];
}
