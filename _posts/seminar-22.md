---
title: Introducción a Haskell
id: 22
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: haskell
url: seminar-22
---

## Seminario 22 - Haskell I

1. Muestre la sintaxis básica de `Haskell`:

    - Operadores básicos
    - Declaración de valores
    - Listas. Funciones básicas sobre listas. 
        * List prepend - `cons` operator (`:`)
        * List concatenation (`++`)
        * *Ranges*
    - Tuplas. Funciones básicas sobre tuplas.
    - *List comprehensions*
        * Resuelva el problema de calcular el trío de lados de un triángulo
        rectángulo de longitud menor que 10 que suman 24. Es decir, 
        de entre todos los posibles tríos de enteros menores que 10
        que cumplen la desigualdad trianguar y pueden ser lados de un 
        triángulo rectángulo, escoja aquellos tríos que sumen 24. La 
        solución debe hacerse en una *list comprehension*.
    - Tipos básicos
        * Int, Bool, Integral...
        * Maybe a
        * [] a
        * Either a b

2. Explique cómo se ve reflejado el *pattern matching* en `Haskell`.
 Qué son los *guards*? Muestre ejemplos de expresiones `let in` y 
 `case of`.

3. Explique en profundidad qué son los tipos algebraicos. Mencione 
algunos tipos algebraicos básicos de `Haskell`, su definición y
cómo definir tipos nuevos.

4. Explique qué son los *type parameters*  y a qué recurso visto anteriormente en el curso son semejantes.

5. Explique qué son los *type classes* y a qué recurso visto
anteriormente en el curso son semejantes. 

1. Defina un tipo algebraico que sea una *type instance* de `Eq`. 
2. Explique qué es *mutual recursion*.
3. Explique qué es *minimal complete definition*.


