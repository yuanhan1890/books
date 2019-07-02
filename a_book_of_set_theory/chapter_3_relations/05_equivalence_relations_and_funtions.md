$G=\{(x, y): f(x) = f(y)\}$

G is an equivalence relation in A, G is called the equivalence relation determined by f.

反之

if G is an equivalence relation in a set A, 同样可以定义一个函数$f:A\rightarrow A/G$

$f(x) = G_x, \forall x\in A$

f被称为$canonical\ function\ from\ A\ to\ A/G$.

---

[Theorem 3.22](#t_3_22)

Let G be an equivalence relation in a set A. If f is the canonical function from A to A/G, then G is the equivalence relation determined by f.

$r:A\rightarrow A/G$

$s:A/G\rightarrow\overline{f}(A)$ is given by $s(G_x) = f(x), \forall x \in A$

$t:\overline{f}(A)\rightarrow B$ is given by $t(y) = y, \forall y \in \overline{f}(A)$

t是一个inclusion function

---

[theorem 3.23](#t_3_23)

Let A and B be sets, let $f: A\rightarrow B$ be a function， Let G be the equivalence relation determined by f, and let r, s, t be the functions defined above.

Then r is surjective, s is bijective, t is injective，and $f=t\circ s\circ r$

i) r is surjective

$\forall y \in A/G, \exists x, y\in G_x$

ii)

证明满射性

$\forall y \in \overline{f}(A), \exists x \in A, f(x) = y, \exists G_x, s(G_x) = f(x) = y$

证明单射性

$\forall x, y \in A, \exists G_x \in A/G, x \in G_x, y \in G_y\Rightarrow s(G_x) = s(G_y)$


iii)

t是inclusion function，所以是单射得证

假设$(x, y) \in f$

$(x, G_x) \in r \land (G_x, f(x)) \in s \land (f(x), f(x)) \in t$

$(x, y) \in t\circ s\circ r$

假设$(x, y) \in t\circ s\circ r$

$\exists G_x \in A/G, (x, G_x) \in r$

$\exists y_0 \in \overline{f}(G_x), (G_x, y_0) \in f$

$(y_0, y) \in t$

$y_0 = y$

$y \in \overline{f}(G_x)$

$(x, y) \in f$

其实可以直接构造

$(t\circ s\circ r)(x)=t{s[r(x)]}=t{s[G_x]}=t{f(x)}=f(x)$

这里的重点在于

任意一个函数都可以分解成三个函数，并且三个函数的特征分别是$injective \circ bijective \circ surjective$

这个分解称为$canonical\ decomposition\ of\ f$

$A{r\atop{\rightarrow\atop{surj}}}A/G{s\atop{\rightarrow\atop{bij}}}\overline{f}(A){t\atop{\rightarrow\atop{inj}}}B$

注意中间的分解子函数是bijective，有特别的写法$A/G\approx\overline{f}(A)$

---

### Example 3.24

if f is surjective, then $A/G\approx B$

易证$\overline{f}(A) = B$

---

H是由f定义的对等关系

$H: {(x, y): x\in A, y\in A, f(x) = f(y)}$

G是定义在A上的对等关系，并且$G\ is\ finer\ than\ H,\ G\subseteq\ H$定义$f/G$

则可以定义一个函数$f/G$

$[f/G](G_x) = f(x)$

$f/G$被称作为$quotient\ of\ f\ by\ G$

---

[theorem 3.26](#t_3_26)

Let $f:A\rightarrow B$ be a function, let H be the equivalence relation determined by f, and let G be a refinement of H, Then $H/G$ is the equivalence relation determined by $f/G$

$G\subseteq H$

由$f/G$定义的对等关系是$J = \{(G_x, G_y): (f/G)(G_x) = (f/G)(G_y), (x, y) \in G, (x, y) \in H \}$

显然这是$H/G$的定义

---

G,H都是A上的对等关系，并且$G\subseteq H$,则有

$(A/G)/(H/G)\approx A/H$

这个关系的解释为

$A/G=\{G_x: x\in A\}$

$H/G=\{(G_x, G_y): (x, y) \in H\}$

f是canonical function, $f:A\rightarrow A/H$

$f/G: A/G\rightarrow A/H$ is given by $[f/G](G_x) = f(x), \forall x \in A$

$(A/H\rightarrow A/H)\circ(A/G\rightarrow A/H)$

## exercise

### 3.5.1

reflexive

$(x, x) \in H\Rightarrow \forall (f(x), f(x))\in\overline{f}(H)$

symmetric

$(f(x), f(y))\in\overline{f}(H)\Rightarrow (x, y) \in H \Rightarrow (y, x) \in H\Rightarrow (f(y), f(x))\in\overline{f}(H)$

transitivity


### 3.5.2

a).

