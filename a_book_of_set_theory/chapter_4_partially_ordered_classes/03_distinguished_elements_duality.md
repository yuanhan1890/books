definition 4.18

$\forall x\in A, if\ x\geq m, then\ x = m$

则m最称为**maximal element**

类似有**minimal element**

$\forall x\in A, if\ x\leq n, then\ x=n$

---

**greatest element**则是需要具有可以和全部元素比较的性质，而**maximal element**却不需要

---

upper bound of B in A: $an\ element\ a\in A, \forall x\in B, a\geq x$

the class of all the upper bounds of B will be denoted by $v(B)$

the class of all the lower bounds of B will be denoted by $\lambda(B)$

---

$sup_AB, inf_AB$ if they exist, are unique

---

$\lambda(\empty)=A, inf{\empty}=b$, b is the least element of A.$sup{\empty}=a$, a is the greatest element of A.

---

**duality**

G是A上的order relation，则$G^{-1}$也是A上的order relation

那么$\lang A, G\rang$和$\lang A,G^{-1}\rang$在各种性质上对称

---

theorem 4.28

If A has a greatest element a, and B has a greatest element b, and $A\subseteq B$, then $a\leq b$

因为duality，所以lowerest也有类似性质，但是无需证明

---

theorem 4.29

$B\subseteq C\Rightarrow v(C)\subseteq v(B)$

证明

$x\in v(C)\Rightarrow x\leq y,\forall y\in B\Rightarrow x\leq y,\forall y\in C\Rightarrow x\in v(B)$

$v(C)\subseteq v(B)$

根据duality

$B\subseteq C\Rightarrow \lambda(C)\subseteq \lambda(B)$

---

theorem 4.30

$B\subseteq A, C\subseteq A, sup_AB\leq sup_AC$

---

theorem 4.31

$B\subseteq A, B\subseteq v(\lambda(B))$

证明

$x\in B, \forall y\in \lambda(B), y\leq x, x\geq y, x\in v(\lambda(B))$

---

Lemma 4.32

$B\subseteq A, \lambda(B)$ has a sup in A, Then

B has an inf in A, and $inf\ B=sup\ \lambda(B)$

证明

$a\in sup\ \lambda(B)$

$b\in B, \forall c\in \lambda(B), c\leq b;$ b是$\lambda(B)$的upper bound; $a\leq b$，这对于任意B中的元素都成立，所以$\forall b\in B, a\leq b$，a属于B的lower bound

$\forall d\in \lambda(B), a\in sup\ \lambda(B), a\geq d$

所以$a = inf\ B$

---

definition 4.33

Let A be a partially ordered class. If every nonempty subclass of A that is bounded above has a sup, then A is said to be conditionally complete.

任意A子集都有inf，A同样是contionally complete

---

theorem 4.34

$任意子集都有sup \Leftrightarrow 任意子集都有inf$

由$B\subseteq A, inf\ B =sup\ \lambda(B)$，B同样存在inf

---

## exercise

### 4.3.1

B中任意元素都小于b，而$b\in A$，所以$b = sup\ B$

### 4.3.2

$v(B)\subseteq v(\lambda(v(B))) \Leftarrow$

$B\subseteq \lambda(v(B))$

### 4.3.3

$B\subseteq B\cup C, C\subseteq B\cup C$

$\lambda(B)\cap \lambda(C) \subseteq \lambda(B\cup C)$

$\forall a\in \lambda(B\cup C) \Rightarrow$

$\forall x\in B\cup C, x\leq a \Rightarrow$

$\forall x\in B, x\leq a, a\in \lambda(B) \Rightarrow$

$\forall x\in C, x\leq a, a\in \lambda(C) \Rightarrow$

$a \in \lambda(B)\cap \lambda(C)$

### 4.3.4

已证$b\in v(B)\cap \lambda(v(B))$

假设还有另一个元素c，$c\in v(B)\cap \lambda(v(B))$

$c\in v(B), c\geq b$

$c\in \lambda(v(B)), \forall x\in v(B), x\geq c$

$b\in v(B), b\geq c$

$b = c$

### 4.3.5

