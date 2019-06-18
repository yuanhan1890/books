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

证过很多遍了

### 1.7.4

只需证明${\bigcap\atop{i\in I}}A_i$是之前集合的子集便可

### 1.7.5

$\bigcup_{\bigcup_G}$

不规范证明, 假设$G \subseteq dom_G \times range_G$

$\bigcup_G$是原$dom_G$的singleton，加上一个$\{\{x, y\}: x \in dom_G \land y \in range_G \}$的子集，这两个集合的并集

对于上面特殊的子集，对于任意x，都可以找到一个y，使$\{x, y\}$属于这个集合

$\bigcup_{\bigcup_G}$则是$dom_G$和$range_G$的并集

所以$dom_G$和$range_G$都是集合

### 1.7.6

如果G是$A \times B$的子集，那么$G^{-1}$是$B \times A$的子集

$G \circ H$则是$dom_H \times ran_G$的子集

### 1.7.7

$\rho(r) = \{\empty, \{a\}, \{b\}, \{a, b\}\}$

### 1.7.8

a)

$A \subseteq B$

$x \in A \Rightarrow x \in B$

$x \in \rho(A) \Rightarrow x \subseteq A$

$x \subseteq B \Rightarrow x \in \rho(B)$

b)

同上，证明$A \subseteq B$和$B \subseteq A$的情况

c)

$x \in \rho(A) \land x \in \rho(B)$

$x \subseteq A \land x \in \subseteq B$

$对于任意元素a属于x，则必定属于A \cap B$

$x \subseteq A \cap B$

d)

c)使用&I, d)使用vE

### 1.7.9

a)

$x \in {\bigcup}(\rho(\Lambda))$

$x = x_1, x1 \subseteq \Lambda$

$x \in \Lambda$

$x \in x1, x1 \subseteq \Lambda$

$x \in {\bigcup}(\rho(\Lambda))$

b)

$\empty \in \rho(\Lambda)$

c)

同a)

### 1.7.10

$\rho(\empty) = \{ \empty\}$

$\rho(\rho(\empty)) = \{\empty, \{\empty\}\}$

$\rho(\rho(\rho(\empty))) = \{\empty, \{\empty\}, \{\{\empty\}\}, \{\empty, \{\empty\}\}\}$