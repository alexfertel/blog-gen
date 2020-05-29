---
title: Title goes here
id: 12
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de C# _(Segunda Parte)_

Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico; es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como: _¿Por qué?_, _¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo el trabajo. **La persona a exponer** se decide el día de la exposición. Quién no esté presente en la exposición de su equipo tiene `0` en la evaluación. (Note que estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 12 - Nuevas versiones de `C#`

Describa las nuevas características añadidas al lenguaje de programación `C#` en las versiones
6 y 7. En los casos que lo requieran, muestre y compare con código equivalente de versiones
anteriores. Utilice herramientas como `ILSpy`, `dotPeek` (*JetBrains*), `Reflector` (*Red Gate*) u otra
similar para mostrar el código generado por el compilador. A continuación, se listan las
características que no se pueden dejar de mencionar.

### Para `C#` 6

a. ¿Qué es el Roslyn? ¿Qué filosofía promueve y qué ventajas ofrece? Implemente un programa que 
    reciba como parámetro un archivo `.cs` e
    imprima la cantidad de `if statements` que contiene el mismo.
b. Operadores `null-conditional` y `null-coalescing`.
c. `Expression-bodied functions`, `Property and Dictionary initializers`.
d. `String interpolation`.
e. `Exception filters`.
f. `using static directive`. Muestre el uso de esta característica en combinación con
    los métodos de la clase `System.Math` y `System.Linq.Enumerable`.
g. Operador `nameof`.
h. El tipo `BigInteger` representa un entero con signo arbitrariamente grande, se
encuentra en el *namespace* `System.Numerics`. Implemente la función `BigInteger Fibonacci(int n)`
que retorna el n-ésimo término de la sucesión de
`Fibonacci` e imprima `Fibonacci(1000)`.

### Para `C#` 7

a. `out variables`.
b. `Pattern matching`.
    i. `Pattern matching` en expresiones `is`.
    ii. `Pattern matching` en instrucciones `switch`: orden de las cláusulas y
        cláusula por defecto.
    iii. `Pattern matching` en combinación con `try-method`.
    iv. ¿Cuáles son las ventajas del `pattern matching` con respecto a un conjunto
    de instrucciones `if...else...`?
c. Tuplas.
    i. ¿En qué escenarios se hace necesario el uso de tuplas y cómo se logra
        suplir su ausencia en versiones previas del lenguaje?
    ii. ¿Son tratadas por valor o por referencia?
    iii. Utilización en diccionarios con múltiples llaves y en listas.
    iv. `Deconstruction` para tuplas.
    v. `Deconstruction` para tipos generales. ¿Qué ventaja tiene la utilización de
        parámetros de salida en lugar de retornar una tupla?
    vi. Uso del `underscore` para descartar elementos en `deconstructions`.
d. Uso de variables locales y tipo de retorno por referencia. ¿Qué restricciones
tiene el uso de esta característica?
