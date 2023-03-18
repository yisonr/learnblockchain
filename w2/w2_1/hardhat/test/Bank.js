const { expect } = require("chai");
const {ethers} = require("hardhat");

let bank;

describe("Bank", function () {
	// describe 声明一组测试
	async function init() {
	  const Bank = await ethers.getContractFactory("Bank");
	  bank = await Bank.deploy();
	  await bank.deployed();
	  console.log("Bank: " + bank.address);
	};


	before(async function() {
		// 初始化动作
		await init();
	});

    it("It should is 0", async function () {
      expect(await bank.balanceOf()).to.equal(0); 
    });

	let otherAccount = ethers.provider.getSigner(1); 
	// let otherAccount = ethers.getSigner(1);  // TODO: 不用 provider 生成的是 owner ?
    it("Iy should success", async function () {
      await expect(bank.totalBalance()).not.to.be.reverted;
    });

    it("It should fail and reply out of balance", async function () {
      await expect(bank.connect(otherAccount).withdrawAmount(10)).to.be.revertedWith("out of balance");
	});

    it("It should fail and reply the balance is 0", async function () {
      await expect(bank.connect(otherAccount).withdraw()).to.be.revertedWith("the balance is 0");
	});

    it("It should success", async function () {
      await expect(bank.rug()).not.to.be.reverted;
    });
});