$G: {(x, y): f(x) = f(y)}$

$(x, y) \in G$

$(f(x), f(y)) = (f(x), f(x))\in J$

$(x, y) \in\breve{f}(J)$

b).

$\overline{f}(J) = \{(x_0, x_1): (f(x_0), f(x_1))\in J\}$

$H = \{(x, y): (f(x), f(y))\in J\}$

$\overline{f}(H)=\{(f(x),f(y)):(x, y)\in H\}$

$(f(x), f(y)) \in\overline{f}(H)$

$(x,y)\in H$

$(f(x), f(y)) \in J$

$\overline{f}(H) \subseteq J$

类似证明if and only if

### 3.5.3

$G: {(x, y): f(x) = f(y)}$

$(x, y) \in G$

$f(x) = f(y)$

$(x, f(x)) \in f,(f(x),x)\in f^{-1}, (f(y), x)\in f^{-1}, (f(x), y)\in f^{-1}$

$(x, y)\in f^{-1}$

实际上$f^{-1}$存在，说明函数是双射，上面$x=y$

### 3.5.4

$G=\{(x,y):g(x)=g(y)\}$

$\overline{f}(G)=\{(x, y): (f(x), f(y))\in G\}$

证明$\overline{f}(G)\subseteq g\circ f$

$(x, y)\in\overline{f}(G)$

$(f(x), f(y))\in G, g(f(x))=g(f(y))$

$(x, y)\in \{(x, y): (g\circ f)(x)=(g\circ f)(y)\}$

$\overline{f}(G)\subseteq g\circ f$

### 3.5.5

$H/G=\{(G_x,G_y): (x,y)\in H\}$

$f=\{(x, G_x): x\in A\}$

$(G_x,G_y)\in H/G$

$(f(x), f(y)) \in H/G \land (x, y)\in H$

$\overline{f}(H)=\{(f(x), f(y)): (x, y)\in H\}$

### 3.5.6

$f=\{(x, G_x): x\in A\}$

$g=\{(x, H_x): x\in A\}$

$h=g/G=\{(G_x, H_x): x\in A \}$

$\forall x\in A,(h\circ f)(x)=h(G_x)=H_x=g(x)$

### 3.5.7

$f=\{(x, G_x): x\in A\}$

$(x, y)\in\overline{f}(H/G)$

$(f(x), f(y))\in H/G$

$(G_x,G_y)\in H/G$

$(x, y)\in H$

### 3.5.8

$\forall x\in A,(G_x, J_x) \in h/G$

$(G_x, H_x) \in g/G$

$(H_x, J_x) \in g/H$

$(G_x, J_x) \in g/G\circ g/H$

反之易证

### 3.5.9

$\forall H_x \in A/H, \exists G_x\subseteq H_x, [f/G](G_x)=H_x$

### 3.5.10

存在定理$(A/G)/(H/G)\approx A/H$

a)

只需证明$G\subseteq G\circ H$

$(x, y) \in G$

$(x, y)\in H, (x, x)\in H, (x, y)\in G$

$(x, y)\in H$

b)

只需证明$G\cap H\subseteq G$，这是显而易见的

### 3.5.11

$\forall z\in A, z\in G_x \Rightarrow f(z)\in G_x \Rightarrow (f(z), f(f(z)))\in G$

$\forall z\in A, f\circ f = f$

易证$(z\in G_x\Rightarrow f(z)\in G_x)\Rightarrow f\circ f = f$

$f\circ f \in f$

$\forall x\in A, (f\circ f)(x)=f(x)$

$(x, y)\in f\circ f, (x, y)\in f$

$\exists z, (x, z)\in f, (z, y)\in f, (x, y)\in f$

$f(x) = z = y$

$f(z)=f(y)$

$z, y\in G_a, \exists a\in A$

又因为$z \in G_x, a = x$

$f(z)=y, y\in G_x$得证

