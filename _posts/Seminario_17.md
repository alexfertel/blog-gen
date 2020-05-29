---
title: Title goes here
id: Seminario_17.md
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de Lenguajes Dinámicos II

Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico; es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como: _¿Por qué?_, _¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo el trabajo. **La persona a exponer** se decide el día de la exposición. Quién no esté presente en la exposición de su equipo tiene `0` en la evaluación. (Note que estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 17 - `Python` IV

Implemente en python los siguientes patrones:

1. `Singleton`: Clase de la que solo se puede crear una instancia, 
por lo que todos los intentos de instanciación deben resultar 
en un mismo objeto (el del primer intento).
Tenga en cuenta en su implementación que las clases que hereden 
de esta clase deberán heredar también el comportamiento 
`Singleton`.
2. Implemente la clase `ObjetoInmutable` en `Python`. Un objeto 
inmutable, una vez creado, **no podrá ser modificado**. No ser 
modificado significa que después de su creación no se puede 
hacer `o.t = valor` ni `del(o.t)`, siendo `o` una instancia de 
`ObjetoInmutable`. Realice su diseño de forma tal que cualquier 
clase que herede de `ObjetoInmutable` tenga el mismo 
comportamiento.

