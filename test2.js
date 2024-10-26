function addStringMany(str){
    let arr = str.split(",");
    let sum = 0;
    arr.forEach((item)=>{
        sum += Number(item)
    })

    return sum;
}


console.log(addStringMany("3,4,7,8,9,9,0,10,34"))