function factorial(num){
    let result =1;
    for(let i=num; i>=1;i--){
        result*=i;
        // console.log(i,result)
    }
    return result;
}
const number=9;
const result =factorial(number)
console.log(number, result)