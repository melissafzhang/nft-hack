import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
export default function Rewards() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Header title="Rewards" />
    </Layout>
  );
}
