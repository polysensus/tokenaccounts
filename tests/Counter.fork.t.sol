// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "contracts/Counter.sol";

contract CounterForkTest is Test {
    Counter public counter;

    string RPC = vm.rpcUrl("op");
    uint256 FORK_BLOCK = vm.envOr("OP_MAINNET_FORK_BLOCK", uint256(111329307));
    uint256 fork;

    function setUp() public {

      if (!vm.envOr("ENABLE_FORK_TESTS", false)) return;

      fork = vm.createFork(RPC, FORK_BLOCK);
      counter = new Counter();
    }

    function test_Increment() public {

        vm.skip(!vm.envOr("ENABLE_FORK_TESTS", false));

        counter.increment();
        assertEq(counter.number(), 1);
    }
}
