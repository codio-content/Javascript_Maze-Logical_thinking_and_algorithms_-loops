|||challenge
Now comes a really tricky challenge. Don't worry too much if you cannot make this work as we will go deeper into things in the next Unit.

We want you to modify the code so you end up with the following wall arrangement.

![](.guides/img/v-challenge.png)

There are various ways you could tackle. We suggest the following ...

- Create a second loop that handles the upwards line of walls. 
- Use a second variable to store and adjust the Y coordinate
- Decrement this second variable at the end of each loop so the Y coodinate decreases

|||

|||guidance
```javascript
createEmptyMaze()

for ( i = 0; i < 4; i++) {
  addWall(i+2, i+2) 
}

for ( i = 0, y=5; i < 4; i++, y--) {
  addWall(i+6, y) 
}

addPlayer()
```
|||