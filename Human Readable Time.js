/* 5 Kyou

Question: https://www.codewars.com/kata/52685f7382004e774f0001f7

*/
function humanReadable(seconds) {
    var num1,num2,num3;
    if(seconds > 359999){
        return '00:00:00';
    }

    num1 = parseInt(num1 = seconds / 3600); //number of hours
    if(num1 < 10){
        num1 = '0'+num1;
    }

    num2 = parseInt(seconds - (num1 * 60 * 60)); // total seconds - seconds 
    seconds = seconds - (num1 * 60 * 60);
    num2 = parseInt(num2 / 60 ); //number of minutes
    if(num2 < 10){
        num2 = '0'+num2;
    }

    num3 = parseInt(seconds - num2 * 60); //total seconds - minutes
    if(num3 < 10){
        num3 = '0'+num3;
    }

    return num1+':'+num2+':'+num3;

  }
    

    humanReadable(0);
    humanReadable(5);
    humanReadable(60);
    humanReadable(86399);
    humanReadable(359999);