const moment = require("moment");

let generateDate=()=>{
    return{
        createdAt: moment().valueOf()
    };
};

module.exports={generateDate};