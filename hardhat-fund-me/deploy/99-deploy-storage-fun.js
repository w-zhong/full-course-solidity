const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("----------------------------------------------------");
  log("Deploying FunWithStorage and waiting for confirmations...");
  const funWithStorage = await deploy("FunWithStorage", {
    from: deployer,
    args: [],
    log: true,
  });

  log("Logging storage...");
  for (let i = 0; i < 10; i++) {
    log(
      `Location ${i}: ${await ethers.provider.getStorageAt(
        funWithStorage.address,
        i
      )}`
    );
  }
};

module.exports.tags = ["storage"];
