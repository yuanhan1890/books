[theorem 2.17](#d_2_17)

$if\ f:A\rightarrow B\ and\ g:B\rightarrow C\ are\ functions,\ then\ g\circ f: A\rightarrow C\ is\ a\ function$

证明

f1成立

$\forall x \in A, \exists z \in B, (x, z) \in f, (z, y) \in g$

f2成立

$(x, y_1) \in g\circ f$

$\exists z_1, (x, z_1) \in f\land (z_1, y_1) \in g$

$(x, y_2) \in g\circ f$

$\exists z_2, (x, z_2) \in f\land (z_2, y_2) \in g$

因为f的f2特性，$z_1 = z_2$

因为g的f2特性，$y_1 = y_2$

---

[defintion 2.19](#d_2_19)

$A\ function\ f:A\rightarrow B\ is\ said\ to\ be\ invertible\ if\ f^{-1}:B\rightarrow A\ is\ a\ function$

反函数不只是domain和range互反，而且要求下面statement成立

---

[statement 2.20](#s_2_20)

$y=f(x)\ if\ and\ only\ if\ x = f^{-1}(y)$

---

[theorem 2.21](#t_2_21)

$If\ f:A\rightarrow B\ is\ a\ bijective\ function,\ then\ f^{-1}:B\rightarrow A\ is\ a\ bijective\ function.$

证明$f^{-1}$是函数

$dom_{f^{-1}} = B$

根据f的满射，$\forall x \in B, \exists y\in A, (y, x) \in f$

得到$\forall x \in B, \exists y \in A, (x, y) \in f^{-1}$

f1成立

$(x, y_1) \in f^{-1}$

$(y_1, x) \in f$

$(x, y_2) \in f^{-1}$

$(y_2, x) \in f$

因为f的单射性，得到$y_1 = y_2$

f2成立

进而得证$f^{-1}$是函数

证明$f^{-1}$的满射性

假设存在$\exists y \in A, \forall x \in B, (x, y) \notin f^{-1}$

则与$\exists y \in A, \forall x \in B, (y, x) \in f$相悖

证明$f^{-1}$的单射性

假设存在$\exists x_1, x_2 \in B, (x_1, y) \in A \land (x_2, y) \in A$

$(y, x_1) \in f \land (y, x_2) \in f$

因为f的函数性，得到$x_1 = x_2$

---

[theorem 2.22](#t_2_22)

$If\ f:A\rightarrow B\ is\ invertible,\ then\ f:A\rightarrow B\ is\ bijective.$

证明略

---

[theorem 2.23](#t_2_23)

$Let f:A\rightarrow B\ be\ an\ invertible\ function.\ Then$

$i). f^{-1}\circ f = I_A$

$ii). f\circ f^{-1} = I_B$

$(x, y) \in f^{-1} \circ f$

$\exist z, (x, z) \in f \land (z, y) \in f^{-1}$

$(z, x) \in f^{-1}$

因为$f^{-1}$的单射性，所以$x = y，且x\in A$

$f^{-1}\circ f \subseteq I_A$

另外$(x,x) \in I_A$，始终可以找到$y \in B$使得$(x, x) \in f^{-1}\circ f$

同理可证$f\circ f^{-1} = I_B$

---

[theorem 2.24](#t_2_24)

$Let\ f:A\rightarrow B\ and\ g:B\rightarrow A\ be\ functions.\ If\ g\circ f=I_A\ and\ f\circ g =I_B,\ then\ f:A\rightarrow B\ is\ bijective(hence\ invertible),\ and\ g=f^{-1}$

证明f是单射

$f(x_1) = f(x_2) \Rightarrow$

$g(f(x_1)) = g(f(x_2)) \Rightarrow$

$[g\circ f](x_1) = [g\circ f](x_2) \Rightarrow$

$x_1 = x_2$

证明f是满射

$\forall y \in B, y = I_B(y) = [f\circ g](y) = f(g(y))$

$\forall y \in B, \exists x \in A, x=g(y), y = f(x)$

证明$g=f^{-1}$

$x = g(y) \Rightarrow f(x) = f(g(y)) = I_B(y) = y$

$y = f(x) \Rightarrow g(y) = g(f(x)) = I_A(x) = x$

$\Rightarrow \forall y \in B, x = f^{-1}(y) iff x = g(y)$

---

[theorem 2.25](#t_2_25)

$Let\ f:A\rightarrow B\ be\ a\ function;\ f:A\rightarrow B\ is\ injective\ if\ and\ only\ if\ there\ exists\ a\ function\ g:B\rightarrow A\ such\ that\ g\circ f = I_A$

先证明$f\ is\ injective\Rightarrow \exist g, g\circ f = I_A$

$C = ran_f$

$f:A\rightarrow C$是bijective

$g':C\rightarrow A = f^{-1}$存在，另$g = g \cup (K_a:(B - C)\rightarrow A)$

$g: B\rightarrow A$为一个函数存在

再易证$\exist g, g\circ g = I_A \Rightarrow f\ is\ injective$

$Let\ f:A\rightarrow B\ be\ a\ function;\ f:A\rightarrow B\ is\ injective\ if\ and\ only\ if\ it\ has\ a\ "left\ inverse"$

$and\ surjective\ if\ and\ only\ if\ it\ has\ a\ "right\ inverse"$

左逆和右逆非常形象，$f\circ g$，$f$在左逆的左边

---

[theorem 2.26](#t_2_26)

Suppose $f:A\rightarrow B$, $g:B\rightarrow C$, and $g\circ f:A\rightarrow C$ are functions.

i).If $f$ and $g$ are injective, then $g\circ f$ is injective.

ii). If $f$ and $g$ are surjective, then $g\circ f$ is surjective.

iii). If $f$ and $g$ are bijective, then $g\circ f$ is bijective.

证明

i)

$g(f(x_1)) = g(f(x_2)) \Rightarrow$

$f(x_1) = f(x_2) \Rightarrow$

$x_1 = x_2$

ii)

$\forall z\in C, \exists y\in B, (y, z)\in g$

$\forall y\in B, \exists x\in A, (x,y) \in f$

$\forall z\in C, \exists x\in A, (x, z) \in g\circ f$

iii)

结合前两者易证

### exercise

### 2.3.1

$I_B(f(x)) = I_B(y) = y = f(x)$

$f(I_A(x)) = f(x)$

### 2.3.2

a).

