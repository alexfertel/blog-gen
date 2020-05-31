---
title: Seminarios de Lenguajes Dinámicos
id: 19
description: Seminario 19 - Python VI
lang: python
url: seminar-19
---

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
