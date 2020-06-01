'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function plusMinus(arr) {
    const arrLength = arr.length;

    const positives = arr.filter(element => element > 0).length;
    const negatives = arr.filter(element => element < 0).length;
    const zeros = arr.filter(element => element == 0).length;

    console.log(positives / arrLength);
    console.log(negatives / arrLength);
    console.log(zeros / arrLength);

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
