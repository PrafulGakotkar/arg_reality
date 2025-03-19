import React, { useEffect } from "react";
import "aframe"; //Keep aframe import

function ARScene() {
  navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
    if (supported) {
      console.log("WebXR is supported");
    } else {
      console.log("WebXR is not supported");
    }
  });
  useEffect(() => {
    const scene = document.querySelector("a-scene");

    if (scene && scene.hasLoaded) {
      return;
    }

    if (scene) {
      scene.addEventListener("loaded", () => {
        console.log("A-Frame scene loaded.");
      });
    }

    return () => {};
  }, []);

  return (
    <a-scene
      embedded
      arjs="debugUIEnabled: false; trackingMethod: best; cameraParametersURL: './camera_para.dat'"
    >
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default ARScene;

// import React from 'react';
// import 'aframe';
// import 'ar.js/aframe/build/aframe-ar';

// function ARScene() {
//   navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
//     if (supported) {
//         console.log('WebXR is supported');
//     } else {
//         console.log('WebXR is not supported');
//     }
// });
//   return (

//     <a-scene embedded arjs="debugUIEnabled: false; trackingMethod: best; cameraParametersURL: 'path/to/camera_para.dat'">
//         <a-marker preset="hiro">
//         <a-entity
//           geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5;"
//           material="color: blue;"
//           position="0 0.5 0"
//         ></a-entity>
//       </a-marker>
//       <a-entity camera></a-entity>
//     </a-scene>
//   );
// }

// export default ARScene;
