'use strict';
function max(numbers) {
    let maxNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
        i++;
    }
    return maxNum;
}
function min(numbers) {
    let minNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
        i++;
    }
    return minNum;
}

function average(numbers){
    let total = 0;

    // numbers.forEach(function(num){
    //     total += num;
    // });
    numbers.forEach ((num) => total += num);
     return total/ numbers.length;
}
arr = [9,8,5,5,545,123,564];
console.log(average(arr));