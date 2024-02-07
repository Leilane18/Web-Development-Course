//console.log("Antes");

const timeoutID = setTimeout(() => {
    console.log("Ovo");
}, 0);

console.log("timeout", timeoutID);

console.log("Galinha");

// executa a lógica depois do tempo determinado
// o set é executado depois das lógicas anteriores, se caso for aparecido


let count = 10;
 const intervalID = setInterval(() => {
    console.log(count);
    count--;

    if (count <= 0) {
        clearInterval(intervalID)
        console.log("Go!");
    }
}, 1000);

console.log("Interval", intervalID);
