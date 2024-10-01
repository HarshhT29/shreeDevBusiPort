import React from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { motion, useTransform } from 'framer-motion';

const CategoryItem = ({ ...props }) => {

    const translateY = useTransform(props.progress, [0, 1], [0, -50 * (props.index % 2)]);

    return (
        <section className=''>
            <ContentWrapper>
                <motion.div
                    // style={{ y: translateY }}
                    className="relative w-96 h-[69vh] flex flex-row overflow-hidden"
                >
                    <img 
                        src={props.image} 
                        alt={props.title}
                        className='w-2/3 h-full object-contain' // Ensures image is not distorted
                    />
                    <div className="flex flex-col justify-center gap-1 w-1/3 bg-blend-normal">
                        <h2 className='text-lg font-semibold text-black'>{props.title}</h2>
                    </div>
                </motion.div>
            </ContentWrapper>
        </section>
    );
}

export default CategoryItem;
