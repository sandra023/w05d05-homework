const express = require('express')
const router = express.Router()
const Product = require('../models/products')
const User = require('../models/users')

router.get('/', async (req,res) => {
    try{
        const products = await Product.find();
        res.render('products/index.ejs', {
        products: products
        })
    }catch (err){
        console.log(err)
        res.send(err)
    }
})

router.get('/new', async (req,res) => {
    try{
        res.render('products/new.ejs')

    }catch (err){
        console.log('new get err: ', err)
        res.send(err)
    }
})

router.get('/:id', async (req,res) => {
    try{
        const foundProduct = await Product.findById(req.params.id)
        {
            res.render('products/show.ejs',{
                product: foundProduct
            })
        }
    }catch(err){
        console.log('get by id error: ', err)
        res.send(err)
    }
})

router.get('/:id/edit', async (req,res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.render('products/edit.ejs', {
            product: product
        })
    }catch(err){
        console.log('product edit error: ', err)
        res.send(err)
    }
})



router.post('/', async (req,res)=>{
    try{
        const newProduct = await Product.create(req.body)
        console.log('new product: ', newProduct)
        res.redirect('/products')
    }catch(err){
        console.log('new product post: ', err)
        res.send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        console.log('delete: ', req.params.id)
        await Product.findByIdAndDelete(req.params.id)
        res.redirect('/products')
    }catch(err){
        console.log('error from delete route: ', err)
        res.send(err)
    }
})

router.put('/:id', async (req,res) => {
    console.log("i hate this")
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updatedProduct)
        res.redirect(`/products/${req.params.id}`)
    }catch(err){
        console.log("Put router error: ", err)
        res.send(err)
    }
})


module.exports = router