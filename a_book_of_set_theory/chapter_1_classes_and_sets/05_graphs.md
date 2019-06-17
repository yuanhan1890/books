[definition 1.33](#d_1_33)

$a\ class\ of\ ordered\ pairs\ is\ called\ a\ graph$

$if\ G\ is\ a\ graph,\ then\ G^{-1}\ is\ the\ graph\ defined\ by:$

$G^{-1}=\{(x, y): (y, x) \in G\}$

---

[definition 1.34](#d_1_34)

$if\ G\ and\ H\ are\ graphs,\ then\ G\circ H\ is\ the\ graph\ defined\ as\ follows:$

$G\circ H=\{(x, y): \exists z \in (x, z)\in H \land (z, y) \in G\}$

---

[theorem 1.35](#d_1_35) $if\ G,\ H,\ and\ J\ are\ graphs$

$i) (G \circ H)\circ J = G \circ (H \circ J)$

$ii) (G^{-1})^{-1} = G$

$iii) (G \circ H)^{-1} = H^{-1} \circ G^{-1}$

i)

$(x, y) \in (G \circ H) \circ J$

$\exists z, (x, z) \in J \land (z, y) \in (G \circ H)$

$\exists z, \exists w, (x, z) \in J \land (z, w) \in H \land (w, y) \in G$

$\exists w, (x, w) \in (H \circ J) \land (w, y) \in G$

$(x, y) \in G \circ (H \circ J)$

ii)

$(x, y) \in (G^{-1})^{-1}$

$(y, x) \in G^{-1}$

$(x, y) \in G$

iii)

$(G \circ H)^{-1} = H^{-1} \circ G^{-1}$

$(x, y)\in (G \circ H)^{-1}$

$(y, x) \in G \circ H$

$\exists z, (y, z) \in H \land (z, x) \in G$

$\exists z, (z, y)\in H^{-1} \land (x, z)\in G^{-1}$

$(x, y) \in (x, y)\in H^{-1} \circ G^{-1}$

---

[definition 1.36](#d_1_36) $let\ G\ be\ a\ graph.\ By\ the\ domain\ of\ G\ we\ mean\ the\ class$

$dom G = \{x: \exists y \ni (x, y) \in G\}$

$by\ the\ range\ of\ G\ we\ mean\ the\ class$

$ran G = \{y: \exists x \ni (x, y) \in G\}$

---

[theorem 1.37](#t_1_37)

$if\ G\ and\ H\ are\ graphs,\ then$

$i) dom\ G = ran\ G^{-1}$

$ii) ran\ G = dom\ G^{-1}$

$iii) dom\ (G\circ H) \subseteq dom\ H$

$iv) ran\ (G \circ H) \subseteq ran\ G$

i)

$x \in dom\ G$

$\Leftrightarrow \exists y, (x, y) \in G \Leftrightarrow$

$\Leftrightarrow \exists y, (y, x) \in G^{-1} \Leftrightarrow$

$x \in rang\ G^{-1}$

ii)

同1)

iii)

$x \in dom\ (G \circ H)$

$\exists y, (x, y) \in (G \circ H)$

$\exists y, \exists z, (x, z) \in H \land (z, y) \in G$

$\exists z, (x, z) \in H$

$x \in dom\ H$

iv)

同iii)

---

[corollary 1.38](#c_1_38) $let\ G\ and\ H\ be\ graphs.$

$if\ ran\ H\ \subseteq dom\ G\ then\ dom_{G\circ H}=dom\ H$

$x \in dom_{G\circ H}$

$\exists y, (x, y) \in (G \circ H)$

$\exists y, \exists z, (x, z) \in H \land (z, y) \in G$

$\exists z, (x, z) \in H$

$x \in dom_{H}$

反之

$x \in dom_{H}$

$\exists z, (x, z) \in H$

$由条件, \exists w, (z, w) \in G$

$\exists w,\exists z, (x, z) \in H \land (z, w) \in G$

$\exists w, (x, w) \in G \circ H$

$x \in dom_{G \circ H}$

## exercise

### 1.5.1

$G^{-1}: \{(b, b), (b, c), (c, b), (c, c), (c, d), (d, c)\}$

...

### 1.5.2

已证

### 1.5.3

已证

### 1.5.4

a)

