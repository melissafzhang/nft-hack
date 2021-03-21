import RallyAuth from "../../../../util/rally";


export default async (req, res) => {
    const code = req.query.code;
    const result = await RallyAuth.callback(code);
    return res.status(200).json({success: true});
}
