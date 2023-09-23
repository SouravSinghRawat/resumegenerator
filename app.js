const express= require("express");
const bodyParser=require("body-parser");
const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//getting home page
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
});
//posting template page after clicking button at home page
app.post("/tempelate",function(req,res){
res.sendFile(__dirname+"/tempelate.html");
});

// app.get("/tempelate",function(req,res){
//     res.render("resume",{rname:pername});
// });

var scs=[];
var wexs=[];
var dess=[];
var sks=[];



app.post("/resume",function(req,res){
var pername=req.body.pname.toUpperCase();
var proff=req.body.prof.toUpperCase();
var ab=req.body.about;
var ar=req.body.address;
var mo=req.body.mob;
scs=req.body.social;
// scs.push(sc);
var col=req.body.college.toUpperCase();
var yr=req.body.year;
var cgp=req.body.cgpa;
var sh=req.body.shschool.toUpperCase();
var yr1=req.body.year1;
var pr1=req.body.per1;
var ph=req.body.phschool.toUpperCase();
var yr2=req.body.year2;
var pr2=req.body.per2;
wexs=req.body.wexp;
// wexs.push(wex);
dess=req.body.desc;
// dess.push(des);
sks=req.body.skill;
// sks.push(sk);
res.render("resume",
    {
    rname:pername,
    pro:proff,
    at:ab,
    Ad:ar,
    Mb:mo,
    socs:scs,
    Coll:col,
    y:yr,
    cg:cgp,
    shs:sh,
    y1:yr1,
    p1:pr1,
    phs:ph,
    y2:yr2,
    p2:pr2,
    we:wexs,
    ds:dess,
    sl:sks
});
});



app.listen(3000,function(){
    console.log("server started at 3000");
});