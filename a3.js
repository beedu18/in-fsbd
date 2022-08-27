// A3 Q1
function looper(lines) {
    let output = 0; // the output
    for(let i = 1; i <= lines; i++) {
        let line = [];
        for(let j = 1; j <= i; j++) {
            line.push(++output);
        }
        console.log(...line);
    }
}
// looper(2);
// looper(3);
// looper(4);
// looper(10);
  
function splitNumber(num){
    if(num % 1 !== 0) return []; // whole number check
    let split = [];
    while(num>0) {
      split.push(num%10);
      num = Math.floor(num/10);
    }
    return split;
}

function factorial(num) {
    if(num % 1 != 0) return null; // whole number check
    if(num < 0) return null;
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}
  
// A3 Q2
function isArmstrong(num) {
    let split = splitNumber(num);
    // console.log(...split);
    if(num === split.reduce((prev, curr) => { return prev + curr**3 }, 0))
      return true;
    else 
      return false;
}
// console.log(isArmstrong(153))
// console.log(isArmstrong(372))
// console.log(isArmstrong(0))

  
// A3 Q3
function isSpecial(num) {
    let split = splitNumber(num);
    if(num === split.reduce((prev, curr) => { return prev + factorial(curr)}, 0))
        return true;
    else
        return false;
}
// console.log(isSpecial(15))