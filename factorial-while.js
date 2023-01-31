function factorial(num){
    let result=1;
    let i=1;
    while(i<=num){
        result*=i;
        i++
    }
    return result;
}
const myNumber=5;
const factResult=factorial(myNumber);
console.log(factResult)