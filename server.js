// import modules

import express from 'express'
import {breeds} from './data/dogBreeds-data.js'
import {fashionShops} from './data/fashionShops-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine','ejs')

// mount Middleware (app.use)



// Mount routes
app.get('/',function(req,res){
  //this is a controller function 
  res.redirect('/dogs')
  })

  app.get('/home', function(req,res){
    res.render('home')
  })

app.get('/dogs', function(req,res){

  res.render('breeds/index',{
    intro: 'These are really cute dogs',
    dogBreeds: breeds
  })
})

app.get('/fashion', function(req,res){

  res.render('fashionShops/index',{
    intro: 'Shop here to look gorgeous',
    shops: fashionShops
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
  //console.log(breeds)
})