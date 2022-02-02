const CoolPunks = artifacts.require("CoolPunks");

module.exports = function (deployer) {
  deployer.deploy(CoolPunks,"CoolPunks","CUNK", "ipfs://Qmbqq4XrRyKY9dAXNAYPtQh1yiV26j1EVSMBevhXtzm9Ju/");
};
