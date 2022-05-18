/*
Suppposed to fade the window in. Doesn't work yet.

window.onload = showFadeInWindow();
var bodyOpacity = 0
var fade = document.getElementsByTagName('body').style.opacity;
fade = 0
var windowFadeInInterval = setInterval(showFadeInWindow(), 50)

function showFadeInWindow(){
    if (fade < 50){
        fade += .025
    } else {
        clearInterval(windowFadeInInterval)
    }
}
*/

//function uploadSong(){
//   = document.getElementById('songUploadButton').value 
//    = document.getElementById('uploadingSongThumbnail').value
//}

function removeSong(){
    addedSong.remove();
    addedSongButton.remove();
}

songsAdded = []
function onPageLoad(){
    for (song in songsAdded){
        song = document.createElement('audio')
        document.getElementById('userSongsList').appendChild(song)
    }
}

function uploadProfilePic(){
    let userInput = document.getElementById('changeProfileImg').value
    document.getElementById('changeProfileImg').style.backgroundImage = userInput 
}