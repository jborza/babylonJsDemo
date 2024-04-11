/// <reference path='./vendor/babylon.d.ts' />

BABYLON.Engine.ShadersRepository = 'shaders/';

// canvas element
const canvas = document.getElementById('renderCanvas');

// create a BabylonJS engine object
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    // scene
    const scene = new BABYLON.Scene(engine);

    // camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -20), scene);
    camera.attachControl(canvas, true);

    // light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        width: 2,
        height: 2,
        depth: 2
    }, scene);
    box.rotation = new BABYLON.Vector3(2, 3, 0);

    // a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        diameter: 2,
        segments: 32
    }, scene);
    sphere.position = new BABYLON.Vector3(3, 0, 0);
    sphere.scaling = new BABYLON.Vector3(1, 2, 1);

    // a plane
    const plane = BABYLON.MeshBuilder.CreatePlane('plane', {
        width: 2,
        height: 2
    }, scene);
    plane.position = new BABYLON.Vector3(-3, 0, 0);


    // parametric shape
    const points = [
        new BABYLON.Vector3(2, 0, 0),
        new BABYLON.Vector3(2, 1, 1),
        new BABYLON.Vector3(2, 2, 0),
    ];
    const lines = BABYLON.MeshBuilder.CreateLines('lines', {
        points: points
    }, scene);

    // create a material
    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    material.emissiveColor = new BABYLON.Color3(0, 1, 0);
    box.material = material;

    const material2 = new BABYLON.StandardMaterial('material2', scene);
    material2.diffuseTexture = new BABYLON.Texture('Assets/images/dark_rock.png', scene);
    sphere.material = material2;

    return scene;
}

const scene = createScene();
engine.runRenderLoop(() => {
    scene.render();
});