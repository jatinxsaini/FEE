let cnt = 0;
function countEvenNumbers(arr){
    for(num of arr){
        if(num % 2 == 0){
            cnt++;
        }
    }
}

arr = [1,4,5,6,7,10]
countEvenNumbers(arr)
console.log(cnt)