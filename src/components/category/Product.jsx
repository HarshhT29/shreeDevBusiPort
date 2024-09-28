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
              </h3>
            </div>

            {/* Back Side */}
            <div className="flip-card-back bg-cover bg-no-repeat card-bg-anim flex flex-col justify-center items-center  text-white"
              style={{
                backgroundImage: `url(src/assets/products/${props.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} >

              <div className="cardBack rounded-2xl bg-[#f4f0ea]/50 backdrop-blur-sm h-full">
                <h3 className='text-2xl my-16 landingHeader font-semibold text-white mb-4'>
                  {props.title}
                </h3>
                <p className='text-lg p-8 text-wrap landingHeader text-[#271212] text-center'>
                  {props.description}
                </p>

                <span className='underline text-xl'>
                  <a>View All</a>
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Product;
