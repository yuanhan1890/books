[definition 3.7](#d_3_7)

Let A be a set; by a $partition$ of A we mean a family $\{A_i\}_{i\in I}$ of nonempty subsets of A with the following properties:

$P1. \forall i,j\in I, A_i \cap A_j = \empty \lor A_i = A_j$

$P2. A = \bigcup_{i\in I}A_i$

$P1^\circ. If\ \exists x\in A_i\cap A_j, then\ A_i = A_j$

$P2'. A\subseteq \bigcup_{i\in I}A_i$

$P2^\circ. If\ x\in A, then\ x\in A_i for\ some\ i\in I$

G是定义A的等价关系，$(x, y)\in G$写做$x{\sim\atop{G}}y$

---

[definition 3.8](#d_3_8)

Let A be a set and Let G be equivalence relation in A. If $x\in A$, then the equivalence class of x modulo G is the set $G_x$ defined as follows:

$G_x =\{y\in A: (y,x)\in G\}=\{y\in A:y{\sim\atop{G}}x\}$

$G_x$ also denoted by the symbols $A_x$, $[x]$, $x/G$

---

[Lemma 3.9](#l_3_9)

Let G be an equivalence relation in A. Then

$x\sim y$ if and only if $G_x = G_y$

---

[theorem 3.10](#t_3_10)

Let A be a set, Let G be an equivalence relation in A, and let $\{G_x\}_{x\in A}$ be a family of all the equivalence classes modulo G. Then

$\{G_x\}_{x\in A}$ is partitiion of $A$.

证明是一个集合的partition就是证明满足partitiion的两个性质

---

[theorem 3.11](#t_3_11)

Let A be a set, let $\{A_i\}_{i\in I}$ be a partition of A, and let G be the set of all pairs $(x, y)$ of elements of A such that x and y in the same member of partition;that is,

$G = \{(x, y): x\in A_i and\ y\in A_i for\ some\ i \in A\}$

Then G is an equivalence relation in A, and $\{A_i\}_{i\in I}$ is the partition induced by G. G is called the equivalence relation corresponding to $\{A_i\}_{i\in I}$

所有对等关系都是对A的划分，所有划分都对应着对等关系

---

$quotient\ set$: the set of equivalence classes modulo G is called quotient set of A by G, denoted by $A/G$

## exercise

### 3.3.1

证明P1.

$\exists x, x \in B_i\cap B_j$

$\forall m \in B_i, \exists q, m = x + 5q$

$m \in B_j \Rightarrow$

$B_i \subseteq B_j$

同理对于$B_j \subseteq B_i$

$B_i = B_j$

证明P2.

$x \in Z$

$\forall m \in Z, \exists q, q = (m - x) / 5$

$x \in B_m for\ some\ m\in Z$

$Z \subseteq \bigcup_{m\in Z}B_m$

### 3.3.2

a)

P1. $\exists x_0 \in R, (x_0, y_0) \in B_i\cap B_j$

$i = j = y_0 - x_0$

$\forall (x, y) \in B_i, y = x + i = x + j \Rightarrow (y, x) \in B_j$

P2. $\forall (x, y) \in R\times R, \exists r = y - x \in R, (x, y)\in B_{y-x} \Rightarrow R\times R\subseteq \bigcup_{i\in R}B_i$

对等关系是按线来划分，所有$G_i$都在一条直线上

b)

同上，所有$G_i$都在一个半径为i的圆边上

### 3.3.3

a)

分别证明三个性质即可

b，c)

同上

### 3.3.4

$H\cap J$对应对等关系是$G = \{[(a, b), (c, d)]: a = c \land b = d\}$

$(R\times R)/{H\cap J}$为$\{\{\{x, y\}\}: x \in R, y\in R\}$

### 3.3.5

$[(a, b), (c, d)] \in H\circ J$

$\exists (g, h) \in R\times R, 使g =\frac{a + c + d - b}{2}, h=\frac{c + d + b - a}{2}$

$a - b = g - h \land g + h = c + d$成立

$[(a, b), (g, h)) \in H, [(g, h), (c, d)] \in J$

$[(a, b), (c, d)] \in J\circ H$

$H\circ J \subseteq J\circ H$

同理可证$J\circ H \subseteq H\circ J$

$H\circ J=J\circ H$

equivalence classes modulo $H\circ J$是任意两条平行线相交于任意直线$y=-x+k, k\in R$的两点集合

### 3.3.6

a)

三个性质易证

b)

$(l1, l2) \in H\circ G$

$\exists l3 \in L, (l1, l3)\in G, (l3, l2) \in H$

l3与l2垂直，与l1平行，所以l1与l2垂直

$(l1, l2) \in H$

c)

定了一种关系：平行或者垂直

### 3.3.7

易证$I_A$以及$A\times A$满足三个性质

划分都是$(x, y)$的singleton

### 3.3.8

利用$(x, y)$是有序对

### 3.3.9

P1.

如果$\exists i, j\in I, x \in \breve{f}(B_i) \cap \breve{f}(B_j)$

$f(x) \in B_i \land f(x) \in B_j$

如果$f(x) = f(x)$

$B_i = B_j$

P2.

$x \in A, f(x)\in B_i, for\ some\ i\in I$

### 3.3.10

同上

### 3.3.11

$(x, y) \in (G\cap H)_x$

$x{\sim\atop{G}}y \land x{\sim\atop{H}}y$

$(x, y)\in G_x \land (x, y)\in H_x$

### 3.3.12

同上