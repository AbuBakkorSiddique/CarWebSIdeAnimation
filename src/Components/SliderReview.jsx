
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import '../Css/SliderReview.css';
// images 
import DoubleCOttion from '../Images/DoubleCOttetion.png' ; 
import DanialVIctory from '../Images/DanialVictory.png'; 
import TeamSmith from '../Images/TEamSmith.png' ;
import DUALIpa from '../Images/DUaLIpa.png' ; 
import DomSam from '../Images/DomSam.png'
function SliderReview() {
  return (
    <>
    
    
    
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='ReviewSlide_Content'>
            <div>
            <img src={DoubleCOttion} alt="DoubleCOttion"  className='DoubleCOttionPIC'/>
            </div>

           <div>
           <h1>  Denial Roshe  </h1>
             <p> I'm Very happy for service. They give me the toyta car the latest one . Also give me the free licence. The top nouch 
                service and top nouch accosories give me all the time when i going the showroom .
             </p>

           </div>
           <div>
            <img src={DanialVIctory} alt="DanialVIctory"  className='SliderREviewImage'/>
           </div>


        </div>


        </SwiperSlide>
        <SwiperSlide>
        <div className='ReviewSlide_Content'>
            <div>
            <img src={DoubleCOttion} alt="DoubleCOttion"  className='DoubleCOttionPIC'/>
            </div>

           <div>
           <h1>  Team Smith  </h1>
             <p> I'm Very happy for service. They give me the toyta car the latest one . Also give me the free licence. The top nouch 
                service and top nouch accosories give me all the time when i going the showroom .
             </p>

           </div>
           <div>
            <img src={TeamSmith} alt="TeamSmith"  className='SliderREviewImage'/>
           </div>


        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ReviewSlide_Content'>
            <div>
            <img src={DoubleCOttion} alt="DoubleCOttion"  className='DoubleCOttionPIC'/>
            </div>

           <div>
           <h1>  Dua Lipa  </h1>
             <p> I'm Very happy for service. They give me the toyta car the latest one . Also give me the free licence. The top nouch 
                service and top nouch accosories give me all the time when i going the showroom .
             </p>

           </div>
           <div>
            <img src={DUALIpa} alt="DUALIpa" className='SliderREviewImage' />
           </div>


        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='ReviewSlide_Content'>
            <div>
            <img src={DoubleCOttion} alt="DoubleCOttion"  className='DoubleCOttionPIC'/>
            </div>

           <div>
           <h1>  Dom Joe  </h1>
             <p> I'm Very happy for service. They give me the toyta car the latest one . Also give me the free licence. The top nouch 
                service and top nouch accosories give me all the time when i going the showroom .
             </p>

           </div>
           <div>
            <img src={DomSam} alt="DomSam"  className='SliderREviewImage'/>
           </div>


        </div>
        </SwiperSlide>
       
      </Swiper>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default SliderReview