// Every new Song has a title, artist, and duration 

function Song(title, artist, duration) {
    // var song = this;
    // the first paramter is what we're teeling the media function to call as this
    //the media call is acting like a regular function and all it's doing ot decoration
    //the song with new prperties of title, duration, and isPlyaying
    Media.call(this, title, duration);
    this.artist = artist;
}

// setuo the prototype chain
Song.prototype = Object.create(Media.prototype);


Song.prototype.toHTML = function() {

    var htmlString = '<li';
    if(this.isPlaying) {
        htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - '+ this.artist + '<span class = "duration">';
    htmlString += this.duration + '</span></li>';
    
    return htmlString;
}