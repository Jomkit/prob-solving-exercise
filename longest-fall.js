// add whatever parameters you deem necessary
function longestFall(arr) {
    if(arr.length <= 0) return 0;
    
    let descCount = 1;
    let maxCount = 0;
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i]) {
            descCount++;
            maxCount = Math.max(descCount, maxCount);
        } else{
            descCount = 1;
        }
    }
    return maxCount || 1;
}
