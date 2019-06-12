[definition element 元素定义](#d_element) x是一个类，x又属于某个其他类，则x是一个元素；实际上并没有元素和集合的区分，也没有必要

[definition 1.9](#d_1_9)

$A = B\;iff\;\forall X \lparen \lparen A \in X \Rightarrow B \in X \rparen \land \lparen B \in X \Rightarrow A \in X \rparen \rparen$

定义A和B相等的含义，因为`RA`只对$false \Rightarrow true$不成立，所以这里$A \in X$和$B \in X$只能同时为$true$或者同时为$false$

即A和B是相等的元素(集合)，那么A和B必定同时属于任意一个集合或者同时不属于任意一个集合

由定义得出一个性质，两个集合相等，那么它们必定含有相同的元素:

[A1 the axiom of extent](#a_1) $A = B \Leftrightarrow \forall x \lparen x \in A \Rightarrow x \in B \land x \in B \Rightarrow x \in A \rparen$

在zermelo理论中，这是`the axiom of extension`

[definition 1.10](d_1_10) $a \subseteq A\;iff\;\forall x \lparen x \in a \Rightarrow x \in A\rparen$

[theorem 1.11](#t_1_11) 

$i) A = A$

利用$P \Rightarrow P$定理

$ii) A = B \Leftrightarrow B = A$

利用$P \land Q \Leftrightarrow Q \land P$

$iii) \lparen A = B \land B = C \rparen \Rightarrow A = C$

利用&E

$iv) \lparen A \subseteq B \land B \subseteq A \rparen \Leftrightarrow A = B$

利用&I

$v) A \subseteq B \land B \subseteq C \Rightarrow A \subseteq C$

利用MPP

[A2 the axiom of class construction](#a_2)，使`P(x)`由逻辑运算符构成，那么$\{x\;is\;element\;\land P\lparen x \rparen \}$

[definition 1.13 union](#d_1_13) $A \cup B: \{ x: x \in A \lor x \in B \}$

[definition 1.14 intersection](#d_1_14) $A \cap B: \{ x: x \in A \land x \in B \}$

[definition 1.15 universal](#d_1_15) $u: \{ x: x = x \}$

[definition 1.16 empty](#d_1_16) $\empty: \{ x: x \not= x \}$

[theorem 1.17](#t_1_17)

$i) \forall A \lparen \empty \subseteq A \rparen$

$ii) \forall A \lparen A \subseteq u \rparen$

证明$i$，找不到一个元素属于$\empty$ 而不属于A，所以$\empty$中所有元素都属于A

证明$ii$，对于A中所有元素都属于$u$显而易见

[definition 1.18](#d_1_18) $A\;and\;B\;is\;disjoint\;iff\;A \cap B = \empty$

[definition 1.19](#d_1_19) $A': \{ x: x \notin A \}$

## exercise

### 1.2.1

简单的逻辑$\land\;\lor$

### 1.2.2

使用1.2.1结论，利用$A = B\;iff\;A \subseteq B \land B \subseteq A$

### 1.2.3

使用RA

### 1.2.4

使用1.2.3的结论；

### 1.2.5

使用$\land$

### 1.2.6

同1.2.5

### 1.2.7

已证

### 1.2.8

$$
\def\arraystretch{1.5}
  \begin{array}{c:c:c:c}
  1 & (1) & S = \{ x : x \notin x \} & A \\
  \hdashline
  2 & (2) & S\;is\;element & A \\
  2 & (3) & S \in S \lor S \notin S & by\;definition \\
  4 & (4) & S \in S & A \\
  1,4 & (5) & S \notin S & by\;definition \\
  1,4 & (6) & S \in S \land S \notin S & vI\;4,5 \\
  7 & (7) & S \notin S & A \\
  1,7 & (8) & S \in S \land S \notin S & by\;definition \\
  1,2 & (9) & S \in S \land S \notin S & vE\;3,4,6,7,8 \\
  1 & (10) & S\;is\;not\;element & RA\;2,9 \\
\end{array}
$$

### 1.2.9

不会，因为proper class根据定义不能作为element

### 1.2.10

罗素悖论通过proper class来避免，Berry悖论通过regular language来避免