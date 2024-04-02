import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/hardhat";
import "tsconfig-paths/register";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  paths: {
    // using hardhat-foundry to get hh to work with foundry & get the benefit
    // of source remappings. this means using sources here is redundant.
    // sources: "chaintrap",
    tests: "./tests",
    cache: "./cache/hardhat",
    artifacts: "artifacts/hardhat",
  },
}

export default config;
