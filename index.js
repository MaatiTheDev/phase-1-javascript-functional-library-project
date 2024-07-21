// Function to check if a variable is an object
function isObject(obj) {
    return obj === Object(obj);
}

// Implementation of myEach
function myEach(collection, callback) {
    if (isObject(collection)) {
        collection = Object.values(collection);
    }
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
    return collection;
}

// Implementation of myMap
function myMap(collection, callback) {
    if (isObject(collection)) {
        collection = Object.values(collection);
    }
    let mappedArray = [];
    for (let i = 0; i < collection.length; i++) {
        mappedArray.push(callback(collection[i]));
    }
    return mappedArray;
}

// Implementation of myReduce
function myReduce(collection, callback, acc) {
    if (isObject(collection)) {
        collection = Object.values(collection);
    }
    let startIdx = 0;
    if (acc === undefined) {
        acc = collection[0];
        startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
    }
    return acc;
}

// Implementation of myFind
function myFind(collection, predicate) {
    if (isObject(collection)) {
        collection = Object.values(collection);
    }
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            return collection[i];
        }
    }
}

// Implementation of myFilter
function myFilter(collection, predicate) {
    if (isObject(collection)) {
        collection = Object.values(collection);
    }
    let filteredArray = [];
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            filteredArray.push(collection[i]);
        }
    }
    return filteredArray;
}

// Implementation of mySize
function mySize(collection) {
    if (isObject(collection)) {
        return Object.keys(collection).length;
    } else {
        return collection.length;
    }
}

// Implementation of myFirst
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

// Implementation of myLast
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
}

module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast
};
