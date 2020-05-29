---
title: Title goes here
id: 15
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de Lenguajes Dinámicos I

Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico; es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como: _¿Por qué?_, _¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo el trabajo. **La persona a exponer** se decide el día de la exposición. Quién no esté presente en la exposición de su equipo tiene `0` en la evaluación. (Note que estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 15 - `Python` II

En `Python` no existe el tipo predefinido *array* multidimensional.

1. Implemente la clase `Matriz`, para representar matrices de enteros, con las operaciones de suma, producto, producto escalar. Implemente además otras funcionalidades que crea necesarias.
2. Implemente la indización para la clase `Matriz` de forma tal que se puedan hacer construcciones como las siguientes: `a = Matriz[0, 6]` o 
`Matriz[1, 2] = 9`
3. Los objetos matrices deberán ser iterables. El iterador de una matriz con `n` filas y `m` columnas debe devolver los elementos en el siguiente orden: 
$m_{1,1}, m_{1,2}, ..., m_{1,m}, m_{2,1}, ...,m_{n,m}$