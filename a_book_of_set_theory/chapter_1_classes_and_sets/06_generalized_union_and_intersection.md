[definition indexed family of classes](#d_1_ifc)

$By\ an\ indexed\ family\ of\ classes,\ \{A_i\}_{i\in I},$

$we\ mean\ a\ graph\ G\ whose\ domain\ is\ I;\ for\ each\ i \in I\ we\ define\ A_i\ by$

$A_i = \{x: (i, x) \in G\}$

比如

$I = \{1, 2\}, A_1 = \{a, b\}, A_2 = \{c, d\}, then,\ formally, \{A_i\}_{i \in I}\ is\ graph\ G:$

$G = \{(1, a), (2, c), (1, b), (2, d)\}$

很容易理解成

$\{A_i\}_{i \in I} = \{\{a, b\}, \{c, d\}\}$

但是仔细一想，这样就没有`indexed`的意义了

实际上，上面错的理解应该是另一个写法

$\{\{a, b\}, \{c, d\}\} = \{A_i: i \in I\}$

---

[definition 1.39](#d_1_39)

the union of the classes $A_i$

${\bigcup\atop{i\in I}}A_i = \{x: \exists j \in I, x \in A_j\}$

the intersection of the classes $A_i$

${\bigcap\atop{i\in I}}A_i = \{x: \forall j \in I, x \in A_j\}$

---

[theorem 1.40](#t_1_40)

$let\ \{A_i\}_{i \in I}\ be\ an\ indexed\ family\ of\ classes$

i)

$if\ A_i \subseteq B\ for\ every\ i \in I,\ then\ {\bigcup\atop{i \in I}}A_i \subseteq B$

ii)

$if\ B \subseteq A_i\ for\ every\ i \in I,\ then\ B\subseteq {\bigcap\atop{i \in I}}A_i$

---

[theorem 1.41](#t_1_41) generalized deMorgan's Laws

i)

$({\bigcup\atop {i \in I}})' = {\bigcap\atop {i \in I}}A_i'$

ii)

$({\bigcap\atop {i \in I}})' = {\bigcup\atop {i \in I}}A_i'$

---

[theorem 1.42](#t_1_42) generalized distributive laws

i)

$({\bigcup\atop{i \in I}}A_i) \cap ({\bigcup\atop{j\in J}}B_j) = {\bigcup\atop{(i, j)\in I \times J}}(A_i \cap B_j)$

ii)

$({\bigcap\atop{i \in I}}A_i) \cup ({\bigcap\atop{j\in J}}B_j) = {\bigcap\atop{(i, j)\in I \times J}}(A_i \cup B_j)$

i)

$x \in ({\bigcup\atop{i \in I}}A_i) \cap ({\bigcup\atop{j\in J}}B_j)$

$x \in ({\bigcup\atop{i \in I}}A_i) \land x \in ({\bigcup\atop{j\in J}}B_j)$

$\exists i \in I, x \in A_i$

$\exists j \in J, x \in B_j$

$\exists (i, j) \in I \times J, x \in A_i \cap B_j$

$x \in {\bigcup\atop{(i, j)\in I \times J}}(A_i \cap B_j)$

ii)

$x \in ({\bigcap\atop{i \in I}}A_i) \cup ({\bigcap\atop{j\in J}}B_j)$

$x \in ({\bigcap\atop{i \in I}}A_i) \lor x \in ({\bigcap\atop{j\in J}}B_j)$

$\forall i \in I, x \in A_i \Rightarrow \forall i \in I, \forall j \in J, x \in A_i \cup B_j$

$\forall j \in J, x \in B_j \Rightarrow \forall i \in I, \forall j \in J, x \in A_i \cup B_j$

直接下来由vE推导

---

[theorem 1.43](#t_1_43) let $\{G_i\}_{i\in I}$ be a family of graphs. Then:

i)

$dom({\bigcup\atop{i\in I}}G_i) = {\bigcup\atop{i\in I}}(dom{G_i})$


ii)

$ran({\bigcup\atop{i\in I}}G_i) = {\bigcup\atop{i\in I}}(ran{G_i})$

i)

$x \in dom({\bigcup\atop{i\in I}}G_i)$

$\exists y, (x, y) \in {\bigcup\atop{i\in I}}G_i$

$\exists y, \exists i \in I, (x, y) \in G_i$

$\exists i \in I, x \in dom{G_i}$

ii)

同ii

---

[definition 1.44](#d_1_44)

${\bigcup\atop{A\in \Lambda}}=\{x: x \in A\ for\ some\ A \in \Lambda\}$

---

[definition 1.45](#d_1_45)

${\bigcap\atop{A\in \Lambda}}=\{x: x \in A\ for\ all\ A \in \Lambda\}$

---

## exercise

### 1.6.1 ~ 1.6.4

已证

### 1.6.5

没什么好证的

### 1.6.6

a)

$(x, y) \in ({\bigcap\atop{i\in I}}A_i) \times ({\bigcap\atop{j\in J}}B_j)$

$x \in {\bigcap\atop{i\in I}}A_i \land y \in {\bigcap\atop{j\in J}}B_j$

$\forall (i, j) \in I \times J, (x, y) \in A_i \times B_j$

$(x, y) \in {\bigcap\atop{(i, j)\in I \times J}}(A_i \times B_j)$

b)

同a)，只是由forall改为了exists

### 1.6.7

$y \in {\bigcap\atop{j \in J}}B_j$

$\forall j \in J, y \in B_j$

$\forall i \in I, \exists j \in J, y \in B_j, y \in A_i$

$\forall i \in I, y \in A_i$

### 1.6.8

a)

$({\bigcup\atop{i \in I}}A_i) - ({\bigcup\atop{j \in J}}B_j)$

$({\bigcup\atop{i \in I}}A_i) \cap ({\bigcup\atop{j \in J}}B_j)'$

$({\bigcup\atop{i \in I}}A_i) \cap ({\bigcap\atop{j \in J}}B_j')$

${\bigcup\atop{i \in I}}(Ai \cap ({\bigcap\atop{j \in J}}B_j'))$

$\exist i \in I, x \in Ai \cap ({\bigcap\atop{j \in J}}B_j'))$

$\forall j \in J, x \notin B_j$

$\forall j \in J, x \in A_i - B_j$

b)

同a)

### 1.6.9

$A \subseteq {\bigcup\atop{i\in I}}B_i$

$\forall x \in A, x \in {\bigcup\atop{i\in I}}B_i$

$\forall x \in A, \exists i \in I, x \in B_i$

$\forall x \in A, \exists j \in J, x \in C_j$

$\forall x \in A, \exists (i, j) \in I \times J, x \in (B_i \cap C_j)$

$\forall x \in A, x \in \{B_i \cap C_j\}_{(i,j)\in I\times J}$

### 1.6.10

$\bigcup_{\bigcup_p} = \{u,v,w,x,y\}$

$\bigcap_{\bigcap_p} = \empty$

$\bigcup_{\bigcap_p} = \{w, x\}$

$\bigcap_{\bigcup_p} = \{w\}$

### 1.6.11

$x \in \bigcap_{A \bigcup B}$

$\forall i \in I x \in A_i \lor \forall j \in J x \in B_j$

$x \in (\bigcap_A)\cup(\bigcap_B)$

### 1.6.12

没什么好证的
