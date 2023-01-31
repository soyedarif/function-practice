// 1+2+3+4+5+6+7
function sumOfNumbers(numbers){
let sum=0;
for (let i=1; i<=numbers;i++){
    sum+=i;
    console.log(i,sum)
}
}
sumOfNumbers(6)