const data = require('../Data/data.js')
const express = require('express')
const searchRouter = express.Router()

searchRouter.get('/author' , (req, res, next)=>{
        const {query} = req.query
        let response =[] 
        
        response= data.filter((dataObj)=>{
                return dataObj.author.search(query) != -1
        })
      
        res.json(response)
})

searchRouter.get('/quote' , (req, res, next)=>{
        const {query} = req.query
        let response =[] 
       
        response= data.filter((dataObj)=>{
                return dataObj.quote.search(query) != -1
        })
        console.log(response)
        res.json(response)
})

module.exports = searchRouter