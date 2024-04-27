require('dotenv').config();
const hre = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    const winnerAddress = "0x0ad3c684763c3103428308be98DF3f45f544AdAf";  // Replace with the actual address

    const Intermediary = await ethers.getContractFactory("Modify");
    const intermediary = await Intermediary.deploy(winnerAddress);

    await intermediary.waitForDeployment();

    console.log("Intermediary deployed to:", intermediary.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

