## Propositional calculus

**symbols**:

1. brackets: `(`, `)`
2. connective: `->`, `<->`, `!`, `&`, `v`
3. propositional variables: `P`, `Q`, `R` ...

**formula**:: any sequence of symbols

**well-formed formulae**: a sub-class of formulae which have 7 clauses

1. any propositional variable is a wff
2. any wff preceded by `!` is a wff
3. any wff followed by `->` followed by any wff, the whole enclosed in brackets, is a wff
4. like (3), with `&` replacing `->`
5. like (3), with `v` replacing `->`
6. like (3), with `<->`, replacing `->`
7. if a formulae is not a wff in virtue of clauses (1) - (6), then it is not a wff

**connective priority**:

`(), !, &, v , ->, <->`

### Syntactical notions

**the scope of connective**:

1. scope = `(` + left_formulae + `connective` + right_formulae + `)`
2. scope = `!` + formulae
3. scope = single propositional variable formulae

the scope of an occurrance of a connective in a wff is the shortest wff in which that occurence appears

**subordinate**

on connective is subordinate to another if the scope of the first is contained in the scope of the second.

the connective with the widest scope is called `main connective`

**sequent-expression**

A1, A2, .. An, B is any set of wffs, with `assertion-sign` `=>`, we get `sequent expression`

A1, A2, ... An => B

`A1, A2, ... An` are metalogical variables

there are instances of set of wff

