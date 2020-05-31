---
title: Aplicativos y Mónadas
id: 24
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: haskell
url: seminar-24
---

## Seminario 24 - Haskell III

### Applicative

La definición de `Applicative` es la siguiente:

```haskell
class (Functor f) => Applicative f where
    pure  :: a -> f a
    (<*>) :: f (a -> b) -> f a -> f b
```

1. Explique las signaturas en la definición anterior. Note que `Functor` es
una superclase de `Applicative`.
2. ¿Cuál es la necesidad del tipo `Applicative`? ¿Por qué no es suficiente
con `Functor`?
3. Muestre que `Maybe` cumple las leyes de `Applicative`. 
4. Haga `Forky` una instancia de `Applicative` de forma
que se cumpla el siguiente comportamiento:

    * `pure` crea una hoja.
    * `t1 <*> t2` traversa `t1` sustituyendo cada `Tip func` con
    el resultado de hacer `fmap func t2` como se ve en el ejemplo:

Sea `t1` el siguiente `Forky`:
```
                                    /\
                                   f  g
```

Sea `t2` el siguiente `Forky`:
```
                                    /\
                                   2  \
                                      /\
                                     7  8
```

El resultado de hacer `t1 <*> t2` es:
```
                                  /\
                                 /   \
                                /     \
                               /        \
                              / \         \
                            f 2  \         \
                                / \       / \
                              f 7 f 8   g 2  /\
                                           g 7  g 8
```

Podemos pensar en `Forky` como una estructura de datos arbórea
y `<*>` como una extensión de dicha estructura de forma tal
que hace crecer el árbol haciendo que las hojas sean clones
de otro árbol distinto, obteniendo un árbol nuevo donde cada
hoja tiene el resultado de aplicar las funciones a sus respectivos 
argumentos.

También podemos pensar en `Forky` como un programa *no-determinista*
que, en cada momento, se puede dividir en 2 universos o terminar con
una respuesta; más aún, no solo las múltiples respuestas son guardadas,
sino la historia de cómo se computa cada respuesta en forma de árbol.
De esta forma `<*>` ejecuta 2 programas en forma secuencial y
guarda todas las formas de mezclar sus universos.

### Monads

Uno de los recursos más revolucionarios en la programación
funcional son las mónadas.
Una mónada representa un cómputo con contexto; anteriormente
vimos cómo con los `Functors` podemos representar tipos sobre
los que se puede efectuar operaciónes de *mapeo*.

Digamos que se tiene una lista de números y se le quiere
añadir 2 a cada uno de estos números. Pudiéramos hacerlo
de la siguiente forma: `fmap (+2) [1..10]`.

¿Pero qué pasa si tuvieramos 2 listas y quisiéramos añadir
cada elemento de la primera lista con cada elemento de la
segunda lista? Con `Applicative` se puede resolver exactamente esto:
es como si usáramos `fmap` con múltiples argumentos:
`(+) <$> [1,5,10] <*> [11..13]`.

¿Y si ahora quisiéramos abortar la operación anterior en caso de
encontrar algún problema, por ejemplo, que algún número fuera negativo?

Esto es exactamente lo que resuelven las mónadas.

```haskell
class Applicative m => Monad m where
    return :: a -> m a
    (>>=)  :: m a -> (a -> m b) -> m b
    
    (>>)   :: m a -> m b -> m b
    fail   :: String -> m a
```
 
1. Explique las signaturas en la definición anterior. Note que 
`Applicative` es una superclase de `Monad`.
2. Explique la notación `do`.
3. ¿Qué leyes deben cumplir los tipos instancia de `Monad`?
4. Muestre brevemente cómo se resuelve la parte *impura* de `Haskell`
con la mónada `IO`.
5. Muestre como cumplen `Maybe`, `[]`, `Either a`, `Writer w` con 
ser tipos instancias de `Monad`.
6. Explique cómo funciona la mónada `State` y por qué representa
estado mutable. 
7. Muestre un ejemplo de uso de `Maybe` o `Either a` para el manejo
de "errores" en los cómputos.
8. Muestre brevemente por qué `LINQ` es una mónada.
9. Implemente las siguientes funciones de todas las formas que 
pueda (Al menos deben poder hacerlo utilizando `bind` `(>>=)`):

```haskell
j :: Monad m => m (m a) -> m a
l1 :: Monad m => (a -> b) -> m a -> m b
l2 :: Monad m => (a -> b -> c) -> m a -> m b -> m c
a :: Monad m => m a -> m (a -> b) -> m b
-- Hint: usen recursividad aquí
meh :: Monad m => [a] -> (a -> m b) -> m [b]
flipType :: (Monad m) => [m a] -> m [a]
```