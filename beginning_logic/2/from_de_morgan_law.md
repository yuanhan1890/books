## Use DeMorgan Law

### 36th example: De morgan law

P v Q <=> !(!P & !Q)

1. proof: P v Q => !(!P & !Q)

```
1 (1) P v Q                         A
2 (2) !P & !Q                       A
2 (3) !P                            2 &I
4 (4) P                             A
2,4 (5) !P & P                      3,4 &I
4 (6) !(!P & !Q)                    2,5 RAA
7 (7) Q                             A
2 (8) !Q                            2 &I
2,7 (9) Q & !Q                      7,8 &I
7 (10) !(!P & !Q)                   2,9 RAA
1 (11) !(!P & !Q)                   1,4,6,7,10 vE
```

2. proof: !(!P v !Q) => P v Q

```
1 (1) !(!P v !Q)                     A
2 (2) !(P v Q)                       A
3 (3) P                              A
3 (4) P v Q                          3 vI
2,3 (5) !(P v Q) & (P v Q)           2,4 &I
2 (6) !P                             A
2 (7) !P v !Q                        6 vI
1,2 (8) !(!P v !q) & (!P v !Q)       1,7 &I
1 (9) !!(P v Q)                      2,8 RAA
1 (10) P v Q                         9 DN
```

### 35th example

P -> Q <=> !(P & !Q)

1. proof: P -> Q => !(P & !Q)

```
1 (1) P -> Q              A
2 (2) P & !Q              A
2 (3) P                   2 &E
2 (4) !Q                  2 &E
1,2 (5) !P                1,4 MTT
1,2 (6) P & !P            3,5 &I
1 (7) !(P & !Q)           2,6 RAA
```

2. proof: !(P & !Q) => P -> Q

```
1 (1) !(P & !Q)               A
2 (2) P                       A
3 (3) !Q                      A
2,3 (4) P & !Q                2,3 &I
1,2,3 (5) !(P & !Q) & (P & !Q)  1,4 &I
1,2 (6) Q                     3,5 RAA
1 (7) P -> Q                  2,6 CP
```

### 48th example

!P v Q => P -> Q

```
1 (1) !P v Q                   A
1 (2) !(!!P & !Q)              1 use demorgan law
1 (3) !!P -> Q                 2 use 35th example
4 (4) !!P                      A
1,4 (5) Q                      3,4 MPP
4 (6) P                        4 DN
1 (7) P -> Q                   5,6 CP
```