// Every new Song has a title, artist, and duration 

function Media(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
}

Media.prototype.play = function() {
    this.isPlaying = true;
}

Media.prototype.stop = function() {
    this.isPlaying = false;
}

Media.prototype.toHTML = function() {

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