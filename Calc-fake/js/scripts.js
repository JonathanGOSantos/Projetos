var num1 = +prompt("Digite um número: ");
var operation = prompt("Escolha a operação: (+ | - | * | /)")
var num2 = +prompt("Digite outro número: ")
var result;
if(operation == "+") {
    result = num1 + num2;
    console.log(result);
} else if(operation == "-") {
    result = num1 - num2;
    console.log(result);
} else if(operation == "*") {
    result = num1 * num2;
    console.log(result);
} else if(operation == "/") {
    result = num1 / num2;
    console.log(result);
}