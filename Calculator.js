
class Calculator{
    
    constructor(){
        this.operators = {};
    }
    register(name, ops) {
        this.operators[name] = ops;
    }

    calculate(name, number1, number2) {

        const operators = this.operators[name];
        if (!operators) {
            throw Error(`Operator is not supported`);
        }
        return this.operators[name].execute(number1, number2);
    }

}
module.exports = Calculator;

