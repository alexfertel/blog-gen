---
title: Seminarios de Lenguajes Dinámicos
id: 15
description: Seminario 15 - Python II
lang: python
url: seminar-15
---

## Seminario 15 - `Python` II

En `Python` no existe el tipo predefinido _array_ multidimensional.

1. Implemente la clase `Matriz`, para representar matrices de enteros, con las operaciones de suma, producto, producto escalar. Implemente además otras funcionalidades que crea necesarias.
2. Implemente la indización para la clase `Matriz` de forma tal que se puedan hacer construcciones como las siguientes: `a = Matriz[0, 6]` ó
   `Matriz[1, 2] = 9`
3. Los objetos matrices deberán ser iterables. El iterador de una matriz con `n` filas y `m` columnas debe devolver los elementos en el siguiente orden:

   $m_{1,1}, m_{1,2}, ..., m_{1,m}, m_{2,1}, ..., m_{n,m}$
   <!-- $m_{1,1}, m_{1,2}, ..., m_{1,m}, m_{2,1}, ...,m_{n,m}$ -->
