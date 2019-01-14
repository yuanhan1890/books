### Six logical relationships between two **propositions**

apply truth table to discover that relationship (if P and Q are expressible in propositional calculus notation)

1. contrary: never both true. `P v Q is inconsistent`
2. subcontrary: never both false. `P v Q is tautology`
3. imply: whenever P is true, Q is true. `P -> Q is tautology` (superimplicant -> superalternate)
4. implied: whenever Q is true, P is true. `Q -> P is tautology`
5. equivalent: whevent P is true, Q is true and whenever Q is true, P is true. `P <-> Q is tautology`
6. contradictory: P and Q are never both true and never both false. `!(P <-> Q) is tautology`

reside six relationships, P and Q is indenpendent

P and Q's truth values can be defined in four patterns, then their connective can be 2^4 possiblities.

```
A B | a b c d e f g h i j k l m n o p
T T   T T T T T T T T F F F F F F F F
T F   T T T T F F F F T T T T F F F F
F T   T T F F T T F F T T F F T T F F
F F   T F T F T F T F T F T F T F T F
```

connectives:

1. A v B: **b**
2. A & B: **h**
3. A -> B: **e**
4. A <-> B: **g**

four connectives can be viewed as `truth functions`

```
a. A -> A         p. !(A -> A)
b. !A -> B        o. !(!A -> B)
c. B -> A         n. !(B -> A)
d. A              m. !A
e. A -> B         l: !(A -> B)
f. B              k: !B
g. !((A -> B) -> !(B -> A)) j. (A -> B) -> !(B -> A)
h. !(A -> !B)     i: A -> !B
```

### how to turn a contigent to tautology

select 'T' value assignment

```
...variables | A wff
T .. F ... F | ...    T  ....
```

change variable with T value to `P -> P`

change variable with F value to `!(P -> P)`

then everything else variables assignments will result A wff to `T` value
