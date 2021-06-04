const data = require('../Data/data.js')
const express = require('express')
const dataRouter = express.Router()

const handleUndefined =(response,res)=>{
            if(response === undefined )
                 res.send("Sorry we dont have that id")
}

dataRouter.get('/:id', (req, res, next)=>{
    const {id} = req.params
    
      const response = data.find((dataObj)=>{
          return dataObj.id == id
      })
      handleUndefined(response,res)
      res.json(response)
})



module.exports = dataRouter