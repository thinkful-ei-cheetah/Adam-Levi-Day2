'use strict';
function repeat(fn, n){
    // eslint-disable-next-line no-undef
    for (i = 0; i < n; i++) {
        fn();
    }
}

// function hello() {
//     console.log('Hello World');
// }
// function goodbye() {
//     console.log('Goodbye World');
// }
const hello = () => console.log('Hello World');
const goodbye = () => console.log('Goodbye World');

repeat(hello, 5);
repeat(goodbye, 5);