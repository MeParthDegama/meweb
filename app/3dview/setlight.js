import * as THREE from 'three';

const setLightAmbientLight = (scene, color) => {
    const light = new THREE.AmbientLight(color)
    scene.add(light)
}

const setDirectionalLight = (scene, color, num) => {
    const directionalLight = new THREE.DirectionalLight(color, num);
    scene.add(directionalLight)
    return directionalLight
}

export { setLightAmbientLight, setDirectionalLight }