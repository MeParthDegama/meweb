import * as THREE from 'three';
import load3dModel from './load3dmodel';
import { setDirectionalLight, setLightAmbientLight } from './setlight';
import setOrbitControls from './setorbitcontrols';

const load3dView = () => {

    const my3dView = document.getElementById("my_3d_view") // 3d view
    const my3dViewCanvas = document.getElementById("my_3d_view_canvas") // 3d view canvas

    my3dView.style.height = my3dView.clientWidth + "px"

    const scene = new THREE.Scene(); // scene
    const camera = new THREE.PerspectiveCamera(75, my3dView.clientWidth / my3dView.clientHeight, 0.1, 1000); // camara

    const renderer = new THREE.WebGLRenderer({
        canvas: my3dViewCanvas,
        antialias: true
    }); // renderer


    renderer.outputEncoding = THREE.sRGBEncoding

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(my3dView.clientWidth, my3dView.clientHeight); // set renderer size
    renderer.setPixelRatio(window.devicePixelRatio)

    camera.position.z = 0.1; // set camara position

    load3dModel(scene, camera)
    setLightAmbientLight(scene, 0xc1c1c1c)
    setDirectionalLight(scene, 0xffffff, 1)
    setOrbitControls(camera, renderer)


    window.addEventListener("resize", () => { // window resize event
        my3dView.style.height = my3dView.clientWidth + "px" // set 3d view size
        renderer.setSize(my3dView.clientWidth, my3dView.clientHeight); // ser renderer size
        camera.aspect = my3dView.clientWidth / my3dView.clientHeight // set camara aspect
        camera.updateProjectionMatrix() // update porjection metrix
        renderer.render(scene, camera); // render renderer
    })

    function animate() {
        requestAnimationFrame(animate); // requert animatrion frame
        renderer.render(scene, camera); // render renderer
    }

    animate(); // call animation loop
}

export default load3dView
