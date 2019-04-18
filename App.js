const Calculator      = require('./Calculator');
const assert          = require('chai'). assert;
const sinon           = require('sinon');
const mocha           = require('mocha');
const Addition        = require('./Addition');
const Subtraction     = require('./Subtraction ');
const Multiplication  = require('./Multiplication')

describe('Test Calculator with addition', () => {
    const calculator     = new Calculator();
    const addition       = new Addition();
    const subtraction    = new Subtraction();
    const multiplication = new Multiplication();
    
    const fakeOps    = {
        execute : sinon.fake.returns(1997)  
    };
    calculator.register('fake', fakeOps);
    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);

        assert.equal(result, 1997);
        assert(fakeOps.execute.calledOnce);
        
        assert(fakeOps.execute.calledWith(1, 2));
    });
    it('should throw error if using unsupported operator', () => {
        assert.throw(() => {
            calculator.calculate('done', 1, 2);
        }, 
        'Operator is not support'
        );
    });   
    it('should return result from addition()', () => {
        const result = addition.execute(2, 2);
        assert.equal(result, 4);
    });
    it('should return result from subtraction()', () => {
        const result = subtraction.execute(2, 2);
        assert.equal(result, 0);
    });
    it('should return result from multiplication()', () => {
        const result = multiplication.execute(2, 2);
        assert.equal(result, 4)
    
    });
});
