require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1
    },
    hardhat_local: {
      url: 'http://localhost:8545',
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      },
      chainId: 1,
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic: process.env.SEED,
      }
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
      accounts: {
        mnemonic: process.env.SEED,
      },
    },
  },
  mocha: {
    timeout: 180000
  }
};

