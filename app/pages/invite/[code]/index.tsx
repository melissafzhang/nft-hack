import { useRouter } from "next/router";
import { useEffect } from "react";
import apiUrl from "../../../utils/apiUrl";

export default function InviteCode() {
  const router = useRouter();
  const code = router.query.code;
  if (!code) router.replace("/");

  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context) {
  const code = context.params.code;
  await fetch(`${apiUrl}/api/invite?code=${code}`);

  return {
    props: {},
  };
}
