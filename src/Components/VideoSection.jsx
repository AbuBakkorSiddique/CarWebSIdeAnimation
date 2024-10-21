import CarsDisplay from '../Videos/CarsDIsplay.mp4';
import '../Css/videoSection.css'

function VideoSection() {
  return (
<>

<div className='videoSection'>

<div className='videoSection_video'>
<video src={CarsDisplay}   autoPlay loop muted></video>
</div>
<div className='videoSection_content'>
   <h1 className='text-white'>Explore The World </h1> 
   <p className='text-white'>Super x engine for top <b className='text-emerald-600'>Features</b></p>
</div>




</div>






</>
  )
}

export default VideoSection