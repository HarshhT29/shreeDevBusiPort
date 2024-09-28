import './marquee.css'
const textOptions = ['NewsLetter', 'NewsLetter', 'NewsLetter', 'NewsLetter'];

const RotatingText = () => {
  const doubledTextOptions = [...textOptions, ...textOptions, ...textOptions, ...textOptions, ...textOptions];

  return (
    <div className='overflow-hidden h-20 w-full landingHeader bg-[#411900] text-[#411900] flex items-center'>
      <div className="overflow-hidden relative text-xl w-full font-bold -rotate-3" style={{height: 'fit-content'}}>
        <div className='flex'>
        <div className="inline-block whitespace-nowrap marquee bg-[#f4f0ea] py-2"   >
          {doubledTextOptions.map((text, index) => (
            <span key={index} className="mx-4">
              {text}
            </span>
          ))}
        </div>
        <div className="inline-block whitespace-nowrap marquee bg-[#f4f0ea] py-2" aria-hidden="true"   >
          {doubledTextOptions.map((text, index) => (
            <span key={index} className="mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default RotatingText;
