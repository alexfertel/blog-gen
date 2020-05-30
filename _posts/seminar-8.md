---
title: Seminarios de C#
id: 8
description: Seminario 4 - DSL en C# 4.0
lang: csharp
url: seminar-8
---

# Seminario 8 - DSL en C# 4.0

1. Un `DSL` interno (según Martin Fowler) es un lenguaje de dominio específico que se define a partir de un lenguaje de programación base mediante la utilización
   de sus características. Hay lenguajes de programación que brindan características específicas que facilitan la creación de pequeños `DSL`. Cuando el lenguaje
   posee una sintaxis poco flexible como `C#` y `Java`, es común que se utilice un patrón de diseño conocido como “_fluent interfaces_”.
   Diseñe un DSL interno en `C#` 3.5 que permita la definición de personas con atributos: `FirstName`, `LastName`. Estos objetos deberán poderse crear de las
   siguientes formas:

```c#
// Accediendo directamente a los atributos
var p1 = Factory.New.Person;
p1.FirstName = "Louis";
p1.LastName = "Dejardin";

// Accediendo a los atributos en forma de diccionario
var p2 = Factory.New.Person;
p2["FirstName"] = "Louis";
p2["LastName"] = "Dejardin";

// Inicializando mediante una "fluent interface"
var p3 = Factory.New.Person.FirstName("Louis").LastName("Dejardin");
// Con notación similar a JSON
var p4 = Factory.New.Person(FirstName: "Louis", LastName: "Dejardin");
```

2. ¿Cómo se pudiera lograr (en `C#` 4.0) que en nuestro `DSL` los atributos de la persona puedan definirse dinámicamente, es decir, poder inicializar una persona con _manager_, aun cuando no fuera concebido así en un principio? Implemente esta versión del `DSL` dinámico.

```c#
var person = Factory.New.Person(
    FirstName: "Louis",
    LastName: "Dejardin",
    Manager: New.Person(
    	FirstName: "Bertrand",
    	LastName: "Le Roy",
    );
);
```

3. Implemente la clase `Factory` de manera que pueda inicializar a través de su método `New` cualquier tipo conocido en ejecución.
Investigue qué características de un LP favorecen la concepción de `DSL` embebidos.

Objetivos: Uso de DynamicObject para la creación de `DSL`, Fluent Programming, Named-Parameters, Reflection.
