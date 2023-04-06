const prompt = require("prompt-sync")();

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];

for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * numbers.length);
    result.push(numbers[index]);
    numbers.splice(index, 1);
}

let threeNums = result.join("");


let input = prompt("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");
let strike = 0;
let ball = 0;
let attempts = 0;

while (strike < 3) {
    attempts++;
    for (let i = 0; i < 3; i++) {

        if (input[i] === threeNums[i]) {
            strike += 1;
        } else if (threeNums.includes(input[i])) {
            ball += 1;
        }
    }

    if (strike < 3) {
        console.log(`${attempts}번째 시도`);
        console.log(`스트라이크: ${strike}, 볼: ${ball}`);
        input = prompt("숫자를 입력하세요 (세 자리 수):");
        strike = 0;
        ball = 0;
    }
}
console.log(`${attempts}번 만에 맞추셨습니다. 게임 종료!`);