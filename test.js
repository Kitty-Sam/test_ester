// task#1
 function createSecretHolder(secret){
    return {

    }
 }

//task#2
let array = [7, 6, 15, 8]

const compareFunction = function (a, b) {
    let bitA = a.toString(2).replace(/0/g, '').length;
    let bitB = b.toString(2).replace(/0/g, '').length
    if (bitA === bitB) {
        return a - b
    } else {
        return bitA - bitB
    }
}

let arraySort = array.sort(compareFunction)
// console.log(arraySort)


//task#3

let languages = {"Java": 10, "Ruby": 80, "Python": 65}    //-->  ["Ruby", "Python"]
let languagesSecondGroup = {"Hindi": 60, "Dutch": 93, "Greek": 71}  //-->  ["Dutch", "Greek", "Hindi"]
let languagesThreeGroup = {"C++": 50, "ASM": 10, "Haskell": 20} // []

let sortObj = Object.entries(languages).sort((a, b) => b[1] - a[1]).filter(el => el[1] >=60).map((el) => el[0])

console.log(sortObj)


//task#4 returns all values

/*for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}*/

for (var i = 0; i <= 5; i++) {
    (function (ind) {
        setTimeout(function () {
            console.log(ind);
        }, 1000);
    })(i);
}