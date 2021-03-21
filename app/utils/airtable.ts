import Airtable from "airtable";
export default new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  "appHjuSfdaqPFVPsB"
);
