import React from 'react';

export default function ReportHead({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Los requerimientos de cada ejercicio del seminario serán expuestos desde el punto de vista práctico y teórico;
        es decir, para su exposición, cada equipo se basará en el caso práctico en cuestión para introducir y explicar
        el elemento teórico requerido. La exposición no es una mera enunciación de código. Preguntas como:{' '}
        <em>¿Por qué?</em> ,<em>¿Basándose en qué?</em>,{' '}
        <em>
          ¿Cómo se logra esto en el lenguaje <code>X</code>?
        </em>{' '}
        entre otras, deben h`acerse.
      </p>
      <p>
        Todos los miembros del equipo deben participar en la solución del ejercicio y estar preparados para exponer todo
        el trabajo. <strong>La persona a exponer</strong> se decide el día de la exposición. Quién no esté presente en
        la exposición de su equipo tiene <code>0</code> en la evaluación. (Note que estas notas se promedian y hay
        distinción entre 0 y 2).
      </p>
    </div>
  );
}
