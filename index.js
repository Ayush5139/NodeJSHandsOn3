const express = require ("express")

const app = express()

const middleware1 =(req,res,next)=>{
    console.log("This Is MiddleWare 1")
    next()
}

const middleware2 =(req,res,next)=>{
    console.log("This Is MiddleWare 2")
    next()
}

app.use(middleware1)

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/first",(req,res)=>{
    res.send("This Is First Page")
})

app.get("/second",middleware2,(req,res)=>{
    res.send("This Is Second Page")
})

app.get("/third",(req,res)=>{
    res.send("This Is Third Page")
})

app.get("/four",middleware2,(req,res)=>{
    res.send("this is fourth page")
})


app.listen(9000,console.log("the server is running on 9000"))