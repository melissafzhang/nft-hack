import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
import useEarnInfo from "../../../hooks/useEarnInfo";
import SubscribeModule from "../../../components/SubscribeModule";
import { EarnOption as EarnOptionType } from "../../../types";
import { useState } from 'react'
import { useSession } from 'next-auth/client'
import SignIn from "../../../components/SignIn";
import ReferralModule from "../../../components/ReferralModule";

export default function Earn() {
  const [ session, loading ] = useSession()
  const [ content , setContent ] = useState()


  
  if (typeof window !== 'undefined' && loading) return null
  
  const router = useRouter();
  const { id } = router.query;
  const info = useEarnInfo();
  return (
    <Layout>
      <Header title="Ways to Earn" />
      {session ? info.map((i) => (
        <EarnOption {...i} />
      )) : <SignIn/>}
      
    </Layout>
  );
}

const EarnOption = ({ type, amount, currency }: EarnOptionType) => {
  switch (type) {
    case "subscribe":
      return <SubscribeModule amount={amount} />;
    case "referral":
      return <ReferralModule amount={amount} currency={currency} />;
    default:
      return null;
  }
};
