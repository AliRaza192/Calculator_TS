import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
// import Choices from "inquirer/lib/objects/choices.js";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 200)
    })
}

async function welcome() {
    let welcome_title = chalkAnimation.rainbow('Lets Start CLI Calculator')
    await sleep();
    welcome_title.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);

}

await welcome();


async function askQuestuion() {
    const answers = await inquirer
        .prompt([
            /* Pass your questions in here */
            
            {
                type: "number",
                name: "num1",
                message: "Enter Number 1: ",
            },


            {
                type: "number",
                name: "num2",
                message: "Enter Number 2: ",
            },

            {
                type: "list",
                name: "operator",
                message: "Which Operation You Want Perform? \n",
                choices: ["Addition", "Substraction", "Multiplication", "Division"]
            },
        ]);

    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Substraction") {
        console.log(chalk.bgRed(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.yellow(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.gray(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }

};
// askQuestuion(); 


async function startAgain() {
    do {
        await askQuestuion();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do You Want Continue ? Press y Or n: "
            })
    } while (again.restart == "y" || again.restart == "Y")
}

startAgain()