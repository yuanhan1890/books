[definition 2.1](#t_2_1)

$A\ function\ from\ A\ to\ B\ is\ a\ triple\ of\ objects\ (f, A, B),$

$where\ A\ and\ B\ are\ classes\ and\ f\ is\ a\ subclass\ of\ A \times B\ with\ the\ following\ properties.$

$F1.\ \forall x\in A, \exists y\in B\ such\ that\ (x,y)\in f$

$F2.\ if\ (x, y_1)\in f\ and\ (x, y_2)\in f,\ then\ y_1 = y_2$

注意这里是任意classes，而非sets

---

[statement 2.2](#s_2_2)

$Every\ element\ x \in A\ has\ a\ uniquely\ determined\ image\ y\in B$

---

[theorem 2.3](#t_2_3)

$let\ A\ and\ B\ be\ classes\ and\ let\ f\ be\ a\ graph.$

$Then\ f: A \rightarrow B\ is\ a\ function\ if\ and\ only\ if$

$i)\ F2\ hold$

$ii)\ dom_f = A$

$iii)\ ran_f \subseteq B$

如果f是function，根据定义，f2自动成立

$a)$

$x \in dom_f$

$\exists y, (x, y) \in f$

$\exists y, (x, y) \in A \times B$

$x \in A$

$a)'$

$x \in A$

$\exists y, (x, y) \in f$

$x \in dom_f$

证明$range_B$只是前半部分能成立

---

