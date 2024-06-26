// import { verifyCronExpression } from "./cron_filter"

// Verify cron hour/weekday segments - the rest are not going to be updated
const HOUR_SEGMENT_PLACE = 2;
const WEEKDAY_SEGMENT_PLACE = 5;

function verifyCronExpression(cronExpr) {
    try{
        console.log('Validating cron expressions: ', cronExpr);
        checkCronLength(cronExpr);
        cronExpr.forEach((cron) => {
            let segments = cron.split(' ');
            verifyHourValues(segments[HOUR_SEGMENT_PLACE]);
            verifyWeekdayValues(segments[WEEKDAY_SEGMENT_PLACE]);
        });
    } catch (error) {
        // console.log('Error verifying cron: ', error);
        return error;
    }
    return true;
}


// Check cron expression lenght
const CRON_EXPR_LENGTH = 6;

function checkCronLength(cronArray) {
    cronArray.forEach((item) => {
        let segments = item.split(' ');
        if (segments.length !== CRON_EXPR_LENGTH) {
            let messageBase = 'Wrong length for cron expression - ' + item
            let messageAddition = ' There needs to be values for 6 segments in a cron expression!'
            throw new Error(messageBase + messageAddition);
        }
    });
    return true;
}



// Check hour values
const HOUR_SPECIAL_VALUES = [',', '-', '*', '/'];
const HOUR_MIN_MAX_NUMERIC_VALUES = [0, 23];

function verifyHourValues(cronHourSegment) {
    if (cronHourSegment.includes('*') && 
        cronHourSegment.length === 1) {
        return true;
    } else if (cronHourSegment.includes(HOUR_SPECIAL_VALUES[3])) {
        let cronSegmentSplit = cronHourSegment.split('/');
        if (cronSegmentSplit.length !== 2) {
            throw new Error('The special character / can be used only once in a cron segment: ' + cronHourSegment);
        }
        cronSegmentSplit.forEach(value => {
            if (value.includes(HOUR_SPECIAL_VALUES[0])) {
                checkMultipleHourValues(value);
            } else if (value.includes(HOUR_SPECIAL_VALUES[1])) {
                checkHourRanges(value);
            } else {
                let res = Number(value);
                checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1]);
            }
        });
        
    } else if (cronHourSegment.includes(HOUR_SPECIAL_VALUES[0])) {
        checkMultipleHourValues(cronHourSegment);
    } else if (cronHourSegment.includes(HOUR_SPECIAL_VALUES[1])) {
        checkHourRanges(cronHourSegment);
    } else {
        let res = Number(cronHourSegment)
        checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1]);
    }

    return true;
}


function checkMultipleHourValues(cronHourSegment) {
    let cronSegmentSplit = cronHourSegment.split(',');
    cronSegmentSplit.forEach(value => {
        if (value.includes(HOUR_SPECIAL_VALUES[1])) {
            checkHourRanges(value);
        } else {
            let res = Number(value);
            checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1]);
        }
    });
}


function checkHourRanges(range) {
    let rangeSplit = range.split('-');
    if (rangeSplit.length !== 2) {
        throw new Error('Wrong usage of the - symbol in a cron!');
    }
    rangeSplit.forEach(value => {
        let res = Number(value);
        checkNumericValue(res, HOUR_MIN_MAX_NUMERIC_VALUES[0], HOUR_MIN_MAX_NUMERIC_VALUES[1])
    });
    return true;
}

function checkNumericValue(value, min, max) {
    if (Number.isNaN(value)) {
        throw new Error('Wrong value passed for the hour segment.');
    }
    if (value < min || value > max) {
        throw new Error('Wrong hour value supplied in the cron expression - ' + value);
    }
    return true;
}


// Check weekday 
const WEEK_SPECIAL_VALUES = [',','-','*'];
const WEEK_VALUES = ['MON','TUE','WED','THU','FRI','SAT','SUN','1','2','3','4','5','6','7','L'];

function verifyWeekdayValues(cronWeekSegment) {
    if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[2]) &&
        cronWeekSegment.length !== 1
    ) {
        throw new Error('Wrong usage of * in a cron in the Weekday segment - ' + cronWeekSegment);
    } else if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[0])) {
        let cronSplit = cronWeekSegment.split(',');
        cronSplit.forEach(item => {
            if (item.includes(WEEK_SPECIAL_VALUES[1])) {
                let cronItemSplit = item.split('-');
                cronItemSplit.forEach(itemSplit => {
                    checkWeekdayString(itemSplit);
                });
            } else {
                checkWeekdayString(item);
            }
        });
    } else if (cronWeekSegment.includes(WEEK_SPECIAL_VALUES[1])) {
        let cronSplit = cronWeekSegment.split('-');
        cronSplit.forEach(item => {
            checkWeekdayString(item);
        });
    } else {
        checkWeekdayString(cronWeekSegment);
    }
    return true;
}


function checkWeekdayString(value) {
    console.log('Weekday value: ', value);
    if (!WEEK_VALUES.includes(value.toUpperCase()) &&
        value !== WEEK_SPECIAL_VALUES[2]) {
        throw new Error('Wrong value for Weekday in a cron - ' + value);
    }
    return true;
}


// Test cases


const PARSE_TEST_INPUT = [
    '0 0/2 0-23 ? * MON-FRI,SAT',
    '0 0/2 12 ? * SAT',
    '0 0/2 17-23 ? * SUN'
]

const PARSE_TEST_INPUT2 = [
    '0 0/2 0-12,18-23 ? * MON-FRI'
]

const PARSE_TEST_INPUT3 = [
    '0 0/2 */* ? * *'
]



function parse_cron(cron) {
    cron.forEach(line => {
        cron_expr = line.split(" ");
        if (cron_expr.length !== 6) {
            console.log('The number of cron components is wrong! You need to have 6 sections:');
            console.log('1 - seconds; 2 - minutes; 3 - hours; 4 - day of month; 5 - month; 6 - day of week');
            throw new Error('Wrong number of cron components! There needs to be 6 values in a cron separated by a single space each!');
        }
    })
    console.log('The expression passes the tests!');
    console.log(cron);
    console.log('====================================');

    return true;
}


console.log('Testing with PARSE_TEST_INPUT:');
// parse_cron(PARSE_TEST_INPUT);
console.log('**********verifyCronExpression: ', verifyCronExpression(PARSE_TEST_INPUT));
console.log('Testing with PARSE_TEST_INPUT2:');
// parse_cron(PARSE_TEST_INPUT2);
console.log('**********verifyCronExpression: ', verifyCronExpression(PARSE_TEST_INPUT2));
console.log('Testing with PARSE_TEST_INPUT3:');
// parse_cron(PARSE_TEST_INPUT3);
console.log('**********verifyCronExpression: ', verifyCronExpression(PARSE_TEST_INPUT3));
