The code on the left shows how we are using our counter as the basis for the X coordinate of the wall we want to add.

If we leave out the X,Y coordinates, so `addWall()`, then the wall gets added at a random location. If we include them, then we can position the new wall at a precise location.

Remember that the left surrounding wall is X=0. We add 2 to the `i` counter so the first position is at X=2 and Y=3.

