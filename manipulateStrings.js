function manipulateStrings(input,callBack){
    let newString = input.toUpperCase();
    callBack(newString)
}

function displayResult(newStr){
    console.log(`new string is ${newStr}`)
}

manipulateStrings('hello, world!',displayResult)