var playlist = new Playlist();

var Buloy = new Song("Buloy", "Parokya", "3:00");
var Buloy2 = new Song("Buloy2", "Parokya2", "3:00");

var Movie_1 = new Movie("Movie 1", 2019, "2 hrs");

playlist.add(Buloy);
playlist.add(Buloy2);

playlist.add(Movie_1);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.addEventListener("click", function(){
    playlist.play();
    playlist.renderInElement(playlistElement);
});

var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function(){
    playlist.next();
    playlist.renderInElement(playlistElement);
});

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function(){
    playlist.stop();
    playlist.renderInElement(playlistElement);
});