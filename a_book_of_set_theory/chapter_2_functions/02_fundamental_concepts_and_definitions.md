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

$f_1: A\rightarrow B, f_2: C\rightarrow D$

$f: A\cup C\rightarrow B\cup D$

证明injective

假设存在$(x_1, y_1)\in f, (x_1, y_2)\in f$不相等

如果$y_1 \in B \land y_2 \in D$

$(x_1, y_1) \in f_1 \land (x_1, y_2) \in f_2$

则$x_1 \in dom_{f_1} \land x_1 \in dom_{f_2}$与$A \cap C =\empty$相悖

同理可证$y_1 \in D \land y_2 \in B$不成立

所以$y_1 \in B \land y_2 \in B$或者$y_1 \in D \land y_2 \in D$成立

如果$y_1 \in B \land y_2 \in B$成立，因为$f_1$是单射，所以$y_1 = y_2$

同理对于$f_2$

证明surjective

假设存在$y \in ran_f \land \forall x \in dom_f, (x, y) \notin f$

$y \in B \lor y \in D$

如果$y \in B$

$\exists x \in A, (x, y) \in f1, (x,y)\in f$

同理可得$y\in D$情况

原先假设不成立

得证$f$是bijective，双射

### 2.2.8

证明h是function

证明f1

$x \in dom_h$

$x \in dom_f \cup x \in dom_g$

如果$x \in dom_f$，存在$y \in ran_f, (x, y)\in f, (x, y) \in f$

同理$x\in dom_g$

证明f2

$(x, y1) \in h \land (x, y2) \in h$

$x \in dom_h$

$x \in B \lor x \in C$

当$x \in B$时

如果$(x, y1) \in f_1 \land (x, y2) \in f_1$，由$f_1$函数性质成立f2

如果$(x, y1) \in f_1 \land (x, y2) \in f_2$

则$x \in B \cap C$，因为$f_{B \cap C} = g_{B \cap C}，所以y1 = y2$

同样成立f2

同理可证$x \in C$的情况

得证$h$是function

$(x, y) \in f$

$x \in B, (x, y) \in h_{[B]}$

$f \subseteq h_{B}$

$(x, y) \in h_{B}$

1. $x \in B \land x \notin C$

$(x, y) \in f$

2. $x \in B \cap C$

$(x, y) \in g \lor (x, y) \in f$

根据$f_{[B \cap C]} = g_{[B \cap C]}$

$(x, y) \in f$

$h_{[B]} \subseteq f$

得证$f = h_{[B]}$

同理可证$g = h_{[C]}$

### 2.2.9

### 2.2.10

假设$\exists G_1 \subseteq G, (x, y_1) \in G_1 \land (x, y_2) \in G_1 \land y_1 \not= y_2$

因为$(x, y_1) \in G \land (x, y_2) \in G$，所以由G的functional graph特性，$y_1 = y_2$，与假设相悖

### 2.2.11

$(H \cap J) \circ G = (H \circ G)\cap (J \circ G)$

证明$G is functional graph \Rightarrow expression$

1. 证明$(H \cap J) \circ G \subseteq (H \circ G) \cap (J \circ G)$

$(x, y) \in (H \cap J) \circ G$

$\exists z, (x, z) \in G \land (z, y) \in H \cap J$

$(z, y) \in H \land (z, y) \in J$

$(x, z) \in G \land (z, y) \in H$

$(x, y) \in H \circ G$

同理 $(x, y) \in J \circ G$

得证，并且由1的证明过程看出，1成立跟G的性质无关

2. 证明$(H \cap J) \circ G \subseteq (H \circ G) \cap (J \circ G)$

$(x, y) \in (H \circ G) \cap (J \circ G)$

$(x, y) \in H \circ G$

$\exists z_1, (x, z_1) \in G \land (z_1, y) \in H$

同理 $\exists z_2, (x, z_2) \in G \land (z_2, y) \in J$

由于G是functional graph

$(x, z_1) \in G \land (x, z_2) \in G$

所以$z_1 = z_2 = z$

$(z, y) \in H \land (z, y) \in J$

$(x, y) \in (H \cap J) \circ G$

证明$expression \Rightarrow g\ is\ functional\ graph$

### 2.2.12

证明$g\ is\ injective \Rightarrow G \circ (H \cap J) = (G \circ H) \cap (G \circ J)$

1.$G \circ (H \cap J) \subseteq (G \circ H) \cap (G \circ J)$自动成立

2.$\;$

**证明**

$(x, y) \in (G \circ H) \cap (G \circ J)$

$\exists z_1, (x, z_1) \in H, (z_1, y) \in G$

$\exists z_2, (x, z_2) \in J, (z_2, y) \in G$

因为G是单射，所以$(z_1, y) \in G \land (z_2, y) \in G \Rightarrow z_1 = z_2$

$(x,z) \in H \land (x, z) \in J$

$(x,y) \in G \circ (H \cap J)$

**证明**

由$(G \circ H) \cap (G \circ J) = G \circ (H \cap J)$推导出$G$是单射，其中G是functional graph，并且H和J是任意graph

$(x, y) \in G \circ H \land (x, y) \in G \circ J$

$\exists z_1, (x, z_1) \in H \land (z_1, y) \in G$

$\exists z_2, (x, z_2) \in J \land (z_2, y) \in G$

如果$z_1 = z_2$，则为满足任意H和J，G是单射

如果$z_1 \not= z_2$

$(x, y) \in G \circ (H \cap J)$

$(x, z_0) \in (H \cap J)$

如果H包含$(x, z0)$但是不包含$(x, z_2)$，上述不成立，矛盾