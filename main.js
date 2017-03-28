SC.initialize({client_id: 'fd4e76fc67798bfa742089ed619084a6'})


var playButton = document.querySelector("#play")
var pauseButton = document.querySelector("#pause")
var stopButton = document.querySelector("#stop")
var nextButton = document.querySelector("#next")
var backButton = document.querySelector("#back")
var newSongButton = document.querySelector("#newsong")

var titleSpot = document.querySelector("#titlespot")
var titleLinkSpot = document.querySelector("#titlelinkspot")
var artistSpot = document.querySelector("#artistspot")
var artistLinkSpot = document.querySelector("#artistlinkspot")
var descriptionSpot = document.querySelector("#descriptionspot")
var genreSpot = document.querySelector("#genrespot")
var dateSpot = document.querySelector("#datespot")
var artworkSpot = document.querySelector("#artworkspot")

var index = [0]
var songs = []

var trackId = [287747010]
var cloudsong = SC.stream('/tracks/' + trackId[index])



SC.resolve("https://soundcloud.com/bodylanguage/social-studies").then(function(response) {
  console.log(response)
})


function Jukebox(songs) {
  this.songs = songs

  SC.resolve("https://soundcloud.com/bodylanguage/social-studies").then(function(response) {
    var artwork = response.artwork_url
    var img = document.createElement('img')
    img.src = artwork
    artworkSpot.appendChild(img)
    var title = response.title
    titleSpot.innerHTML = "Title: " + title
    var titlelink = response.permalink_url
    var a = document.createElement('a')
    a.setAttribute('href', titlelink)
    a.setAttribute('target', '_blank')
    a.innerHTML = "link to track"
    titleLinkSpot.appendChild(a)
    var artist = response.user.username
    artistSpot.innerHTML = "Artist: " + artist
    var artistlink = response.user.permalink_url
    var anchor = document.createElement('a')
    anchor.setAttribute('href', artistlink)
    anchor.setAttribute('target', '_blank')
    anchor.innerHTML = "link to artist page"
    artistLinkSpot.appendChild(anchor)
    var description = response.description
    descriptionSpot.innerHTML = "Description: " + description
    var genre = response.genre
    genreSpot.innerHTML = "Genre: " + genre
    var month = response.release_month
    var day = response.release_day
    var year = response.release_year
    dateSpot.innerHTML = "Release Date: " + month + "/" + day + "/" + year
  })
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



var jukebox = new Jukebox(songs)


playButton.addEventListener("click", function(event){
  event.preventDefault()
  jukebox.play()
  playButton.style.color = "#ff4f5a"
  pauseButton.style.color = "#2d2d2d"
})

pauseButton.addEventListener("click", function(event) {
  event.preventDefault()
  jukebox.pause()
  pauseButton.style.color = "#ff4f5a"
  playButton.style.color = "#2d2d2d"
})
