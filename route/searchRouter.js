const data = require('../Data/data.js')
const express = require('express')
const searchRouter = express.Router()

searchRouter.get('/' , (req, res, next)=>{
        const {query} = req.query
        let response =[] 
      // res.send(query)
        response= data.filter((dataObj)=>{
                return dataObj.author.search(query) != -1
        })
        console.log(response)
        res.json(response)
})

module.exports = searchRouter