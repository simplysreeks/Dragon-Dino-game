Score=0;
cross=true;
audio=new Audio(images_music.mp3);
audio=new Audio(images_gameover.mp3);
setTimeout(()=>{
    audio.play();
},1000)
document.onkeydown=function(e){
    console.log("Key code is :" e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('.animateDino');
        setTimeout(()=>{
            dino.classList.remove('.animateDino');
        },700)
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+112+"px";
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox-112+"px";
    }
    
}