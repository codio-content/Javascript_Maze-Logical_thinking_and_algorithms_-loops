With a loop, we can add our 10 walls in the way you see on the left. You can see how few lines of code you need. 

And imagine we wanted to add 100 walls. We would not need a single line of extra code.

So let's disucss what our loop is really doing.

## Our loop explained
The first thing to understand is that a loop will continue to go round and round **until some condition is met**.

1. We start off by creating a variable called `counter` and giving it a value of `0` with the code `counter = 0`.
1. We then hit the line `while ( counter < 10) {`. This is really important and it is saying 'Enter the loop as long as the `counter` variable is less than `10`.
1. At this point, `counter` is `0` and so the condition is **true**. So, we can enter the loop.
1. Now, we add a new wall with `addWall()`.
1. On the next line, we *increment* or increase `counter` by one, so it is now `1`.
1. On the next line, Javascript sees the `}` character which denotes the end of the `while() {  }` block. So, it goes back to the top of the block and looks at the condition again. `counter` is now `1`. `1` **is** less than `10` and so the condition is still true, so it re-enters the loop block and adds another wall.
1. This process continues until `counter` is 10. At this point, the condition is `10 < 10` which is not true, so it now jumps over the loop and carries on executing the code on the next line after.

## Make sure you really understand this
Understanding this is critical to being able to code, so don't skip past this until you fully grasp the logic. We will reinforce this with more examples and challenges as we go along.