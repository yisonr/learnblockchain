const { expect } = require("chai");
const {ethers} = require("hardhat");


let counter;

describe("Counter", function () {
	// describe 声明一组测试
	//
	async function init() {
	  // const [owner, otherAccount] = await ethers.getSigner();
	  const Counter = await ethers.getContractFactory("Counter");
	  counter = await Counter.deploy();
	  await counter.deployed();
	  console.log("Counter: " + counter.address);
	};


	before(async function() {
		// 初始化动作
		await init();
	});

    it("init equal 0", async function () {
      expect(await counter.counter()).to.equal(0); // TODO: to 是执行的意思?
    });

    it("Shouldn't fail if the owner calls it", async function () {
      await expect(counter.count()).not.to.be.reverted;
    });

	let signer1 = ethers.provider.getSigner(1); // TODO: ?
    it("Should fail if the other account calls it", async function () {
      await expect(counter.connect(signer1).count()).to.be.revertedWith(
        "invalid call"
      );
    });

});
