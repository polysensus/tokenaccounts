// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {ERC6551Account} from "contracts/Account.sol";

contract AccountTest is Test {
    ERC6551Account public account;

    function setUp() public {
        account = new ERC6551Account();
    }

    function test_ok() public {
        assertEq(true, true);
    }
}

