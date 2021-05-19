function Celsiusfahreinheit(from, number){
    if (from==='Celsius'){
        return (9/5)*number+32
    }else{
        return (5/9)*(number-32)
    }
}

function Kelvinfahreinheit(from, number){
    if(from==='Kelvin'){
        return (9/5)*(number-273.15)+32
    }else{
        return (5/9)*(number-32)+273.15
    }
    
}

function CelsiusKelvin(from, number){
    if(from==='Celsius'){
        return number+273.15
    }else{
        return number-273.15
    }
}

function functionSelecter(initialUnit, finalUnit){
    if(initialUnit==='Celsius' && finalUnit==='Fahreinheit'){
        return ['C-F','Celsius']
    }else if(initialUnit==='Fahreinheit'&& finalUnit==='Celsius'){
        return ['C-F','Fahreinheit']
    }
    
    else if(initialUnit==='Kelvin' && finalUnit==='Fahreinheit'){
        return ['K-F','Kelvin']
    }else if(initialUnit==='Fahreinheit' && finalUnit==='Kelvin'){
        return ['K-F','Fahreinheit']
    }

    else if(initialUnit==='Celsius' && finalUnit==='Kelvin'){
        return ['C-K','Celsius']
    }else{
        return ['C-K','Kelvin']
    }
}

function calculate(array,number){
    if (array[0]==='C-F'){
        return Celsiusfahreinheit(array[1],number)
    }

    if (array[0]==='K-F'){
        return Kelvinfahreinheit(array[1],number)
    }

    if (array[0]==='C-K'){
        return CelsiusKelvin(array[1],number)
    }
}


function change(
    side,
    number,
    initialUnit,
    finalUnit,
    leftValue,
    leftUnit,
    rightValue,
    rightUnit){
    if (side==='Left'){
        if(initialUnit===finalUnit){
            return [number,finalUnit,rightValue,rightUnit]
        }else{
            const newNumber=calculate(functionSelecter(initialUnit,finalUnit),parseInt(number))
            return [newNumber,finalUnit,rightValue,rightUnit]
        }
    }else{
        if(initialUnit===finalUnit){
            return [number,finalUnit,rightValue,rightUnit]
        }else{
            const newNumber=calculate(functionSelecter(initialUnit,finalUnit),parseInt(number))
            return [leftValue,leftUnit,newNumber,finalUnit]
        }
    }
}



module.exports = {
    change
}