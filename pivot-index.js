// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let lSum = 0;
    let rSum = arr.reduce((a, b) => a + b, 0);
    let pvtI = -1;

    for(let i = 0; i<arr.length; i++){
        lSum += arr[i];
        if(lSum === rSum) {
            pvtI = i;
            break;
        }
        rSum -= arr[i];
    }
    return pvtI;
}
