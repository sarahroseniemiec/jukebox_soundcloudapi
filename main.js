var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var stopButton = document.querySelector("#stop")
var nextButton = document.querySelector("#next")
var backButton = document.querySelector("#back")
var newSongButton = document.querySelector("#newsong")

var index = [0]
var titleSpot = document.querySelector("#titlespot")
var artistSpot = document.querySelector("#artistspot")

var songs = []

var titles = []

var artists = []


function Jukebox(songs) {
  this.songs = songs
}


Jukebox.prototype.play = function() {
  this.songs[index].play()
}

Jukebox.prototype.pause = function () {
  this.songs[index].pause()
}

Jukebox.prototype.stop = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
}

Jukebox.prototype.forward = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index ++
  this.songs[index]
  if (index === this.songs.length) {
      index = [0]
  }
  this.songs[index].play()
}

Jukebox.prototype.back = function () {
  this.songs[index].pause()
  this.songs[index].currentTime = 0
  index --
  if (index < 0) {
      index = this.songs.length -1
  }
  this.songs[index].play()
}


var jukebox = new Jukebox(songs)


playButton.addEventListener("click", function(event){
  event.preventDefault()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  jukebox.play()
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

pauseButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.pause()
  pauseButton.style.color = "#ff4f5a"
  playButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

stopButton.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.stop()
  stopButton.style.color = "#ff4f5a"
  playButton.style.color = "#2d2d2d"
  pauseButton.style.color = "#2d2d2d"
})

nextButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.forward()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

backButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.back()
  titleSpot.innerHTML = titles[index]
  artistSpot.innerHTML = artists[index]
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
  stopButton.style.color = "#2d2d2d"
})

newSongButton.addEventListener("click", function(event) {
  event.preventDefault()
  var songField = document.querySelector("#songfield")
  var newSong = new Audio(songField.value)
  var titleField = document.querySelector("#titlefield")
  var newTitle = "Title: " + titleField.value
  var artistField = document.querySelector("#artistfield")
  var newArtist = "Artist: " + artistField.value
  songs.push(newSong)
  titles.push(newTitle)
  artists.push(newArtist)
})
