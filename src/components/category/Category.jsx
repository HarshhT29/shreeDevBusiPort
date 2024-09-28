import React from 'react';
import Product from './Product';

const Category = () => {

    const productData = [
        {
            id: 1,
            title: "Makta with Tap",
            description: "A beautifully crafted clay matka pot with a tap, perfect for sustainable and healthy water storage.",
            img: "bottle1.jpg",
        },
        {
            id: 2,
            title: "Ceramic Flower Vase",
            description: "Hand-painted ceramic vase, ideal for home décor and perfect for holding fresh flowers.",
            img: "bottle2.jpg",
        },
        {
            id: 3,
            title: "Wooden Spice Box",
            description: "A multi-compartment wooden spice box that brings a rustic charm to your kitchen organization.",
            img: "matka_tap.jpg",
        },
        {
            id: 4,
            title: "Bamboo Fruit Basket",
            description: "Eco-friendly bamboo fruit basket to store and present fruits in a sustainable way.",
            img: "pot1.jpg",
        },
        {
            id: 5,
            title: "Pot",
            description: "Eco-friendly bamboo fruit basket to store and present fruits in a sustainable way.",
            img: "pot2.jpg",
        },
    ];

    return (
        <div className="m-10">
            <h1 className='mb-6 landingHeader text-5xl font-bold text-gray-800'>
                Our Products
            </h1>
            <div className="products-wrapper overflow-hidden whitespace-nowrap py-6">
                <div className="products flex mx-2 space-x-24">
                    {productData.map(product => (
                        <Product 
                            key={product.id} 
                            id = {product.id}
                            title={product.title} 
                            description={product.description}
                            img={product.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
