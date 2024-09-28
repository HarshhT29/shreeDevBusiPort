const Idea = () => {
  return (
    <div className="bg-[#f4f0ea] landingHeader">
      <div className="flex flex-col items-center w-full lg:px-16 gap-6 px-8 py-20">
        <p className="text-3xl md:text-xl text-[#411900] landingHeader font-semibold text-center flex flex-col gap-2">
          <span className="text-5xl">Sign up</span>
          <p>Get updates about our latest and <span className="text-orange-400">special offers.</span></p>
        </p>

        <div className=" w-full md:w-2/3 flex items-center border-2 rounded-full overflow-hidden p-1">
          <div className="rounded-full h-10 w-16 bg-orange-100 p-1 flex justify-center items-center">
            <img src='/images/idea-email.svg' alt="" className="h-8" />
          </div>
          <input
            type="text"
            className="pl-4 w-full h-12 rounded-l-full flex-grow focus:outline-none"
            placeholder="Email Address"
          />

          <button className="bg-orange-400 text-white rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Send
          </button>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-2/3 flex-col md:flex-row items-center gap-4 lg:px-10 font-normal flex justify-between text-xs lg:text-sm">
            <div className="flex items-center">
              <img src="/images/idea-star.svg" alt="yoo" className="h-6" />
              <p>4.9/5 Average Ratings</p>
            </div>
            <div className="flex items-center">
              <img src="/images/idea-awards.svg" alt="yoo" className="h-6" />
              <p>25+ Winning Awards</p>
            </div>
            <div className="flex items-center">
              <img src="/images/idea-shield.svg" alt="yoo" className="h-6" />
              <p className="">Certified Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idea;
