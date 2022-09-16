function getSum(str1 = '123', str2 = '345') {  //468
    let str = `${str1} + ${str2}`;
    console.log('typeof str', typeof str);
    let sum = eval(str);
    console.log('result getSum', sum);

    return sum;
}

getSum();