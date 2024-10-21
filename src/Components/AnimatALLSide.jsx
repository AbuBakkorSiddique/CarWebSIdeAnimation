import '../Css/AnimatALLSide.css';


import FullCarONlyTOpView from '../Images/FullCarImage.png' ; 

function AnimatALLSide() {
  return (
<>

<div className='AnimatAllSideOnlyTOpView'>


<div className='AnimatAllSideOnlyTOpView_left'>

<div><p>Hood</p></div>
  <div><p>Window</p></div>
  <div><p>Roof</p></div>
</div>
<div className='AnimatAllSideOnlyTOpView_image'>
  <img src={FullCarONlyTOpView} alt="FullCarONlyTOpView" />
</div>
<div className='AnimatAllSideOnlyTOpView_right'>
  <div><p>Wheel</p></div>
  <div><p>Mirror</p></div>
  <div><p>Fender</p></div>
</div>









</div>










</>
  )
}

export default AnimatALLSide