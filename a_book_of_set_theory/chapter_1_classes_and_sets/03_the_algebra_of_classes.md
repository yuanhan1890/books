[theorem 1.20](#t_1_20) if A and B are any classes, then

$i) A \subseteq A \cup B \land B \subseteq A \cup B$

$ii) A \cap B \subseteq A \land A \cap B \subseteq B$

证明`i)`, 使用`vI`，$x \in A \Rightarrow x \in A \lor x \in B$

证明`ii)`，使用`&E`，$x \in A \land x \in B \Rightarrow x \in A$

---------

[theorem 1.21](#t_1_21) if A and B are classes, then

$i) A \subseteq B\;iff A \cup B = B$

$ii) A \subseteq B\;iff A \cap B = A$

证明`i)`

$A \subseteq B \Rightarrow A \cup B = B$

$$
x \in A \Rightarrow x \in B \\
由 x \in A \lor x \in B \\
当 x \in A，推导出x \in B \\
当 x \in B，同样x \in B \\
所以由x \in A \lor x \in B，推导出x \in B \\
再由x \in B \Rightarrow x \in A \cup B \\
得证A \subseteq B \Rightarrow A \cup B = B
$$

$A \cup B = B \Rightarrow A \subseteq B$

$$
A \cup B = B \\ \Rightarrow
A \cup B \subseteq B \\ \Rightarrow
x \in A \lor x \in B \Rightarrow x \in B \\
\; \\
if\; x \in A \Rightarrow x \notin B \\ \Rightarrow
if\;x \in A \\ \Rightarrow
x \in A \lor x \in B \\ \Rightarrow
x \in B \\ \Rightarrow
contradict \\
x \in A \Rightarrow x \in B \\ \Rightarrow
A \subseteq B
$$

证明`ii)`

$$
A \subseteq B \\
x \in A \Rightarrow x \in B \\
\;\\
A \cap B \Rightarrow x \in A \land x \in B \Rightarrow x \in A\\
\;\\
得到A \cap B \subseteq A \\
x \in A \Rightarrow x \in B \Rightarrow x \in A \land x \in B \\
得到A \subseteq A \cap B \\
得证A \cap B = A \\

另一边 \\
A \cap B = A \\
x \in A \Rightarrow x \in A land x \in B \\
x \in A \Rightarrow x \in B
得证A \subseteq B
$$

---

[theorem 1.22](#t_1_22) For all classes A and B

$i) A \cup \lparen A \cap B \rparen = A$

$ii) A \cap \lparen A \cup B \rparen = A$

结合theorem`1.20`和`1.21`证明即可

---

[theorem 1.23](#t_1_23) For every class A, $(A')' = A$

$$
x \notin A' \Rightarrow x \in A \\
x \in A \Rightarrow x \notin A' \Rightarrow x \in (A')' \\
$$

---

[theorem 1.24](#t_1_24) `DeMorgan's Law` For all classes A and B

$i) (A \cup B)' = A' \cap B'$

$ii) (A \cap B)' = A' \cup B'$

与逻辑证明一样

---

[theorem 1.25](#t_1_25) For all classes A, B, B

$1)\;Comutative\;Laws$

$\;\; i)\;A \cup B = B \cup A$

$\;\; ii)\;A \cap B = B \cap A$

$2)\;Idempotent\;Laws$

$\;\; iii)\;A \cup A = A$

$\;\; iv)\;A \cap A = A$

$3)\;Associative\;Laws\;$

$\;\; v)\;A \cup (B \cup C) = (A \cup B) \cup C$

$\;\; vi)\;A \cap (B \cap C) = (A \cap B) \cap C$

$4)\; Distributive\;Laws$

$\;\; vii)\;A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$

$\;\; viii)\; A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

---

[theorem 1.26](#t_1_26) for every class A

$i) A \cup \empty = A$

$ii) A \cap \empty = \empty$

$iii) A \cup u = u$

$iv) A \cap u = A$

$v) u' = \empty$

$vi) u = \empty'$

$vii) A \cup A' = u$

$viii) A \cap A' = \empty$

---

## exercise

### 1.3.1

已证

### 1.3.2

$$
(A \cap B)' = A' \cup B' \\
\lnot(x \in A \land x \in B) \\
x \notin A \lor x \notin B \\
x \in (A' \cup B') \\
\;\\
x \in (A' \cup B') \\
x \in A' \Rightarrow x \notin A \Rightarrow x \notin A \cap B \\
x \in B' \Rightarrow x \notin B \Rightarrow x \notin A \cap B \\
x \notin (A \cap B)
$$

### 1.3.3

映射至逻辑证明

### 1.3.4

同1.3.3

### 1.3.5

