const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors()); 
app.use(express.json());
app.post("/api/resume",async(req,res)=>{
  const resumeData = req.body;
    console.log("Recieved resume Data: ", resumeData);
    res.status(200).json({message:'Resume data recieved successfully'})
    
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})