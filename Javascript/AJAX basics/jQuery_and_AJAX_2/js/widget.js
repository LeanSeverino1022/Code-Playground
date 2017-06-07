$(document).ready(function(){

    var url = "data/employees.json";

    // $.getJSON(url, data, callback); : we don't have any data to send so lets take out the data argument
    $.getJSON(url, function(response) {
        var statusHTML = '<ul class="bulleted">'; 

        //  jquery each function syntax
        // $.each(array_or_oject, callback)      

        $.each(response, function(index, employee) {
            if(employee.inoffice === true) {
                statusHTML += '<li class="in">';
            }else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employee.name +'</li>';  
        });

        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    }); //end getJSON

    $.getJSON('data/rooms.json', function( dat ) {
    
        var roomHTML  ='<ul class="rooms">';
        
        $.each(dat, function(key, val) {
        
        if(val.available === true ){
            roomHTML += '<li class="empty">' + val.room + '</li>';
        }
        else {
            roomHTML += '<li class="full">' + val.room + '</li>';
        }
        
        }); //end each
        
        roomHTML += '</ul>';
        document.getElementById("roomList").innerHTML = roomHTML;
    
  
    });// end getJSON
  

}); /*end ready*/


