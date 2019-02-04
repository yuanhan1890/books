- proper name: m, n, ...
- arbitrary name: a, b, c ...
- individual variable: x, y, z ...
- predicate letter: F, G, H ...
- reverse-E: ∃
- term: (proper name) | (arbitrary name)
- symbol: bracket | logical connective | term | individual variables | predicate letter | reverse-E
- formula: symbols formula | _

**metalogical variables**

- predicate letter: P ...
- terms: t1, t2, ...
- variables: v1, v2, ...

**atomic sentence**: Pt1t2...tn | n >= 0

wff(well-formed formula) of the predicate calculus

1. any atomic sentence if a wff
2. if A is wff, then !A is wff
3. if A and B are wffs, then A -> B is a wff
4. same for &
5. same for v
6. same for <->
7. let A(t) be a wff containing a term t, and let v be some variable not occurring in A(t); let A(v) be a formula resulting from A(t) by replacing at least one occurrence of t by v; then vA(v) is wff
8. let v be some variable and A(v) be a formula as described in (7.); then (∃v)A(v) is a wff
9. if a formula is not a wff in virtue of clauses (1.) - (8.), then it is not a wff

**propositional function**: a formula A is propositional function in the variables v1, v2, ... vn for n greater than or equal to 0, if (v1)(v2)..(vn)A is a wff

the **scope** of an occurrence of a logical connective in a **proposition function** is the shortest propositional function in which it occurs

