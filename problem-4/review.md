The idea was simple enough, just a double for loop and try them all. However, optimistaions could be
made by realising that the product of (i, j) and (j, i) are the same meaning half of the possible
products can just be skipped. Furthermore, the loop can be exited early through the check in the
outer loop. If the product of i and i is less than the max itself, since i and j are both decreasing
in the loops, there's no point in trying the remaining combinations.
