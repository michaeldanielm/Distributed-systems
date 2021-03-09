let expect=require('expect');


var {generateAdmin}=require('./admin.js');



describe('Generate Message',()=>{
    it("Should generate correct message object",()=>{
        let text="some random text"
        message= generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({text});
    });
});