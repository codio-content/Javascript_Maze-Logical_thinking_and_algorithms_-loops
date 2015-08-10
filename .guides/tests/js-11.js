
var fs = require('fs');

var maze = false;
var player = false;
var walls = 0;
var energies = 0;

global.addWall = function(x, y) {
  if((x == 2 && y == 2) ||
     (x == 3 && y == 3) ||
     (x == 4 && y == 4) ||
     (x == 5 && y == 5) ||
     (x == 6 && y == 5) ||
     (x == 7 && y == 4) ||
     (x == 8 && y == 3) ||
     (x == 9 && y == 2)) {
    walls++;
  }
}


global.createEmptyMaze = function() {
  maze = true;
}

global.addPlayer = function() {
  player = true;
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-11.js', 'utf8');
  eval(data);
   
  if(maze && player && walls == 8) {   
    process.stdout.write('Well done!');  
    process.exit(0);
  }
}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
