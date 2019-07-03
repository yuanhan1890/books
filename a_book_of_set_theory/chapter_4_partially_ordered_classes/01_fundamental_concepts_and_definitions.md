By a $partially ordered class$ we mean a pair of objects $\lang A, G\rang$

A is a $class$

G is an order relation in $A$

如果A是set，那就是$partially ordered set$，平平无奇

$x\leq y，(x, y)\in G$，$\lt$并不是order relation，而是strict order relation

---

[definition 4.1](#d_4_1)

Let A and B be partially ordered classes; by the lexicographic ordering of $A\times B$; we mean the following order relation in $A\times B$:

If $(a_1,b_1)\in A\times B$ and $(a_2, b_2)\in A\times B$, then we let $(a_1,b_1)\leq (a_2,b_2)$ if and only if

i) $a_1\lt a_2$ or

ii) $a_1=a_2\ and\ b_1 \leq b_2$

这就是字典排序的方法

---

[definition 4.2](#d_4_2)

反字典排序，只是先比较b，后比较a而已

---

[definition 4.3](#d_4_3)

Let A be a partially ordered class. Two elements x and y in A are said to be $comparable$ if either $x\leq y$ or $y\leq x$; otherwise, they are said to be $imcomparable$

---

[definition 4.4](#d_4_4)

Let A be a partially ordered class, and let B be an arbitrary subclass of A. If every two elements of B are comparable, then we call B a $fully ordered subclass$ of A, or a $linearly ordered$ subclass of A, or, more commonly, a $chain$ of A.

这就是为什么加一个$partially$的原因，因为不是任意在A中的两个元素都可以进行比较

---

[definition 4.5](#d_4_5)

Let A be a partially ordered class and suppose a \in A. The $initial\ segment\ of\ A\ determined\ by\ a$ is the class $S_a$, defined as follows:

$S_a=\{x\in A: x\lt a\}$

---

[Theorem 4.6](#t_4_6)

Let A be a partially ordered class. If P is an initial segment of A, and Q is an initial segment of P, then Q is an initial segment of A.

易证

---

[definition 4.7](#d_4_7)

If A is a partially ordered class, then a $cut$ of A is pair $(L, U)$ of nonempty subclasses of A with the following properties:

i) $L\cap U=\empty\ and\ L\cup U = A$

ii) If $x\in L$ and $y\leq x$, then $y\in L$

iii) If $x\in U$ and $y\geq x$, then $y\in U$

---

数学中最重要的排序关系是$\subseteq$