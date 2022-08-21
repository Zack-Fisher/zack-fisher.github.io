'use strict';

function isEven(num){
    num = parseInt(num);

    if (num > 1){
        while (num > 1){
            num -= 2;
        }
    }
    if (num < 0){
        while (num < 0){
            num += 2;
        }
    }

    if (num == 1){
        return 'odd';
    }
    else{
        return 'even';
    }
}