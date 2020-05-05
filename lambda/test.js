const quoteHelper = require('./modules/quoteHelper');
async function testMod(){
    await quoteHelper.getQuote().then((value)=>{
        let quote = JSON.parse(value).title;
        let id = JSON.parse(value).id;
        console.log(id+ '::'+quote);
    },(err)=>{
        console.log("Something went wrong");
    })
}
testMod();