$$
a)\\
A \cap B) \cup C \\ = 
C \cup (A \cap B) \\ = 
(C \cup A) \cap (C \cup B) \\ = 
(A \cup C) \cap (B \cup C)
$$

$\;$

$$
b)\\
同上
$$

### 1.3.6


$a)$

$A \cap (B \cup C) =$

$(A \cap B) \cup (A \cap C) =$

$(A \cap B) \cup \empty =$

$A \cap B$

$先证明对于任何classes，A，B，C，A \cap (B - C) = (A \cap B) - (A \cap C)$

$A \cap (B \cap C')$

$A \cap A' \cap B = \empty$

$\empty \cup (A \cap B \cap C')$

$(A \cap B \cap A') \cup (A \cap B \cap C')$

$A \cap B \cap (A' \cup C')$

$A \cap B \cap (A \cap C)'$

$(A \cap B) - (A \cap C)$

所以对于`b)`

$A - B$

$A \cap B'$

$A \cap (u - B)$

$(A \cap u) - (A \cap B)$

$A - \empty$

$A$

证明`c)`

$C - B$

$C \cap B'$

$(A \cup B) \cap B'$

$(A \cap B') \cup (B \cap B')$

$(A \cap B') \cup \empty$

$A \cap (u - B)$

$(A \cap u) - (A \cap B)$

$A - \empty$

$A$

### 1.3.7

a).

$A \cap (B - C)$

$A \cap B \cap C'$

$(A \cap B) \cap C'$

$(A \cap B) - C'$

b).

$(A \cup B) - C$

$(A \cup B) \cap C'$

$(A \cap C') \cup (B \cap C')$

$(A - C) \cup (B - C)$

c).

$A - (B \cup C)$

$A \cap (B \cup C)'$

$A \cap (B' \cap C')$

$(A \cap B') \cap (A \cap C')$

$(A - B) \cap (A - C)$

d).

同c

### 1.3.8

$A + B = (A - B) \cup (B - A)$

a)

交换

b)

先证明

$(A + B)'$

$((A \cap B') \cup (B \cap A'))'$

$(A \cap B')' \cap (B \cap A')'$

$(A' \cup B) \cap (B' \cup A)$

$(A' \cap (B' \cup A)) \cup (B \cap (B' \cup A))$

left part:

$(A' \cap B') \cup (A' \cap A)$

$A' \cap B'$

right part:

$(B \cap B') \cup (B \cap A)$

$B \cap A$

$(A + B)' = (A' \cap B') \cup (A \cap B)$

再证明

$A + (B + C)$

$(A - (B + C)') \cup ((B + C) - A')$

left part:

$A \cap ((B' \cap C') \cup (B \cap C))$

$(A \cap B' \cap C') \cup (A \cap B \cap C)$

right part:

$((B \cap C') \cup (C \cap B')) \cap A$

$(A \cap B \cap C') \cup (A \cap B' \cap C)$

再证明$(A + B) + C$得到同样的并集即可

### 1.3.9

a).
$A \cup B = \empty$

$A \cup B \subseteq \empty$

$A \subseteq \empty \Rightarrow A = \empty$

$同理\;B = \empty$

b).

$A \cap B' = \empty$

$\exists x, x \in A \land x \notin B$

$\exists x, x \in A \land x \in B'$

$\exists x, x \in A \cap B', contradiction$

$A \subseteq B$

如果

$A \subseteq B$

$A \cap B'$

$A \cap (u - B)$

$(A \cap u) - (A \cap B)$

$A - A$

$\empty$

c)

同理

### 1.3.10

a)

$1). x \in A \land x \notin B \Rightarrow x \in A \cup C \Rightarrow x \in B \cup C \Rightarrow x \in C$

$2). x \notin A \land x \in B \Rightarrow x \in C$

$由1，2得知，(x \in A \land x \notin B) \lor (x \notin A \land x \in B) \Rightarrow x \in C$

$(A - B) \cup (B - A) \subseteq C$

b)

$(A + B) - C$

$((A \cap B') \cup (B \cap A')) \cap C'$

$(A \cap B' \cap C') \cup (A' \cap B \cap C')$

再推导另一边

$(A \cup C) + (B \cup C)$

$((A \cup C) \cap (B \cup C)') \cup ((A \cup C)' \cap (B \cup C))$

$((A \cup C) \cap B' \cap C') \cup (A' \cap C' \cap (B \cup C))$

$(A \cap B' \cap C') \cup (A' \cap B \cap C')$

得证

### 1.3.11

$C = B \cap A'$

$B - C = B \cap (B \cap A')'$

$B \cap (B' \cup A)$

$(B \cap B') \cup (B \cap A)$

$\empty \cup A$

$A$