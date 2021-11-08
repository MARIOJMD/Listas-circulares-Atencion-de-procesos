export default class Proceso{
  constructor(proceso){
    this._codigoProceso = Math.trunc(Math.random() * 100);
    this._siguienteProceso = null;
    this._ciclos =  Math.trunc(Math.random()* 11 + 4);
  }
  get codigoProceso(){
    return this._codigoProceso;
  }
  set codigoProceso(val){
    this._codigoProceso = val;
    return this._codigoProceso;
  }
  get siguienteProceso(){
    return this._siguienteProceso;
  }
  set sieguienteProceso(val){
    this._siguienteProceso = val;
    return this._siguienteProceso;
  }
  get ciclos(){
    return this._ciclos;
  }
  set ciclos(val){
    this._ciclos = val;
    return this._ciclos;
  }

  probabilidadLlegada(){
    let resultado = Math.trunc(Math.random()*100);
	  return resultado;
    //contCiclos(resultado);
    //probabilidad1(resultado);
  }
//39% de probabilidad de nuevo procesos
//entre 4 y 14 ciclos
  /*contCiclos(resultado){
    if (resultado <= 39 && resultado >= 1) {

    }
  }*/
  /*probabilidad1(resultado){
    if (resultado > 0 && resultado <= 39) {
      let nuevoProceso = new Proceso();
    }
  }*/
}
