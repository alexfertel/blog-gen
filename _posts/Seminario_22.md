# Seminarios de Lenguajes Funcionales

Los requerimientos de cada ejercicio del seminario serán expuestos 
desde el punto de vista práctico y teórico; es decir, para su 
exposición, cada equipo se basará en el caso práctico en cuestión para 
introducir y explicar el elemento teórico requerido. La exposición no 
es una mera enunciación de código. Preguntas como: _¿Por qué?_, 
_¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre 
otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del 
ejercicio y estar preparados para exponer todo el trabajo. **La persona 
a exponer** se decide el día de la exposición. Quién no esté presente 
en la exposición de su equipo tiene `0` en la evaluación. (Note que 
estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 23 - Haskell I

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

a. Defina un tipo algebraico que sea una *type instance* de `Eq`. 
b. Explique qué es *mutual recursion*.
c. Explique qué es *minimal complete definition*.


