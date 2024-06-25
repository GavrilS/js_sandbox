
// Check cron expression lenght
const CRON_EXPR_MAX_LENGTH = 6;

function checkCronLength(cronArray) {
    cronItems = cronArray.split(', ');
    cronItems.forEach(item => {
        segments = item.split(' ');
        if (segments.length !== CRON_EXPR_MAX_LENGTH) {
            throw new Error('Wrong length for cron expression! There need to be values for 6 segments in a cron expression!');
        }
    });
    return true;
}



// Check hour values
const HOUR_SPECIAL_VALUES = [',', '-', '*', '/'];
const HOUR_MIN_MAX_NUMERIC_VALUES = [0, 23];

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


function checkHourRanges(range) {
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


// Check weekday 
const WEEK_SPECIAL_VALUES = [',','-','*','?'];
const WEEK_VALUES = ['MON','TUE','WED','THU','FRI','SAT','SUN','1','2','3','4','5','6','7'];

function verifyWeekdayValues(cronWeekSegment) {
    if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[2]) ||
        cronWeekSegment.includes(WEEK_SPECIAL_VALUES[3]) &&
        cronWeekSegment.length !== 1
    ) {
        throw new Error('Wrong usage of * or ? in a cron in the Weekday segment!');
    } else if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[0])) {
        cronSplit = cronWeekSegment.split(',');
        cronSplit.forEach(item => {
            if (item.includes(WEEK_SPECIAL_VALUES[1])) {
                cronItemSplit = item.split('-');
                cronItemSplit.forEach(itemSplit => {
                    checkWeekdayString(itemSplit);
                });
            } else {
                checkWeekdayString(item);
            }
        });
    } else if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[1])) {
        cronSplit = cronWeekSegment.split('-');
        cronSplit.forEach(item => {
            checkWeekdayString(item);
        });
    } else {
        checkWeekdayString(cronWeekSegment);
    }
    return true;
}


function checkWeekdayString(value) {
    if (!WEEK_VALUES.includes(value.toUpperCase())) {
        throw new Error('Wrong value for Weekday in a cron!');
    }
    return true;
}
