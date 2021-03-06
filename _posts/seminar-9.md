---
title: Patrones de Diseño
id: 9
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: csharp
url: seminar-9
---

## Seminario 9 - Patrones de Diseño

Véanse las siguientes definiciones:

> *Mixin* programming is a style of software development where units of functionality are created in a
> class and then mixed in with other classes.
>
> A *mixin* is a class that provides a certain functionality to be inherited by a subclass, but is not meant
> to stand alone. Inheriting from a *mixin* is not a form of specialization but is rather a means to collect
> functionality. A class may inherit most or all of its functionality by inheriting from one or more *mixins*
> through multiple inheritance.
>
> *Mixins* are a language idea similar to multiple inheritance, but rather than extending a class a *mixin*
> works by defining an interface plus various functionalities associated with that interface. It avoids the
> pathologies of multiple inheritance and is a flexible way of providing add-on functionality.

`C#` 3.0 no soporta directamente el concepto de *Mixin*, pero utilizando determinados recursos de
programación que ofrece puede lograrse una aproximación satisfactoria del mismo. 

1. Utilizando estos recursos, implemente un *pseudo-mixin* en `C#` 3.0 que permita, dado una estructura de datos árbol
binario:

   1. Iterar sobre el árbol de modo *lazy*.
   2. Calcular la altura del árbol y devolverla como valor entero. Ambas características deben poder activarse y desactivarse 
   por separado y tiene que sentirse la sensación de que se puede adicionar o eliminar funcionalidad a la clase base, 
   en este caso, a la clase árbol. Note que el comportamiento de los mixin es muy similar a lo que se obtiene con herencia múltiple.
   3. Explique las ventajas y desventajas de la herencia múltiple con respecto a la solución de mixin
   propuesta por usted.
   4. ¿Tienen sentido/utilidad los mixins en un lenguaje con herencia múltiple?
   5. Si se tiene una clase C que hereda de A y B (herencia múltiple, por ejemplo en C++. ¿Cómo
   usted refactorizaría dicho código para hacerlo compilar en `C#`?
   6. ¿Qué desventajas tienen el uso de métodos extensores en `C#`?

### Dependency Injection

2. La Inversión del Control (IoC) y la inyección de dependencias (DI) son un
conjunto de patrones y principios que promueven el diseño de un código limpio y organizado
utilizando el paradigma de la programación orientada a objetos. Según **The Gang of Four** 
(quienes escribieron los primeros patrones de diseño de la programación orientada a objetos) una de las
formas de lograr un código limpio y organizado (fácil mantenimiento) es a través del diseño
desacoplado (*loosely coupled*) que se resume en: programar sobre interfaces (principio de sustitución
de Liskov: Los objetos deben poderse reemplazar por instancias de subtipos sin alterar el
funcionamiento del programa). Ejemplo:

   ```csharp
   // Mal Uso
   class ConsoleLogger 
   {
       public void Log(string message) 
       {
           Console.WriteLine(message);
       }
   }
   
   class FileLogger 
   {
       public void Log(string message) 
       {
           //...
       }
   }
   
   var logger = new ConsoleLogger();
   logger.Log("Hello"); 
   
   // Código desacoplado 
   // (Loosely Coupled)
   interface ILogger {
       void Log(string message);
   }
   
   class ConsoleLogger: ILogger {
       public void Log(string message){
           Console.WriteLine(message);
       }
   }
   
   class FileLogger: ILogger {
       public void Log(string message) {
           //...
       }
   }
   
   ILogger logger = new ConsoleLogger();
   logger.Log("Hello");
   ```

   1. Explique las ventajas de trabajar *loosely coupled*. Proponga un código (una clase sencilla) en
   donde se evidencie el beneficio de esta buena práctica.
   2. Inyección de dependencias por construcción: Cuando una clase requiere una instancia de
   otra clase para su funcionamiento (Dependencia), dicha instancia debiera pasarse en el
   constructor y de este modo adaptarlo a diferentes implementaciones de la `interface` a
   "inyectar". Explique las limitantes del código de la izquierda.

```csharp
// Mal Uso
class Dog
{
    public void Action()
    {
        ILogger logger = 
            new ConsoleLogger();
        logger.Log("Bark");
    }
} 

var pluto = new Dog();
pluto.Action(); 

// Inyección por construcción
class DogMartin Fowler
{
    private ILogger _logger;
    public Dog(ILogger logger)
    {
        _logger = logger;
    }

    public void Action()
    {
        _logger.Log("Bark");
    }
}

var pluto = 
    new Dog(new ConsoleLogger ());
pluto.Action();
```

3. Contenedores con Inversión del control (IoC containers): Según *Martin Fowler*, es un estilo
de programación donde la creación de los objetos es responsabilidad de una “entidad” quese le llama “Contenedor”.
Al contenedor se le registran las dependencias y es él quien realiza todas las instanciaciones. 
Ejemplo:

   ```csharp
   interface IContainer {
       void Register<T>(Type implementation);
       T Resolve<T>();
   }
   
   class Container: IContainer {
   ...
   }
   
   interface IAnimal { void Action(); }
   class Dog: IAnimal {
       private ILogger _logger;
       public Dog(ILogger logger) { _logger = logger; }
       
       public void Action()
       {
           _logger.Log("Bark");
       }
   }
   
   class Cat: IAnimal {
       private ILogger _logger;
       public Dog(ILogger logger) { _logger = logger; }
       
       public void Action()
       {
           _logger.Log("Miau");
       }
   }
   
   class Cow: IAnimal { ... }  // Muu
   
   var container = new Container();
   container.Register<ILogger>(typeof(ConsoleLogger));
   container.Register<IAnimal>(typeof(Dog));
   var animal = container.Resolve<IAnimal>();
   animal.Action();
   ```

   1. ¿De qué tipo es la variable `animal`?
   2. ¿Qué imprime la `animal.Action()`?
   3. ¿Qué cambio haría falta para que aparezca por pantalla `“Muu”`?
   4. Proponga la implementación de `Container` (utilizando `Reflection`) para que el código
        anterior compile.
   5. ¿Qué se debe hacer en `Container` para que las siguientes líneas (por separado) lancen
        excepción:

      ```csharp
      container.Register<ILogger>(typeof(Dog));
      container.Register<Dog>(typeof(Wolf));  // Wolf hereda de Dog
      ```

   6. Explique el funcionamiento de las características de `C#` utilizadas: `reflection`, `typeof`,
        `genericidad`, `herencia` y `polimorfismo`, etc.
