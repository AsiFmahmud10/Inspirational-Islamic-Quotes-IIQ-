const data = require('../Data/data.js')
const express = require('express')
const dataRouter = express.Router()

const handleUndefined =(response,res)=>{
            if(response === undefined )
                 res.send("Sorry we dont have that id")
}

dataRouter.get('/part', (req, res, next)=>{  
    const {start,end} = req.query
   
    let response = null
    if (end == undefined){
        res.json({error : 'query parameter is undefined'})
    }else if(start != undefined){    
        response = data.slice(start - 1, end)
    }else{
        response = data.slice(0, end )
    }
    res.json(response)
})

dataRouter.get('/:dataId', (req, res, next)=>{  
    const {dataId} = req.params
    
      const response = data.find((dataObj)=>{
          return dataObj.id ==dataId
      })
      handleUndefined(response,res)
      res.json(response)
})






module.exports = dataRouter