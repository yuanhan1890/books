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

A relation is called a $strict\ order\ relation$ if it is irreflexive, asymmetric, transitive 

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

只证明$G\subseteq G\circ G$

$(x,y)\in G$

$(x, x)\in G$

$(x, y)\in G\circ G$

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

另一个易证

### 3.2.7

证明$左\Rightarrow 右$

$(x, y) \in G \Rightarrow (x, y) \in H$

$(x, y) \in G \circ H$

$\exists z \in A, (x, z) \in H \land (z, y) \in G$

$(z, y) \in H \land (x, z) \in H$

H是transitive

$(x, y) \in H$

$G \circ H \subseteq H$

假设$(x, y) \in H$

$(y, y) \in G \land (x, y) \in H$

$(x, y) \in G\circ H$

$G\circ H = H$

### 3.2.8

即证明$G是order\ relation\Rightarrow G^{-1}是order\ relation$

证明$G^{-1}$具有反身性，显而易见

证明$G^{-1}$具有不对称性

$(x, y) \in G^{-1} \land (x, y) \in G^{-1} \Rightarrow (y, x) \in G \land (x, y)\in G \Rightarrow x = y$

证明$G^{-1}$具有传递性

$(x, z) \in G^{-1} \land (z, y) \in G^{-1} \Rightarrow (z, x) \in G \land (y, z) \in G \Rightarrow (y, x) \in G \Rightarrow (x, y) \in G$

### 3.2.9

证明$左\Rightarrow 右$

$(x, y) \in G\cap G^{-1}$

$(x, y) \in G\land (y,x)\in G^{-1}$

$(x, y) \in G \land (y, x)\in G$

$x = y$

$(x, y) \in G\circ G$

$\exist z, (x, z) \in G \land )(z, y) \in G$

$(x, y) \in G$

$(x, x) \in G \land (x, y) \in G$

$(x, y) \in G \circ G$

### 3.2.10

证明$左\Rightarrow 右$

$(x, y)\in G\circ H$

$\exists z_1 \in A, (x, z_1) \in H\land (z_1, y)\in G$

$(y, x) \in G\circ H$

$\exists z_2 \in A, (y, z_2) \in H\land (z_2, x)\in G$

G和H都是对等关系

$(z_1, x) \in H\land (y, z_1) \in G$

$(z_2, y) \in H\land (x, z_2) \in G$

$(y, x) \in H\circ G$

得证$G\circ H\subseteq H\circ G$

证明$H\circ G \subseteq G\circ H$

$(x, y)\in H\circ G$

$\exist z, (x, z)\in G \land (z, y) \in H$

$(z, x) \in G \land (y, z) \in H$

$(y, x) \in G\circ H$

$(x, y) \in G\circ H$

证明$右\Rightarrow 左$

易证反身性和对称性

$(x, y) \in G\circ H \land (y, z) \in G\circ H$

$(x, y) \in H\circ G\land (y, z)\in H\circ G$

从中得出$(x,z) \in G\circ H$即可证明传递性

### 3.2.11

$(x, y) \in G\circ H$

$\exists z, (x, z)\in H \land (z, y) \in G$

$(x, z) \in G\cup H\cap (z, y) \in G\cup H$

$(x, y)\in G\cup H$

证明$右\Rightarrow 左$

易证$G\cup H$的反身性和对称性

$(x, z) \in G\cup H\land (z, y)\in G\cup H$

从四个情形都可以证明$(x, y) \in G\cup H$

比如当$(x, z) \in G \land (z, y) \in G$时

$(x, y) \in G \Rightarrow (x, y) \in G\cup H$

当$(x, z) \in G\land (z, y) \in H$

$(x, y)\in H\circ G \Rightarrow (x, y) \in G\cup H$

### 3.2.12

$(x, y) \in G$

$(x, x) \in H \land (x, y) \in J$

$(x, y) \in H\circ J$

