---
title: Seminarios de C#
id: 7
description: Seminario 3 - Varianza, Covarianza, Herencia y Polimorfismo
lang: csharp
url: seminar-7
---

## Seminario 7 - Varianza, Covarianza, Herencia y Polimorfismo

En la Universidad, una persona (que se identifica por su _Nombre_) puede representar diferentes roles:

- Estudiante (Acción: `RecibirClase()`)
- Profesor (Acción: `ImpartirClase()`)
- Alumno Ayudante (Estudiante que no es profesor pero actúa como tal en un momento dado, es decir, puede realizar `ImpartirClase()`)
- Trabajador (no todo trabajador es profesor, pero sí todos los profesores son trabajadores. Acción: `CobrarSalario()`)

1. Diseñe una jerarquía en `C#` que represente/modele los roles anteriores y sus relaciones. Utilice alguna herramienta para ilustrar dicho modelo (Ejemplo: diseñador de clases de _Visual Studio_)
2. ¿Es posible utilizar el siguiente código para imprimir una lista genérica de profesores? Haga los arreglos que crea necesario para que ejecute en caso de que su respuesta sea **NO**. Explique el funcionamiento de las características del lenguaje utilizadas.

```c#
void PrintPeople(IEnumerable<Person> people) {
   for(var p in people)
        Console.WriteLine(p.Name);
}
```

3. En la secretaría de la Facultad, usualmente se imprimen listados de estudiantes dado algún criterio (por nombre, por nota, etc). El algoritmo es el siguiente:

```c#
static void PrintStudents(IEnumerable<Student> students,
IComparer<Student> comparer) {
    foreach (var student in students.OrderBy(x => x, comparer))
         Console.WriteLine(student.Name);
}
```

Implemente un comparador que permita utilizar el código anterior para imprimir los estudiantes ordenados por nombre, pero que dicho comparador se pueda reutilizar luego para profesores, trabajadores y alumnos ayudantes. Explique las características del lenguaje utilizadas.

4. Explique e llustre el funcionamiento del siguiente código:

```c#
static void PrintByConsole(Action<Action<Person>> person) {
            person(x => Console.WriteLine(x.Name));
}
...
PrintByConsole(x=>new Student() {Name = "Pedro"});
```

5. El siguiente código recibe una colección de personas que pueden ejercer cualquier rol pero se quieren imprimir sólo los que son estudiantes. Complete el espacio para cumplir dicho objetivo.

```c#
static void PrintStudentsOnly(IEnumerable<object> people) {
    foreach (var student in people.______________________________________)
        Console.WriteLine(student.Name);
}
```

Objetivos: covarianza, contravarianza, herencia y polimorfismo, composición y encapsulamiento (wrapper)
