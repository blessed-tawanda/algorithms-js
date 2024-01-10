function sum(array) {
    if (array.length === 0) {
        return 0;
    }
    return array[0] + sum(array.slice(1));
}

function count(list, ct = 0) {
    if(list.length === 0) {
        return ct;
    } else {
        ct += 1;
        return count(list.slice(1), ct);
    }
}

function getBigNum(list, bigNum = 0) {
    if(list.length === 0) {
        return bigNum;
    } else {
        if(bigNum > list[0]) {
            return getBigNum(list.slice(1), bigNum);
        } else {
            return getBigNum(list.slice(1), list[0]);
        }
    }
}

console.log(sum([1, 2, 3, 4]));
console.log(count([1,2,3,5]));
console.log(getBigNum([8,12,9,4,50]))
