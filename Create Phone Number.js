
/*
    6 Kyu
    https://www.codewars.com/kata/525f50e3b73515a6db000b83
*/

function createPhoneNumber(numbers){
    const string = [];
    var i=0;

    string.push("(");

    for(i=0;i<3;i++){
        string.push(numbers[i])
    }

    string.push(") ");

    for(i;i<6;i++){
        string.push(numbers[i])
    }

    string.push("-");

    for(i;i<10;i++){
        string.push(numbers[i])
    }
    
    return string.join('');
  }


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
