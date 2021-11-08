  import Proceso from "./Proceso.js";
  import Procesamiento from "./Procesamiento.js";
  //var proceso = new Proceso();

  let btn = document.querySelector("#registrarProceso");
  btn.addEventListener("click", nuevoProceso);

  function nuevoProceso(){
  //  let proceso = new Proceso();
    /*let procesamiento = new Procesamiento();
    if (proceso.probabilidad > 1 && proceso.probabilidad < 39) {
      proceso.ciclos = Math.trunc(Math.random() * 14 - 4)//probablemente en ciclos necesite ()
    }*/
    let procesamiento = new Procesamiento();
    procesamiento.addProcesamiento();
  }

  //function agregar(){
  //  let proceso = new Proceso();
    /*let objProceso = {
      codigoProceso: codigoProceso,
      siguienteProceso: siguienteProceso,
      ciclos: ciclos
    }*/
    //procesamiento.addProcesamiento(objProceso);
    //imprimir(objProceso);
  //}

  /*function imprimir(proceso){
    let form = document.querySelector("#form");
    let row = form.insertRow(-1);
    let cellNombreProceso = row.insertCell(0);
    let cellCodigoProceso = row.insertCell(1);

    cellNombreProceso.innerHTML = proceso.nombreProceso;
    cellCodigoProceso.innerHTML = proceso.codigoProceso;
  }*/
