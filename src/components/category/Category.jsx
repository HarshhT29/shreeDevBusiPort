import React, { useRef } from 'react';
import CategoryItem from './CategoryItem';
import { motion, useScroll, useTransform } from 'framer-motion';

const Category = () => {
    const productData = [
        {
            id: 1,
            title: "Makta with Tap",
            description: "A beautifully crafted clay matka pot with a tap, perfect for sustainable and healthy water storage.",
            image: "/img/products/matka_tap.jpg",
        },
        {
            id: 2,
            title: "Ceramic Flower Vase",
            description: "Hand-painted ceramic vase, ideal for home décor and perfect for holding fresh flowers.",
            image: "/img/products/bottle2.jpg",
        },
        {
            id: 3,
            title: "Wooden Spice Box",
            description: "A multi-compartment wooden spice box that brings a rustic charm to your kitchen organization.",
            image: "/img/products/bottle1.jpg",
        },
        {
            id: 4,
            title: "Bamboo Fruit Basket",
            description: "Eco-friendly bamboo fruit basket to store and present fruits in a sustainable way.",
            image: "/img/products/pot1.jpg",
        },
        {
            id: 5,
            title: "Decorative Pot",
            description: "Eco-friendly bamboo fruit basket to store and present fruits in a sustainable way.",
            image: "/img/products/pot2.jpg",
        },
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    return (
        <section ref={targetRef} className="relative bg-[#f4f0ea] h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
            <h1 className="mt-16 mx-6 landingHeader text-5xl font-bold text-gray-800">Our Categories</h1>
                <motion.div
                    style={{
                        x: useTransform(scrollYProgress, [0, 1], ['0%', '-85%']),
                    }}
                    className="absolute top-[25%] left-1/2 flex gap-x-60"
                >
                    {productData.map((product, index) => (
                        <CategoryItem
                            key={index}
                            index={index}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            progress={scrollYProgress}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;
