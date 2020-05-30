---
title: Seminarios de C++
id: 1
description: Seminario 1 (C++98, C++0x)
lang: cpp
url: seminar-1
---

## Seminario 1 (`C++98`, `C++0x`)

Implemente una clase `linked_list` doblemente enlazada en `C++` (con los elementos disponibles en el lenguaje hasta antes de `C++11` (`C++0x`)) que cumpla los siguientes requerimientos:

1. Definir las clases genéricas `linked_list` y `node`.
   1. Introducir lo que es un `template` en `C++` enfocado a la genericidad y cómo funciona de manera abreviada.
2. Definir miembros de datos necesarios de ambas clases.
   1. ¿Qué significan _por valor_, _por puntero_ y _por referencia_ en `C++`? ¿Cómo funciona esto en memoria?
   2. ¿Cuál es la filosofía en el uso de la memoria defendida por `C++`?
   3. Usar `typedef` para simplificar nombres de tipos.
3. Definir constructores básicos de `C++` y el operador `=`.
   1. ¿Qué hace cada uno de ellos? ¿Cuándo se llaman?
   2. Explicar la inicialización de campos.
   3. ¿Cómo funciona el paso de parámetros cuando se llama a una función?
   4. ¿Cuándo se deben utilizar parámetros _por valor_, _por puntero_ o _por referencia_?
   5. Constructores con un solo argumento.
   6. Constructores `explicit`.
4. Definir un constructor que reciba un `vector<T>`.
   1. Utilizar el iterador de `vector<T>` para recorrerlo.
   2. ¿Se puede hacer _list-initialization_ al estilo `C#`?
   3. ¿Cómo funciona el paso de parámetros cuando se llama a una función?
5. Definir el _destructor_ de la clase
   1. ¿Qué es un _destructor_?
   2. ¿Cuándo se debe definir el _destructor_ como virtual?
   3. Explicar los operadores `delete` y `delete[]`
6. Definir funciones `length`, `Add_Last`, `Remove_Last`, `At`, `Remove_At`.
   1. Funciones `inline` v.s Macros de `C`.
   2. ¿Cuándo usar funciones `inline`?
   3. ¿Cómo se comportan las variables por valor, punteros y las referencias como retorno de una función?
   4. Explicar las funciones `const`.
   5. ¿Cómo se capturan y lanzan las excepciones?
7. Definir el operador `[]` para `linked_list`. 
   1. Definir el operador `()` con
   parámetros `(int start, int count)` para `linked_list`, el cual crea una nueva instancia
   de la clase que contiene una copia de los count elementos consecutivos empezando en
   start.
   2. Sobrecargar operador `=` de `node` para que pueda recibir un elemento de tipo `T`.
   3. Limitaciones del operador `[]`.
   4. Usar una función como `lvalue` (`list->At(3) = 6;`) “`C++` Return by Reference”.
   5. Cómo debe ser el tipo de retorno del operador `()`?
8. Crear un puntero a función `Function<R,T>` que devuelva un valor de tipo `R` y recibe un
   parámetro de tipo `T`.
   1. Definir una función genérica `Map` en `linked_list` en R, que reciba un
   puntero a función que transforma un elemento `T` (parámetro genérico del tipo) en uno `R`
   (parámetro genérico del método); de manera que Map devuelve una instancia de
   `linked_list<R>` resultado de aplicar a todos los elementos T de la lista original la
   función de transformación.
   2. Crear punteros a funciones usando `typedef`.
   3. ¿Se puede crear un `Function<R, T…>` con un número variable de `T`s?
9. Sobrecargar operadores `<<` y `>>` para poder utilizar la clase con la salida estándar.
   1. Uso de la palabra reservada `friend`.
