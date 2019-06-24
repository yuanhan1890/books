将cartesian product扩展到indexed family $\{A_i\}_{i\in I}$，这里I可以是任意class，可以无限，也不必有序

an ordered n-tuple may be regarded as a function (whose domain is I) which maps each element $i \in I$ onto an element $a_i$ in $A_i$

如此$f(x)$表现形式为:

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c}
   x & f(x) \\ \hline
   1 & a_1 \\
   2 & a_2 \\
   \vdots & \\
   n & a_n
\end{array}
$$

---

[definition 2.32](#d_2_32)

Let $\{A_i\}_{i\in I}$ be an indexed family of classes; let:

$A = \bigcup_{i\in I}A_i$

The product of the classes $A_i$ is defined to be the class:

$\prod_{i\in I}A_i = \{f: f: I\rightarrow\ A\ is\ a\ function, and f(i)\in A_i, \forall i \in I\}$

---

$I = \{1,2\}, A_1=\{a, b\}, A_2=\{c, d\}$

$\prod_{i\in I}A_i = \{\{(1, a), (2, c)\}, \{(1, a), (2, d)\}, \{(1, b), (2, c)\}, \{(1, b), (2, d)\} \}$

---

[definition 2.33](#d_2_32)

If a is an element of $\prod_{i\in I}A_i$ and $j\in I$, we agree that $a_j$ will have the same meaning as $a(j)$; we will call $a_j$ the j-coordinate of $a$

Let $A = \prod_{i\in I}A_i$; corresponding to each index $i\in I$, we define a function $p_i$ from $A$ to $A_i$ by

$p_i(a) = a_i, \forall a\in A$

The function $p_i$ is called the i-projection of $A$ to $A_i$

---

[definition 2.34](#d_2_34)

If $A$ and $B$ are arbitrary classes, the symbol $B^A$ refers to the class of all functions from $A$ to $B$.

---

[theorem 2.35](#t_2_35)

If A is a set, the $2^A$ and $\rho(A)$ are in one-to-one correspondence.

证明

构造一个函数$\gamma:\rho(A)\rightarrow 2^A$

$\gamma(B) = C_B, \forall B \in \rho(A)$

$C_B(x) = 0, a \notin A$

$C_B(x) = 1, x \in A$

再证明其满足双射即可

---

## exercise

### 2.5.1

$A^B = \{\{(a, 1), (b, 1)\}, \{(a, 1), (b, 2)\}, \{(a, 1), (b,3)\}, \{(a, 2), (b, 1)\}, \dots\}$

### 2.5.2

$f \in \prod_{i\in I}B_i$

$f: I\rightarrow A, f(i)\in A_i, \forall i\in I$

$f \in A^I$

### 2.5.3

$f \in \prod_{i\in I}A_i$

$f: I\rightarrow A, f(i)\in A_i, \forall i\in I$

$A\subseteq B \Rightarrow$

$f: I\rightarrow A, f(i)\in B_i, \forall i\in I$

$f \in \prod_{i\in I}B_i$

### 2.5.4

同3，这是$\Leftrightarrow$关系

### 2.5.5

只是拆分掉f

### 2.5.6

仍是交并集

### 2.5.7

证明$左\Rightarrow 右$

$f \in \bigcap_{i\in I}\breve{p_i}(B_i)$

$f \in \breve{p_i}(B_i), \forall i \in I$

$f \in \prod_{i\in I}B_i$

证明$右\Rightarrow 左$

同上，就是定义性质

### 2.5.8

打印错误

### 2.5.9

$f \in A^C \lor f \in B^C$

前者$f\in A^C$

$\forall x \in D, D\subseteq C, \exists y\in A, f(x) = y$

$\forall x\in D, \exists y\in A\cup B, f(x) = y$

$f \in (A \cup B)^C$

后者证明一样

得证$f \in (A \cup B)^C$

### 2.5.10

同9，只是应用&E

### 2.5.11

同9，应用&I

### 2.5.12

$x \in A^B \Rightarrow x \in B\times A$

$\rho(A^B) \subseteq \rho(B\times A)$

$A^B\in \rho(A^B)$

### 2.5.13

将2，12结合
