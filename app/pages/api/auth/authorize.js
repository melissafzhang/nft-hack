import RallyAuth from "../../../util/rally";


export default async (req, res) => {
    await RallyAuth.register();
    const url = await RallyAuth.authorize();
    return res.redirect(302, url);
}
