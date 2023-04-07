import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const setOrbitControls = (camera, renderer) => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
}

export default setOrbitControls
