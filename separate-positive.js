// add whatever parameters you deem necessary
function separatePositive(arr) {
    for(let i = 0; i < arr.length; i++){
        //if val is positive
        if(arr[i] >= 0){
            let temp = arr.splice(i, 1);
            arr.unshift(...temp);
        }
    }
    return arr;
}
