
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.7",
  networks: {
    mainnet: {
      url: "http://176.236.121.139:9656/ext/bc/C/rpc",
      chainId: 43112,
      accounts: [PRIVATE_KEY],
    },
  },
};