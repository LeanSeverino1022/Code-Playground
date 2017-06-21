function Playlist() {
    // when we create a playlist, we 1st create an empty array of songs 
    this.songs = [];
    this.nowPlaylingIndex = 0;
}

Playlist.prototype.add = function(song) {
    this.songs.push(song);
};

Playlist.prototype.play = function() {
    var currentSong = this.songs[this.nowPlaylingIndex];
    // console.log("Playing song index # " + currentSong);
    currentSong.play();
};

Playlist.prototype.stop = function(){
    var currentSong = this.songs[this.nowPlaylingIndex];
    currentSong.stop();
};

Playlist.prototype.next = function() {
    this.stop();
    this.nowPlaylingIndex++;

    if(this.nowPlaylingIndex === this.songs.lengh){
        this.nowPlaylingIndex = 0;
    }
    this.play();
};

Playlist.prototype.renderIn = function() {

};