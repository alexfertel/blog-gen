---
title: Seminarios de C++
id: 2
description: Seminario (C++11, C++14)
lang: cpp
url: seminar-2
---

## Seminario 2 (C++11, C++14):

Implemente una clase `linked_list` doblemente enlazada en `C++` (haciendo uso extensivo de los elementos novedosos en el lenguaje desde `C++11`) que cumpla los siguientes requerimientos:

1. Definir las clases genéricas `linked_list` y `node`.
   1. No es necesario una exposición, ya el **Equipo 1** tocó este punto.
2. Definir miembros de datos necesarios de ambas clases.
   1. ¿Cuáles son los nuevos elementos introducidos a partir de `C++11` que permiten un manejo más _“inteligente”_ de la memoria?
   2. ¿Cómo deben inicializarse?
   3. ¿Cuál es la filosofía en el uso de la memoria defendida por `C++`?
   4. Usar _alias_ para simplificar nombres de tipos.
3. Definir los constructores clásicos de `C++` (`C++0x`), el constructor `move` y las sobrecargas del operador `=`.
   1. ¿Qué hace cada uno de ellos? ¿Cuándo se llaman?
   2. ¿Qué es un `lvalue` y un `rvalue`?
   3. Explique `std::move`.
4. Definir un constructor que permita hacer _list-initialization_ lo más parecido a `C#` posible.
   1. Compare la utilización del `{}` v.s `()`.
5. Definir un constructor que reciba un `vector<T>`.
   1. Usar `for_each` con _expresiones lambda_.
6. Definir el destructor de la clase.
   1. ¿Hace falta?
   2. ¿Para qué casos haría falta un puntero crudo (_raw pointer_)?
7. Definir funciones `length`, `Add_Last`, `Remove_Last`, `At`, `Remove_At`
   1. Explique `Noexcept`.
   2. Inferencia de tipo en `C++` (`auto`, `decltype`, `decltype(auto)`). Explicar todos, pero
   no obligatoriamente usarlos.
8. Crear un puntero a función `Function<R,T…>` que devuelve un valor de tipo `R` y recibe un número
   variable de parámetros de tipo `T`.
   1. Definir una función genérica `Map` a `linked_list` en `T` y `R`, que
   recibe un puntero a función que transforma un elemento `T` en uno `R`; de manera que `Map` devuelve
   una instancia de `linked_list<R>` resultado de aplicar a todos los elementos `T` de la lista
   original la función de transformación.
   2. Crear punteros a funciones usando _alias_.
   3. Crear un puntero a función `Function` que permita cualquier cantidad de parámetros de cualquier tipo.
