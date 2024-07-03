// add whatever parameters you deem necessary
export default function constructNote(msg, str) {
    const constructNoteFreqCounter = (arr) => {
        let freq = new Map();

        for(let char of arr){
            let charCount = freq.get(char) || 0;
            freq.set(char, charCount + 1);
        }
        return freq;
    }
    let msgCounter = constructNoteFreqCounter(msg);    
    let strCounter = constructNoteFreqCounter(str);    

    for (let key of msgCounter.keys){
        if(strCounter.has(key) === false) return false;
        if(msgCounter.get(key) > str.counter.get(key)) return false;
    }
    return true;
}