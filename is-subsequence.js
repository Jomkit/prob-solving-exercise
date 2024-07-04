// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if(!str1) return true;
    
    let i1 = 0;
    let i2 = 0;
    while(i2 < str2.length){
        if(str1[i1] === str2[i2]){
            i1++;
        }
        // if all char match, i1 will equal str1.length
        if(i1 === str1.length) return true;
        i2++;
    }
    return false;
}
