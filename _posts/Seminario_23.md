---
title: Title goes here
id: Seminario_23.md
description: Description goes here
lang: Language goes here
url: URL goes here
---

# Seminarios de Lenguajes Funcionales

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

## Seminario 23 - Haskell II

Hasta ahora hemos visto cómo `Haskell` representa un lenguaje
de programación funcional puro y algunas de las ventajas que vienen
con estas características, sin embargo, el principal atractivo
de `Haskell` es su sistema de tipos, el cual aporta capas sobre capas
de abstracción al lenguaje. Veamos algunas características *avanzadas* de `Haskell`.

### Kinds

1. ¿Qué significan: `Int :: *`, `[] :: * -> *`, `(->) :: * -> * -> *`?
¿Qué son los **kinds**?
2. ¿Qué recurso de `C#` pudiera decirse que es *generalizado* por los
**kinds**?

### Monoids

En `Haskell` hay *type classes* que modelan patrones abstractos de código
con representaciones matemáticas bien definidas. Estas clases 
definen una o más operaciones y el conjunto sobre el que se opera,
en otras palabras, definen álgebras.

Los *monoides* en particular representan un conjunto de valores
con una operacion binaria asociativa y un elemento identidad.

La definición del *type class* `Monoid` es la siguiente:

```haskell
class Monoid m where
    mempty :: m
    mappend :: m -> m -> m
    mconcat :: [m] -> m
    mconcat = foldr mappend mempty
```

1. ¿Qué significan las signaturas de la definición anterior?
2. ¿Qué leyes deben cumplir los tipos instancia de `Monoid`?
3. Los enteros y la operación de suma forman un monoide *diferente*
de los enteros y la operación de multiplicación. Muestre cómo
se pueden lograr ambas implementaciones en `Haskell` y por qué
el siguiente código no compila:

```haskell
let x = 1 :: Integer
let y = 3 :: Integer
mappend x y
```

4. Muestre distintos ejemplos de monoides que existen en `Haskell`
como las listas y `Maybe`.

5. Haga los siguientes tipos *instancias* de `Semigroup`:

```haskell
data Two a b = Two a b

-- Se comporta como una conjunción lógica:
-- (BoolConj True) <> (BoolConj True) == BoolConj True
-- (BoolConj True) <> (BoolConj False) == BoolConj False
-- (BoolConj True) `mappend` mempty == BoolConj True
-- mempty `mappend` (BoolConj False) == BoolConj False
newtype BoolConj = BoolConj Bool
```


### Semigroups

Los *semigrupos* representan un conjunto de valores con una operación
binaria asociativa.

La definción del *type class* `Semigroup` es la siguiente:

```haskell
class Semigroup a where
    (<>) :: a -> a -> a
```

1. ¿Qué significa la signatura del operador `(<>)`? ¿Qué función representa?
2. ¿Qué ley deben cumplir los semigrupos?
3. Muestre por qué el tipo `NonEmpty` no puede ser un monoide.
4. Haga los siguientes tipos *instancias* de `Semigroup`:

```haskell
data Two a b = Two a b

-- Se comporta como una conjunción lógica:
-- (BoolConj True) <> (BoolConj True) == BoolConj True
-- (BoolConj True) <> (BoolConj False) == BoolConj False
newtype BoolConj = BoolConj Bool
```


### Functors

Los `Functors` son tipos *mapeables*, es decir, tipos que representan contenedores sobre los que se puede aplicar una función
a lo que contienen.

La definición del *type class* `Functor` es la siguiente:

```haskell
class Functor f where
    fmap :: (a -> b) -> f a -> f b
```

1. ¿Qué significa la signatura de `fmap`?
2. ¿Qué leyes deben cumplir tipos instancia de `Functor`?
3. Explique cómo se logra en `Haskell` que los siguientes
tipos sean tipos instancia de `Functor`:

    * `Maybe a`
    * `[] a`
    * `(->) r a`

4. Un `Forky` está definido como:

```haskell
data Forky a = Tip a | Branch ( Forky a ) ( Forky a )
```

Un `Branch` representa los puntos de división, mientras que `Tip`
representa las hojas en el siguiente árbol:

\begin{verbatim}
                                    /\
                                   2  \
                                      /\
                                     7  8
\end{verbatim}

Este árbol `t` está representado por `Branch (Tip 2) (Branch (Tip 7) (Tip 8))`.

Si se le aplica `fmap f` a `t`, el resultado es el siguiente: 

\begin{verbatim}
                                    /\
                                (f 2) \
                                      /\
                                  (f 7) (f 8)
\end{verbatim}


a. Haga `Forky` una instancia de `Functor`.
b. ¿Cumple con las leyes de los `Functors`?

5. ¿Qué es *lifting*? Ponga un ejemplo de *lifting* con `fmap`.
6. ¿Cuál es la signatura de `(fmap . fmap)`? Explique cómo se llega
a partir de las siguientes signaturas:

```haskell
(.) :: (b -> c) -> (a -> b) -> a -> c

fmap :: Functor f => (m -> n) -> f m -> f n
fmap :: Functor g => (x -> y) -> g x -> g y
```

