import React from "react";
import Slider from 'react-slick';

const SlideShow = ({photo}) => {

  if (photo.photoUrls === undefined) return null;
  return (
  <Slider>

    {photo.photoUrls.map(photo=> (
      <div key={photo}>
        <img src={photo}/>
      </div>
    ))}

  </Slider>
  )
}

export default SlideShow;