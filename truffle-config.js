var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "drip night ozone glance monster sudden assault smile like spirit salute awful";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
          provider: function() {
           return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f368aea6864c450f8521279a1f596a52");
          },
          network_id: 4,
          gas: 4500000,
    }
},
  compilers: {
     solc: {
       version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
 },
};
