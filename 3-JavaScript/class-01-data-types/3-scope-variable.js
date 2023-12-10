let num = 10; //global
const pi = 3.14; // não é possivel tornar uma constante em variavel.

//var myName = "Leilane";

//console.log(myName);

{
    let num = 20; //local

    var myName = "Henrique" //hoisting

    num = 30;
    console.log(num);
    console.log(pi);
    console.log(myName);
}
 
num = 40;
console.log(num);
console.log(pi);

console.log(myName);
