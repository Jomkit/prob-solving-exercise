// add whatever parameters you deem necessary
function constructNoteFreqCounter(arr){
    let freq = new Map();

    for(let char of arr){
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount + 1);
    }
    return freq;
}

function constructNote(msg, str) {
    if(msg.length === 0) return true;
    if(str.length === 0) return false;

    let msgCounter = constructNoteFreqCounter(msg);
    let strCounter = constructNoteFreqCounter(str);    

    for (let key of msgCounter.keys()){
        if(strCounter.has(key) === false) return false;
        if(key && msgCounter.get(key) > strCounter.get(key)) return false;
    }
    return true;
}