import { useEffect, useRef } from 'react';

const LowerHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate the opacity based on the scroll position
      const opacity = 1 - containerTop / windowHeight;

      // Set the opacity on the container's style
      containerRef.current.style.opacity = opacity;
    };


    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="bg-[#1f221e] flex  h-screen bg-inherit space-x-2 gap-5 mx-auto flex-wrap xl:mr-14 flex-col gap-y-10 justify-center items-center w-full md:px-16 font-serif text-white lg:py-[10rem] my-element  ">
      <h3
        ref={containerRef}
        className="text-5xl font-proximaBold text-left md:text-center w-[80%] gap-6 space-x-5 mx-auto tracking-wide leading-snug text-transparent !bg-clip-text bg-gradient-to-br analyze-div"
      >
        <span className="span-line text-transparent space-x-5  gap-5 !bg-clip-text bg-gradient-to-br " style={{ color: 'transparent', background: 'linear-gradient(to right, rgb(160, 209, 255), rgb(255, 255, 255))' }}>
          Analyze your customer conversations to get deep insights to shorten 
        </span>
        <span className="span-line text-transparent !bg-clip-text bg-gradient-to-br" style={{ color: 'rgb(56, 56, 56)', background: 'none 0% 0% / auto repeat scroll padding-box text rgba(0, 0, 0, 0)' }}>
          sales cycle, increase customer trust, reduce ramp up time & drive
        </span>
        <span className="span-line text-transparent !bg-clip-text bg-gradient-to-br" style={{ color: 'rgb(56, 56, 56)', background: 'none 0% 0% / auto repeat scroll padding-box text rgba(0, 0, 0, 0)' }}>
          more revenue
        </span>
      </h3>
    </div>
  );
};

export default LowerHero;
