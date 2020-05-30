---
title: Seminarios de C#
id: 10
description: Seminario 10 - Dinamismo
lang: csharp
url: seminar-10
---

## Seminario 10 - Dinamismo

1. Implemente el tipo `Prototype` de forma tal que el siguiente código compile y ejecute (`C#` 4.0) con la
salida que se muestra a continuación:

```csharp
class Program {
    private static void Main(string[] args) {
        // Característica A
        dynamic parte1 = new Prototype();
        parte1.MetodoA = (Action<dynamic>) ((self) => {
            Console.WriteLine("MétodoA dice '{0}'", self.frase);
        });
        
        // Característica B
        dynamic parte2 = new Prototype();
        parte2.MetodoB = (Action<dynamic>) ((self) => {
           Console.WriteLine("MétodoB dice '{0}'", self.frase);
        });

        // ‘Fundiendo’ ambos objetos
        dynamic obj = parte1.BlendWith(parte2);        
        // Usando el objeto 'frase'
        obj.frase = "Hello World!";
        obj.MetodoA();
        obj.MetodoB();
    }
}

// SALIDA:
// MétodoA dice 'Hello World!'
// MétodoB dice 'Hello World!'
```

   1. ¿Por qué los métodos extensores no funcionan con un tipo dinámico (`dynamic`)?
   2. Implemente también para `Prototype` un método `Clone` de manera que los miembros de tipo función
que fuesen adquiridos por el original o alguna de sus copias sean compartidos entre todos.