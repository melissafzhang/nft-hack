import db from "./airtable";
import shortid from "shortid";

export default async function generateReferralCode({
  creator_rally_id,
  user_rally_id,
}: {
  creator_rally_id: string;
  user_rally_id: string;
}) {
  const createdRecords = await db("ReferralCode").create([
    {
      fields: {
        creator_rally_id,
        user_rally_id,
        referral_code: shortid(),
      },
    },
  ]);
  return createdRecords[0].get("referral_code");
}
