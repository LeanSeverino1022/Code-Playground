var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
    // console.log(xhr.responseText);

    // JSON.parse method takes a string and tries to convert it to a js object
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for(var i=0; i<employees.length; i+= 1) {
            if(employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            }
            else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
//    if(xhr.status === 200) {
    //   console.log(xhr.responseText);
//      console.log("hi");
//    }
};

xhr.open('GET', 'data/employees.json');
xhr.send();


var roomRequest = new XMLHttpRequest();

roomRequest.onreadystatechange = function() {
    if(roomRequest.readyState === 4){
    // console.log(roomRequest.responseText);

    // JSON.parse method takes a string and tries to convert it to a js object
        var rooms = JSON.parse(roomRequest.responseText);
        var statusHTML = '<ul class="rooms">';
        for(var i=0; i<rooms.length; i+= 1) {
            if(rooms[i].available === true) {
                statusHTML += '<li class="empty">';
            }
            else {
                statusHTML += '<li class="full">';
            }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('roomList').innerHTML = statusHTML;
    }
//    if(roomRequest.status === 200) {
    //   console.log(roomRequest.responseText);
//      console.log("hi");
//    }
};

roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();