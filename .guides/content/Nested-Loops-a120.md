Nested loops sounds weird, but 'Nesting' is a term that crops up a fair bit in coding.

It means we are including one thing inside another statement of the same type. 

Look at the code for a good example.

## Explanation
We will get to use these more in the next Unit but it is ineresting to show you some of the power of loops now.

1. We start with a loop that handles the X coordinate. It will start with an X value of 2 and go from there.
1. With X=2, we then immediately hit another loop statement within it. This handles the Y coordinate and starts at Y=2.
1. Within that, we call `addWall()`.
1. There are no more statements within the Y loop, so the end of loop statement `y += 2` adds 2 to the Y coordinate and the Y loop carries on until the Y coordinate is 8.
1. Once the Y loop has completed all its iterations, that loop finishes but we are still within the X loop, where X is still set to 2. Now, `x++` executes and we go back to the start of that loop again.
1. Each time through the X loop, the Y loop does it fulls set of iterations.

Study the code and feel free to experiment with the values until you understand the principles.

