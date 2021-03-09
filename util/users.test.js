const expect =require('expect');

const {Users}=require('./users.js');

describe('Users', ()=>{
    let users;

    beforeEach(()=>{
        users = new Users();
        users.users =[{
            id:"1",
            name:"kanu",
            room:"The Office Fans"
        },
        {
            id:"2",
            name:"sam",
            room:"The Office Fans"
        },
        {
            id:"3",
            name:"manu",
            room:"dev"
        }]
    });

    it('should add new user',()=>{
        let users = new Users();
        let user={
            id:"sdfsdf",
            name:"karan",
            room:"The Office Fans"
        };
let reUser = users.addUser(user.id,user.name,user.room);

expect(users.users).toEqual([user]);

    });
    it('should return names for the office fans',()=>{
        let userList=users.getUserList('The Office Fans');
        expect(userList).toEqual(['kanu','sam'])
    })

    it('should return names for the dev',()=>{
        let userList=users.getUserList('dev');
        expect(userList).toEqual(['manu'])
    });

    it('should find user',()=>{
        let userID ='2',
        user =users.getUser(userID);
        expect(user.id).toBe(userID);
    });
    
    it('should not find user',()=>{
        let userID ='150',
        user =users.getUser(userID);
        expect(user).toBeUndefined();
    });

    it('should not remove a user',()=>{
        let userID='108',
        user = users.removeUser(userID);

        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    })

    it('should remove a user',()=>{
        let userID='1',
        user = users.removeUser(userID);

        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    })
});