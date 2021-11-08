Se tiene un procesador multitarea que recibe y atiende los procesos dedicando un ciclo de procesamiento a cada tarea.
Cada nuevo proceso se guarda en una estructura tipo LISTA CIRCULAR, y ahí permanece mientras esta siendo atendido, hasta que su contador de ciclos se termina y entonces es eliminado de la estructura.
El Procesador en cada ciclo atiende una petición del proceso en turno y cambia al siguiente procesos para atenderlo en el siguiente ciclo.
Simular 300 ciclos con las siguientes condiciones.
En cada ciclo, existe un 39% de probabilidad de que llegue un nuevo proceso.
Cada proceso nuevo requiere entre 4 y 14 ciclos para ser atendido (totalmente aleatorio)
***Cada ciclo ira decrementando uno de los ciclos requeridos de la tarea activa
:::La información que se requiere conocer. Mostrar en la consola lo que esta ocurriendo...
Cuantos ciclos estuvo vacía la lista de proceso (el procesador no tenia procesos por atender)
Cual fue el numero máximo de procesos formados
Al final de los ciclos cuantos procesos quedaron pendientes y cuanto sumaban sus ciclos pendientes.
Cuantos procesos fueron atendidos en su totalidad
