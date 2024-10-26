function addString(str){
    if(str ==""){
        return 0;
    }
    let arr = str.split(",");
    let sum = 0;
    arr.forEach((item)=>{
        sum += Number(item)
    })

    return sum;
}


console.log(addString(""))
console.log(addString("4,5"))