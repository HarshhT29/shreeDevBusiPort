import { useEffect } from "react";

const Landing1 = () => {
  useEffect(() => {
    const animateValue = (id, start, end, duration) => {
      const element = document.getElementById(id);
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the counter animation when the section comes into view
          animateValue("counter-40", 0, 40, 2000);
          animateValue("counter-50", 0, 50, 2000);
          observer.disconnect(); // Stop observing once the animation has started
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Animation triggers when 50% of the section is visible
    });

    // Start observing the element containing the counters
    const target = document.querySelector(".landingHeader");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (observer && target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="relative min-h-[160vh] landing-anim bg-cover overflow-x-hidden">
      <div className="absolute backdrop-blur-sm bottom-0 w-screen flex justify-center bg-[#f4f0ea]/75">
        <div className=" text-[#fdeed1] sourceSans rounded-md flex gap-16 p-10 text-center items-center w-fit landingHeader">
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              {/* Animated Number for "40" */}
              <span id="counter-40" className="font-semibold text-6xl">0</span>
              <span className="text-3xl">Years</span>
            </p>
          </div>
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              {/* Animated Number for "50+" */}
              <p className="flex items-center justify-between">
              <span id="counter-50" className="font-semibold text-6xl">0</span> <span>+</span>
              </p>
              <span className="text-3xl">Products</span>
            </p>
          </div>
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <span className="font-semibold text-4xl">Exciting</span>
              <span className="text-2xl">Categories</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing1;
