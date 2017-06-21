
// =============Constructor Functions and Prototypes============
function Player(team, position) {
    this.team = team;
    this.pos = position;    

    return this; /*returning this is not necessary, but it is valid.The function will implicitly return a new Object*/
}

// * SAMPLE 1
var Kobe = new Player("Lakers", 'G');
var Dirk = new Player("Dallas", 'F');

var test1 = '<p>' + Object.values(Dirk) + '</p>';
test1 += '<p>' + Object.values(Kobe) + '</p>'; 

var content1 =  document.getElementById("cont-cfp");
content1.innerHTML += "<p>" + test1 + "</p>";





