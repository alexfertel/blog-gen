---
title: Nuevas versiones de C#
id: 12
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: csharp
url: seminar-12
---

## Seminario 12 - Nuevas versiones de `C#`

Describa las nuevas características añadidas al lenguaje de programación `C#` en las versiones
6 y 7. En los casos que lo requieran, muestre y compare con código equivalente de versiones
anteriores. Utilice herramientas como `ILSpy`, `dotPeek` (_JetBrains_), `Reflector` (_Red Gate_) u otra
similar para mostrar el código generado por el compilador. A continuación, se listan las
características que no se pueden dejar de mencionar.

### Para `C#` 6

1. ¿Qué es el Roslyn? ¿Qué filosofía promueve y qué ventajas ofrece? Implemente un programa que
   reciba como parámetro un archivo `.cs` e
   imprima la cantidad de `if statements` que contiene el mismo.
2. Operadores `null-conditional` y `null-coalescing`.
3. `Expression-bodied functions`, `Property and Dictionary initializers`.
4. `String interpolation`.
5. `Exception filters`.
6. `using static directive`. Muestre el uso de esta característica en combinación con
   los métodos de la clase `System.Math` y `System.Linq.Enumerable`.
7. Operador `nameof`.
8. El tipo `BigInteger` representa un entero con signo arbitrariamente grande, se
   encuentra en el _namespace_ `System.Numerics`. Implemente la función `BigInteger Fibonacci(int n)`
   que retorna el n-ésimo término de la sucesión de
   `Fibonacci` e imprima `Fibonacci(1000)`.

### Para `C#` 7

1. `out variables`.
2. `Pattern matching`.
   1. `Pattern matching` en expresiones `is`.
   2. `Pattern matching` en instrucciones `switch`: orden de las cláusulas y
      cláusula por defecto.
   3. `Pattern matching` en combinación con `try-method`.
   4. ¿Cuáles son las ventajas del `pattern matching` con respecto a un conjunto
      de instrucciones `if...else...`?
3. Tuplas.
   1. ¿En qué escenarios se hace necesario el uso de tuplas y cómo se logra
      suplir su ausencia en versiones previas del lenguaje?
   2. ¿Son tratadas por valor o por referencia?
   3. Utilización en diccionarios con múltiples llaves y en listas.
   4. `Deconstruction` para tuplas.
   5. `Deconstruction` para tipos generales. ¿Qué ventaja tiene la utilización de
      parámetros de salida en lugar de retornar una tupla?
   6. Uso del `underscore` para descartar elementos en `deconstructions`.
4. Uso de variables locales y tipo de retorno por referencia. ¿Qué restricciones
   tiene el uso de esta característica?
