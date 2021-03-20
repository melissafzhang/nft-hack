import { EarnOption } from "../types";
export default function useEarnInfo(): Array<EarnOption> {
  return [
    { type: "subscribe", amount: 50 },
    { type: "referral", amount: 50 },
  ];
}
