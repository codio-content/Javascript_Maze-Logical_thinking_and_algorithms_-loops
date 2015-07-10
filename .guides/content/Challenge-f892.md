|||challenge
On the left is some code we want you to modify. Do the following ...

1. Modify the loop so it only adds 8 walls.
1. Add an instruction to the same loop so it also adds 8 energy stores. The function to use is `addEnergy()`

{Check it!!|custom}(js-4)
|||

|||guidance
## Solution
```javascript
createEmptyMaze()

for ( counter=0; counter<8; counter=counter+1) {
  addWall()
  addEnergy()
}

addPlayer()
```
|||
