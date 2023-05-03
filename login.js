const express = require('express')
const app = express();
const data=['new','manisha']
const path = require("path");
const static = path.join(__dirname,"./views")
app.set("view engine",'ejs');
app.use(express.static(static));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',function (req,res){

    res.render('index',{name:data})

})

app.get('/new/:num',function (req,res){
const num = (req.params.num)
res.send(`<h1>${data[num]}<h1>`);  

});

app.get('/qary',function (req,res){

    const num = (req.query.name)
    const age = (req.query.age);

res.send(`<h1>${num+age}<h1>`);
})


app.post('/send',(req,res)=>{
    const user=req.body.user
    const pass=req.body.pass
    console.log(req.body)
    res.send(user+pass)
})

app.listen(8000,()=>{
    console.log('server is up');
})
// console.log('sdfjkl');

