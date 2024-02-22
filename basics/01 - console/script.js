// You can check the console object if you type 'console' in the dev-tools console

console.log('first');

console.error('Alert!');

console.warn('Warning!');

console.group('Group:');
console.table({name: 'Anon', email: 'test@gmail.com'});
console.groupEnd();

const styles = 'padding: 10x; background-color: white; color: green';
console.log('%cTesting styles in js files!', styles)
