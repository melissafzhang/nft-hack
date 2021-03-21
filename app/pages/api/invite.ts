import db from "../../utils/airtable";

export default async function handler(req, res) {
  const params = req.query;

  if (!params.code) {
    return res.status(200).json({ redirect_url: `/` });
  }
  const code = params.code;
  if (req.method === "GET") {
    const codes = await db("ReferralCode")
      .select({
        filterByFormula: `referral_code="${code}"`,
      })
      .all();
    if (codes.length === 0) {
      return res.status(200).json({ redirect_url: `/` });
    }
    const creatorId = codes[0].get("creator_rally_id");
    return res
      .status(200)
      .json({ redirect_url: `/${creatorId}/earn`, valid_code: true });
  }
}
