---
title: Title goes here
id: 20
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

## Seminario 20 - `Python` VII

4. El lenguaje de programación `VPL` es un lenguaje extremadamente 
sencillo que tiene la definición:

Un programa en `VPL` es una secuencia de 0 o más instrucciones. La 
ejecución de dicho programa consiste en ejecutar sus instrucciones en 
el orden en que aparecen. 

Usted debe implementar una clase en `Python` 
`VPLProgram` para representar un programa `VPL`. Dicha clase deberá 
construir sus instancias a partir de una secuencia de instrucciones 
`VPL`. 

En el momento de ejecutar el programa se requerirá además  un 
contexto, que es un objeto que almacenara las variables declaradas por 
el programa y los tipos de estas.

El lenguaje solo cuenta con tres tipos de instrucciones: 
declaraciones, asignaciones y la instrucción especial `print`. 
Una declaración requiere un tipo y un nombre de variable. Los tipos 
válidos son int, string y bool. 

La ejecución de una instrucción de 
declaración consiste en crear una variable en el objeto contexto con el 
tipo y el nombre de la declaración. Después de la ejecución de la 
declaración la variable creada en el contexto no tendrá valor. 

Una asignación consiste en una expresión y un nombre de variable. Su 
ejecución evalúa la expresión e intenta darle el valor resultante a la 
variable con ese nombre en el contexto. Si la variable no existe en el 
contexto o el tipo de la expresión no corresponde con el de dicha 
variable se deberá lanzar una excepción. La asignación es además una 
expresión, evaluándose como el valor de su parte derecha.

La instrucción especial `print` imprime en consola la representación 
como cadena de una expresión.

Una expresión puede ser un literal de alguno de los tipos válidos, una 
asignación, un nombre de variable o una operación. Las operaciones 
pueden ser los siguientes operadores binarios:

* `+`: si los operandos son enteros funciona como la suma, 
    si uno de los dos operandos es una cadena de caracteres 
    entonces funciona como la concatenación de las 
    representaciones como cadena de los operandos. No 
    está definido para dos operandos `bool`.
* `*`: multiplicación de números enteros.
* `and`: operador booleano.
* `or`: operador booleano.

Los operadores deben lanzar excepción en caso de que exista alguna 
incompatibilidad de tipos. 
Su implementación debe permitir algo como esto:

```python
>>> context = VPLContext()
>>> declaration1 = DeclarationStmt('int', 'a')
>>> declaration2 = DeclarationStmt('int', 'b')
>>> assign1 = AssignmentExpression('a', IntLiteral(2))
>>> assign2 = AssignmentExpression('b', IntLiteral(2))
>>> a = VarExpression('a')
>>> b = VarExpression('b')
>>> addExp = AddExpression(a, b) 
>>> printStmt = PrintStmt(addExp) 
>>> program = VPLProgram([declaration1, declaration2, assign1, assign2, printStmt]) 
>>> program.exec(context)
4
>>> 
```
