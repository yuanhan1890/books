[theorem 1.5](#t_1_5)

$i) P \Rightarrow P \lor Q$

$ii) P \land Q \Rightarrow P$

[theorem 1.6](#t_1_6)

For all sentences $P$, $Q$ and $R$, the following is true:

$\lbrack\lparen P\Rightarrow Q \rparen \land \lparen Q \Rightarrow R \rparen \rbrack \Rightarrow \lparen P \Rightarrow R \rparen$

[theorem 1.7](#t_1_7)

For all sentences $P$, $Q$ and $R$, if $Q \Rightarrow R$, then

$i) P \lor Q \Rightarrow P \lor Q$

$ii) P \land Q \Rightarrow P \land Q$

[theorem 1.8](#t_1_8)

For all sentences $P$, $Q$ and $R$, the following are true:

$i) P \lor Q \Leftrightarrow Q \lor P$

$ii) P \lor \lparen Q \lor R \rparen \Leftrightarrow \lparen P \lor Q \rparen \lor R$

$iii) P \land \lparen Q \lor R \rparen \Leftrightarrow \lparen P \land Q \rparen \lor \lparen P \land R\rparen$

$iv) P \lor P \Leftrightarrow P$

$i)' P \land Q \Leftrightarrow Q \land P$

$ii)' P \land \lparen Q \land R \rparen \Leftrightarrow \lparen P \land Q \rparen \land R$

$iii)' P \lor \lparen Q \land R \rparen \Leftrightarrow \lparen P \lor Q \rparen \land \lparen P \lor R\rparen$

$iv)' P \land P \Leftrightarrow P$

## Exercise

### 1.1.1

prove [theorem 1.8](#t_1_8)

如果用table来计算表达式真值，继而证明定理，就太无聊了

$i) P \lor Q \Leftrightarrow Q \lor P$

$1. P \Rightarrow Q \lor P$

$2. Q \Rightarrow P \lor Q$

$P \lor Q, 1, 2 \Rightarrow Q \lor P$

反之亦证 $Q \lor P \Rightarrow P \lor Q$

得到$P \lor Q \Leftrightarrow Q \lor P$

$i)' P \land Q \Leftrightarrow Q \land P$

$1. P \land Q \Rightarrow P$

$2. P \land Q \Rightarrow Q$

$1, 2 \Rightarrow Q \land P$

反之亦然

### 1.1.2

$\lnot \lparen P \lor Q \rparen \Leftrightarrow \lnot P \land \lnot Q$

part1: $\lnot \lparen P \lor Q \rparen \Rightarrow \lnot P \land \lnot Q$

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lnot \lparen P \lor Q \rparen & A\\
   \hdashline
   2 & (2) & P & A \\
   2 & (3) & P \lor Q & 2 \\
   1,2 & (4) & \lnot \lparen P \lor Q \rparen \land \lparen P \lor Q \rparen & \&I \\
   1 & (5) & \lnot P & RAA \; 4,2 \\
   1 & (6) & \lnot Q & 同理 \\
   1 & (7) & \lnot P \land \lnot Q & \&I
\end{array}
$$

part2: $\lnot P \land \lnot Q \Rightarrow \lnot \lparen P \lor Q \rparen$

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lnot P \land \lnot Q & A\\
   \hdashline
   1 & (2) & \lnot P & \&E \; 1 \\
   1 & (3) & \lnot Q & \&E \; 1 \\
   4 & (4) & P \lor Q & A \\
   5 & (5) & P & A \\
   1,5 & (6) & \lnot P \land P & \&I \; 2,5 \\
   5 & (7) & \lnot \lparen \lnot P \land \lnot Q \rparen & RAA \; 2,6\\
   8 & (8) & Q & A \\
   8 & (9) & \lnot \lparen \lnot P \land \lnot Q \rparen & 同理\\
   4 & (10) & \lnot \lparen \lnot P \land \lnot Q \rparen & vE \; 4,5,7,8,9 \\
   1,4 & (11) & \lnot \lparen \lnot P \land \lnot Q \rparen \land \lparen \lnot P \land \lnot Q \rparen & \&E \; 1,11 \\
   1 & (12) & \lnot P \land \lnot Q & RAA \; 1,11
\end{array}
$$

得证

