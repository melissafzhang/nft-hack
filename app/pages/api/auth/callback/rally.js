import RallyAuth from "../../../../util/rally";


export default async (req, res) => {
    const code = request.query.code;
    const result = await RallyAuth.callback(code);
    console.log(result);
    return res.status(200).json({success: true});

}