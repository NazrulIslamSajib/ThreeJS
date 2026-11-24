const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, 0.1, 100);
                                          ///degree , aspect-ratio, koto kache, koto dure dekhte cai seigula 
 camera.position.z=5; 

scene.add(camera) /// eta ke scene e add korte hbe  



///let box = new THREE.BoxGeometry(2,2,2); 
let box = new THREE.SphereGeometry(2,32,16);

let material=new THREE.MeshBasicMaterial({color:'tomato',wireframe:true}); ///material mane hocche color 

let mesh=new THREE.Mesh(box,material);
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

let f=0; 
const clock= new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);   //// 1 bar call hole eta bar bar colbe    etar karone bar bar call hocche  .   
    
    if(!f){
         mesh.position.x+=0.05;
    }  
    else{
        mesh.position.x-=0.05;
    } 
    let current=mesh.position.x;
    if(mesh.position.x>=3.1416){
         f=1;  
         scene.remove(mesh);
         material=new THREE.MeshBasicMaterial({color:'blue',wireframe:true});    
         mesh=new THREE.Mesh(box,material); 
         scene.add(mesh); 
         mesh.position.x=current;
        
        

    } 
    if(mesh.position.x<=-3.1416){
         f=0; 
         scene.remove(mesh);
         material=new THREE.MeshBasicMaterial({color:'green',wireframe:true});    
         mesh=new THREE.Mesh(box,material); 
         scene.add(mesh); 
         mesh.position.x=current;
         
    }
   
    ///const time = clock.getElapsedTime(); 
   /// mesh.position.y=Math.cos(time);
    ///mesh.position.x=Math.sin(time);
    
    renderer.render(scene,camera);  
   

}
animate(); ///eta 1 bar call korbe animate ke  

