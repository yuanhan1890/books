[definition 2.27](#d_2_27)

Let $f:A\rightarrow B$ be a function; if C is any subclass of A, the direct image of C under f, which we write $\overline{f}(C)$, is the following subclass of B:

 $\overline{f}(C)= \{y\in B:\exists x \in C\ni y = f(x)\}$

 That is, $\overline{f}(C)$ is the class of all the images of elements in C.

 **注意与$f_{[C]}$的区别**

 ---

 [definition 2.28](#d_2_28)

 Let $f:A\rightarrow B$ be a function; if D is any subclass of B, the inverse image of D under f, which we write $\breve{f}(D)$, is the following subclass of A:

 $\breve{f}(D) = \{x\in A:f(x)\in D\}$

That is, $\breve{f}(D)$ is the class of all the pre-images of elements in D.

If $\{a\}$ are singletons, we will write $\breve{f}(a)$ for $\breve{f}(\{a\})$

**注意$\breve{f}(D)$是一个类**

---

[definition 2.29](#d_2_29)

Let $f:A\rightarrow B$ be a function.

$i). if\ C\subseteq A\ and\ D\subseteq A,\ then\ C=D\Rightarrow \overline{f}(C)=\overline{f}(D)$

$ii). if\ C\subseteq B\ and\ D\subseteq B,\ C = D \Rightarrow \breve{f}(C)= \breve{f}(D)$

证明1)

$C = D$

$y \in \overline{f}(C)$

$\exists x \in C, f(x) = y$

$x \in D, y \in overline{f}(D)$

证明2)

证明$左\Rightarrow 右$

$C = D$

$x \in \breve{f}(C) \Leftrightarrow$

$f(x) \in C \Leftrightarrow$

$f(x) \in D \Leftrightarrow$

$x \in \breve{f}(D)$

---

[theorem 2.30](#t_2_30)

Let A and B be sets and let $f:A\rightarrow B$ be a function;then

$i) \overline{f}:\rho(A)\rightarrow \rho(B)\ is\ a\ function$

$ii) \breve{f}:\rho(B)\rightarrow \rho(A)\ is\ a\ function$

这里书中省略了关键信息

i).$\overline{f}$中preimage为A的子集，对应的image当然是$\overline{f}(A)$，即B的子集

证明$\overline{f}$是函数，只需证明$\overline{f}$满足F2（F1显然满足）。而F2性质可以轻易由**theorem 2.29(1)**得出

ii). 同上

---

[theorem 2.31](#t_2_31)

Let $f:A\rightarrow B$ be a function. let $\{C_i\}_{i\in I}$ be a family of subclasses of A, and let $\{D_i\}_{i}$ be a family of subclasses of B, Then:

$i) \overline{f}(\bigcup_{i\in I}C_i) = \bigcup_{i\in I}\overline{f}(C_i)$

$ii) \breve{f}(\bigcup_{i\in I}C_i) = \bigcup_{i\in I}\breve{f}(C_i)$

$iii) \breve{f}(\bigcap_{i\in I}C_i) = \bigcap_{i\in I}\breve{f}(C_i)$

证明1）

$y \in \overline{f}(\bigcup_{i\in I}C_i)$

$\exists x \in \bigcup_{i\in I}C_i, f(x) = y$

则由vE，得到$y \in \bigcup_{i\in I}\overline{f}(C_i)$

反之易证

证明ii)

同上

证明iii)

同上，只是改为&I

另外查看direct image与交集

如果$y \in \bigcap_{i\in I}\overline{f}(C_i)$

对于$\forall i \in I, \exists x, x_i\in C_i, f(x_i) = y$

而这里不一定能保证x_i全部相同

---

## exercise

### 2.4.1

1).

$\forall x \in C, \exists y \in \overline{f}(C), f(x) = y$

所以$x \in \breve{f}[y]$

2).

$\forall y \in \overline{f}[\breve{f}(D)]$

$\exist x \in \breve{f}(D), f(x) = y$

所以$y \in D, f(x) = y$

### 2.4.2

根据2.4.1，只需证明另一边即可

a).

$x \in \breve{f}[\overline{f}(C)]$

$\exists y \in \overline{f}(C), f(x) = y$

$\exists x_1 in C, f(x_1) = y$

由于f是单射，所以$x_1 = x$

$x \in C$

b).

$y \in D$

因为f是满射

$\exists x \in \breve{f}(D), f(x) = y$

$y \in \overline{f}[\breve{f}(D)]$

### 2.4.3

a).

$y \in \overline{f}(C) \land y \in \overline{f}(D)$

$\exists x_1 \in C, \exists x_2 \in D, f(x_1) = y = f(x_2)$

$x_1 = x_2$

$C = D$

b).

$x \in \breve{f}(C) \land x \in \breve{f}(D)$

因为f是满射，肯定有

$\exists y_1 \in C, \exists y_2 \in D, f(x) = y_1, f(x) = y_2$

$y_1 = y_2$

$C = D$

### 2.4.4

a)

f是单射

对于任意$C\subseteq A$，有

$C = \breve{f}\circ\overline{f}(C)$

所以$\breve{f}\circ\overline{f}$是identity function，同时满足双射

b)

同a)

### 2.4.5

因为$C \subseteq \breve{f}[\overline{f}(C)]$得证

### 2.4.6

a). f是injective，$\breve{f}\circ\overline{f}$是bijective，所以$\overline{f}$是injective

b). 同上

c). 同上

### 2.4.7

a). 同2.4.6.a

b). f是surjective，$\overline{f}\circ\breve{f}$是bijective，$\breve{f}$是injective

c). 同上

### 2.4.8

利用6，7的结果，易得

### 2.4.9

$x \in \breve{f}(C - D)$

$\exists y \in C, f(x) = y \land \forall y \in D, f(x) = y$

$\breve{f}(C) - \breve{f}(D)$

### 2.4.10

同样是利用上面的结论，injective和集合之间关系

