const PARSE_TEST_INPUT = [
    '0 0/2 0-23 ? * MON-FRI',
    '0 0/2 0-3 ? * SAT',
    '0 0/2 17-23 ? * SUN'
]

const PARSE_TEST_INPUT2 = [
    '0 0/2 0-23 ? * MON-FRI'
]

const PARSE_TEST_INPUT3 = [
    '0 0/2 0-23 ? *'
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
}


console.log('Testing with PARSE_TEST_INPUT:');
parse_cron(PARSE_TEST_INPUT);
console.log('Testing with PARSE_TEST_INPUT2:');
parse_cron(PARSE_TEST_INPUT2);
console.log('Testing with PARSE_TEST_INPUT3:');
parse_cron(PARSE_TEST_INPUT3);
