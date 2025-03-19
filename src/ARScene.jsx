import React, { useEffect } from 'react';
import 'aframe';
import 'ar.js/aframe/build/aframe-ar';

function ARScene() {
  useEffect(() => {
    navigator.xr?.isSessionSupported('immersive-ar').then((supported) => {
      if (supported) {
        console.log('WebXR is supported');
      } else {
        console.log('WebXR is not supported');
      }
    });
  }, []); // Run only once on component mount

  return (
    <a-scene
      embedded
      arjs="debugUIEnabled: false; trackingMethod: best; cameraParametersURL: 'camera_para.dat'"
    >
      <a-assets>
        <a-asset-item id="camera_para" src="camera_para.dat"></a-asset-item>
      </a-assets>
      <a-marker preset="hiro">
        <a-entity
          geometry="primitive: box; height: 0.5; width: 0.5; depth: 0.5;"
          material="color: blue;"
          position="0 0.5 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default ARScene;