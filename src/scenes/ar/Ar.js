import React from 'react';
import { chave, oculos, sphere } from '../assets/';

const Ar = () => {
  const value = 0.5; //sphere

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-assets>
        <a-asset-item id="gltf" src={sphere}></a-asset-item>
        <img id="my-image" src={chave} />
      </a-assets>

      <a-marker type="pattern" url={oculos}>
        {/* <a-image
          id="imgteste"
          src="#my-image"
          rotation="90 180 360"
        ></a-image> */}
        <a-gltf-model
          src="#gltf"
          position="0 0.5 0"
          rotation="90 90 90"
          scale={`${value} ${value} ${value}`}
        ></a-gltf-model>
      </a-marker>
      <a-entity camera></a-entity>


      <a-entity position="0 -1 2">
        <a-camera></a-camera>
      </a-entity>
    </a-scene>
  );
};

export default Ar;
