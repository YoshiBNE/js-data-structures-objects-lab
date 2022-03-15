// Write your solution in this file!
const driver = {
    name: 'Sam'
};

function updateDriverWithKeyAndValue(obj, key, value) {
    
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key) {
    const newobj = {...obj};
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    const newobj = obj;
    delete newobj[key];
    return newobj;
}