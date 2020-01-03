import React, { useEffect } from 'react';
import oculos from '../assets/markers/oculos.patt';
import sphere from '../assets/objects/sphere.glb';
import monster from '../assets/objects/monster.glb';
import duck from '../assets/objects/duck.glb';
import intro from '../assets/objects/task.jpg';
import complete from '../assets/objects/complete.jpg';
import sound1 from '../assets/objects/dsbgdth1.mp3';
import sound2 from '../assets/objects/dsbgsit2.mp3';
import doom from '../assets/objects/doom.mp3';

const Ar = () => {
  const valueM = 0.02;
  const valueSM = 0.01;
  const valueD = 0.1;
  let value = true;
  const audio1 = new Audio(sound1);
  const audio2 = new Audio(sound2);
  const doomSoundtrack = new Audio(doom);

  useEffect(() => {
    const pos = document
      .querySelector('#objmk')
      .getAttribute('position');
    const intro = document.querySelector('#introScene');
    const monsterScene = document.querySelector('#monsterScene');
    const duckScene = document.querySelector('#duckScene');
    const completeScene = document.querySelector('#completeScene');
    const mkMonster = document.querySelector('#mkMonster');
    doomSoundtrack.play();
    doomSoundtrack.volume = 0.3;

    setTimeout(() => {
      intro.setAttribute('visible', 'false');
    }, 5000);

    const intervalId = setInterval(() => {
      if (pos.x > 0.7 && pos.y > 0.8) {
        doomSoundtrack.pause();
        monsterScene.setAttribute('visible', 'true');
        completeScene.setAttribute('visible', 'true');
        duckScene.setAttribute('visible', 'false');
        mkMonster.setAttribute('visible', 'false');
        if (value) {
          audio2.play();
          value = false;
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <a-scene arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-assets>
        <a-asset-item id="sphere" src={sphere}></a-asset-item>
        <a-asset-item id="monster" src={monster}></a-asset-item>
        <a-asset-item id="duck" src={duck}></a-asset-item>

        <img id="intro" src={intro} />
        <img id="complete" src={complete} />
      </a-assets>

      <a-marker id="objmk" type="pattern" url={oculos}>
        <a-gltf-model
          id="mkMonster"
          visible="true"
          src="#monster"
          position="0 2 0"
          rotation="30 40 0"
          animation-mixer="clip: *"
          scale={`${valueM} ${valueM} ${valueM}`}
        ></a-gltf-model>
      </a-marker>
      <a-entity camera></a-entity>

      <a-gltf-model
        id="duckScene"
        src="#duck"
        visible="true"
        position="0.7 0.8 0"
        rotation="0 -90 -45"
        scale={`${valueD} ${valueD} ${valueD}`}
      ></a-gltf-model>

      <a-image
        id="completeScene"
        src="#complete"
        visible="false"
        position="0.2 0.8 0"
        width="0.5"
        height="0.2"
      ></a-image>

      <a-gltf-model
        id="monsterScene"
        visible="false"
        src="#monster"
        position="0.7 0.8 0"
        rotation="45 0 0"
        scale={`${valueSM} ${valueSM} ${valueSM}`}
      ></a-gltf-model>

      <a-image
        id="introScene"
        src="#intro"
        visible="true"
        position="0 0.21 0"
        width="1"
        height="0.3"
      ></a-image>

      <a-entity camera position="0 -1 2">
        <a-camera></a-camera>
      </a-entity>
    </a-scene>
  );
};

export default Ar;
