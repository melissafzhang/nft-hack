import { useRouter } from "next/router";
import apiUrl from "../../../utils/apiUrl";
import Cookies from "cookies";

export default function InviteCode() {
  const router = useRouter();
  const code = router.query.code;
  if (!code) router.replace("/");

  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context) {
  const code = context.params.code;
  const response = await fetch(`${apiUrl}/api/invite?code=${code}`);
  const data = await response.json();
  const cookies = new Cookies(context.req, context.res);

  if (data.valid_code) cookies.set("referral_code", code);
  return {
    redirect: {
      permanent: true,
      destination: data.redirect_url,
    },
    props: {},
  };
}
