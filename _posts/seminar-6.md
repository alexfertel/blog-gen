---
title: LINQ
id: 6
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: csharp
url: seminar-6
---

## Seminario 6 - LINQ

Brinde una implementación eficiente y simple del siguiente método extensor y analice el costo operacional para el caso peor:

```csharp
public static IEnumerable<IGrouping<TKey, TSource>> GroupBy<TSource, TKey>(
	this IEnumerable<TSource> source,
	Func<TSource, TKey> keySelector
)
```

Una aplicación útil de este método extensor sería:

```csharp
var estudiantes = new List<Estudiante>();
// ...Algún código de inicialización...
var Grupos = estudiantes.GroupBy(estudiante => estudiante.Grupo);
```

1. ¿Se explotaría en su totalidad una implementación “_Lazy_” del `GroupBy`? ¿El costo de las operaciones para el caso peor es el mismo independientemente de si se hace un `Take(k)`?
2. Reescriba el siguiente código de forma tal que siga manteniendo el `while(true)` pero que permita “parar” la ejecución del método para un momento dado:

```csharp
static List<int> GetPrimes()
{
    var primes = new List<int>();
    int i = 1;
    while (true)
    {
        if (IsPrime(i)) primes.Add(i);
        i++;
    }
    return primes;
}
```

3. ¿Por qué la siguiente sentencia no bloquea el programa?

```csharp
GetPrimes().Where(prime => prime.ToString().StartsWith("2")).Take(10);
```

4. Convierta el siguiente código `Haskell` a `C#`:

```haskell
four :: Integer -> Integer
four x = 4

infinity :: Integer
infinity = 1 + infinity
```

5. ¿Cuál es el resultado de evaluar `four` en `infinity`?
6. ¿Son equivalentes los siguientes códigos?

```csharp
if (Cond1() || Cond2()) {
    Console.WriteLine(true);
}
else {
    Console.WriteLine(false);
}
```

```csharp
if (Cond1() | Cond2()) {
    Console.WriteLine(true);
}
else {
    Console.WriteLine(false);
}
```

7. Explique cómo funciona `yield return`. ¿Cómo se logra este comportamiento? ¿En `Java` existe algun mecanismo análogo?
