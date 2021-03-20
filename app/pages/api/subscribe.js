const axios = require('axios').default;

export default (req, res) => {
  // not in a hackathon we would vaildate & sanitize this data
  subscribe(req.body);
  res.status(200).json({ status: "ok" });
}

const subscribe = async (data) => {
  await axios.post("https://api.airtable.com/v0/appHjuSfdaqPFVPsB/Table%202",
    { records: [{ "fields": data }] },
    {
      headers: {
        "Cookie": process.env.AIRTABLE_COOKIE,
        "Authorization": `Bearer ${process.env.AIRTABLE_AUTH}`,
        "Content-Type": "application/json",
      }
    })
}