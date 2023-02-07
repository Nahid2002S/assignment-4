//Problem No- 1
//Descriptions : This Function takes a number as a perameter and return output after completing the multiplication, summation, division and minus calculation.
function mindGame(number){
    if(typeof(number) !== 'number'){
        return 'input should be a number';
    }
    let multiplyResult = number * 3;
    let sumResult = multiplyResult + 10;
    let divisionResult = sumResult / 2;
    let minusResult = divisionResult - 5;
    return minusResult;
}



// Problem No- 2
//Description : This function takes a string as a perameter and return that the length of this input string is odd or even as an output.
function evenOdd(text){
    if(typeof(text) !== 'string'){
        return 'input should be a string';
    }
    let character = text.length;
    if(character % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}



//Problem No- 3
//Description : This function takes a number as a perameter and at first it calculate the difference between the input number and 7, if the input number is less than 7, it return the difference as an output and if the number is greater than or equal to 7, it return the double value of input number.
function isLGSeven(num){
    if(typeof(num) !== 'number'){
        return 'input should be a number';
    }
    const difference = num - 7;
    if(difference < 7){
        return difference;
    }
    else{
        return num * 2;
    }
}



//Problem No- 4
//Description : This function takes an array of number as a perameter and return that how much element of this array is negative or less than 0.
function findingBadData(age){
    if(Array.isArray(age) !== true){
            return 'input should be an array';
        }
    let badData = [];
    for(let i = 0; i < age.length; i++){
        let index = i;
        let arrIteam = age[i];
        if(arrIteam < 0){
            badData.push(arrIteam);
        }
    }
    let amountOfBadData = badData.length;
    return amountOfBadData;
}



//Problem No - 5
//Description : This function takes 3 different number as perameter and make some calculation and return the last calculation value as an output.
function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem){
    if(typeof(firstFriendGem, secondFriendGem, thirdFriendGem) !== 'number'){
        return 'input should be a number and this function must be have 3 perameter';
    }
    const friend1Diamond = firstFriendGem * 21;
    const friend2Diamond = secondFriendGem * 32;
    const friend3Diamond = thirdFriendGem * 43;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    let weGotDiamond = totalDiamond;
    if(totalDiamond > 2000){
        weGotDiamond = totalDiamond - 2000;
    }
    return weGotDiamond;
}