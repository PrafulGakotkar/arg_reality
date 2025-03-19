import React from 'react';
import 'aframe';
import 'ar.js/aframe/build/aframe-ar';

function ARScene() {
  return (
    <a-scene embedded arjs="debugUIEnabled: false; trackingMethod: best;">
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