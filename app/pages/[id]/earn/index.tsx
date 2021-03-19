import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";

export default function Earn() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Header title="Ways to Earn" />
    </Layout>
  );
}
