import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();



const app = express();
const PORT = process.env.PORT;
// const PORT=8080;

//mideware
app.use(express.json())
app.use(cors())

// post man try to seee work-

app.get('/',(req,res)=>{
    res.send ({message:'working to good hai'})
})


//listen the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });