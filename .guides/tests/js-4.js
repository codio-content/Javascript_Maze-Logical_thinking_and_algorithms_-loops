

var fs = require('fs');

var maze = false;
var player = false;
var walls = 0;
var energies = 0;

global.addWall = function() {
  walls++;
}

global.addEnergy  = function() {
  energies++;
}

global.createEmptyMaze = function() {
  maze = true;
}

global.addPlayer = function() {
  player = true;
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/js-4.js', 'utf8');
  eval(data);
 
  if(maze && player && walls == 8 && energies == 8) {   
    process.stdout.write('Well done!');  
    process.exit(0);
  }
}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
