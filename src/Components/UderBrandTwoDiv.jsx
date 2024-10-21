import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import "../Css/UderBrandTwoDiv.css";
import UderBrandTwoDiv_one_image from '../Images/UderBrandTwoDiv_one_image.jpg';
import UderBrandTwoDiv_two_image from '../Images/UderBrandTwoDiv_two_image.jpg' ; 

function UderBrandTwoDiv() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (optional)
      once: false,     // whether animation should happen only once (optional)
    });
  }, []);









  return (
    <>
      <div className="UderBrandTwoDiv">
        <div className="UderBrandTwoDiv_one">
          <div className="UderBrandTwoDiv_one_Content" data-aos="zoom-in-down">
            <h1> Best Brands Cars. </h1>
            <p>
              {" "}
              Get Best Brands Car form us. All tranding brans car avilable in
              our shop . Brand new and best features plus cars.
            </p>
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                 <span className="text-lg">Explore More</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/30"></div>
              </div>
            </button>
          </div>
          <div className="UderBrandTwoDiv_one_image" data-aos="zoom-in-right">
             <img src={UderBrandTwoDiv_one_image} alt="UderBrandTwoDiv_one_image" />
          </div>
        </div>
        <div className="UderBrandTwoDiv_two">
          <div className="UderBrandTwoDiv_two_image" data-aos="zoom-in-right">
             <img src={UderBrandTwoDiv_two_image} alt="UderBrandTwoDiv_two_image" />
          </div>
          <div className="UderBrandTwoDiv_two_content" data-aos="zoom-in-down">
          <h1> Get Original Documents from Showroom </h1>
            <p>
              {" "}
             Get the original document without any extra charge. We provide the govt provide licence and best service cart and the other 
             neccessary document.
            </p>
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                 <span className="text-lg">Explore More</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/30"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UderBrandTwoDiv;
