createEmptyMaze()

for ( i = 0; i < 4; i++) {
  addWall(i+2, i+2) 
}

for ( i = 0, y=5; i < 4; i++, y--) {
  addWall(i+6, y) 
}

addPlayer()