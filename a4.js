// A4 Q1
function matchHouses(num) {
    if(num % 1 !== 0 || num <= 0)
        return "invalid";
    else
        return 6*num - num + 1;
}
// console.log(matchHouses(-1));
// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(87));