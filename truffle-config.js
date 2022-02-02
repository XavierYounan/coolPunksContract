const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require("path");

const Web3 = require("web3");
const web3 = new Web3;

require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", //match any network
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `wss://rinkeby.infura.io/ws/v3/${process.env.INFURA_ID_RINKEBY}`,
          addressIndex: 2
      
        })
      },
      network_id: 4

    },   

    live: {
      provider: function() {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `wss://mainnet.infura.io/ws/v3/${process.env.INFURA_ID_RINKEBY}`,
          addressIndex: 2
      
        })
      },
      network_id: 1,
      gasPrice: web3.utils.toWei("87", "gwei")

    },   



  },

  mocha:{
    enableTimeout: false,
    before_timeout: 120000 //2 min
  },

  compilers: {
    solc: {
      version: "0.8.11", 
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },


  
};