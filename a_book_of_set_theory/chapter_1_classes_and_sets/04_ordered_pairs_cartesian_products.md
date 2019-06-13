[theorem 1.27](#t_1_27) 

$if\;\{x,y\}=\{u,v\},then\;[x = u\;\land\;y = v] \lor [x = v\;\land y = u]$

分两种情况证明$x=y,x\not=y$

---

[definition 1.28](#d_1_28)

$let\;(a,b)\;and\;(c, d)\;be\;ordered\ pairs.if\ (a,b)=(c,d), then\ a = c\ and\ b = d.$

只是一个定义，一个代号。用小括号来做记法。

---

[definition 1.29](#d_1_19)

$let\ a\ and\ b\ be\ elements;\ the\ ordered\ pair\ (a, b)\ is\ defined\ to\ be\ the\ class$

$(a,b)=\{\{a\},\{a, b\}\}$

同样是记法，$(a,b)$只是一种简写

---

[theorem 1.30](#t_1_30)

$if\ (a, b) = (c, d),\ then\ a = c\ and\ b = d$

---

[definition 1.31](#d_1_31)

$The\ Cartesian\ product\ of\ two\ classes\ A\ and\ B$

$is\ the\ class\ of\ all\ ordered\ pairs\ (x, y)$

$where\ x\in A\ and\ y \in B$

$A \times B = \{(x, y): x\in A\ and\ y\in B \}$

---

[theorem 1.32](#t_1_32)

$For\ all\ classes\ A,\  B,\ and\ C$

$i) A \times (B \cap C) = (A \times B) \cap (A \times C)$

$ii) A \times (B \cup C) = (A \times B) \cup (A \times C)$

$iii) (A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$

证明`i)`

$(x, y) \in A \times (B \cap C)$

$x \in A \land y \in B \land y \in C$

$(x, y) \in (A \times B) \land (x, y) \in (A \times C)$

反之亦然

证明`ii)`

和证明`i)`一样，只是`&I`替换成了`vE`

证明`iii)`

同上

---

## exercise

### 1.4.1

$A \times B = {(a, 1), (a, 2), (a, 3), ..., (d, 3)}$

### 1.4.2

已证

### 1.4.3

$A \times (B - D) \Leftrightarrow$

$A \times (B \cap D') \Leftrightarrow$

$(A \times B) \cap (A \times D')$

$(x, y) \in (A \times B) \land (x, y) \in (A \times D') \Leftrightarrow$

$(x, y) \in (A \times B) \land (x, y) \notin (A \times D) \Leftrightarrow$

$(x, y) \in (A \times B) - (A \times D)$

### 1.4.4

与证明theorem 1.32(iii)一样

### 1.4.5

b)

证明$(A \times B)' = (A' \times u) \cup (u \times B')$

$(x, y) \notin (A \times B)$

$x \notin A \lor y \notin B$

$(x, y) \in (A' \times u) \lor (u \times B')$

$(A \times B) - (C \times C)$

$(A \times B) \cap (C \times C)'$

$(A \times B) \cap ((C' \times u) \cup (u \times C'))$

$((A \times B) \cap (C' \times u)) \cup ((A \times B) \cap (u \times C'))$

$((A \cap C') \times (B \cap u)) \cup ((A \times u) \times (B \cap C'))$

$((A - C) \times B) \cup (A \times (B - C))$

c)

直接使用b)

### 1.4.6

$假设\ \forall C\ is\ nonempty\ class, \exists x, y, (x, y) \in A \times C \land (x, y) \in B \times C$

$\exists x \in A \land x \in y, contradiction$

### 1.4.7

只是变成了$(x, y)$情况

### 1.4.8

同1.4.7

### 1.4.9

同1.4.7

### 1.4.10

没什么好证的

### 1.4.11

都是axiom

### 1.4.12

同${{x}, {x, y}}$证明
