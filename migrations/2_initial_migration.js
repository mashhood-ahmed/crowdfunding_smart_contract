const contractOwner = artifacts.require("ContractOwner");

module.exports = function (deployer) {
  deployer.deploy(contractOwner);
};
