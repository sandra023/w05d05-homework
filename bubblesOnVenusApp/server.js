const express = require ('express')
const app =  express()
const bodyParser = require ('body-parser')
const methodOverride = require ('method-override') 
// const session = require('express-session')

// require('dotenv').config()
require('./db/db')

const productsController = require('./controllers/products')
// const usersController = require('./controllers/users')

// app.use(session({
//     secret: 'keepitsecret',
//     resave: false,
//     saveUninitialized: false
// }))

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))

// app.use((req,res,next)=>{
//     if(!req.session.logged){
//         req.session.userId = null
//     }
//     res.locals.session = req.session
//     next()
// })


app.use('/products', productsController);
// app.use('/users', usersController)
app.get('/', (req,res) => {
    res.render('index.ejs')
})



app.listen(3000, () => {
    console.log('Welcome Shoppers')
})
// app.listen(process.env.PORT, () => {
//     console.log('listening..... on port' + process.env.PORT);
  
//   });