import { useState, useEffect } from 'react';
import '../Css/HomePageHeroSection.css';
import Preloader from '../Components/PreLoderSEction'; // Importing the Preloader component

import HeroYellowCar from '../Images/HeroYellowCar.png';
import heroREdCar from '../Images/HeroREdCar.png';
import heroAshCar from '../Images/HeroASHCar.png';
import hroBlueCar from '../Images/HeoBlueCar.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HomePageHeroSection() {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Data for different car models
  const cars = [
    {
      backgroundColor: 'rgb(133, 161, 213)',
      name: 'PORSCHE',
      model: '911 Turbo S',
      color: 'SHARK BLUE',
      image: hroBlueCar,
      topSpeed: '205 mph',
      power: '640 PS',
      torque: '800 Nm',
      displacement: '3,745 cm³',
    },
    {
      backgroundColor: 'rgb(246, 236, 110)',
      name: 'PORSCHE',
      model: '911 Carrera',
      color: 'RACING YELLOW',
      image: HeroYellowCar,
      topSpeed: '182 mph',
      power: '385 PS',
      torque: '450 Nm',
      displacement: '2,981 cm³',
    },
    {
      backgroundColor: 'rgb(162, 163, 165)',
      name: 'PORSCHE',
      model: '911 Turbo S',
      color: 'AGATF GREY ASH',
      image: heroAshCar,
      topSpeed: '205 mph',
      power: '640 PS',
      torque: '809 Nm',
      displacement: '3,745 cm³',
    },
    {
      backgroundColor: 'rgb(217, 85, 95)',
      name: 'PORSCHE',
      model: '911 Turbo b',
      color: 'GUARDS RED PRIME',
      image: heroREdCar,
      topSpeed: '205 mph',
      power: '640 PS',
      torque: '850 Nm',
      displacement: '3,705 cm³',
    },
  ];

  // Function to trigger animations and change the slide
  const changeSlide = (direction) => {
    // Animate out for both color name and image
    gsap.to(['.CarColorName', '.CarImage'], {
      y: -50,
      opacity: 0,
      duration: 1,
      onComplete: () => {
        // Change the slide
        setCurrentSlide((prev) =>
          direction === 'left'
            ? (prev === 0 ? cars.length - 1 : prev - 1)
            : (prev === cars.length - 1 ? 0 : prev + 1)
        );

        // Animate in the new content
        gsap.fromTo(['.CarColorName', '.CarImage'], {
          y: 50,
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
        });
      },
    });

    // Handle image slide direction
    gsap.to('.CarImage', {
      x: direction === 'left' ? '100%' : '-100%',
      duration: 1,
      onComplete: () => {
        // Reset image position after animation out
        gsap.set('.CarImage', {
          x: '0%', // Reset to center
        });
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Preloader /> // Using Preloader component here
      ) : (
        <div
          className="homePageHeroSection"
          style={{ backgroundColor: cars[currentSlide].backgroundColor }}
        >
          {/* Top Section */}
          <div className="homePageHeroSection_Top">
            <p>{cars[currentSlide].name}</p>
            <p>{cars[currentSlide].model}</p>
          </div>

          {/* Center Section */}
          <div className="homePageHeroSection_center text-center">
            <div className="homePageHeroSection_center-Text CarColorName">
              <h1>{cars[currentSlide].color}</h1>
            </div>
            <div className="homePageHeroSection_center-Image CarImage">
              <img src={cars[currentSlide].image} alt="Car" />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="homePageHeroSection_bottom">
            <div className="homePageHeroSection_bottom-child">
              <p>Top Speed</p>
              <p>{cars[currentSlide].topSpeed}</p>
            </div>
            <div className="homePageHeroSection_bottom-child">
              <p>Power (PS)</p>
              <p>{cars[currentSlide].power}</p>
            </div>
            <div className="homePageHeroSection_bottom-child">
              <p>Max. torque (Manual)</p>
              <p>{cars[currentSlide].torque}</p>
            </div>
            <div className="homePageHeroSection_bottom-child">
              <p>Displacement</p>
              <p>{cars[currentSlide].displacement}</p>
            </div>
          </div>

          {/* Toggle buttons (Previous and Next) */}
          <div className="flex justify-between w-full ToggleDiv">
            {/* Left arrow */}
            <button
              onClick={() => changeSlide('left')}
              className="text-4xl p-4 rounded-full hover:bg-gray-100 transition"
            >
              &#8592;
            </button>

            {/* Right arrow */}
            <button
              onClick={() => changeSlide('right')}
              className="text-4xl p-4 rounded-full hover:bg-gray-100 transition"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePageHeroSection;
