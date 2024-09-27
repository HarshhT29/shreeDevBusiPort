const About = () => {
  return (
    <div className="min-h-screen bg-[#f4f0ea] lg:px-40 px-10 py-10 flex lg:flex-row flex-col gap-20 text-[#271212] items-center lg:justify-between justify-center text-center lg:text-right">
      <img src="/img/About/img1.png" alt="" className="lg:w-1/3" />
      <div>
        <h1 className="text-4xl font-bold ">Pure Copper...Pure Soul...</h1>
        <p className="max-w-xl text-xl font-semibold">
        Crafting excellence in copper for over 40 years with a diverse range of top-quality products designed to meet global standards at affordable prices.
        </p>
      </div>
    </div>
  );
};

export default About;
