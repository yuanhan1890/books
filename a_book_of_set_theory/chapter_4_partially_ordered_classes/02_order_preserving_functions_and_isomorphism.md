[definition 4.10](#d_4_10)

Let A and B be partially ordered classes; a function $f:A\rightarrow B$ is said to be **increasing**, or **order-preserving**, if it satisfies the following condition: For every two elements $x, y\in A$

$x\leq y\Rightarrow f(x)\rightarrow f(y)$

We say that $f:A\rightarrow B$ is **strict increasing** if it satifies the following condition: For every two elements $x\in A$ and $y\in A$,

$x\lt y\Rightarrow f(x)\lt f(y)$

---

[definition 4.11](#d_4_11)

Let A and B be partially ordered classes; a function $f:A\rightarrow B$ is called an $isomorphism$ if it is bijective and satifies the following condition: For every two elements $x\in A$ nad $y\in A$

$x\leq y\Rightarrow f(x)\leq f(y)$

和increasing function区别在于bijective

---

[theorem 4.12](#t_4_12)

If $f:A\rightarrow B$ is an isomorphism, then

$x\lt y\Leftrightarrow f(x)\lt f(y)$

---

[theorem 4.13](#t_4_13)

Let A and B be partially ordered classes and let $f:A\rightarrow B$ be a bijective function. Then $f:A\rightarrow B$ is an isomorphism if and only if $f:A\rightarrow B$ and $f^{-1}:B\rightarrow A$ are increasing functions:

$f(x)\leq f(y)\Rightarrow f^{-1}(f(x))\leq f^{-1}(f(y)) \Rightarrow x\leq y$

---

[theorem 4.14](#4_1_14)

Let A,B, and C be partially ordered classes

i) The identity function $I_A:A\rightarrow A$ is an isomorphism

ii) If $f:A\rightarrow B$ is an isomorphism, then $f^{-1}:B\rightarrow A$ is an isomorphism

iii) If $f:A\rightarrow B$ and $g:B\rightarrow C$ are isomorphisms, then $g\circ f:A\rightarrow C$ is an isomorphism.

证明iii)

f和g是bijective，所以$g\circ f$也是bijective

$\forall x,y\in A, x\leq y\Rightarrow f(x)\leq f(y)\Rightarrow g(f(x))\leq g(f(y))$

---

[theorem 4.15](#t_4_15)

If A and B are partially ordered classes and there exists an isomorphism from A to B, we say that A is isomorphic with B.

isomorphic是partially ordered class之间的对等关系

由4.14中，isomorphic是reflexive、symmetric、transitive的

isomorphic用$A\approxeq B$表示

---

$f:A\rightarrow B$是isomorphism，则可以用

$x{\overset{f}{\longmapsto}}x'; x'=f(x)$

$x\lt y\Leftrightarrow x'\lt y'$

两个集合是isomorphic，则两者的line digram也一摸一样

---

**convex**

C是一个$partially\ ordered\ class$被称为$convex$

$a\in C\land b\in C\land a\leq x\leq b\Rightarrow x\in C$

---

## exercise

### 4.2.1

只需证明当$x=y\Rightarrow f(x)=f(y)$与$x\leq y\Rightarrow f(x)\leq f(y)$得出$x\lt y\Rightarrow f(x)\lt f(y)$

### 4.2.2

$\forall x,y \in C, x\leq y\Rightarrow f(x)\leq f(y)$

### 4.2.3

$\forall x_1\in A, y_1\in B,((x_1,y_1), x_1)\in p_1, ((x_2,y_2),x_2)\in p_1, (x_1, y_1)\leq (x_2, y_2)\Rightarrow x_1\leq x_2$

同理证明$p_2:A\times B\rightarrow B$是递增的

### 4.2.4

$a,b\in \breve{f}(C), x\in A, a\leq x\leq b,a\in A, b\in A$

$f(a)\leq f(x)\leq f(b), f(a),f(b)\in C\Rightarrow f(x)\in \breve{f}(C)$

$x\in C, x\in A$

### 4.2.5

$H: {(x,y): x\in A, y\in A, f(x)=f(y)}$

$a,b\in H_c, a\leq x\leq b, a=x=b, x\in H_c$

### 4.3.6

$\overline{f}(A=B$说明f是满射

$L\cup U = B, \breve{f}(L)\cup\breve{f}(U)=A$

$L\cap U=\empty$，假设$\breve{f}(L)\cap\breve{f}(U)\not=\empty$

$\exists x \in \breve{f}(L)\cap\breve{f}(U)$

$f(x)\in L, f(x)\in U$与$L\cap U$相悖

所以$\breve{f}(L)\cap\breve{f}(U)=\empty$

$\forall y_0\in L, \forall y\in B, y\leq y_0\Rightarrow y\in L$

$\forall x_0\in \breve{f}(L), f(x_0)\in L, \forall x\in A, x\leq x_0, f(x)\leq f(x_0), f(x)\in L,x\in \breve{f}(L)$

同理可证明U的性质

得证$(\breve{f}(L),\breve{f}(U))$是A中的cut

### 4.3.7

已证

### 4.3.8

a). 已证

b). 区别在于增加一个条件是f是isomorphism

### 4.3.9

构造$f: S_x\rightarrow S_{g(x)}$

$f: \{(x, y): (x, y)\in S, x\in S_x, y\in S_(g(x)) \}$

### 4.3.10

### 4.3.11

### 4.3.12




