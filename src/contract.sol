// SPDX-License-Identifier: Apache-2.0

pragma solidity >=0.5.0 <0.9.0;

contract SimpleStorage {
    uint256 a = 10;
    function setter(uint256 _a) public {
        a = _a;
    }

    function getter() public view returns(uint256) {
        return a;
    }
}