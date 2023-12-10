//formas que uma string pode ser escrita----------
console.log("test");
console.log(`test`);
console.log('test');

console.log("I cant't play outside");
console.log('Emanuel disse "Estudem JavaScript"');

//concatenation: está juntando-------------                                            ()_()
let course = "Desenvolvimento Web"              //                                    ( O.O )
console.log("Turma de " + course);             //                                    '('')('')'

let num1="10"
let num2=20
console.log(num1 + num2); //type coersion----------

num1 = Number (num1) // type conversion--------------
 
//grouping operator
console.log("A soma de num1 e num2 é " + (num1 + num2));

//interpolation
console.log("A soma de " + num1 + " e " + num2 + " = " + (num1 + num2));

//template literals
console.log(`A soma de ${num1} e ${num2} = ${num1 + num2}`);