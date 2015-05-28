
createEmptyMaze(14, 10)

for ( x = 2; x < 10; x++) {
  for ( y = 2; y < 8; y += 2 ) {
    addWall(x, y)
  }
  
}

addPlayer()