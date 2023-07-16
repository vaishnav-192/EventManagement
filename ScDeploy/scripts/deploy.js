
const hre = require("hardhat");

async function main() {

  const EventContract = await hre.ethers.getContractFactory("EventContract");
  const eventContract = await EventContract.deploy();

  await eventContract.deployed();

  console.log("EventContract deployed to:", eventContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});