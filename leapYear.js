function isLeapYear(year){
    if(year%4===0){
        return true;
    }else{
        return false;
    }
}
const myYear=isLeapYear(2023);
console.log(myYear)