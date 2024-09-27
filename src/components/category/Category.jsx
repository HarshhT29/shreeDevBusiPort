import React from 'react';
import { useEffect, useRef } from 'react';
import Product from './Product';

const Category = () => {

    const productRef = useRef(null);
    
    useEffect(()=> {
        const productContainer = productRef.current;
        const products = [...productContainer.children];

        products.forEach(product => {
            const clone = product.cloneNode(true);
            productContainer.appendChild(clone);
        });
    }, []);

    return (
        <div className="m-10">
            <h1 className='mb-6 text-5xl font-bold text-gray-800'>
                Our Products
            </h1>
            <div className="products-wrapper overflow-hidden whitespace-nowrap py-6">
                <div className="products flex mx-2 space-x-24" ref={productRef}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Category;
