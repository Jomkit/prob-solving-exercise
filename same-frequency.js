// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const freqCounter = (num) => {
        let numStr = num.toString();
        let freq = new Map();

        for(let char of numStr){
            let freqCount = freq.get(char) || 0;
            freq.set(char, freqCount + 1);
        }
        return freq;
    }

    let num1Freq = freqCounter(num1);
    let num2Freq = freqCounter(num2);

    if(num1Freq.size !== num2Freq.size) return false;
    for(let key of num1Freq.keys()){
        if(num2Freq.has(key) === false) return false;
        if(num1Freq.get(key) !== num2Freq.get(key)) return false;
    }
    return true;
}
