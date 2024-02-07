function sayHi() {
   // throw new Error("Error in sayHi!!!")----- exemplo de erro
    return "Hi!";
}

function greeting() {
    return sayHi();
}

function action() {
    action();      //exemplo de erro após chamar a mesma função repetidas vezes
    return greeting();            
}

const value = action();

console.log(value);