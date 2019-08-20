const mongoose = require ("mongoose");

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    ingredients: {type: String, required: true},
    img: {type: String, required: true},
    comments: [{
        userName: String,
        userId: String,
        text: String
    }]
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product;



// {   
//     name: "Venus Bath Bomb",
//     description: "The Venus Bath Bomb. TWICE the size as our usual fizzies! First in the line of the Celestial bath bombs. Filled with surprise colors and glittering mica, you'll feel like your taking a bath among the stars! All bath bombs come with a surprise inside!", 
//     ingredients: "Baking Soda, Citric Acid, Corn Starch, Epsom Salt, Coconut Oil, SLSA, Polysorbate 80, Essential Oil, FD&C Colorants, Chromium Oxide, Mica, Dried Flowers",
//     img: "https://i.etsystatic.com/17404296/r/il/07722a/1664235130/il_1588xN.1664235130_49gy.jpg",    
//     price: 8.95
// },
// {
//     name: "Coffee Beans Bath Bomb",
//     description: "The aroma of fresh roasted coffee beans with a hint of vanilla and sugar crystals. Every bath bomb comes with a surprise inside!",
//     ingredients: "Sodium Bicarbonate, Citric Acid, Kaolin Clayb, Cocos Nucifera (coconut) oil, SLSA, Polysorbate 80, Phthalate-Free fragrance, Mica",
//     img: "https://i.etsystatic.com/17404296/r/il/e30337/1647056071/il_1588xN.1647056071_8l85.jpg",
//     price: 5.95
// },
// {
//     name: "Pineapple in Paradise Bath Bomb",
//     description: "Arouse your senses with a revitalizing splash of tropical heaven! Succulent chunks of pineapple take you straight to the islands! All bath bombs come with a surprise inside!",
//     ingredients: "Sodium Bicarbonate, Citric Acid, Corn Starch, Cocos Nucifera (coconut) oil, SLSA, Polysorbate 80, Phthalate-Free fragrance, Mica, FD&C Yellow 5, FD&C Emerald Green",
//     img: "https://i.etsystatic.com/17404296/r/il/a10685/1599634068/il_1588xN.1599634068_lza6.jpg",
//     price: 5.95
// }