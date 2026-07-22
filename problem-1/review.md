Wow, first problem and I can't believe I screwed it up twice despite having the right overall idea.

Initially spotted that the sum of multiples of 3 and 5 could be calculated using the standard
formula:

$$
S_n = \frac{n(n+1)}{2}
$$

However, the critical oversight was I forgot to subtract the multiples of 15, meaning my initial
answer was higher than expected.

Second time round, I used

```ts
const five_n = Math.floor(1000 / 5)
```

to determine the largest multiple of 5 below 1000 but forgot to account for the fact that 1000 is a
multiple itself. Overall, no difficulty in determining the correct strategy for the solution but wow
was that kinda embarrassing I managed to screw the code up twice.
