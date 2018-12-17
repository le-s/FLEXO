import React from "react";
import Slider from 'react-slick';

const SlideShow = ({photo}) => (
  <Slider>

    {photo.photoUrls.map(photo => (
      <div key={photo}>
        <img src={photo}/>
      </div>
    ))}

  </Slider>
)

export default SlideShow;