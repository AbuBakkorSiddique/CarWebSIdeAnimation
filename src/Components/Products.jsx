import '../Css/Products.css'
//images 

import productOneCar from '../Images/ProductOneCar.jpg'
import productTwoCar from '../Images/ProductTwoCar.jpg'
import productThreeCar from '../Images/ProductThreeCar.jpeg'


function Products() {
  return (
   <>
   <div className='Products'>

   <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={productOneCar}
      alt="Shoes"
      
      className='carIMage'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    LAMBORGINI
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is a band new design on 2024.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={productTwoCar}
      alt="Shoes"
      
      className='carIMage'
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      BMW Car
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is a band new design on 2024.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={productThreeCar}
      alt="Shoes" 

      className='carIMage'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      TOYTA
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is a band new design on 2024.</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>


   </div>
   
   
   </>
  )
}

export default Products