$\lnot \lparen P \land Q \rparen \Leftrightarrow \lnot P \lor \lnot Q$

part1: $\lnot \lparen P \land Q \rparen \Rightarrow \lnot P \lor \lnot Q$

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lnot \lparen P \land Q \rparen & A\\
   \hdashline
   2 & (2) & \lnot \lparen \lnot P \lor \lnot Q \rparen & A \\
   2 & (3) & \lnot \lnot P \land \lnot \lnot Q & use \; ex \;1.2 \\
   2 & (4) & P \land Q & use\;theorem\;\\
   1,2 & (5) & \lparen P \land Q \rparen \land \lnot \lparen P \land Q \rparen & \&I\;1,2 \\
   1 & (6) & \lnot\lnot\lparen \lnot P \lor \lnot Q \rparen & RAA\;1,5 \\
   1 & (7) & \lnot P \lor \lnot Q & DN
\end{array}
$$

par2: $\lnot P \lor \lnot Q \Rightarrow \lnot \lparen P \land Q \rparen$

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lnot P \lor \lnot Q & A\\
   \hdashline
   2 & (2) & \lnot P & A \\
   3 & (3) & P \land Q & A \\
   3 & (4) & P & \&E \; 3\\
   2,3 & (5) & \lnot P \land P & \&I \; 2,4 \\
   2 & (6) & \lnot \lparen P \land Q \rparen & RAA\;2,3 \\
   7 & (7) & Q & A \\
   7 & (8) & \lnot \lparen P \land Q \rparen & 同理 \\
   1 & (9) & \lnot \lparen P \land Q \rparen & vE\;1,2,6,7,8
\end{array}
$$

得证

### 1.1.3

这就是`DN`

用table来列出真值

### 1.1.4

b)

只证明一半

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & P \Rightarrow Q & A \\
   \hdashline
   2 & (2) & \lnot \lparen \lnot P \lor Q \rparen & A \\
   2 & (3) & P \land \lnot Q & use\;ex1.2\\
   2 & (4) & P & \&I \; 3 \\
   1,2 & (5) & Q & MPP\;1,4 \\
   2 & (6) & \lnot Q & \&I 3 \\
   1,2 & (7) & Q \land \lnot Q & \&I \; 5,6 \\
   1 & (8) & \lnot \lnot (\lnot P \lor Q) & RAA\;1,7 \\
   1 & (9) & \lnot P \lor Q & DN \\
\end{array}
$$

e)

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lbrack \lparen P \lor Q \rparen \land \lnot P & A \\
   \hdashline
   1 & (2) & P \lor Q & \&E\;1 \\
   1 & (3) & \lnot P & \&E\;1 \\
   4 & (4) & \lnot Q & A \\
   1,4 & (5) & \lnot P \land \lnot Q & \&I\;3,4 \\
   1,4 & (6) & \lnot \lparen P \lor Q \rparen & use\;morgan \\
   1,4 & (7) & P \lor Q \land \lnot \lparen P \lor Q \rparen & \&I\;2,6 \\
   1 & (8) & \lnot \lnot Q & RAA\;4,7 \\
   1 & (9) & Q & DN
\end{array}
$$

### 1.1.5

b).

$$
\def\arraystretch{1.5}
   \begin{array}{c:c:c:c}
   1 & (1) & \lbrack \lparen P \Rightarrow Q \rparen \land \lparen R \Rightarrow Q \rparen \rbrack & A \\
   \hdashline
   1 & (2) & P => Q & \&E\;1 \\
   1 & (3) & R => Q & \&E\;1 \\
   4 & (4) & P \lor R & A \\
   5 & (5) & P & A \\
   1,5 & (6) & Q & MPP\;2,5 \\
   7 & (7) & R & A \\
   1,7 & (8) & Q & MPP\;3,8 \\
   1,4 & (9) & Q & vE\;4,5,6,7,8 \\
   1 & (10) & P \lor R \Rightarrow Q & RA \\
\end{array}
$$

### 1.1.6

利用之前的证明即可

### 1.1.7

$\lparen P \Rightarrow Q \rparen \land \lparen R \Rightarrow S \rparen$

$P \lor R \Rightarrow Q \lor S$

$P \land R \Rightarrow Q \land S$

利用vE和&I即可推导