const Landing1 = () => {
  return (
    <div className = "relative min-h-[160vh] landing-anim bg-cover overflow-x-hidden">
      <div className = "absolute bottom-20 w-screen flex justify-center rounded-md">
          <div className="backdrop-blur-md flex gap-7 items-center bg-[#f4f0ea]/75 w-fit p-10 rounded-md">
              <div>
                <img src="/img/Landing/img1.jpg" className="w-40 h-40 rounded-sm" alt="" />
              </div>
              <div>
              <p className="max-w-sm text-lg text-semibold font-semibold landingHeader">Crafting excellence in copper for over 40 years with a diverse range of top-quality products designed to meet global standards at affordable prices.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Landing1