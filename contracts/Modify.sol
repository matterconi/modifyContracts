// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IWinner {
    function attempt() external;
}

contract Modify {
    IWinner private winnerContract;

    constructor(address _winnerAddress) {
        winnerContract = IWinner(_winnerAddress);
    }

    function triggerAttempt() public {
        winnerContract.attempt();
    }
}