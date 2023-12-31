const mongoose = require('mongoose');


const Product = require('./models/Product'); 





const products=[
    {
        name:"Iphone 14pro",
        img:"https://unsplash.com/photos/person-holding-space-gray-iphone-7-A6JxK37IlPo",
        price:130000,
        desc:"aukaat k bahar",
    },

    {
        name:"Iphone 14pro",
        img:"https://unsplash.com/photos/person-holding-space-gray-iphone-7-A6JxK37IlPo",
        price:130000,
        desc:"aukaat k bahar",
    },

    {
        name:"Iphone 14pro",
        img:"https://unsplash.com/photos/person-holding-space-gray-iphone-7-A6JxK37IlPo",
        price:130000,
        desc:"aukaat k bahar",
    },

    {
        name:"Iphone 14pro",
        img:"https://unsplash.com/photos/person-holding-space-gray-iphone-7-A6JxK37IlPo",
        price:130000,
        desc:"aukaat k bahar",
    },
    
]


async function seedDB(){
   await Product.insertMany(products);
    console.log("data seeded successfully");
}


module.exports = seedDB;