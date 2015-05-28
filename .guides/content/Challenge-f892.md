|||challenge
On the left is some code we want you to modify. Do the following ...

1. Modify the loop so it only adds 5 walls.
1. Add an instruction to the loop so it also adds 5 energy stores. The function to use is `addEnergy()`

|||

|||guidance
## Solution
```javascript
createEmptyMaze()

for ( counter=0; counter<10; counter=counter+1) {
  addWall()
}

addPlayer()
```
|||
