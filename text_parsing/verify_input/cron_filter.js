const HOUR_SPECIAL_VALUES = [',', '-', '*', '/']
const HOUR_MIN_MAX_NUMERIC_VALUES = [0, 23]



function verifyHourValues(cron_hour_segment) {
    if (cron_hour_segment.includes(HOUR_SPECIAL_VALUES[2]) && 
        cron_hour_segment.length > 1) {
        throw new Error('Incorrect use of the * symbol in a cron hour segment!');
    } else if (cron_hour_segment.includes(HOUR_MIN_MAX_NUMERIC_VALUES[3])) {
        cron_segment_split = cron_hour_segment.split('/');
        if (cron_segment_split !== 2) {
            throw new Error('The special character / can be used only once in a cron segment!');
        }
        
    } else if (cron_hour_segment.includes(HOUR_SPECIAL_VALUES(0))) {
        cron_segment_split = cron_hour_segment.split(',');
        cron_segment_split.forEach(value => {
            if (value.includes(HOUR_SPECIAL_VALUES[1])) {
                checkRanges(value);
            } else {
                res = Number(value);
                checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1]);
            }
        })
    } else if (cron_hour_segment.includes(HOUR_SPECIAL_VALUES(1))) {
        checkRanges(cron_hour_segment);
    } else {
        checkNumericValue(cron_hour_segment);
    }

    return true;
}


function checkRanges(range) {
    rangeSplit = range.split('-');
    if (rangeSplit.length !== 2) {
        throw new Error('Wrong usage of the - symbol in a cron!');
    }
    rangeSplit.forEach(value => {
        res = Number(value);
        // if (!res || res < HOUR_MIN_MAX_NUMERIC_VALUES[0] || res > HOUR_MIN_MAX_NUMERIC_VALUES[1]) {
        //     throw new Error('Wrong hour value supplied in the cron expression!');
        // }
        checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1])
    });
    return true;
}

function checkNumericValue(value, min, max) {
    if (value < min || value > max) {
        throw new Error('Wrong hour value supplied in the cron expression!');
    }
    return true;
}
