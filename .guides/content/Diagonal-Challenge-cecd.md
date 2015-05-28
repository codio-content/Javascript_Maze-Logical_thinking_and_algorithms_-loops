|||challenge
Here comes a challenge that takes what we saw in the previous section and extends it a bit.

We want you do modify the code so you get the following result.

![](.guides/img/diag-challenge.png)

|||

|||guidance
## Solution
```javascript
createEmptyMaze()

for ( i = 0; i < 4; i++) {
  addWall(i+2, i+2) 
}

addPlayer()
```
|||