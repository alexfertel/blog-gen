---
title: Seminarios de Lenguajes Dinámicos
id: 18
description: Seminario 18 - Python V
lang: python
url: seminar-18
---

## Seminario 18 - `Python` V

Implemente un módulo llamado `functionTools` donde se encuentren
las siguientes definiciones:

1. `fixParams`: Función que permite "fijar" valores como argumentos de
   funciones. Por ejemplo, fijar el valor 2 como primer argumento de una
   función `f` con tres parámetros consiste en obtener una función `g` de 2
   parámetros de manera que `g(a, b)` sea equivalente a hacer `f(2, a, b)`
   . Para esto `fixParams` recibe como primer argumento la función
   seguida de los valores que se
   quieren fijar. Por ejemplo, la siguiente línea fija los valores 6 y 7
   como segundo y cuarto argumento respectivamente de una función de
   cuatro parámetros. `g = fixParams(f, _, 6, _, 7)`.
   El valor especial `_` (guión bajo) debe ser definido en el módulo
   `functionTools` para indicar que un parámetro no tiene valor fijo.
   Luego de la línea del ejemplo hacer `g(1, 2)` es equivalente a hacer
   `f(1, 6, 2, 7)`.

2. `_`: valor especial para indicar un parámetro sin valor fijo en la
   función `fixParams`.
3. `rearrangeParams`: Función que permite cambiar el orden de los
   parámetros de una función. Recibe una función de `n` parámetros y una
   permutación de $0, ..., n - 1$ y devuelve una función con los
   parámetros ordenados según dicha permutación. El valor en la posición
   `i` de la permutación indica la posición del parámetro `i` de la
   función original en la función resultante. Vea los siguientes ejemplos:

4. `g = rearrangeParams(sum, 3, 2, 1, 0)`: la función `g` es
   equivalente a la función `sum` con los parámetros invertidos, o sea,
   `sum(a, b, c, d)` es equivalente a hacer `g(d, c, b, a)`
5. `g = rearrangeParams(sum, 0, 1, 3, 2)` : la función `g` es
   equivalente a la función `sum` con los dos últimos parámetros
   invertidos, o sea, `sum(a, b, c, d)` es equivalente a
   hacer `g(a, b, d, c)`.

Las funciones que pueden recibir como argumento `fixParams` y
`rearrangeParams` pueden tener cualquier cantidad de parámetros
posicionales. Para simplificar el problema asuma que estas funciones no
tendrán cantidades variables de parámetros.

1. Explique cómo funciona la resolución de nombres (_name binding_)
   dentro del cuerpo de una función en `Python`.
