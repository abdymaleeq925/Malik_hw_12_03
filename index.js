const task1 = (start, end) => {
    leapYears = [];
    for (let i = start; i <= end; i++) {
        if (i % 4 == 0) {
            leapYears.push(i);
        }
    }
    return leapYears;
}

function task2(arr1, arr2) {
    let min = arr1.length, max = arr2.length, longestArray = arr2, sum = [];
    if (arr2.length < arr1.length) {
        min = arr2.length;
        max = arr1.length;
        longestArray = arr1;
    }
    for (let i = 0; i < min; i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    for (let i = min; i < max; i++) {
        sum.push(longestArray[i]);
    }
    return sum;
}

const task3 = (str) => {
    if (str.length > 50) {
        return str.substring(0, 50) + '...';
    }
    else {
        return str;
    }
}

function task4 (str) {
    let textArray = [];   
    str.split(' ').forEach((i) => {
        textArray.push(i[0].toUpperCase() + i.slice(1));
    });
    return textArray.join(' ');
}

console.log(task1(1998,2026));
console.log(task2([37, 23, 43, 34, 55], [40, 533, 601]))
console.log(task3('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'));
console.log(task4('это предложение из заглавных букв каждого слова'));
