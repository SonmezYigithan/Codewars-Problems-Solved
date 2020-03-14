/*
    6 Kyu
    https://www.codewars.com/kata/55c45be3b2079eccff00010f
*/

function order(words){
    var i=0,j;
    var numbers = [];
    var temp;
    
    if(words === ""){ //return empty string if insert empty
        return "";
    }
    
    words = words.split(" ");//split and put into array


    for(i=0;i<words.length;i++){
            temp = words[i];
            numbers.push(temp.match(/\d+/g).map(Number)); //find all numbers in a word and push them into numbers array
    }
   
   //sort array (bubble sort)
        i = 0, j = 0, temp;
        for (i = 0; i < numbers.length; i++) {   
            for (j = 0; j < numbers.length - i - 1; j++) { 
                if (numbers[j] > numbers[j + 1]) {  
                    
                    temp = words[j]; //sort our words array according to numbers
                    words[j] = words[j + 1];
                    words[j + 1] = temp;

                    temp = numbers[j];  //we also had to sort our numbers array too
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }

        words = words.join(' '); //join words into one string instead of array elements
        return words;
    }     

    console.log(order("is2 Thi1s T4est 3a"));
    console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
    console.log(order(""));