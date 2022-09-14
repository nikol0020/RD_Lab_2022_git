function TitleValidation() {
    let charCode = [], // array letters code
        charCodePunctuation = [32,33,44,45,46,58,63], // array !,-.:?
        titleSpellCode = [];

    let j = 0,
        countSymbols = 1;

    const valid = 'VALID',
          invalid = 'INVALID';

    for (let i = 65; i < 123; i++ ) {
        charCode[j] = i;
        j++;
    }

    let charCodeExtra = charCode.splice(26,6);  // remove extra characters codes
    let charCodeCheck =  [...charCode,...charCodePunctuation]; // created array with permissible value code

    let titleValue = prompt('ENTER TITLE. Title should be more then 2 characters and less 20 characters.', 'Title');

    let lengthTitle = titleValue.length;

    if ((lengthTitle < 3) || (lengthTitle > 20)) {
        console.log('check-length',invalid);
        return invalid;
    }

    for (let i = 0; i < lengthTitle; i++) {
        titleSpellCode[i] = titleValue.codePointAt(i);
    }

    if ((titleSpellCode[0] < 65) || (titleSpellCode[0] > 90)) {
        console.log('check-capital-letter',invalid);
        return invalid;
    }

    for (let i = 1; i < lengthTitle; i++) {
        for (j = 0; j < charCodeCheck.length; j++) {
            if (titleSpellCode[i] === charCodeCheck[j]) {
                countSymbols++;
                break;
            }
        }
    }

    if (countSymbols === lengthTitle) { // compare length array and valid symbols
        console.log('check-title', valid);
        return valid;
    } else {
        console.log('check-title', invalid);
        return invalid;
    }
}

TitleValidation();

