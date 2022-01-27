import React from "react";
import ContentCards from "./ContentCards";
import CardHead from "./CardHead";
import Forest from "../../Assets/banner1.png";
import House from "../../Assets/banner2.png";
import Car from "../../Assets/banner3.png";
import ThreeDots from "../../Assets/threeDots.svg";
import Sarthak from "../../Assets/sarthak.png";
import Sarah from "../../Assets/sarah.png";
import Ronal from "../../Assets/ronal.png";
import Joseph from "../../Assets/joseph.png";
import Views from "../../Assets/views.png";
import Share from "../../Assets/share.svg";
import Calender from "../../Assets/calender.svg";
import Breifcase from "../../Assets/breifcase.svg";
import LocationImg from "../../Assets/location.svg";
import CardTimeline from "./CardTimeline";

const Cards = () => {
  return (
    <>
      <div className='card my-4'>
        <img src={Forest} />
        <div className='card-body'>
          <h6>✍️ Article</h6>
          <CardHead
            heading='What if famous brands had regular fonts? Meet RegulaBrands!'
            threeDots={ThreeDots}
          />
          <p className='card-text'>
            Ive worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <ContentCards
            profileImg={Sarthak}
            profile='Sarthak Kamra'
            views={Views}
            share={Share}
          />
        </div>
      </div>
      {/* 2nd card */}

      <div className='card my-4'>
        <img src={House} />
        <div className='card-body'>
          <h6>🔬️ Education</h6>
          <CardHead
            heading='Tax Benefits for Investment under National Pension Scheme launched by Government'
            threeDots={ThreeDots}
          />
          <p className='card-text'>
            Ive worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <ContentCards
            profileImg={Sarah}
            profile='Sarah West'
            views={Views}
            share={Share}
          />
        </div>
      </div>
      {/* 3rd card */}

      <div className='card my-4'>
        <img src={Car} />
        <div className='card-body'>
          <h6>🗓️ Meetup</h6>
          <CardHead
            heading='Finance &amp; Investment Elite Social Mixer @Lujiazui'
            threeDots={ThreeDots}
          />
          <CardTimeline
            timeline={Calender}
            time='Fri, 12 Oct, 2018'
            locationImg={LocationImg}
            locationText='Ahmedabad, India'
            btnText='Visit Website'
          />
          <ContentCards
            profileImg={Ronal}
            profile='Ronal Jones'
            views={Views}
            share={Share}
          />
        </div>
      </div>
      {/* 4th card */}

      <div className='card my-4'>
        <div className='card-body'>
          <h6>💼️ Job</h6>
          <CardHead heading='Software Developer' threeDots={ThreeDots} />
          <CardTimeline
            timeline={Breifcase}
            time='Innovaccer Analytics Private Ltd.'
            locationImg={LocationImg}
            locationText='Noida, India'
            style={{ color: "#02B875" }}
            btnText='Apply on Timesjobs'
          />
          <ContentCards
            profileImg={Joseph}
            profile='Joseph Gray'
            views={Views}
            share={Share}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
