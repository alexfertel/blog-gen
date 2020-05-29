---
title: Title goes here
id: Seminario_25.md
description: Description goes here
lang: Language goes here
url: URL goes here
---

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

## Seminario 25 - `F#`

1. Muestre la sintaxis básica de `F#`.

2. Implemente en `F#`:

    a. Una función `quicksort` que ordene una lista de objetos basándose en
el algoritmo del mismo nombre. (Utilice _Pattern Matching_) y muestre el
código `Haskell` equivalente de una línea.
    b. Resuelva el problema de las _N_ reinas, que consiste en determinar si
se pueden colocar _N_ reinas en un tablero de ajedrez de _NxN_ de manera
que ninguna reina esté amenazada por otra.
Haga su solución en `F#`, compárela con la solución en `C#` según su simplicidad y eficiencia.
Exponga las características de `F#` utilizadas. (Proveer 2 soluciones,
una con y otra sin _recursión de cola_)
    c. Un árbol binario de búsqueda con las operaciones de `Add` y
`Contains`. Haga su solución en `F#` y en `C#`. Compárelas según su
simplicidad y eficiencia. Utilice _pattern matching_ para facilitar la
programación.
    d. La función `factorial` con el operador simbólico (`!`). 
        - ¿Por qué se necesita la palabra reservada `rec`?