如果$f$不是$injective$

存在$f(x_1) = f(x_2) \land x_1 \not= x_2$

由g的函数性质，$g(f(x_1)) = g(f(x_2)) \land x_1 \not= x_2$

$g\circ f$不是$injective$

由$(\lnot P\Rightarrow \lnot Q) \Leftrightarrow Q \Rightarrow P$得证

$g\circ f\ is\ injective \Rightarrow f\ is\ injective$


b).

g如果不是满射

$\forall y \in B, \exists x \in A, (x, y) \in g\circ f$

$\forall y\in B, \exists x\in A, \exists z\in B, (x, z)\in f, (z, y)\in g$

$\forall y\in B, \exists z\in B, (z, y)\in g$

得证g是满射

c)

结合a、b得证

### 2.3.3

$A= \{1, 2\}, B=\{2,3,4\}, C=\{4,5,6\}$

$f:A\rightarrow B=\{(1,2), (2,3)\}$

$g:B\rightarrow C=\{(2,4), (3,5), (4,6)\}$

### 2.3.4

$y = f(x)$

$g(y) = g(f(x)) = x$

$g\circ f = I_B$

$x = g(y)$

$f(x) = f(g(y)) = y$

$f\circ g = I_A$

### 2.3.5

假设$g\not= f$

$\exists x, g(x) \not=f(x)$

我们可以构造一个函数f，使$\exists z, f(z) = x$

则$(g\circ f)(z) \not= (f\circ g)(z)$，相悖

### 2.3.6

假设$g\not= f$

$\exists x, g(x) \not= f(x)$

可以构造一个函数f，使$\{(g(x), z_1), (h(x), z_2)\} \subseteq f$

则相悖

### 2.3.7

证明正向

$f\ is\ injective \land \forall g,h, f\circ g=f\circ h$

$\forall x, f(g(x)) = f(h(x))$

因为f是单射

$\forall x, g(x) = h(x)$

$g = h$

得证$f\ is\ injective \Rightarrow (\forall g,h, f\circ g=f\circ h \Rightarrow g = h)$

证明反向

假设f不是单射，则构造一个g和h满足矛盾即可

### 2.3.8

证明正向

$f\ is\ surjective \land (\forall g,h, g\circ f \land h\circ f)$

$g(f(x)) = h(f(x))$

因为f是满射，则对于g和h的domain皆有定义

$\forall y \in ran_f, g(y) = h(y)$

$g = h$

证明反向

$(\forall g,h, g\circ f = h\circ f) \Rightarrow g = h$

如果f不是满射

可以构造g和h，使得$(f(x), z) \in g \land f(x) \notin dom_h$

相悖

### 2.3.9

证明命题

$(\exists h:B\rightarrow C, f = h\circ g) \Leftrightarrow (\forall x, y\in A, g(x) = g(y) \Rightarrow f(x) = f(y))$

其中$f:A\rightarrow C, g:A\rightarrow B$

**证明$左\Rightarrow 右$**

$g(x) = g(y), g(x) \in B, g(y) \in B$

由h的函数性质

$h(g(x)) = h(g(y)) \Rightarrow f(x) = f(y)$

**证明$右\Rightarrow 左$**

$\forall x, y\in A, g(x) = g(y) \Rightarrow f(x) = f(y)$

根据上述函数，针对$\forall z \in B$构造h函数

1). 当$z\in B$，存在一个及以上的image $x_i \in A$，$h(z) = f(x_i)$，对于$f(x_i) = f(x_j) = ...$值都为$h(z)$

2). 当$z\in B$，不存在image $x \in A$，使$z = g(x)$

这种情况不存在，否则$h \circ g$不成立

如果存在两个不同的$h_1,h_2$满足$f = h_1 \circ g, f = h_2 \circ g$满足

那么$(h_1\circ g)(x) = (h_2\circ g)(x)$

$h_1 = h_2$

### 2.3.10


