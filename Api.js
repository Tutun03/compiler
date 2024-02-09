const express=require("express");
const bodyparser=require("body-parser");
const path=require("path");
const cors=require("cors");
const app=express();
const compiler=require("compilex");
const options={stats:true}
compiler.init(options)
app.use(cors())
app.use(bodyparser.json())
app.use("/codemirror-5.65.16",express.static("C:/Users/USER/Downloads/compiler new - 1/compiler/codemirror-5.65.16"))

app.get("/", function(req, res) {
    const filePath = path.join(__dirname, "index.html");
    res.sendFile(filePath, function(err) {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Internal Server Error");
      }
    });
  });
  
  app.post("/compile",function(req,res){
    var code=req.body.code
   
    var input=req.body.input
   
    var lang=req.body.lang
    
    var envData = { OS : "windows"}; 
    try{

       if(!input) {
    compiler.compilePython( envData , code , function(data){
        res.json({ output: data });
    });
    }
  
   
// }
    }
    catch(e)
    {
      console.log(e);
    }
})
    
  const port = process.env.PORT || 1800;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });