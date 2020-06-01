'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let [hours, minutes, secondsAndAmPm] = s.split(':');
    secondsAndAmPm = secondsAndAmPm.split("",4);
    let seconds = `${secondsAndAmPm[0]}${secondsAndAmPm[1]}`
    let isPm =  `${secondsAndAmPm[2]}${secondsAndAmPm[3]}` === 'PM' ? true : false;  
    
    if(!isPm) {
      hours = hours === '12' ? '00' : hours;
      
      return `${hours}:${minutes}:${seconds}`
      
    }
    hours = hours === '12' ? hours : String(Number(hours) + 12);
    return `${hours}:${minutes}:${seconds}`
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
