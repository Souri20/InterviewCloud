function addStringAny(str){
    let arr = str.split('')
    let sum = 0;
    arr.forEach((item)=>{
        if(item/1 == item){
            sum += Number(item)
        }      
    })
    return sum


}
console.log( typeof('s'/1))

console.log(addStringAny("1\n2,3"))