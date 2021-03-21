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

  // Weird things may happen if the user clicks on multiple referral
  // links. e.g. User clicks on a referral link for creator A then navigates
  // away. User then clicks another referral link for creator B. If user navigates
  // back to creator A's page directly and subscribes then the wrong referral code
  // may be applied
  if (data.valid_code) cookies.set("referral_code", code);

  return {
    redirect: {
      permanent: true,
      destination: data.redirect_url,
    },
    props: {},
  };
}
