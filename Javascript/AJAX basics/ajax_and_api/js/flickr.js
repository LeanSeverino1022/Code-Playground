$(document).ready(function () {

    $('button').click( function() {
        $('button').removeClass("selected");
        $(this).addClass("selected");    

        flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
        var animal = $(this).text();
        var flickrOptions = {
            tags: animal,
            format: "json",
        };

        function displayPhotos(data) {
            
        }

        $.getJSON(flickrAPI, flickrOptions,displayPhotos);

    });
});//end ready