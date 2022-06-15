function receivesAFunction (callBackFn) {
    callBackFn();
}

function returnsANamedFunction() {
    return function mutemiP(){
        return "Named Function";
    }
}
function returnsAnAnonymousFunction (){
    return function (){
        return "Anonymous Function";
    }
}