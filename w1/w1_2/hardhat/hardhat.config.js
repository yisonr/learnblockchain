require("@nomicfoundation/hardhat-toolbox");

let dotenv = require("dotenv")
dotenv.config({path: "./.env"})

const mnemonic= process.env.MNEMONIC
const mumbaiApiKey = process.env.MUMBAI_APIKEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
	  mumbai: {
		  // polygon 测试网
		  url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
		  accounts: {
			  mnemonic: mnemonic,
		  },
		  chainId: 80001,
	  },
  },
  etherscan: {
    apiKey: {
          polygonMumbai: mumbaiApiKey,
    },
  }
}

