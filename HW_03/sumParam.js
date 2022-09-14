function sumParam(val1 = '10', val2 = 2) {
    let val = 0,
        result;

    if ( typeof  val1 === 'string') {
        val = val2;
        result = +val1;
    } else {
        val = val1;
        result = +val2;
    }

    if ( !(val%15) ) {
        val *= (-1);
    }

    result += val;

    return result;
}

sumParam ('5', 45);