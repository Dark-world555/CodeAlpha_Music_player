let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let songRange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=0;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Tumhe Kitna Pyaar Karte",
        path:"../tracks/Tumhe Kitna Pyaar Karte - Arijit Singh.mp3",
        image:"./images/tumhe_kitna_pyaar_karte.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Aaj Phir Tum Pe",
        path:"../tracks/Aaj Phir tum pe pyar aaya hai(KoshalWorld.Com).mp3",
        image:"./images/aaj_phir_tumpe.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Tu Jaane Na",
        path:"../tracks/Tu Jaane na ❤️_---- _Slowed Reverb_ _lofi ------(MP3_160K).mp3",
        image:"./images/tu_jaane_na.jpg",
        singer:"Lofi song"
    },
    {
        name:"Dhadkan",
        path:"../tracks/Dhadkan (Official Video) Mani Chopra _ Paras Chopra _ New Punjabi Songs 2022 _ Jass Records(MP3_160K).mp3",
        image:"./images/Dhadkan.jpg",
        singer:"Mani Chopra"
    },
    {
        name:"Tum Chupa Na Sakogi",
        path:"../tracks/Tum chupa naa sakogi slowed -revarb song Junaid Tyagi 07(MP3_160K).mp3",
        image:"./images/tum_chuppa_na_sakoge.jpg",
        singer:"Junaid Tyagi"
    },
    {
        name:"Tune 1",
        path:"../tracks/firstsong.mp3",
        image:"./images/image1.jpg",
        singer:"Tunes"
    },
    {
        name:"Tune 2",
        path:"../tracks/secondsong.mp3",
        image:"./images/image2.jpg",
        singer:"Tunes"
    },
    {
        name:"Tune 3",
        path:"../tracks/thirdsong.mp3",
        image:"./images/image3.jpg",
        singer:"Tunes"
    },
    {
        name:"Tune 4",
        path:"../tracks/fourthsong.mp3",
        image:"./images/image4.jpg",
        singer:"Tunes"
    }
]
function loadTrack(index){
track.src=songs[index].path;
songName.innerHTML=songs[index].name;
songSinger.innerHTML=songs[index].singer;
songImage.style=`background-image: url("${songs[index].image}");`
volume()
setInterval(()=>{
songRange.max=track.duration
songRange.value=track.currentTime
},1000)
track.loop=true
track.load()
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
       
    }else{
        pauseSong()
       
    }
}
function playSong(){
    track.play();
    playingSong=true;
playPauseImg.src="../svgs/pause.svg"
 musicAnim.style.display="block"

}
function pauseSong(){
    track.pause();
    playingSong=false;
playPauseImg.src="../svgs/play.svg"
 musicAnim.style.display="none"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
track.volume=volumeRange.value/100;
if(volumeRange.value==0){
    volSvg.src="../svgs/mute.svg"
}else{
    volSvg.src="../svgs/volume.svg"
}
}
function duration(){
    track.currentTime=songRange.value
}
playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlistImg.src="../svgs/cross.svg"
}else{
    playlistImg.src="../svgs/playlist.svg"
}
})
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="../svgs/playlist.svg"

    })
})
