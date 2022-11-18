// import statements
const { ethers } = require("hardhat");

// async main function
async function main() {
  const StorageFactory = await ethers.getContractFactory("Storage");
  console.log("Deploying contract: Storage.sol...");
  const storage = await StorageFactory.deploy();
  await storage.deployed();
  console.log("Storage deployed to:", storage.address);

}

// async
// main function call
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });