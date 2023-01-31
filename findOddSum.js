function getSumOfAnArray(nums){
    let sum=0;
    for(let i=0; i<nums.length;i++){
        const number=nums[i]
        sum+=number;
    }
    return sum;
}
function getOddNumbersOfAnArray(nums){
    let oddNumbers=[];
    for(let i=0;i<nums.length;i++){
        const index=i;
        const element=nums[index];
           if(element%2!==0){
            // console.log(index,element)
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}

const numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
const sumTotal=getSumOfAnArray(numbers)
const oddNumbers=getOddNumbersOfAnArray(numbers)
const oddNumbersSum=getSumOfAnArray(oddNumbers);
console.log(sumTotal);
console.log(oddNumbers);
console.log(oddNumbersSum)