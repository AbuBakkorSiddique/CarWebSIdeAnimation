import '../Css/PreloaderSection.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PreLoderSEction() {
  useEffect(() => {
    // Animate from below the center to the center and back to y:0
    gsap.fromTo(
      '.preloaderTop p',
      {
        y: 350, // Start the element below center
        scale: 42, // Initially scale it
      },
      {
        y: 0, // Move it to the center (y:0)
        scale: 1, // Scale it back to normal
        duration: 2, // Total time for this part of animation
        ease: 'power4.out', // Add easing for smooth animation
        repeat: 1, // Repeat the animation
        yoyo: true, // Reverse it after reaching center
      }
    );
  }, []);

  return (
    <>
      <div className="proloaderSection">
        <div className="preloaderTop">
          <p>PORSCHE</p>
        </div>
        <div className="preloderCenter"></div>
        <div className="PreloderBottom"></div>
      </div>
    </>
  );
}

export default PreLoderSEction;
