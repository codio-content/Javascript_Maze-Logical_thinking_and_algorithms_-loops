The normal way to end a loop is when the condition is not met. However, there can be situations where you want to exit the loop that do not make sense (or end up complicating) the main condition test.

## break
Javascript offers a `break` statement that lets you break out of the whenever you want to.

On the left is some code that illustrates this. It is not a particularly natural example, but it does show how this works.

We have set our loop condition to be `i < 20`. If you look inside the loop you can see 

```javascript
if ( i == 5 ) {
  break
}
```

This is saying "if i is equal to 5 then break out of the loop".

Notice we get 6 blocks, not 5. This is because our counter `i` starts at 0 and by the time it gets to 5, `addWall()` has already been called.

If we put the `if` test before `addWall()` then we would only have 5 blocks.

