/* eslint-disable no-undef */
const Token = artifacts.require("Token");
const CottonSwap = artifacts.require("CottonSwap");

module.exports = async function(deployer) {
  // Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed();
  // Deploy CottonSwap
  await deployer.deploy(CottonSwap);
  const cottonSwap = await CottonSwap.deployed();

  // Transfer all tokens to CottonSwap (1 million)
  await token.transfer(cottonSwap.address, "1000000000000000000000000");
};
