//parses lines of IDE commands, given in an array of strings.

function validLine(str){
    let output = [];

    let leftParenIndex = str.indexOf("(");
    let rightParenIndex = str.indexOf(")");
    if (leftParenIndex == -1 || rightParenIndex == -1 || leftParenIndex > rightParenIndex){
        throw "Line must contain parenthesis.";
    }

    let action, params, obj;

    let periods = str.match(/./g);
    let periodCount = periods.length;
    switch(periodCount){
        case 0:
            action = str.substring(0, leftParenIndex);
            params = str.substring(leftParenIndex + 1, rightParenIndex);
            output.push(action);
            output.push(params);
            break;
        case 1:
            pIndex = str.indexOf(".");
            obj = str.substring(0, pIndex);
            action = str.substring(pIndex + 1, leftParenIndex);
            params = str.substring(leftParenIndex + 1, rightParenIndex);
            output.push(obj);
            output.push(action);
            output.push(params);
            break;
        default:
            throw "Too many periods to be a valid statement.";
    }

    return output;
}

function parseInput(input){ //list of str
    let callString = [];  //2d array, strings of commands to be called

    try{
        for(let str of input){
            callString.push(validLine(str));
        }
    }
    catch (err){
        console.log(err);
        callString = [];
        //return to normal state here
    }

    //change state -> "send"
    mainCommandHandler(callString);
}
