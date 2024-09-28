import React from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './style.css';

const Product = ({ ...props }) => {
  return (
    <div className="flip-card-container w-80 cursor-pointer">
      <ContentWrapper>
        <div className="flip-card bg-transparent w-80 h-96 perspective-1000">
          <div className="flip-card-inner w-full h-full relative text-center">
            {/* Front Side */}
            <div className="flip-card-front bg-white text-black">
              <img
                src={`src/assets/products/${props.img}`}
                alt="Matka Pot with Tap"
                className='w-full max-h-80 rounded-lg shadow-md'
              />
              <h3 className='text-3xl landingHeader font-semibold text-gray-700 mt-4'>
                {props.title}
                {props.id}
              </h3>
            </div>

            {/* Back Side */}
            <div className="flip-card-back flex flex-col justify-center items-center bg-[#2b6cb0] text-white">
              <h3 className='text-2xl landingHeader font-semibold text-white mb-4'>
                {props.title}
              </h3>
              <p className='text-lg p-8 text-wrap landingHeader text-white text-center'>
                {props.description}
              </p>

              <button className='mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200'>
                GET
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Product;
