const expect=require('expect');
const {isrealstring} =require('./isrealstring.js');

describe('is Real string',()=>{
    it('should reject non-string values',()=>{
        let res=isrealstring(65);
        expect(res).toBe(false);
    });
    it('should reject string values with only spaces',()=>{
        let res=isrealstring('         ');
        expect(res).toBe(false);
    });
    it('should allow string with non-space chars.',()=> {
        let res=isrealstring('      kar          ');
        expect(res).toBe(true);
    });
});