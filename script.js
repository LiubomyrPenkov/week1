// https://www.codewars.com/kata/function-cache/javascript
function cache(func) {
    let cachedData = [];
    return function () {
        let cachedObj,
            args = [];
        // it's additional checking for object and think about {a:1, b:2} and {b:2, a:1} as two equal arguments - bless sortObject function for it ;)
        args[0] = typeof arguments[0] === 'object' ? JSON.stringify(sortObject(arguments[0])) : arguments[0];
        args[1] = typeof arguments[1] === 'object' ? JSON.stringify(sortObject(arguments[1])) : arguments[1];

        cachedObj = cachedData.find((item) => {
            // it passes all the tests only with this statement inside 'if' block:
            // item.value1 === args[0] && item.value2 === args[1] 
            // and it means that the order of arguments metters
            // otherwise use this one: item.value1 === args[0] && item.value2 === args[1] || (item.value1 === args[1] && item.value2 === args[0])
            if (item.value1 === args[0] && item.value2 === args[1]) {
                return true;
            }
        });
        if (!cachedObj) {
            cachedObj = {
                value1: args[0],
                value2: args[1],
                result: func(arguments[0], arguments[1])
            };
            cachedData.push(cachedObj);
        }
        return cachedObj.result;
    }

    function sortObject(obj) {
        let sortedObj = {};
        const keys = Object.keys(obj).sort();
        keys.forEach((key) => sortedObj[key] = obj[key]);
        return sortedObj;
    }
}

// https://www.codewars.com/kata/find-the-middle-element/javascript
var gimme = function (inputArray) {
    let array = [...inputArray],
        number;
    array.sort((a, b) => a - b);
    number = array[1];
    return inputArray.findIndex((el) => el === number);
};

// https://www.codewars.com/kata/calculate-hypotenuse-of-right-angled-triangle/javascript
function calculateHypotenuse(a, b) {
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        throw new Error('invalid inputs')
    }
    return +Math.hypot(a, b).toFixed(3);
    // the same result: 
    // return +Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2))).toFixed(3)
}

// https://www.codewars.com/kata/create-phone-number/javascript
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

// https://www.codewars.com/kata/human-readable-time/javascript
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let sec = seconds - hours * 3600 - minutes * 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    sec = sec < 10 ? '0' + sec : sec;

    return hours + ':' + minutes + ':' + sec;
}

// https://www.codewars.com/kata/simple-pig-latin/javascript
function pigIt(str) {
    var arr = str.split(' ').map((item) => {
        //omit adding 'ay' to '!', '?', etc.
        if (/[A-Za-z]/.test(item)) {
            return item.slice(1) + item[0] + 'ay';
        } else {
            return item;
        }
    });
    return arr.join(' ');
}
// https://www.codewars.com/kata/count-characters-in-your-string/javascript
function count(string) {
    let obj = {};
    string.split('').forEach((item) => {
        if (obj[item]) {
            obj[item]++
        } else {
            obj[item] = 1;
        }
    })
    return obj;
}