import * as dotenv from 'dotenv'
dotenv.config()
import express from "express"
import colors from "colors"
const app = express()

app.get('/',  (req, res) => {
  res.send('Hello World')
})
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port no ${port}`.bgGreen.red );
})