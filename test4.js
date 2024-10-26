function addStringDelimeter(str){
    let arr = str.split('')
    let sum = 0;
    arr.forEach((item)=>{
        if(item/1 == item){
            sum += Number(item)
        }      
    })
    return sum;
}


console.log(addStringDelimeter("//;\n1;2"))