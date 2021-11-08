//import main from "./main.js";
import Proceso from "./Proceso.js";

export default class Procesamiento{
  constructor(){
    this._primerProceso = null;
    this._ultimoProceso = null;
  }
  get primerProceso(){
    return this._primerProceso;
  }
  set primerProceso(val){
    this._primerProceso = val;
    return this._primerProceso;
  }
  get ultimoProceso(){
    return this._ultimoProceso;
  }
  set ultimoProceso(val){
    thi._ultimoProceso = val;
    return this._ultimoProceso;
  }

  /*contCiclos(){
    if (proceso.resultado <= 39 && proceso.resultado >= 1) {
        var proceso = new Proceso();
        proceso.codigoProceso = Math.trunc(Math.random()*100 +1);
        proceso.ciclos = Math.trunc(Math.random()*18 - 4);
    }
    addProcesamiento();
  }*/

  addProcesamiento(){
    let procesosAtendidos = 0;
    let ciclosVacios = 0;
    let procesosPendientes = 0;
    let proceso = new Proceso();

    //let codigo = proceso.codigoProceso = Math.trunc(Math.random() * 100); //numeros aleatios entre 1 y 100 para el codigo del proceso
    //let ciclo = proceso.ciclos = Math.trunc(Math.random()* 11 + 4); //numeros aleatorios entre 4 y 14 para los ciclos del proceso
    if (this._primerProceso == null) {
      this._primerProceso = proceso;
      this._ultimoProceso = proceso;
      this._ultimoProceso.siguiente = primerProceso;
      console.log(this._primerProceso);
    }else{
      this._primerProceso.siguienteProceso = proceso;
      this._ultimoProceso = proceso;
      this._ultimoProceso.siguienteProceso = this._primerProceso;
      console.log(this._primerProceso);
    }

    procesar(proceso);
  }


  procesar(proceso){
    for(let i = 0; i <= 300; i++){
      while (proceso.ciclos > 0) {
        while (proceso.ciclos >= 0) {
          proceso.ciclos--;
        }if (proceso.ciclos == 0) {
          proceso.siguiente = this._primerProceso;
        }
      }
      if (proceso.probabilidadLlegada <= 39) {
        addProcesamiento();
        procesosAtendidos++;
      }else{
        console.log("No hay nuevos procesos");
        ciclosVacios++;
      }
    }
    console.log(ciclosVacios);
    console.log(procesosPendientes);
  }
}
