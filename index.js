// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*") {
    function innnerFunction(adjective="hard worker") {
        return `You are ${style}a ${adjective}${style}!`
    }
    return innnerFunction();
    // return `You are ${style}a ${adjective}${style}!`
}


// expect(emphatic).to.equal("You are *a hard worker*!")
// expect(emphatic).to.equal("You are ||a dedicated programmer||!"

console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));
console.log(mondayWork());
console.log(mondayWork("work from home"));
console.log(wrapAdjective());
console.log(wrapAdjective("||"));
