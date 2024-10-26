function addString(str){
    let arr = str.split(",");
    let sum = 0;
    arr.forEach((item)=>{
        sum += Number(item)
    })

    return sum;
}


console.log(addString("3,4"))