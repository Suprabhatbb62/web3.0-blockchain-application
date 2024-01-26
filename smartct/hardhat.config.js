// https://eth-ropsten.alchemyapi.io/v2/emBdwQ4VnxgLXVkwB-es9Sb-ZkRO-l23
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/emBdwQ4VnxgLXVkwB-es9Sb-ZkRO-l23',
      accounts: ['878b0a6f57b72d68fc87160bdd26fdccbaa55831efa5fb2ddc078ff65c8112b8'],
    },
  },
};