require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { chainId: 31337 },
    goerli: {
      url: process.env.RPC_URL_GOERLI,
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY2],
      chainId: 5,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 17,
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: process.env.CMC_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      31337: 0,
      1: 0,
      5: 0,
    },
    user: {
      default: 1,
      31337: 0,
      1: 0,
      5: 0,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