$(x, y) \in (H \cup J) \circ G$

$\exists z, (x, z) \in G \land (z, y) \in (H \cup J)$

$z\in H \Rightarrow (x, y) \in H \circ G$

$z\in J \Rightarrow (x, y) \in J \circ G$

$(x, y) \in (H \circ G) \cup (J \circ G)$

b)

$(x, y) \in (G - H)^{-1}$

$(y, x) \in G - H$

$(y, x) \in G \cap H'$

$(y, x) \in G \land (y, x) \notin H$

$(x, y) \in G^{-1} \land (x, y) \notin H^{-1}$

$(x, y) \in G^{-1} - H^{-1}$

c)

$(x, y) \in G \circ (H \cap J)$

$\exists z, (x, z) \in (H \cap J) \land (z, y) \in G$

$\exists z, (x, z) \in H \land (x, z) \in J \land (z, y) \in G$

$(x, y) \in (G \circ H) \cap (G \circ J)$

d)

$(x, y) \in (G \circ H) - (G \circ J)$

$(x, y) \ in (G \circ H) \land (x, y) \notin (G \circ J)$

$\exists z, (x, z) \in H \land (z, y) \in G$

$(z, y) \in G => \forall w \in dom\ J, (w, z) \notin J$

$(x, z) \notin J$

$(x, z) \in (H - J)$

$(x, y) \in G \circ (H - J)$

### 1.5.5

a)

$(x, y) \in (G \cap H)^{-1}$

$(y, x) \in G \cap H$

$(y, x) \in G$

$(x, y) \in G^{-1}$

b)

从`&E`转化为`vI`

### 1.5.6

a)

$(x, y) \in G \circ J$

$\exists z, (x, z) \in J \land (z, y) \in G$

$(x, z) \in K \land (z, y) \in H$

$(x, y) \in (H \circ K)$

b)

$G \subseteq H$

$(x, y) \in G^{-1}$

$(y, x) \in H$

$(x, y) \in H^{-1}$

$G^{-1} \subseteq H^{-1}$

### 1.5.7

a)

$(x, y) \in (A \times B)^{-1}$

$y \in A \land x \in B$

$(x, y) \in (B \times A)$

b)

$(x, y) \in (A \times B) \circ (A \times B)$

$\exist z, (x, z) \in (A \times B) \land (z, y) \in (A \times B)$

$x \in A \land y \in B$

$(x, y) \in (A \times B)$

$(x, y) \in (A \times B)$

$A \cap B \not= \empty => \exists z, z \in A \land z \in B$

$\exists z, (x, z) \in (A \times B) \land (z, y) \in (A \times B)$

c)

同b)，但是使用RA证明矛盾

d)

$(x, y) \in (B \times C) \circ (A \times B)$

$\exists z, (x, z) \in (A \times B) \land (z, y) \in (B \times C)$

$x \in A \land y \in C$

$(x, y) \in A \times C$

另一边

$(x, y) \in A \times C$

$\exists z \in B, (x, z) \in (A, B) \land (z, y) \in (B \times C)$

$(x, y) \in (B \times C) \circ (A \times B)$

### 1.5.8

a)

$(x, y) \in G$

$x \in A \land y \in B$

$(y, x) \in B \times C$

b)

$(x, y) \in H \circ G$

$\exists z, (x, z) \in G \land (z, y) \in H$

$\exists z, x \in A \land y \in C$

$(x, y) \in (A \times C)$

### 1.5.9

a)

$x \in dom_{G \cup H}$

$\exists z, (x, z) \in G \Rightarrow x \in dom_G$

$\exists z, (x, z) \in H \Rightarrow x \in dom_G$

then use vE

b)

同a)

c)

$x \in dom_G - dom_H$

$\exists z, (x, z) \in G \land (x, z) \notin H$

### 1.5.10

a)

$(x, y) \in G_{[B]}$

$(x, y) \in G \land x \in B$

$y \in ran_G \land x \in B$

$(x, y) \in G \land (x, y) \in B \times ran_G$

b)

$(x, y) \in G_{B \cup C}$

$(x, y) \in G \land x \in B \cup C$

接下来使用vE

c)

同b

d)

使用MPP