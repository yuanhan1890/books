3. 

```
 1   3   3
-3  -5  -3
 3   3   1

 1 - λ   3       3
 0      -2 - λ  -2 - λ
 3       3       1 - λ

det(A - λI) = (1 - λ)((-2 - λ)(1 - λ) - 3(-2-λ)) + 3(3(-2-λ) - 3(-2-λ))

det(A - λI) = (1 - λ)(λ + 2)^2

λ = 1, -2

λ为1时

0    3   3
-3  -6  -3
3    3   0

1    1   0
0   -1  -1
0    0   0

x1 + x2 = 0
x2 + x3 = 0

在null space, Span{[-1, 1, -1]}

v1 = [1, -1, 1]

λ为-2时

 3   3   3
-3  -3  -3
 3   3   3


 1   1   1
 0   0   0
 0   0   0

x1 + x2 + x3 = 0

null space, Span{[-1, 0, 1], [-1, 1, 0]}

P = ['[1, -1, 1], '[-1, 0, 1], '[-1, 1, 0]]

D = ['[1, 0, 0], '[0, -2, 0], '[0, 0, -2]]
```