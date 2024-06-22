const HOUR_SPECIAL_VALUES = [',', '-', '*', '/']
const HOUR_MIN_MAX_NUMERIC_VALUES = [0, 23]



function verify_hour_values(cron_hour_segment) {
    if (cron_hour_segment.includes(HOUR_SPECIAL_VALUES[2]) && 
        cron_hour_segment.length > 1) {
        throw new Error('Incorrect use of the * symbol in a cron hour segment!');
    } else if (cron_hour_segment.includes(HOUR_MIN_MAX_NUMERIC_VALUES[3])) {
        cron_segment_split = cron_hour_segment.split('/');
        if (cron_segment_split !== 2) {
            throw new Error('The special character / can be used only once in a cron segment!');
        }
    }

    return true;
}
