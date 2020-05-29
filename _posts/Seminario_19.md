---
title: Title goes here
id: Seminario_19.md
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de Lenguajes Dinámicos II

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

## Seminario 19 - `Python` VI

1. Usando decoradores proponga e implemente un mecanismo de 
contratos al estilo `CodeContract`. Las precondiciones y 
postcondiciones se deben poder especificar como en el siguiente 
ejemplo:

```python
@Contract(require=lambda x: x > 0, ensure=lambda result: result > 0)
def someFunction(x):
	pass
```

El parámetro con nombre `require` debe ser una función o cualquier otro 
objeto invocable que verifique el cumplimiento de las precondiciones y 
lance excepción en caso de que no se cumplan. De manera análoga el 
parámetro con nombre `ensure` debe ser un objeto invocable que 
verifique el cumplimiento de las postcondiciones. 

