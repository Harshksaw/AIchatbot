import React, { useEffect, useRef } from 'react';
import "../index.css"



function HeroSection() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const words1 = ['Fix', 'Your', 'Sales'];
  const words2 = ['Enabling', 'Human', 'Intelligence', 'with', 'Artificial', 'Intelligence'];

  useEffect(() => {
    const textSpans = textRef1.current.querySelectorAll('div');
    let wordIndex = 0;
    let letterIndex = 0;

    const interval1 = setInterval(() => {
      if (wordIndex < words1.length) {
        // ... (first animation logic)
        if (letterIndex < textSpans[wordIndex].textContent.length) {
          textSpans[wordIndex].className = 'animate-gradient';
          textSpans[wordIndex].children[letterIndex].className = 'text-white';
          letterIndex++;
        } else {
          letterIndex = 0;
          wordIndex++;
          if (wordIndex >= words1.length) {
            clearInterval(interval1);
            startSecondAnimation();
          }
        }
      }
    }, 60);

    return () => clearInterval(interval1);
  });

  function startSecondAnimation() {
    const textSpans = textRef2.current.querySelectorAll('h3');
    let wordIndex = 0;
    let letterIndex = 0;

    const interval2 = setInterval(() => {

      if (wordIndex < words2.length) {
        // ... (first animation logic)
        if (letterIndex < textSpans[wordIndex].textContent.length) {
          textSpans[wordIndex].className = 'animate-gradient';
          textSpans[wordIndex].children[letterIndex].className = 'text-white';
          letterIndex++;
        } else {
          letterIndex = 0;
          wordIndex++;
          if (wordIndex >= words2.length) {
            clearInterval(interval2)

          }
        }
      }
    }, 60);

    return () => clearInterval(interval2);
  }


  return (
    <div className='bg-[#212520] flex flex-col margin-auto  justify-center items-center  h-screen w-full '>
      <div >


        <div
          ref={textRef1}
          className="flex flex-wrap justify-center p-10 items-center leading-tight font-serif text-[35px] sm:text-[70px] md:text-[90px] md:mt-5   -mt-[2%] bg-clip-text text-gray-900"
          style={{ wordSpacing: '1px' }}
        >
          {words1.map((word, index) => (
            <div key={index}


            >
              {word.split('').map((letter, letterIndex) => (
                <span className='text-gray-600 font-proximaBold' key={letterIndex}>{letter}</span>


              ))}
            </div>
          ))}

        </div>
      </div>
      <div>


        <div
          ref={textRef2}
          className="flex flex-wrap  mx-20   justify-center items-center leading-tight text-[45px]  sm:text-[70px] md:text-[80px] md:mt-5 p-0 font-serif font-extrabold -mt-[2%] bg-clip-text  "
          style={{
            wordSpacing: '1px',

          }}
        >
          {/* {words2.map((word, index) => (
            <h3 key={index} >
              {word.split('').map((letter, letterIndex) => (

                <span className='text-gray-700' key={letterIndex}>{letter}


                </span>

              ))}

            </h3>
          ))} */}

          {words2.map((word, index) => (
            <React.Fragment key={index}>
              <h3>
                {word.split('').map((letter, letterIndex) => (
                  <span className='text-gray-700' key={letterIndex}>{letter}</span>
                ))}
              </h3>
              <span>&nbsp;</span>
            </React.Fragment>
          ))}
        </div>

      </div>
      
      <div className='mt-10 pt-5'>

      <button
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:r0:"
      data-state="closed"
      className="text-xl md:text-2xl lg:text-xl tracking-wide font-semibold text-[#e46e26] hover:text-[#EDC0C0] duration-500 transition-colors"
    >
      Join the waitlist &nbsp;&nbsp;&gt;
    </button>
      </div>






    </div>
  );
}

export default HeroSection;
