// add whatever parameters you deem necessary
// O(n*log(n)) method
// function countPairs(arr, target) {
//     arr.sort((a,b) => a - b);
//     console.log("arr", arr, 'targ', target);
//     // use pointers
//     let l = 0;
//     let r = arr.length - 1;
//     let numPairs = 0;

//     while(l < r){
//         let sum = arr[l] + arr[r];
//         if( sum === target ) numPairs++;
//         if(sum > target){
//             r--;
//         }else {
//             l++;
//         }
//     }
//     console.log(numPairs);
//     return numPairs;
// }

// O(n)
function countPairs(arr, target){
    let s = new Set(arr);
    let count = 0;

    for(let val of arr){
        s.delete(val);
        if(s.has(target - val)){
            count++;
        }
    }
    return count;
}