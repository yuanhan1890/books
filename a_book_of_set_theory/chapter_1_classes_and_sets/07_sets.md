[definition 1.48](#d_1_48)

$if\ X \in Y,\ for\ some\ class\ Y,\ then\ X\ is\ a\ set$

$if\ X \notin Y, for\ every\ class\ Y, then\ X\ is\ a\ proper\ class$

---

接下来就是保证各个集合便捷操作不会产生proper class

[axiom A3](#a_3) $Every\ subclass\ of\ a\ set\ is\ a\ set.$

事实上zemerlo就是通过这个来保证不会将proper class划分到sets之中，从而避免悖论

---

[axiom A4](#a_4) $\empty\ is\ a\ set$

---

[axiom A5](#a_5) $if\ a\ and\ b\ are\ sets,\ then\ \{a, b\}\ is\ a\ set$

注意这些是公理，是不需要证明的

---

[definition 1.49](#d_1_49)

$Let\ A\ be\ a\ set;\ by\ the\ power\ set\ of\ A\ we\ mean\ the\ class\ of\ all\ the\ subsets\ of\ A.$

$In\ symbols\, the\ power\ set\ of\ A\ is\ the\ class:$

$\rho(A) = \{B: B\subseteq A\}$

powerset只是另外一种扩增set的方式

---

[axiom A6](#a_6)

$if\ \Lambda\ is\ a\ set\ of\ sets,\ then\ {\bigcap\atop{A \in \Lambda}}A\ is\ a\ set$

---

[axiom A7](#a_7)

$if\ A\ is\ a\ set,\ then\ power\ set\ of\ A\ is\ a\ set.$

---

[axiom the axiom of foundation](#a_8)

$if\ A\ is\ any\ set,\ there\ is\ an\ element\ a\in A\ such\ that\ a\cap A=\empty$

这里用到了set，就已经表示这是set才有的特性

---

[theorem 1.51](#t_1_51)

$if\ A\ and\ B\ are\ sets,\ then\ A \times B\ is\ a\ set$

因为$A \times B \subseteq \rho(\rho(A \cup B))$，所以得证

---

## exercise

### 1.7.1

由 $A - B \subseteq A$ 得证

$A + B = (A - B) \cup (B - A)$，同上，两个都是A或者B的子集

### 1.7.2

如果两个proper class的并集是set，那么$A \cup B$是某个集合的子集

则A是某个集合的子集，A是set，相悖

### 1.7.3

