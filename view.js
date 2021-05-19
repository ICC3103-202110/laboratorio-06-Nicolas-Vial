const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}


function inputSide(){
    return inquirer.prompt([
    {
        type:'list',
        name:'side',
        message: 'temperature source?',
        default: 'Left',
        choices:['Right','Left']
    }])  
}


function input(side, number1, number2,unit1,unit2){
    //default variables depending on the side
    let number=-1
    let unit='Celsius'
    if(side==='Left'){
        number=number1
        unit=unit1
        }else{
            number=number2
            unit=unit2
        }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'number',
            message: 'Temperature value to convert?',
            default: number,
            validate: function(value){
                if(isNaN(value) === false){
                    return true
                } else {
                    return 'Enter a valid number'
                }
            }
           
            },{
                type:'list',
                name:'initialUnit',
                message: 'From?',
                default: unit,
                choices:['Celsius','Fahrenheit','Kelvin'] 
            },{
                type:'list',
                name:'finalUnit',
                message: 'To?',
                default: unit,
                choices:['Celsius','Fahrenheit','Kelvin'] 
            }
        ])

}






function table(value1,unit1,value2,unit2){
    const table=[{
        'Left Value':  value1.toString(), 
        'Left Unit': unit1.toString(), 
        'Right Value': value2.toString(), 
        'Right Unit': unit2.toString()
    }]
    return table
}

module.exports = {
    getTitle,
    input,
    inputSide,
    table
   
}