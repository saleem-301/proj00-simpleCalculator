#! /usr/bin/env node
import inquirer from "inquirer";
const calc = await inquirer.prompt([
    {
        message: "Select the Operation to Perform",
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Mult", "Div"],
    },
    { message: "Enter First No.", type: "number", name: "firstNumber" },
    { message: "Enter Second No.", type: "number", name: "secondNumber" },
]);
//conditional Statement
if (calc.operator === "Add") {
    console.log("Sum is =", calc.firstNumber + calc.secondNumber);
}
else if (calc.operator === "Sub") {
    console.log(`Subtracting ${calc.secondNumber} from ${calc.firstNumber} =`, calc.firstNumber - calc.secondNumber);
}
else if (calc.operator === "Mult") {
    console.log("The Product is = ", calc.firstNumber * calc.secondNumber);
}
else {
    console.log("The Result is = ", calc.firstNumber / calc.secondNumber);
}
