// call stack
console.log(1);

//task
setTimeout(() => {
    console.log(2);
}, 1000);

//call stack
for (let index = 0; index < 20000; index++) {
    console.log(index);
}

// Microtask
queueMicrotask(() => {
    console.log(4);
})