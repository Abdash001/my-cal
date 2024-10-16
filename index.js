#! /usr/bin/env node
import inquirer from 'inquirer'
async function myCal(){
    let question = await inquirer.prompt([
        {
            name: 'number1',
            type: 'number',
            message: "enter first number",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return("please enter only number")
                }
                return true;
            }
        },
        {
            name: 'number2',
            type: 'number',
            message: "enter second number",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return("please enter only number")
                }
                return true;
            }
        },
        {
            name: 'options',
            type: 'list',
            message: 'choose action',
            choices: [
                'Add +',
                'Sub -',
                'Mul *',
                'Div /'
            ]
        },
    ])
    let num1 = question.number1;
    let num2 = question.number2;
    let op = question.options;
    
    
    switch (op) {
        case 'Add +':
            console.log(num1 + num2)
            break;
        case 'Sub -':
            console.log(num1 - num2)
            break;
        case 'Mul *':
            console.log(num1 * num2)
            break;
        case 'Div /':
            console.log(num1 / num2)
            break;        
        default:
            break;
    }
}
myCal()
