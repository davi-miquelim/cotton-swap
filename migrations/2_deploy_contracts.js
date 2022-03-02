/* eslint-disable no-undef */
const Token = artifacts.require("Token");
const CottonSwap = artifacts.require("CottonSwap");

module.exports = function(deployer) {
  // Deploy Token
  deployer.deploy(Token);

  // Deploy CottonSwap
  deployer.deploy(CottonSwap);
};
