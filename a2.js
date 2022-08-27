// A2 Q1
function checkTriangle(a, b, c) {
    if( a <= 0 || b <= 0 || c <= 0)
        return console.log("Invalid parameters");
    if (a === b  && b === c) 
        return console.log("equilateral");
    if (a !== b && b !== c && c !== a)
        return console.log("scalene");
    if (a === b || b === c || a === c)
        return console.log("isosceles");
}
// checkTriangle(0,1,1);
// checkTriangle(1,1,1);
// checkTriangle(1,1,2);
// checkTriangle(1,2,2);
// checkTriangle(1,2,3);

// A2 Q2
function findGrade(marks){
    switch(true){
        case marks>90 && marks<=100:
            console.log("S Grade"); 
            break;
        case marks>80 && marks<=90:
            console.log("A Grade"); 
            break;
        case marks>70 && marks<=80:
            console.log("B Grade"); 
            break;
        case marks>60 && marks<=70:
            console.log("C Grade"); 
            break;
        case marks>50 && marks<=60:
            console.log("D Grade"); 
            break;
        case marks>40 && marks<=50:
            console.log("E Grade"); 
            break;
        case marks>=0 && marks<=40:
            console.log("Student has failed"); 
            break;    
        default: console.log("Invalid Marks");
    }
}
// findGrade(91);
// findGrade(70);
// findGrade(-10);
// findGrade(5);

// A2 Q3
function singleMultipleSum(num, max) {
    // find last multiple less than max
    --max;
    let last;
    if(max % num === 0)
        last = max;
    else
        last = max - (max % num); 
    let TotalMultiples = ((last - num)/num) + 1;
    //console.log(last, TotalMultiples);

    // sum = [2a + (n-1)d]n/2
    return (TotalMultiples/2) * (((2 * num) + ((TotalMultiples - 1) * num)))
}
function multiplier(n1, n2, max) {
    return singleMultipleSum(n1, max) + singleMultipleSum(n2, max); // use helpers
}
//console.log(multiplier(3, 5, 1000));

function isPrime(num) {
    if(num <= 1)
        return false;
    let i = 2;
    while(i**i <= num) {
        if (num % i == 0)
            return false;
        i += 1;
    }
    return true;
}

function factorial(num) {
    if(num % 1 != 0) return null; // whole number check
    if(num < 0) return null;
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}

// A2 Q4
function primesInRange(min, max) {
    for (let i=min; i<=max; i++) // use helpers
        if(isPrime(i))
            console.log(`${i}! - ${BigInt(factorial(i))}`);
}

// primesInRange(0, 50);