// Every new Song has a title, artist, and duration 

function Movie(title, year, duration) {
    // var song = this;
    // the first paramter is what we're teeling the media function to call as this
    //the media call is acting like a regular function and all it's doing ot decoration
    //the song with new prperties of title, duration, and isPlyaying
    Media.call(this, title, duration);
    this.year = year;
}

// setuo the prototype chain
Movie.prototype = Object.create(Media.prototype);


Movie.prototype.toHTML = function() {

    var htmlString = '<li';
    if(this.isPlaying) {
        htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - '+ this.year + '<span class = "duration">';
    htmlString += this.duration + '</span></li>';
    
    return htmlString;
}