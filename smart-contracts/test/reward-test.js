const { expect } = require("chai");

describe("RewardToken", function() {
  let deployer,
  trader,
  user1,
  user2,
  attacker,
  provider,
  rewardToken;

  before(async function () {
    const RewardToken = await ethers.getContractFactory("BaseCreatorRewards");
    rewardToken = await RewardToken.deploy();
    
    await rewardToken.deployed();
    [deployer, trader, user1, user2, attacker] = await ethers.getSigners();
    provider = await ethers.provider;
    
  });

  it("owner should be able to mint NFTs", async function() {
    await rewardToken.createItem(user1.address, 1);
    expect(await rewardToken.balanceOf(user1.address, 1)).to.be.eq(1);
  });
});
