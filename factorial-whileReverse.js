function factorial(nums){
    let result =1;
    let i=nums;
    while(i>=1){
        result*=i;
        i--;
    }
    return result;
}
const number=5;
const factorialResult=factorial(number);
console.log(factorialResult)
