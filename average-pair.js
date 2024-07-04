// add whatever parameters you deem necessary
function averagePair(arr, target) {
    if(arr.length === 0) return false;

    let l = 0;
    let r = arr.length - 1;
    const calcAvg = (numL, numR) => {
        const avg = (numL + numR) / 2;
        return avg;
    }

    while(r > l){
        if(calcAvg(arr[l], arr[r]) === target){ 
            return true;
        }
        (calcAvg(arr[l], arr[r]) > target) ? r-- : l++;
    }
    return false;
}
