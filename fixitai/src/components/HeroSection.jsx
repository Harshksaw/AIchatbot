import React, { useEffect, useRef } from 'react';
import "../index.css"
import LowerHero from './LowerHero';

import { useSelector } from 'react-redux';
import LoginPrompt from './Prompt';
import LoginPromptPage from './Prompt';
import { Link } from 'react-router-dom';



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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)


  

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

    <div className='bg-[#212520] flex flex-col items-center min-h-screen overflow-y-auto'> {/* Add min-h-screen for full height */}
    {/* ... existing HeroSection content */}

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
        {
          !isAuthenticated ? (
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

          ):(
            <Link to="/salesgpt">
            <h3
            
            
            


            className="text-xl md:text-2xl lg:text-xl tracking-wide font-semibold text-[#e46e26] hover:text-[#EDC0C0] duration-500 transition-colors"
          >
            See it in Action &nbsp;&nbsp;&gt;
          </h3>
          </Link>
          )
        }

     
      </div>

                  





    </div>

    {isAuthenticated ? (
      <LowerHero />) : 
      (
          <LoginPromptPage/>
      )
    }
  </div>
    
  );
}

export default HeroSection;
