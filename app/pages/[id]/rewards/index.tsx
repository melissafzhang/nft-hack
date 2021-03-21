import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Header from "../../../components/Header";
import Body from "../../../components/Body";
import RewardOptionModule from "../../../components/RewardOptionModule";
import useRewardOptions from "../../../hooks/useRewardOptions";
export default function Rewards() {
  const router = useRouter();
  const { id } = router.query;
  const rewards = useRewardOptions();
  return (
    <Layout>
      <Header title="Rewards" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 100,
          marginTop: 50,
          marginRight: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 20,
          }}
        >
          <Body type="onBackground" size="largeBody">
            Spend
          </Body>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {rewards.map((i) => (
            <RewardOptionModule {...i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
