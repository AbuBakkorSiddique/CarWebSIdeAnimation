import '../Css/HomePage.css'
import AnimatALLSide from '../Components/AnimatALLSide';
import VideoSection from '../Components/VideoSection';
//components 
import HomePageHeroSection from '../Components/HomePageHeroSection'
import TopBrandSection from '../Components/TopBrandSection';
import UderBrandTwoDiv from '../Components/UderBrandTwoDiv';
import Gap from '../Components/Gap';
import SliderReview from '../Components/SliderReview';
import Products from '../Components/Products';
import ProductsTitle from '../Components/ProductsTitle';
import Fotter from '../Components/Fotter';

function HomePage() {
  return (
  <>
  
<HomePageHeroSection/>
<TopBrandSection/>
<Gap />
<UderBrandTwoDiv/>
<Gap />
<AnimatALLSide/>
<Gap />
<SliderReview/>
<Gap /> 
<VideoSection/>
<Gap /> 
<ProductsTitle/>

<Products/>
<Fotter/>  
  
  
  
  </>
  )
}

export default HomePage