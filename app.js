var express = require("express")
const app = express()
const router = express.Router()
//const app = require("./routes/app");

app.get("./index",function(req,res){
    res.send("/index");
})

app.listen(8081,function(){
    console.log("Servidor rodando na url: https://localhost:8081")
});
/*
router.get("app/index",(req,res)=>{
    res.send("app/index")
});
*/

