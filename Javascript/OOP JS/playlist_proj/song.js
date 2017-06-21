// Every new Song has a title, artist, and duration 

function Song(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
}

Song.prototype.play = function() {
    this.isPlaying = true;
}

Song.prototype.stop = function() {
    this.isPlaying = false;
}

Song.prototype.toHTML = function() {

}