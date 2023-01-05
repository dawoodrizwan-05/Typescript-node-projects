#! /usr/bin/env node
console.clear();
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// import figlet from "figlet";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(" Welcome to  ATM Machine");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.blue `
      
    
    
               88PPP8               88888888888888888      88PP8B          8888888    
              88P  88P                     88              888 888        888  888       
             88P    88P                    88              888  888      B88   888          
            88P      88P                   88              888   8888888888    888              
           88P        88P                  88              888                 888
          888888888888888P                 88              888                 888
         88P            88P                88              888                 888
        88P              88P               88              888                 888
       88P                88P              88              888                 888
      88P                  88P             88              888                 888
                                
                

`);
}
await welcome();
async function askQuestionone() {
    let answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "Name",
            name: "UserName",
            message: "Enter Your UserName:"
        },
        {
            type: "number",
            name: "UserPin",
            message: "Enter Your UserPin:"
        },
        {
            type: "list",
            name: "operator1",
            message: "Which operation you want to perform? \n",
            choices: ["Saving Account", "Current Account"]
        }, {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Transaction", "WithDrawal"]
        },
        {
            type: "number",
            name: "Transaction",
            message: "Enter value of Transaction:"
        }
    ]);
    const CurrentAmount = 1000;
    console.log(chalk.blue `Hello ${answers.UserName} `);
    console.log(chalk.yellow `How Can We Help You Your Account Balance is \n ${answers.Transaction - CurrentAmount} `);
    if (answers.operator == "Transaction") {
        console.log(chalk.green(`${answers.Transaction} - ${CurrentAmount} = ${answers.Transaction - CurrentAmount}`));
    }
    else if (answers.operator == "WithDrawal") {
    }
    inquirer.prompt([{}]);
}
async function startAgain() {
    do {
        await askQuestionone();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
