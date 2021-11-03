import React from 'react';
import Lottie from 'react-lottie';


// default animation component // 




  export default function Animation(props) {

// config lottie animation //
    const defaultOptions = {
        loop: true,
        autoplay: true,

       // animation data get by props changing controlled by the stepper // 
        animationData: props.animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      

    return(
        <div>
        <Lottie 
          options={defaultOptions}
          height={300}
          width={300}
        />
      </div>

    )
  }