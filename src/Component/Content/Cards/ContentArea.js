import React from "react";
import Cards from "./Cards";
import ContentRight from "./ContentRight";

const ContentArea = () => {
  return (
    <div className='container-lg'>
      <div className='row'>
        <div className='col-lg-8 col-12'>
          <Cards />
        </div>
        <div className='col-lg-4 lgScreenNav'>
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
