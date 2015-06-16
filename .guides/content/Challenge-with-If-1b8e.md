|||challenge
On the left is some code to start you off.

Your job is to modify the loop instructions so only 4 energy stores get added.

However, we still want to add all 10 walls.

To do this, you will need to insert an `if` statement that checks the `counter` and only adds an energy store with `addEnergy()` based on the current counter value.

{Check it!!|custom}(js-6)

|||

|||guidance
## Solution
```javascript
createEmptyMaze()

for ( counter = 0; counter < 10; counter = counter + 1) {
  addWall()
  // Add energy using an if statement below
  if (counter < 4) {
    addEnergy()
  }
}

addPlayer()
```
|||