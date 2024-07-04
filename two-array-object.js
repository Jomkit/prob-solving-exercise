// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};
    for(let i in keys){
        values[i] ? obj[keys[i]] = values[i] : obj[keys[i]] = null;
    }
    return obj;
}
