require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://chaotic-dawn-patina.matic-testnet.discover.quiknode.pro/c58e5724a4aa00a37479140a4092d66d83321c98/",
      accounts: ["c58e5724a4aa00a37479140a4092d66d83321c98"]
    }
  },
  solidity: "0.8.17"
};
