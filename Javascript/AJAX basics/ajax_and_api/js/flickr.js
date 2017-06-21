$(document).ready(function () {

    $('button').click( function() {
        $('button').removeClass("selected");
        $(this).addClass("selected");    

        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; 
        var animal = $(this).text();
        var flickrOptions = {
            tags: animal,
            format: "json",
        };

        /*<ul>
  <li class="grid-25 tablet-grid-50">
    <a href="http://www.flickr.com/photos/gimpaanya/14249208291/" class="image">
      <img src="http://farm3.flickr.com/2935/14249208291_abc3fab6b0_m.jpg">
    </a>
  </li>
</ul>*/

// https://api.flickr.com/services/feeds/photos_public.gne?format=json
        function displayPhotos(data) {
            var photoHTML = '<ul>';

            $.each( data.items, function(index, photo){
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href ="' + photo.link + '" class="image">';  
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            });

            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }

        $.getJSON(flickrAPI, flickrOptions, displayPhotos);

    });
});//end ready 