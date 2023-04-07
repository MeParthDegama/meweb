import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import {modelsConf, modelId} from './modelconf'

const load3dModel = (scene, camara) => {
    // Instantiate a loader
    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
        // resource URL
        modelsConf[modelId].path,
        // called when the resource is loaded
        function (gltf) {
            scene.add(gltf.scene);
            camara.position.x = modelsConf[modelId].camara.x
            camara.position.y = modelsConf[modelId].camara.y
            camara.position.z = modelsConf[modelId].camara.z
            gltf.scene.position.x = modelsConf[modelId].position.x
            gltf.scene.position.y = modelsConf[modelId].position.y
            gltf.scene.position.z = modelsConf[modelId].position.z
            gltf.scene.rotation.x = THREE.MathUtils.degToRad(modelsConf[modelId].rotation.x)
            gltf.scene.rotation.y = THREE.MathUtils.degToRad(modelsConf[modelId].rotation.y)
            gltf.scene.rotation.z = THREE.MathUtils.degToRad(modelsConf[modelId].rotation.z)
            /*
                gltf.animations;
                gltf.scene;
                gltf.scenes;
                gltf.cameras;
                gltf.asset;
             */
        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
}

export default load3dModel
