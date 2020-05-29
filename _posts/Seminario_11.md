---
title: Title goes here
id: 11
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de C# _(Segunda Parte)_

Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico; es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como: _¿Por qué?_, _¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo el trabajo. **La persona a exponer** se decide el día de la exposición. Quién no esté presente en la exposición de su equipo tiene `0` en la evaluación. (Note que estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 11 - DLR

1. ¿Qué se entiende por `DLR` y `CLR` en `.NET`?
2. ¿Están al mismo nivel en la arquitectura de `.NET`?
3. ¿Qué representan `call site`, `receiver` y `binder`?
4. Explique que genera el compilador de `C#` para el siguiente código:

```c#
string text = "text to cut";
dynamic startIndex = 2;
string substring = text.Substring(startIndex);
```

5. Muestre para qué otros lenguages además de `C#` la `DLR` brinda soporte. Compare la eficiencia
    con los intérpretes de los lenguajes originales.
6. Compare la estrategia de implementación de `dynamic` de `C#` con la propuesta e implementada
    para `Java`.

Bibliografía: Manning, `C#` in Depth, SECOND EDITION, Chapter 14

