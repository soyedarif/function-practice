function getFactorial(number){
    let factorial=1;
    for(let i=1; i<=number;i++){
        factorial= factorial*i;
        console.log(factorial,i)
    }
    return factorial;
}
const factorial=getFactorial(8);
console.log('Factorial of 8 is', factorial)