//1
function maxOfTwoNumbersEasy(num1, num2) {
   return Math.max(num1, num2);
}
function maxOfTwoNumbers(num1, num2) {
   if (num1 > num2) {
       return num1;
   } else {
       return num2;
   }
}

//2
function maxOfThree(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
       return num1;
   } else if(num2 > num1 && num2 > num3) {
       return num2;
   } else {
       return num3;
   }
}

//3
function isVowel(char) {
    var vowels = ["a", "e", "i", "o", "u"];

    for(i = 0; i < vowels.length; i++){
        if (vowels[i] == char.toLowerCase()){
            return true;
        }
    }
    return false;
}

//4
function sumArray(array) {
    var sum = 0;

    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function multiplyArray(array) {
    var multSum = 1;

    for(i = 0; i < array.length; i++){
        multSum *= array[i];
    }
    return multSum;
}

//Bonus 1
function reverseString(str) {
    var revStr = [];
    var array = str.split("");
    for(i = array.length - 1; i >= 0; i--) {
        revStr.push(array[i]);
    }
    return revStr.join("");
}

//Bonus 2
function findLongestWord(array) {
    var str = "";
    for(i = 0; i < array.length; i++) {
        if (array[i].length > str.length) {
            str = array[i]
        }
    }
    return str;
}

//Bonus 3
function filterLongWords(array, num) {
    var str = [];
    for(i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            str.push(array[i])
        }
    }
    return str;
}