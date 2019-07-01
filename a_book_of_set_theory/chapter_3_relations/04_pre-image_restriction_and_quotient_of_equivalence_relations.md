[definition 3.13](#d_3_13)

Let $f:A\rightarrow B$ be a function, and let G be an equivalence relation in B. The **pre-image of G** under\ f$ is a relation in A defined as follows:

$\breve{f}(G)=\{(x, y): (f(x), f(y))\in G\}$

It is simple to show that $\breve{f}(G)$ is an equivalence relation in A.

对等关系容易证明，自身性、对称性、传递性

---

[definition 3.14](#d_3_14)

Let G be an equivalence relation in A and let $B\subseteq A$. **The restriction of G to B** is a relation in B defined as follows:

$G_{[B]} = \{(x, y): x\in B\ and\ y\in B\ and\ (x,y)\in G\}$

$G_{[B]}$同样是对等关系

---

[definition 3.15](#d_3_15)

Let G and H be equivalence relations in A. We call G a **refinement** of H if $G\subseteq H$; we also say that G is **finer** than H, and that H is **coarser** than G.

---

[theorem 3.16](#d_3_16)

Let G and H be equivalence relations in A; suppose $G\subseteq H$. Then $z\in H_x \Rightarrow G_z\subseteq H_x$

证明

$z \in H_x$

$(z, x) \in H$

$y \in G_z \Rightarrow (y, z) \in G \land (z, x) \in H$

$(y, x) \in H$

$y \in H_x$

$G_z \subseteq H_x$

---

[corollary](#c_3_17)

If $G\subseteq H$, then for each $x\in A$, $G_x\subseteq H_x$

if G is refinement of H, then each equivalence class modulo H is an union of equivalence classes modulo G.

回顾$equivalence\ classe\ modulo\ G\ is\ [x],\ x\in A$

---

[definition 3.18](#d_3_18)

Let G and H be equivalence relations in a set A and let G be a refinement of H. The **quotient of H** by G, which is usually denoted by $H/G$, is a relation in $A/G$ defined as follows:

$H/G = \{(G_x, G_y): (x, y) \in H\}$

回顾$A/G$, $A/G=\{[x]: x\in A\}$

---

[theorem 3.19](#t_3_19)

$H/G$ is an equivalence relation in $A/G$

1). reflexive

$(x, x) \in H\Rightarrow (G_x, G_x) \in H/G $

2). symmetric

同上$(x, y) \in H \land (y,x) in H$

3). transitive

也是同H的transitive特性

---

$G_x{\sim\atop{H/G}}G_y \Leftrightarrow x{\sim\atop{H}}y$

---

Example

$A=\{a,b,c,d,e\}$

$G=\{(a,a),(b,b),(c,c),(d,d),(e,e),(a,b),(b,a),(c,d),(d,c)\}$

$H=\{(a,a),(b,b),(c,c),(d,d),(e,e),(a,b),(b,a),(c,d),(d,c),(c,e),(e,c),(d,e),(e,d)\}$

G is a refinement of H

The partition of A induced by H is ${H_a, H_c}$

$H_a = \{a, b\}$

$H_c = \{c, d, e\}$

$A/G = \{G_a, G_c, G_e\}$

$G_a = \{a, b\}$

$G_c = \{c, d\}$

$G_e = \{e\}$

$H/G = \{(G_a, G_a), (G_c, G_c), (G_e, G_e), (G_c, G_e), (G_e, G_c)\}$

$(A/G)/(H/G) = \{\{G_a\}, \{G_c, G_e\}\}$

## exercise

### 3.4.1

$A/G = \{G_a, G_d, G_f\}, G_a =\{a, b, c\}, G_d=\{d,e\}, G_f=\{f\}$

$A/H = \{H_a, H_b, H_d, H_e, H_f\}, H_b=\{b, c\}$

$G/H=\{(H_a, H_a), (H_b, H_b), (H_d, H_d), (H_e, H_e),(H_f, H_f),(H_a, H_b), (H_b, H_a), (H_d, H_e), (H_e, H_d)\}$

$(A/H)/(G/H) = \{\{H_a, H_b\}, \{H_d, H_e\}, \{H_f\}\}$

### 3.4.2

$\breve{f}(G) = \{(x, y) \in R\times R: sin^2{x} + cos^2{x} = sin^{y} + cos^2{y}\}$

$\breve{f}(G)$是$R\times R$

### 3.4.3

$\breve{f}(G) = {(x, y): x,y\in A, (f(x), f(y)) \in G}$

reflexive:

$f(x) \in B \Rightarrow (f(x), f(x)) \in G$

symmetric:

同上

### 3.4.4