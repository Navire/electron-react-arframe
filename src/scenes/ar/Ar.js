import React, { useEffect } from 'react';
import { chave } from '../assets/';
import sphere from '../assets/objects/sphere.glb';
import monster from '../assets/objects/monster.glb';
import oculos from '../assets/markers/oculos.patt';

const Ar = () => {
  const value = 0.5; //sphere
  const valueM = 0.01; //sphere

  // useEffect(() => {
  //   const pos = document
  //     .querySelector('#objmk')
  //     .getAttribute('position');
  //   const myEl = document.querySelector('#boxinha');

  //   const intervalId = setInterval(() => {
  //     // console.log('pos:', pos);

  //     if (pos.x < -2 && pos.x < -1.5) {
  //       myEl.setAttribute('visible', 'true');
  //     } else {
  //       myEl.setAttribute('visible', 'false');
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-assets>
        <a-asset-item id="gltf" src={sphere}></a-asset-item>
        <a-asset-item id="monster" src={monster}></a-asset-item>
        <img id="my-image" src={chave} />
      </a-assets>

      <a-marker id="objmk" type="pattern" url={oculos}>
        <a-gltf-model
          src="#gltf"
          position="0 0 0"
          rotation="90 90 90"
          scale={`${value} ${value} ${value}`}
        ></a-gltf-model>
      </a-marker>
      <a-entity camera></a-entity>

      <a-gltf-model
        src="#monster"
        position="0 0.5 1"
        rotation="30 40 0"
        animation-mixer="clip: *"
        scale={`${valueM} ${valueM} ${valueM}`}
      ></a-gltf-model>

      <a-box
        id="boxinha"
        position="2 0.5 -3"
        rotation="0 45 45"
        visible="false"
        scale="0.5 0.5 0.5"
        color="#4CC3D9"
      ></a-box>

      <a-entity position="0 -1 2">
        <a-camera></a-camera>
      </a-entity>
    </a-scene>
  );
};

export default Ar;
