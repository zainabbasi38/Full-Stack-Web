
let currentSong = new Audio;
let songs;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}



async function getSongs(){
    
    let a = await fetch("http://127.0.0.1:5500/qawali/")
    let response = await a.text()
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    console.log(as)
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/qawali/")[1])
            
        }
        
    }
    return songs
}

const playMusic= (track, pause= false)=>{
    currentSong.src = "/qawali/" + track
    if(!pause){

        currentSong.play()
        play.src = "pause.svg"
    }
    document.body.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.body.querySelector(".songtimeline").innerHTML = "00:00 / 00: 00"
}
async function main() {
    // get all songs
    songs = await getSongs()
    playMusic(songs[0], true)
    currentSong.src
    console.log(songs)
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                                <img src="music.svg" alt="" height="27px" class="invert">
                                <div class="info">
                                    <div>${song.replaceAll("%20", " ")}</div>
                                    <div>Zaib</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img class="invert" height="26px" src="play.svg" alt="">
                                </div>
                            </li>`
        
    }
    
    // play song
    
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{

            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        }
        else{
            currentSong.pause()
            play.src ="play.svg"
        }
        
    })
    currentSong.addEventListener("timeupdate", ()=>{
        console.log(currentSong.currentTime,currentSong.duration);
        document.querySelector(".songtimeline").innerHTML = `${secondsToMinutesSeconds(currentSong.
            currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)
        *100 + "%"
    })
    document.querySelector(".seekbar").addEventListener("click", (e)=>{
        percent = ( e.offsetX/e.target.getBoundingClientRect().width) * 100 
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent)/100;
    })

    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0%"
    })
    
    
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "-120%"
    })

    previous.addEventListener("click", ()=>{
        console.log("previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        console.log(songs , index)
        if((index+1) < songs.length){
            playMusic(songs[index+1])

        }
        
    })
    next.addEventListener("click", ()=>{
        currentSong.pause()
        console.log("Next clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        console.log(songs , index)
        if((index+1) < songs.length){
            playMusic(songs[index+1])

        }

    })
    
}
main()