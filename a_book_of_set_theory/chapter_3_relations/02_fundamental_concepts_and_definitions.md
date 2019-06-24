[definition 3.1](#d_3_1)

Let A be a class; by a $relation\ in\ A$ we mean an arbitrary subclass of $A \times A$

---

[definition 3.2](#d_3_2)

Let G be a relation in A; then

反身: G is called $reflexive$ if $\forall x \in A, (x, x) \in G$

对称: G is called $symmetric$ if $(x, y)\in G \Rightarrow (y, x)\in G$

反对称: G is called $antisymmetric$ if $(x, y)\in G$ and $(y,x)\in G \Rightarrow x = y$

传递性: G is called $transitive$ if $(x, y)\in G$ and $(y,z)\in G \Rightarrow (x, z)\in G$

---

[definition 3.3](#d_3_3)

$The\ diagonal\ graph\ I_A$ is defined to be the class $\{(x, x): x\in A\}$

显而易见，如果G具有反身性，则$I_A\subseteq G$

---

[theorem 3.4](#t_3_4)

Let G be a relation in A.

i) G is symmetric if and only if $G = G^{-1}$

ii) G is antisymmetric if and only if $G \cap G^{-1} \subseteq I_A$

iii) G is transitive if and only if $G\circ G \subseteq G$

证明

i). $(x, y) \in G \Leftrightarrow (y, x)\in G \Leftrightarrow (x, y)\in G^{-1}$

ii). $(x, y) \in G\cap G^{-1} \Rightarrow x = y$

iii). $(x, y)\in G\circ G \Rightarrow \exists z, (x, z) \in G, (z, y) \in G \Rightarrow (x, y) \in G$

---

[definition 3.5](#d_3_5)

A relation is called an $equivalence\ relation$ if it is reflexive, symmetric, and transitive.

A relation is called an $order\ relation$ if it is reflexive, antisymmetric, and transitive.

A relation is called a $strict order relation$ if it is irreflexive, asymmetric, transitive 

---

[definition 3.6](#d_3_6)

Let G be a relation in A.

G is called irreflexive if $\forall x \in A, (x, x) \notin G$

G is called asymmetric if $(x, y)\in G\Rightarrow (y,x)\notin G$

G is called intransitive if $(x, y)\in G\land (y,z)\in G\Rightarrow (x, z)\notin G$

## exercise

### 3.2.1

a).

$G = \{(x, y): x + y \lt 3\}$

reflexive: $(2, 2) \gt 3$，不具有反身性

symmetric: $(x, y): x + y \lt 3 \Rightarrow y + x \lt 3 \Rightarrow (y, x)\in G$，具有对称性

transitive: $(1, -2) \in G \land (-2, 3) \in G \land (1, 3) \notin G$，不具有传递性

...

### 3.2.2

a)

G is irreflexive

$\forall x\in A, (x,x)\notin G$

$G \cap I=\empty$

反之不成立，因为存在一个特例使$\forall x\in A$不成立即可

b)

G is asymmetric

$(x, y)\in G \Rightarrow (y, x)\notin G$

$\Rightarrow (x, y)\notin G^{-1}$

$G \cap G^{-1} = \empty$

反之，

$G \cap G^{-1} = \empty$

$(x, y)\in G \Rightarrow (x, y)\notin G^{-1}$

$\Rightarrow (y, x)\notin G$

c)

G is intransitive

$(x, z) \in G \land (z, y) \in G \Rightarrow (x, y)\notin G$

$(x, y)\in G\circ G, \exists z, (x, z)\in G, (z, y)\in G \Rightarrow (x, y)\notin G$

$(G \circ G) \cap G = \empty$

反之

$(x, y) \in G\circ G\Rightarrow (x, y) \in G$

同样成立

### 3.2.3

equivalence relation $\Rightarrow$ the relation is transitive $\Rightarrow G\circ G\subseteq G$

这里$G\circ G = G$应该是打印错误？

因为$G\circ G\subseteq I_A \subseteq G$

### 3.2.4

反身性

$\forall x \in A, \forall i \in I, (x, x) \in G_i \Rightarrow$

$(x, x) \in \bigcap_{i\in I}G_i$

### 3.2.5

同3.2.4

### 3.2.6

$(x, y) \in G$

$(y, y) \in H, (x, y) \in G$

$(x, y) \in H\circ G$

