
function rotateNum(val = "javascript", num = 2){
    const newVal = String(val).slice(0, num);
    const a = String(val).substring(num)
    return a+newVal;
}

console.log(rotateNum('Developer', 5))