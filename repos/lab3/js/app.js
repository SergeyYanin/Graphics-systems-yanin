var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xFFFFFF, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT, 0.1, 10000);
camera.position.z = 50;
scene.add(camera);

var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
var basicMaterial = new THREE.MeshBasicMaterial({color: 0xff6a4f});
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.position.x = -25;
cube.rotation.set(0.3, 0.2, 0);
scene.add(cube);

var torusGeometry = new THREE.TorusGeometry(5, 1, 6, 100);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xb52ff});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);

var strangeGeometry = new THREE.DodecahedronGeometry(5);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xff00});
var dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

var t = 0;
function render() {
    t += 0.01;
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    torus.rotation.x += 0.01;
    dodecahedron.position.y = 7*Math.sin(t*2);
    renderer.render(scene, camera);
}
render();