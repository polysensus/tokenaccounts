// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "contracts/Counter.sol";

contract CounterTest is Test {
    Counter public counter;
    string url;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
        url = vm.envOr(string("MY_VAR"), string("notok"));
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function test_env() public view {
        assertEq(url, "ok");
    }


    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
