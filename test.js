// task#1
function CreateSecretHolder(secret) {
    this.secret = secret
}

CreateSecretHolder.prototype = {
    getSecret : function () {
        return this.secret
    },
    setSecret: function (secret) {
        this.secret = secret
    }
}

let secretAgain = new CreateSecretHolder(5)

// console.log(secretAgain.setSecret(2))
// console.log(secretAgain.getSecret())


//task#2
let array = [7,6,15,8]

const compareFunction = function (a,b) {
    let bitA = a.toString(2).replace(/0/g,'').length;
    let bitB = b.toString(2).replace(/0/g,'').length
    if(bitA === bitB) {
        return a-b
    } else {
    return bitA - bitB
}}

let arraySort = array.sort(compareFunction)
console.log(arraySort)


//task#3

let languages = {"Java": 10, "Ruby": 80, "Python": 65}    //-->  ["Ruby", "Python"]
let languagesSecondGroup =  {"Hindi": 60, "Dutch" : 93, "Greek": 71}  //-->  ["Dutch", "Greek", "Hindi"]
let languagesThreeGroup = {"C++": 50, "ASM": 10, "Haskell": 20} // []

function getKeyByValue(object, value) {
    return Object.keys(object).filter(key => object[key] >= value);
}

console.log(getKeyByValue(languagesThreeGroup, 60))
// console.log(values)
// console.log(keys)


//task#4 returns all values

/*for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}*/

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}