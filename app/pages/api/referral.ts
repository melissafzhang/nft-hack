import db from "../../utils/airtable";
import { getSession } from "next-auth/client";
import generateReferralCode from "../../utils/generateReferralCode";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const params = req.query;
  if (!session) return res.status(401).json({});
  const user_rally_id = session.user.rally_id as string;
  if (!params.creator_rally_id) {
    return res.status(500).json({ message: "Missing creator_rally_id" });
  }
  const creator_rally_id = params.creator_rally_id as string;
  console.log("creator", creator_rally_id);
  if (req.method === "GET") {
    const formula = `AND({user_rally_id}="${user_rally_id}",creator_rally_id="${creator_rally_id}")`;
    const codes = await db("ReferralCode")
      .select({
        filterByFormula: formula,
      })
      .all();
    if (codes.length === 0) {
      console.log("creating new code");

      const newCode = await generateReferralCode({
        creator_rally_id,
        user_rally_id,
      });
      return res.status(200).json({
        link: generateLink(req, newCode),
        code: newCode,
        num_referrals: 0,
      });
    } else {
      const code = codes[0].get("referral_code");

      const referrals = await db("Subscription")
        .select({
          filterByFormula: `AND(userid="${user_rally_id}",creatorid="${creator_rally_id}",referralcode="${code}")`,
        })
        .all();
      return res.status(200).json({
        link: generateLink(req, code),
        code,
        num_referrals: referrals.length,
      });
    }
  }
}

const generateLink = (req, code: string) =>
  req.headers.host + "/invite/" + code;
