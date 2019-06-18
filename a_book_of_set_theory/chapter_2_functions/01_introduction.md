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

