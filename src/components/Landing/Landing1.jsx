import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing1 = () => {
  // Using Framer Motion to get scroll progress
  const { scrollYProgress } = useScroll();

  // Transform the scroll progress to scale the background image size (zoom out effect)
  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["150%", "75%"]); // Start from 150% and zoom out to 100%

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
          animateValue("counter-40", 0, 40, 2000);
          animateValue("counter-50", 0, 50, 2000);
          observer.disconnect(); // Stop observing once the animation has started
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

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
    <motion.div
      className="relative min-h-[200vh] md:min-h-[160vh] landing-anim bg-cover overflow-x-hidden"
      style={{
        backgroundImage: 'url("/img/Landing/landing1.png")', // Replace with your image URL
        backgroundPosition: "center",
      }}
      // Animate only the backgroundSize to give zoom-out effect
      style={{
        backgroundSize,
      }}
    >
      <div className="absolute backdrop-blur-sm bottom-0 w-screen flex justify-center bg-[#f4f0ea]/75">
        <div className="text-[#fdeed1] sourceSans rounded-md flex flex-col md:flex-row md:gap-16 p-10 text-center items-center w-fit landingHeader">
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <span id="counter-40" className="font-semibold text-6xl">
                0
              </span>
              <span className="text-3xl">Years</span>
            </p>
          </div>
          <div className="p-10">
            <p className="text-5xl flex flex-col text-[#080404]">
              <div className="flex items-center justify-between">
                <span id="counter-50" className="font-semibold text-6xl">
                  0
                </span>
                <span>+</span>
              </div>
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
    </motion.div>
  );
};

export default Landing1;
