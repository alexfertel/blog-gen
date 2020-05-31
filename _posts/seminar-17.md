---
title: Singleton e Inmutabilidad
id: 17
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat.
lang: python
url: seminar-17
---

## Seminario 17 - `Python` IV

Implemente en python los siguientes patrones:

1. `Singleton`: Clase de la que solo se puede crear una instancia,
   por lo que todos los intentos de instanciación deben resultar
   en un mismo objeto (el del primer intento).
   Tenga en cuenta en su implementación que las clases que hereden
   de esta clase deberán heredar también el comportamiento
   `Singleton`.
2. Implemente la clase `ObjetoInmutable` en `Python`. Un objeto
   inmutable, una vez creado, **no podrá ser modificado**. No ser
   modificado significa que después de su creación no se puede
   hacer `o.t = valor` ni `del(o.t)`, siendo `o` una instancia de
   `ObjetoInmutable`. Realice su diseño de forma tal que cualquier
   clase que herede de `ObjetoInmutable` tenga el mismo
   comportamiento.
