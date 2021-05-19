const {getTitle,input,inputSide, table} = require('./view')
const {printTable} = require('console-table-printer')
const {change} = require('./update')

async function app(leftValue,leftUnit, rightValue,rightUnit){

    console.log('\n')  
        console.log(getTitle())
        console.log('\n\n')

    printTable(table(leftValue,leftUnit, rightValue,rightUnit))

    let side=await inputSide()
    let answer=await input(side.side, leftValue, rightValue,leftUnit,rightUnit)
    let list=change(
        side.side,
        answer.number,
        answer.finalUnit,
        leftValue,
        leftUnit,
        rightValue,
        rightUnit
        )

    leftValue=parseInt(list[0])
    leftUnit=list[1]
    rightValue=parseInt(list[2])
    rightUnit=list[3]
    
    console.clear()
    app(leftValue,leftUnit, rightValue,rightUnit) //recursividad

    

}

app(0,'Celsius',32,'Fahrenheit')