# Seminarios de C# _(Segunda Parte)_

Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico; es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como: _¿Por qué?_, _¿Basándose en qué?_, _¿Cómo se logra esto en el lenguaje `X`?_ entre otras, deben hacerse.

Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo el trabajo. **La persona a exponer** se decide el día de la exposición. Quién no esté presente en la exposición de su equipo tiene `0` en la evaluación. (Note que estas notas se promedian y hay distinción entre 0 y 2).

## Seminario 10 - Dinamismo

2. Implemente el tipo `Prototype` de forma tal que el siguiente código compile y ejecute (`C#` 4.0) con la
salida que se muestra a continuación:

```c#
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

i) ¿Por qué los métodos extensores no funcionan con un tipo dinámico (`dynamic`)?
ii) Implemente también para `Prototype` un método `Clone` de manera que los miembros de tipo función
que fuesen adquiridos por el original o alguna de sus copias sean compartidos entre todos.