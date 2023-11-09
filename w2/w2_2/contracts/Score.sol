// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Score {
        error NotTeacher();
        error Over();

        // 记录每个学生的分数
        mapping (address => uint) public students;
        address teacher;
        address owner;


        constructor() {
                owner = msg.sender;
        }

        function setTeacher(address t) public {
                if(owner == msg.sender) {
                        teacher = t;
                }
        }

        modifier onlyTeacher() {
                if(msg.sender != teacher) {
                        revert NotTeacher();
                }
                _;
        }

        function setScore(address student, uint data) external onlyTeacher {
                if (data > 100) revert Over();
                students[student] = data;
        }
}

interface IScore {
        function setScore(address student, uint data) external;
}

contract Teacher {
        IScore score;

        constructor(address s) {
            score = IScore(s);
        }

        function callSetScore(address student, uint data) public {
            score.setScore(student, data);
        }
}

