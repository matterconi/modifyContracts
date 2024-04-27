require('dotenv').config();
const hre = require('hardhat');
const { ethers } = require('ethers');
const { JsonRpcProvider } = require('ethers/providers');

async function main() {
  const url = process.env.ALCHEMY_RPC_URL;
  const provider = new JsonRpcProvider(url);

  const artifacts = await hre.artifacts.readArtifact("Winner");
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  

  // Assuming ContractFactory is imported or defined somewhere above
  const factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

    try {
        // Deploy the contract using the revised methods
        const contract = await factory.deploy();
        console.log("Contract deployment sent, waiting for confirmation...");

        // Wait for the contract to be mined and confirmed on the network
        await contract.waitForDeployment();
        const contractInfo = contract.deploymentTransaction();
        console.log(contractInfo);
        // Additional check (optional, for demonstration)
        const deployedCode = await contract.getDeployedCode();
        console.log(deployedCode);
        if (deployedCode) {
            console.log("Deployment confirmed, code deployed at address.");
        } else {
            console.log("Deployment check failed, no code found at address.");
        }
    } catch (error) {
        console.error("Error deploying contract:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
