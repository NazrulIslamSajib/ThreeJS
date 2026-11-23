const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, 0.1, 100);
                                          ///degree , aspect-ratio, koto kache, koto dure dekhte cai seigula 
 camera.position.z=5; 

scene.add(camera) /// eta ke scene e add korte hbe  



const box = new THREE.BoxGeometry(2,2,2 ); 

const material=new THREE.MeshBasicMaterial({color:'red'}); ///material mane hocche color 

const mesh=new THREE.Mesh(box,material);
///amra eto kkhone ki korlam , scene add korlam, camera add korlam, mesh make korlam ,  


scene.add(mesh); 

const canvas=document.querySelector("#three");

const renderer= new THREE.WebGLRenderer({canvas:canvas,antialias:true}); 
 


renderer.setSize(window.innerWidth,window.innerHeight);    /// protome ekbar initialize kortechi . 

///resize korte hbe 
window.addEventListener('resize',()=>{
    renderer.setSize(window.innerWidth,window.innerHeight); 
    camera.aspect=window.innerWidth/innerHeight; 
    camera.updateProjectionMatrix(); 

})

function animate(){
    window.requestAnimationFrame(animate);   //// 1 bar call hole eta bar bar colbe 
    renderer.render(scene,camera);

}
animate(); ///eta 1 bar call korbe animate ke 

