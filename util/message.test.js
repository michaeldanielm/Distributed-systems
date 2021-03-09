let expect=require('expect');


var {generateMessage}=require('./message.js');



describe('Generate Message',()=>{
    it("Should generate correct message object",()=>{
        let from="Admin",
        text="some random text"
        message= generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});