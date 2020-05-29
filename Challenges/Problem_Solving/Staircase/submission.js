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

// Complete the staircase function below.
function staircase(n) {
    const emptySpace = " ";
    const hashtag = "#";
    
    let arr = [];
    
    for(let i = 0; i < n - 1; i++ ){
        arr[i] = emptySpace;
    }

     for(let i = n ; i > 0; i-- ){
        arr[i - 1] = hashtag;
        console.log(arr.join(""))
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
