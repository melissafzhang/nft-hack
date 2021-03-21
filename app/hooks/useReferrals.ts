import { createContext, useContext } from "react";
import apiUrl from "../utils/apiUrl";
export const ReferralContext = createContext({ link: "", numReferrals: 0 });

export default function useReferrals(): {
  link: string;
  numReferrals: number;
} {
  return useContext(ReferralContext);
}

export async function fetchReferrals(context) {
  const creatorId = context.params.id;
  console.log("API_URL", apiUrl);
  const response = await fetch(
    `${apiUrl}/api/referral?creator_rally_id=${creatorId}`
  );
  const data = await response.json();
  return {
    props: {
      link: data.link,
      numReferrals: data.num_referrals || 0,
    },
  };
}
