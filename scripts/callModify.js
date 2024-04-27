async function main() {
    const [deployer] = await ethers.getSigners();
    const intermediaryAddress = "0x9Eb7c7383A8ca16Ab1475e33851af5F53eaFb6bc";  // Replace with your actual deployed address

    // Get the contract instance
    const Modify = await ethers.getContractAt("Modify", intermediaryAddress);

    // Call the triggerAttempt function
    const transactionResponse = await Modify.triggerAttempt();
    console.log("Transaction sent with hash:", transactionResponse.hash);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});