import "../Css/TopBrandSection.css";
import BrandName1 from "../Images/BrandLOgo1.png";
import BrandName2 from "../Images/BrandLOgo2.png";
import BrandName3 from "../Images/BrandLOGO3.png";
import BrandName4 from "../Images/BrandLOGO4.png";
import BrandName5 from "../Images/BrandLOGO5.png";
import BrandName6 from "../Images/BrandLogo6.png";
import BrandName7 from "../Images/BandLOGO7.png";
import BrandName8 from "../Images/BandLOGO8.png";
import BrandName9 from "../Images/BandLOGO9.png";
import BrandName10 from "../Images/BrandLOGO10.png";

function TopBrandSection() {
  return (
    <div className="TopBrandSection">
      {/* --------- Brands Title section -----------------------------------------  */}
      <div className="FeatureSectionBrandName">
        <h1>TOP BRANDS</h1>
      </div>

      {/* --------- Brands Items section -----------------------------------------  */}
      <div className="flex w-full flex-col lg:flex-row gap-5 MobileTablateView">
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center p-2 text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>LAMBORGINI</h6>
            <img
              src={BrandName1}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>KIA</h6>
            <img
              src={BrandName2}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>BMW</h6>
            <img
              src={BrandName3}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
     
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6> NISSAN </h6>
            <img
              src={BrandName5}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>TOYOTA</h6>
            <img
              src={BrandName6}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>FORD</h6>
            <img
              src={BrandName7}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>TUNO</h6>
            <img
              src={BrandName9}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>

        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center text-center justify-center align-items-center MobileTablateView_content">
          <div>
            <h6>VOLKSWAGEN</h6>
            <img
              src={BrandName4}
              alt="BrandName1"
              className="BandImageForFeatures"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBrandSection;
