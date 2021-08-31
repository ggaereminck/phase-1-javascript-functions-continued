// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(highlight = '*'){
    function result(adjective){
        return `You are ${highlight}${adjective}${highlight}!`
    }
    return result;
}
const emphatic = wrapAdjective()
console.log(emphatic)

