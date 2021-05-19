function change(
    side,
    number,
    finalUnit,
    leftValue,
    leftUnit,
    rightValue,
    rightUnit){
    if (side==='Left'){
        return [number,finalUnit,rightValue,rightUnit]
    }else{
        return [leftValue,leftUnit,number,finalUnit]
    }
}



module.exports = {
    change
}