---
title: DLR
id: 11
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: csharp
url: seminar-11
---

## Seminario 11 - DLR

1. ¿Qué se entiende por `DLR` y `CLR` en `.NET`?
2. ¿Están al mismo nivel en la arquitectura de `.NET`?
3. ¿Qué representan `call site`, `receiver` y `binder`?
4. Explique que genera el compilador de `C#` para el siguiente código:

```csharp
string text = "text to cut";
dynamic startIndex = 2;
string substring = text.Substring(startIndex);
```

5. Muestre para qué otros lenguages además de `C#` la `DLR` brinda soporte. Compare la eficiencia
    con los intérpretes de los lenguajes originales.
6. Compare la estrategia de implementación de `dynamic` de `C#` con la propuesta e implementada
    para `Java`.

Bibliografía: Manning, `C#` in Depth, SECOND EDITION, Chapter 14

