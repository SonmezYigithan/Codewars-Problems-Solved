#include <vector>

// 7 Kyu
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

long sumTwoSmallestNumbers(std::vector<int> numbers)
{
    long long i,first=0,second=1;
    
    if(numbers.size() < 3){
      printf(" Invalid Input ");
      return 0;
    }
    if(numbers[second] < numbers[first]){
        second = 0;
        first = 1;
    }
    
    first = second = LLONG_MAX;
    for(i=0 ; i < numbers.size() ; i++){ //en küçük sayýyý bul
       if (numbers[i] < first)  
        {  
            second = first;  
            first = numbers[i];  
        }  
  
        /* If arr[i] is in between first and second  
        then update second */
        else if (numbers[i] < second && numbers[i] != first){  
            second = numbers[i];}
    }  
    if (second == LLONG_MAX) { 
        printf("There is no second smallest element\n");
        return 4000000000;
    }
    else{
        printf("The smallest element is %ld and second Smallest element is %ld ",first, second);
        return first+second;
    }
    
    //en küçük 2nci sayýyý bul
     //std::min_element(numbers.begin(), numbers.end());
    
    return 0;

}
