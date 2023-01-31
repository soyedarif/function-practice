function getMinutes(hour) {
    const minute = hour * 60;
    return minute;
}
const myHour = 1;
const myMinutes = getMinutes(myHour);
console.log(myMinutes);

// solution 2
function getLeapYear(years) {
    let leapYearsArr = [];
    for (let year of years) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYearsArr.push(year);
        }
    }
    return leapYearsArr;
}
const myYears = [2023, 2024, 2025, 2026, 2028, 2030, 2081, 2070, 2056, 2012];
const leapYears = getLeapYear(myYears);
console.log(leapYears);
//solution 3
function getSumOfOdds(numbers) {
    let sum = 0;
    for (number of numbers) {
        if (number % 2 !== 0) {
            sum += number;
            // console.log(sum)
        }
    }
    return sum;
}
const myNumbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
const oddSum = getSumOfOdds(myNumbers);
console.log(oddSum);
// solution 
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year & 400 === 0) {
        return true;
    } return false;
}
const myYear = 2023;
const isLeapYear = leapYear(myYear);
console.log(isLeapYear);
//solution
function multiplicationTable(number) {
    let table = []
    for (let i = 1; i <= 10; i++) {
        table.push(number + 'x' + i + '=' + number * i)
        // console.log(multiple)
    }
    return table;
}
const theTable = multiplicationTable(13)
console.log(theTable);
// solution
function uppercase(name) {
    console.log(name.toUpperCase());
}
uppercase('bangladesh');
//solution
function stringAdd(firstName, LastName) {
    const fullName = firstName + ' ' + LastName;
    return fullName;
}
console.log(stringAdd("Soyed", "Arif"));
//solution
function squared(num) {
    return num ** 2;
}
console.log(squared(6));
//solution
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza.toppings.indexOf('pepperoni'))
//solution
/* console.log(Object.keys(pizza))
for(let keys in pizza){
    const value=pizza[keys]
    console.log(keys,value)
}
for(let element of pizza.toppings){
   const index= pizza.toppings.indexOf(element);
   console.log(element,index)
} */

//solution
const bagPack={
    pen:4,
    books:7,
    noteBook:3,
    eraser:1,
    pencil:2,
    geomatryBox:['sharpner', 'ruller', 'ark', 'triangle', 'compus']
} 
const keys=Object.keys(bagPack);
const values=Object.values(bagPack);
// console.log(keys,values)
for(let property in bagPack){
   const value=bagPack[property];
   console.log(property,value)
}
for (let keys of bagPack.geomatryBox){
    const index= bagPack.geomatryBox.indexOf(keys);
    console.log(keys,index)
}
//solution
const myRandomNumbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for (let number of myRandomNumbers){
    const index=myRandomNumbers.indexOf(number)
    console.log(number, index)
}
