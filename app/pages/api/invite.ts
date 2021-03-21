import db from "../../utils/airtable";

export default async function handler(req, res) {
  const params = req.query;

  if (!params.code) {
    return res.redirect(301, "/");
  }
  const code = params.code;
  console.log(params.code);
  if (req.method === "GET") {
    const codes = await db("ReferralCode")
      .select({
        filterByFormula: `{referralcode}="${code}"`,
      })
      .all();
    if (codes.length === 0) {
      return res.redirect(301, "/");
    }
    const creatorId = codes[0].get("creator_rally_id");
    return res.redirect(301, `/${creatorId}/earn`);
  }
}
