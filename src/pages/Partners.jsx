import React from 'react';
import Partner from '../assets/partner.png';
import Senay from '../assets/senay.jpg';
import Marquee from 'react-fast-marquee';

function Partners() {
  const [pause, setPause] = React.useState(false);

  const handleMouseEnter = () => {
    setPause(true);
  };

  const handleMouseLeave = () => {
    setPause(false);
  };

  return (
    <div id="partners" className="flex justify-around w-full px-4 py-20 bg-slate-950">
      <div className="my-40 w-full max-w-5xl mx-auto">
        <h1 className="font-mono text-white text-center font-bold text-4xl my-12">
          Our Partners
        </h1>
        <Marquee 
          style={{ width: '100%' }} 
          pauseOnHover={false} 
          pauseOnClick={true} 
          play={!pause} 
          speed={50}
        >
          <div 
            className="flex flex-col justify-center items-center gap-2 mx-4" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={Partner}
              alt="Partner Logo"
              className="w-60 h-60 md:w-80 md:h-80 object-cover"
            />
            <p className="text-white text-lg text-center">Defence University</p>
          </div>

          <div 
            className="flex flex-col items-center justify-center gap-2 mx-4" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={Senay}
              alt="Senay Image"
              className="w-60 h-60 md:w-80 md:h-80 object-cover"
            />
            <p className="text-white text-lg text-center">SenayCreatives</p>
          </div>
        </Marquee>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Partners;