[corollary](#c_2_4)

$if\ f:A\rightarrow B\ is\ a\ function,\ then\ by\ 2.3,$

$F2\ holds\ and\ dom_f = A;\ thus,\ if\ ran_f \subseteq C,\ then\ by 2.3,\ f: A\rightarrow C\ is\ a\ function$

---

[theorem 2.5](#d_2_5)

$Let\ f:\ A\rightarrow B\ and\ g:A\rightarrow B\ be\ functions.$

$Then\ f = g\ if\ and\ only\ if\ f(x) = g(x),\ \forall x \in A$

---

[definition 2.6](#2_6)

$A\ function\ f: A\rightarrow B\ is\ said\ to\ be\ injective\ if\ it\ has\ the\ following\ property$

$INJ.\ if (x_1, y)\in f\ and\ (x_2, y)\in f,\ then\ x_1 = x_2$

$INJ^\circ.\ if\ f(x_1)=f(x_2),\ then\ x_1=x_2.$

---

[definition 2.7](#d_2_7)

$SURJ.\ \forall y \in B,\ \exists x \in A, y = f(x)$

---

[definition 2.8](#d_2_8)

$A\ function\ f: A\rightarrow B\ is\ said\ to\ be\ bijective\ if\ it\ is\ both\ injective\ and\ surjective.$

---

[definition 2.9](#d_2_9)

$If\ there\ exists\ a\ bijective\ function\ f: A\rightarrow B,\ then\ we\ say\ that\ A\ and\ B\ are\ in\ one-to-one\ correspondence$

---

[definition 2.10](#d_2_10)

$Identity\ function:$

$Let\ A\ be\ a\ class;\ by\ the\ identity\ function\ on\ A\ we\ mean\ the\ function\ I_A: A \rightarrow A\ given\ by$

$I_A(x) = x, \forall x \in A$

$I_A = \{(x, x): x \in A\}$

---

[definition 2.12](#d_2_12)

$Inclusion\ function.\ Let\ A\ be\ a\ class\ and\ let\ B\ be\ a\ subclass\ of\ A.\ By\ the\ inclusion\ function\ of\ B\ in\ A.\ we\ mean\ the\ function\ E_b:B\rightarrow A\ given\ by$

$E_B(x) = x, \forall x \in B$

为什么inclusion function是injective（单射）?因为还有一个限制是$E_B(x) = x$

---

[definition 2.13](#d_2_13)

let 2 designate a class of two elements, say the class $\{0,1\}$. If A is a class and B is a subclass of A, the $characteristic\ function$ of B in A is the function $C_B: A \rightarrow 2 given by$

$C_B(x) = 0\ if\ x \in B, \forall x \in A$

$C_B(x) = 1\ if\ x \notin B, \forall x\in A$

---

[definition 2.14](#d_2_14)

Let $f:A\rightarrow B$ be a function and let C be a subclass of A. By the $restriction\ of\ f\ to\ C$ we mean the function $f_{[C]}:C\rightarrow B$ given by

$f_{[C]}(x) = f(x), \forall x \in C$

---

[theorem 2.15](#t_2_15)

If $f:B\cup C\rightarrow A$ is a function, then $f = f_[B] \cup f_[C]$

证明

$f(x) = y, x \in B \cup C$

$if x \in B, f_{[B]}(x) = y$

$if x \in C, f_{[C]}(x) = y$

$(x, y) \in f \Rightarrow (x, y) \in f_{[B]} \lor (x, y) \in f_{[C]}$

---

[theorem 2.16](#t_2_16)

Let $f_1:B\rightarrow A$ and $f_2:C\rightarrow A$ be functions, where $B \cap C = \empty$. if $f = f1 \cup f2$, then the following hold.

$i) f:B\cup C\rightarrow A\ is\ a\ function$

$ii) f_1 = f_{[B]}\ and\ f_2 = f_{[C]}$

$iii) if\ x \in B\ then\ f(x) = f_1(x),\ and\ if\ x \in C\ then\ f(x) = f_2(x)$

i)

$x \in B \cup C$

$x \in B, \exists y, (x, y) \in f_1$

$x \in C, \exists y, (x, y) \in f_2$

$\forall x \in B \cup C, \exists y \in A, (x, y) \in f_1 \cup f_2$

$x \in B \cup C, (x, y) \in f_1 \cup f_2$

$如果(x, y_1) \in f_1 \cup f_2, (x, y_2) \in f_1 \cup f_2$

由$B \cap C = \empty$可知,x必定同时属于$f_1$或者$f_2$，由$f_1,\ f_2$ F2特性，可以知道$f: B\cup C \rightarrow$同样满足F2

ii)

已证

iii)

$[y = f(x)\ and\ x \in B] \Leftrightarrow y = f_1(x)$

$[y = f(x)\ and\ x \in C] \Leftrightarrow y = f_2(x)$


## exercise

### 2.2.1

### 2.2.2

$f: A\rightarrow B$

$f_{[C]}:C\rightarrow B$

假设，存在两个元素属于C指向同一个image，那么这两个元素也是A的元素，与A到C是单射相悖

### 2.2.3

f就是identity function

### 2.2.4

$(x, y) \in g$

因为对于$f: A \rightarrow B$，$x \in A$，所以$\exists y, (x, y1) \in f$。

又因为$f \subseteq g$，所以$(x, y1) \in g$

由函数定义$y1 = y$

所以$(x, y)\in f$

则$g \subseteq f$

$f = g$

### 2.2.5

$The\ product\ of\ f\ and\ g\ is\ the\ function\ defined\ as\ follows:$

$[f\cdot g](x, y) = (f(x), g(y)) \forall (x, y) \in A \times C$

F1显而易见成立

F2

$(f\cdot g)(x, y) = (a_1, b_1)$

$(f\cdot g)(x, y) = (a_2, b_2)$

分别由f和g的f2特性，证明$f\cdot g$的f2特性

### 2.2.6

已证$f \subseteq f_{[B]} \cup f_{[C]}$

$(x, y) \in f_{[B]} \cup f_{[C]}$

如果$(x, y) \in f_{[B]}$，则$(x, y) \in f$

如果$(x, y) \in f_{[C]}$，则$(x, y) \in f$

所以$f \subseteq f_{[B]} \cup f_{[C]}$

### 2.2.7
