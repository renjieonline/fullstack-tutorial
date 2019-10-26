const myVideo = document.querySelector("#my-video")
const myProgress = document.querySelector("progress")
console.log(myProgress)
const likeDom = document.querySelector('.fa-thumbs-up')
let likeCount = localStorage.getItem('likeCount')
const dislikeDom = document.querySelector('.fa-thumbs-down')
let dislikeCount = localStorage.getItem('dislikeCount')

if (!likeCount) {
  likeCount = 0
  localStorage.setItem('likeCount', 0)
}

if (!dislikeCount) {
  dislikeCount = 0
  localStorage.setItem('dislikeCount', 0)
}
likeDom.innerText = likeCount
dislikeDom.innerText = dislikeCount

function play () { 
  myVideo.play(); 
}

function pause () { 
  myVideo.pause(); 
} 

function volumeUp () {
  if (myVideo.volume < 0.9) {
    myVideo.volume += 0.1;
  } else {
    myVideo.volume = 1
  }
} 

function volumeDown () {
  if (myVideo.volume >= 0.1) {
    myVideo.volume -= 0.1;
  } else {
    myVideo.volume = 0
  }
}

function replay () { 
  myVideo.load();
  myVideo.play();
} 

function toggleMute () { 
  myVideo.muted = !myVideo.muted;
} 

function like () {
  localStorage.setItem('likeCount', ++likeCount)
  likeDom.innerText = likeCount
}

function dislike () {
  localStorage.setItem('dislikeCount', ++dislikeCount)
  dislikeDom.innerText = dislikeCount
}

function updateProgressBar () {
  myProgress.setAttribute('value', Number(myVideo.currentTime / myVideo.duration * 100))
  console.log(myProgress)
}