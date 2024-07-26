const express = require('express');
const app = express();


// get method
app.get("/one", function ( req, res){

    res.end('get method')

})
// post method
app.post("/two", function ( req, res){
    res.end('post method')
})
// put method
app.put("/three", function ( req, res){
    res.end('put method')
})
// patch  method
app.patch("/four", function ( req, res){
    res.end('patch method')
})
// delete method
app.delete("/five", function ( req, res){
    res.end('delete method')
})

app.listen( 3235, function (){
    console.log('server is running')
})