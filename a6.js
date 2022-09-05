//A6 Q1
class Rectangle {
    constructor(_length, _width) {
        this._length = _length;
        this.width = _width;
    }
    
    area() {
        return this._length * this.width;
    }
}

class Square extends Rectangle {
    constructor(_side) {
        super(_side, _side);
    }
}

let square = new Square(4);
console.log(square.area());

// A6 Q2
function find_largest(array, num) {
    array.sort((a, b) => {return b - a}); // sort in descending order
    //console.log(...array);
    return array[num - 1];
}

console.log(find_largest([3,45,6,7,23,5,7,8], 3));

// A6 Q3 
function computeDash(numAsString) {
    let finalString = [];
    numAsString.split("").forEach((digit, index, number) => {
        // console.log(digit, index, ...number);
        if(parseInt(digit) % 2 === 0 && parseInt(number[index + 1]) % 2 === 0)
            finalString.push(digit+"-");
        else
            finalString.push(digit);
    });
    console.log(finalString.join(""));
}

computeDash("025468");