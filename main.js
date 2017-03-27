var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var stopButton = document.querySelector("#stop")
// var nextButton = document.querySelector("#next")
// var backButton = document.querySelector("#back")
// var newSongButton = document.querySelector("#newsong")

var index = [0]
var titleSpot = document.querySelector("#titlespot")
var artistSpot = document.querySelector("#artistspot")

var songs = []

var titles = "Multi-Love https://soundcloud.com/jagjaguwar/unknown-mortal-orchestra-multi-love"

var artists = "Unknown Mortal Orchestra"

var descriptions = "Unknown Mortal Orchestra - “Multi-Love” from THE ALBUM ‘Multi-Love’ out May 26th, 2015 on Jagjaguwar↵↵SCD/direct: http://smarturl.it/umo?iQid=sc // Amazon: http://smarturl.it/umo_amazon?iQid=sc // iTunes: http://smarturl.it/umo_itunes?iQid=sc // Indies: http://smarturl.it/umo_indies?iQid=sc↵↵Unknown Mortal Orchestra↵Artist Page http://www.jagjaguwar.com/artist.php?name=umo↵Website http://unknownmortalorchestra.com/↵Facebook https://www.facebook.com/unknownmortalorchestra↵Twitter https://twitter.com/UMO↵Instagram http://instagram.com/unknownmortalorchestra↵↵Unknown Mortal Orchestra - “Multi-Love” from ‘Multi-Love’ out May 26th, 2015 on Jagjaguwar genre: Indie"

var trackId = 189137400




SC.initialize({client_id: 'fd4e76fc67798bfa742089ed619084a6'})

SC.resolve("https://soundcloud.com/jagjaguwar/unknown-mortal-orchestra-multi-love").then(function(response) {
  console.log(response)
})


var cloudsong = SC.stream('/tracks/' + trackId)
console.log(cloudsong)



function Jukebox(songs) {
  this.songs = songs
}

Jukebox.prototype.play = function () {
    cloudsong.then(function(player){
    player.play()
  })
}


Jukebox.prototype.pause = function () {
    cloudsong.then(function(player){
    player.pause()
  })
}

Jukebox.prototype.stop = function () {
    cloudsong.then(function(player){
    player.pause()
    cloudsong.currentTime = 0
  })
}

// Jukebox.prototype.forward = function () {
//   this.songs[index].pause()
//   this.songs[index].currentTime = 0
//   index ++
//   this.songs[index]
//   if (index === this.songs.length) {
//       index = [0]
//   }
//   this.songs[index].play()
// }
//
// Jukebox.prototype.back = function () {
//   this.songs[index].pause()
//   this.songs[index].currentTime = 0
//   index --
//   if (index < 0) {
//       index = this.songs.length -1
//   }
//   this.songs[index].play()
// }


var jukebox = new Jukebox(songs)


playButton.addEventListener("click", function(event){
  event.preventDefault()
  titleSpot.innerHTML = titles
  artistSpot.innerHTML = artists
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

// nextButton.addEventListener("click", function(event){
//   event.preventDefault()
//   jukebox.forward()
//   titleSpot.innerHTML = titles[index]
//   artistSpot.innerHTML = artists[index]
//   playButton.style.color = "#ff4f5a"
//   pauseButton.style.color = "#2d2d2d"
//   stopButton.style.color = "#2d2d2d"
// })
//
// backButton.addEventListener("click", function(event){
//   event.preventDefault()
//   jukebox.back()
//   titleSpot.innerHTML = titles[index]
//   artistSpot.innerHTML = artists[index]
//   playButton.style.color = "#ff4f5a"
//   pauseButton.style.color = "#2d2d2d"
//   stopButton.style.color = "#2d2d2d"
// })

// newSongButton.addEventListener("click", function(event) {
//   event.preventDefault()
//   var songField = document.querySelector("#songfield")
//   var newSong = new Audio(songField.value)
//   var titleField = document.querySelector("#titlefield")
//   var newTitle = "Title: " + titleField.value
//   var artistField = document.querySelector("#artistfield")
//   var newArtist = "Artist: " + artistField.value
//   songs.push(newSong)
//   titles.push(newTitle)
//   artists.push(newArtist)
// })
