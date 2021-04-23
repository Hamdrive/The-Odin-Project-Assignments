const calculator = (op, a, b)=>{
    if (!a || !b) return -1;

    switch(op){
        case "add":
            return a + b;
            break;
        case "multiply":
            return a * b;
            break;
        case "divide":
            return a / b;
            break;
        case "subtract":
            return a - b;
            break;
        case "remainder":
            return a % b;
            break;
        default:
            return "Operation doesnt exist"    
    }
}

module.exports = calculator