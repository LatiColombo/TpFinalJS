
let video=document.querySelector('video');
let playButton = document.getElementById("play");
let pauseBoutton= document.getElementById("pause");

setTimeout(()=>{document.getElementById('videoLength').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
}

playButton.addEventListener('click',()=>{
    video.play()
});

pauseBoutton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});
