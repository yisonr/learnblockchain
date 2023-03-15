// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;


contract Counter {
	uint public counter;
	address owner;
	
	constructor() {
		counter =0;
		owner = msg.sender;
	}

	function count() public {
		require(owner == msg.sender, "invalid call");
		counter = counter +  1;
	}

	function add(uint x) public {
		counter = counter +  x;
	}
}
