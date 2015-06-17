The `for` loop is another way of creating a loop. It is, in fact, a preferred way of managing loops in Javascript as it is more concise.

Take a look at the code on the left hand side. It does exactly the same thing as our earlier `while` loop.

## Explanation
The `for` loop is really good because it handles the 3 things that all loops are interested in.

```javascript
for ( [Initialisation]; [Condition]; [End of loop instructions] )
```

### Initialisation
The first part of the `for` instruction, before the first `;` handles any initialisation you need to do. In our case, it initialises `counter` to be `0`.

### Condition
The second part of the `for` instruction (after the first `;` and before the second `;`) is the condition. So, `counter < 10`, exactly the same as we had for our `while` loop condition.

### End of loop instructions
The final part, afer the second `;` is where you can put instructions that should be executed at the end of the loop block. So, it is adding `1` to our `counter` variable.