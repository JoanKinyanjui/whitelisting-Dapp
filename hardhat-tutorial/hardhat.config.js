require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const {ALCHEMY_URL,PRIVATE_KEY} = process.env;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_URL,
      accounts: [PRIVATE_KEY],
    },
  }
};
