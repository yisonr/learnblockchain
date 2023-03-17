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
			  mnemonic: mnemonic, // 助记词可以推导出很多账号, 有一个默认推导路径
			  // path: "m/44'/60'/0'/0", 通过 path 指定具体账号 TODO
		  },
		  chainId: 80001,
	  },
  },
  etherscan: { // 开源到区块链浏览器的配置
    apiKey: {
          polygonMumbai: mumbaiApiKey, // 测试网对应的主网浏览器申请 apiKey
    },
  }
}

