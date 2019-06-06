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

a. x属于A，可以得出x属于$B \cup D$;x属于C，得出同样的结论，于是
$A \cup C \subseteq B \cup D$

b. 同理，集合之间运算对应逻辑运算

### 1.2.2

利用$A = B\;iff\;A \subseteq B \land B \subseteq A$

### 1.2.3

RA

### 1.2.4

$A = B \Rightarrow A' = B'$

由以下推出

$A \subseteq B \Rightarrow B' \subseteq A'$

$B \subseteq A \Rightarrow A' \subseteq B'$

### 1.2.5

$A = B \land B \subseteq C \Rightarrow A \subseteq C$

$x \in A \Rightarrow x \in B \Rightarrow x\in C$

### 1.2.6

同1.2.5

### 1.2.7

已证

### 1.2.8

$S: \{ x: x \notin x \}$

如果S是元素，则$S \notin S$，悖论，所以S不能元素，是proper class

### 1.2.9

假设存在S是class，包含所有class，如果S不是元素，那么S不在S中，悖论；
如果S是元素，则存在一个class包含S，悖论。axiom 2前提是x是元素，不能构造一个包含class的class

### 1.2.10

proper class避免罗素悖论，$rational language$构造的$P(x)$避免Berry悖论