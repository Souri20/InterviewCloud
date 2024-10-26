function checkNegativeAndThrow (str){
    let arr = str.split(",")
    let sum = 0;


    for(let i=0; i<arr.length ; i++){
        try{
            if(Number(arr[i]) < 0){
                throw  Error(`negative numbers not allowed ${arr[i]}`);
            }else{
                sum += Number(arr[i]);
            }
        }catch(err){
                return err.message;
        }

    }

    return sum;


}


console.log(checkNegativeAndThrow("3,4,5,-7"));