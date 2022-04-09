import React from 'react';
import { MarketPlace } from '../../../pages';
import OverlayContainer from '../general/OverlayContainer';
//import { Bids } from '../../bids/Bids';

const MarketPlaceContainer = () => {
  return (
    <OverlayContainer 
    fluid
    className="bg-hl-primary py-5 z-index-20position-relative ml-5 mr-5 mt-5"
    circles={[
      { 
        class: "circle-one",
        style: {
          width: "15rem",
          height: "15rem",
          transform: "translateY(5rem)"
        } 
      },
    ]}
    >
      <MarketPlace />
    </OverlayContainer>
  
  )
}

export default MarketPlaceContainer; 