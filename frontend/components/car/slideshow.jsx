import React from "react";
import Slider from 'react-slick';

const SlideShow = ({photo}) => (
  <Slider>

    {photo.photoUrls.map(photo => (
      <div>
        <img src={photo}/>
      </div>
    ))}

  </Slider>
)

export default SlideShow;