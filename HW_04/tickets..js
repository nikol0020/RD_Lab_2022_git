function Tickets(arr = [25, 50, 25, 100, 25, 50]) {  //yes
    let count25 = count50 = 0;
    let message = 'YES';
    let i = 1;

    if (arr[0] === 25) {
        count25++;
    } else {
        message = 'NO';
        return message;
    }

    do {
        if (arr[i] === 25) {
            count25++;
            i++;
        } else {
            count25--;
            if (arr[i] === 100) {
                if (count50 > 0) {
                    count50--;
                    i++;
                } else {
                    count25 -= 2;
                    i++;
                }
            } else {
                count50++;
                i++;
            }
        }

        if (count25 < 0) {
            message = 'NO';
            return message;
        }

    } while (i < arr.length);

    return message;
}

Tickets();
