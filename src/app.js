const express = require('express')
const res = require('express/lib/response')
const geocode = require ('./tools/goecode')
const forcast = require ('./tools/forcast')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Worfnjhhmejccrrrld!')
})

///////////////////////////////////////////////////////////////////////
app.get('/products',(req,res)=>{
 
  console.log(req.query)
  console.log(req.query.search)
  res.send({
    name:'new name'
  })
})
////////////////////////////////////////////////////////////////////

app.get('/weather',(req,res)=>{
  if(!req.query.address){
   return res.send({
      error:'You must provide address'
    })
  }
  
  res.send({
    forecast:'It is cold',
    location:req.query.address
  })
})

//////////////////////// geocod///////////////////////////////////
app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:'You must provide address'
    })
  }
  geocode(req.query.address,(error,data)=>{
    if(error){ 
     return res.send({error:error})
    }
    console.log(data)
   forecast(data.latitude,data.longtitude,(error,forecastData)=>{
     if(error){
       return res.send({error})
     }
     res.send({
       forecast:forecastData,
       location:req.query.address
     })
   })
  })
 
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

