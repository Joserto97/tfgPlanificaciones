import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore/firestore.service';
import { ReactiveFormsModule, FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { AutenticathionService } from '../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

import { GoogleChartsModule } from 'angular-google-charts';

import jsPERT from 'js-pert';
import { pertProbability } from 'js-pert';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
//import { of } from 'rxjs';
//import { randomBytes } from 'crypto';





@Component({
  selector: 'app-alumnopanel',
  templateUrl: './alumnopanel.component.html',
  styleUrls: ['./alumnopanel.component.css']
})
export class AlumnopanelComponent implements OnInit {
  public ESTADOS = {
    CREADO: 'creado',
    RECURSOS_VALIDADOS: 'recursosValidados',
    TAREAS_CREADAS: 'tareasCreadas',
    RIESGOS_CREADOS: 'riesgosCreados',
    SIMULACION: 'simulando',
    FIN: 'finalizado'
  }

  public ESTADOSTAREAS = {
    ESPERA: 'En espera',
    COMENZADA: 'En proceso',
    FINALIZADA: 'Finalizada',
    ERROR: 'ERROR, HAY QUE REPROGRAMAR',
    COMENZADA0: 'En espera de comienzo'
  }

  public dependenciaTipos = ['Comienzo-Fin', 'Comienzo-Comienzo', 'Fin-Comienzo', 'Fin-Fin'];

  proyecto;

  constructor(private firestoreService: FirestoreService,
    private router: Router,
    private gant: GoogleChartsModule

  ) { }

  alumno = {
    usuario: undefined,
    proyectos: undefined
  };

  cantidadVersiones;
  collapsed=true;
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }


  ngOnInit() {
    //Relleno array numerico
    for(let i = 0;i <= 100; i++){
      this.numRecursosMaximo[i]=i;
    }
    let id = localStorage.getItem('idusuario');
    localStorage.getItem('proyectos');
    this.alumno.usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!this.alumno.usuario) {
      this.router.navigate(['/']);
      return;
    }
    //console.log("sesion", this.alumno.usuario.data.rol);
    if (this.alumno.usuario.data.rol == 'Profesor') {
      this.router.navigate(['/admin']);
      return;
    }

    this.firestoreService.getProyectosUsuario(id).subscribe((usuario) => {

      //console.log('getProyectos', usuario);

      let proyectos = [];
      for (let proyecto of usuario) {


        proyectos.push(proyecto.payload.doc.data());

      }
      this.cantidadVersiones = proyectos.length - 1;

      localStorage.setItem('proyectos', JSON.stringify(proyectos));


      //Esto estaba fuera, asi se arregla para no tener que recargar:
      this.alumno.proyectos = JSON.parse(localStorage.getItem('proyectos'));

      if (this.alumno.proyectos.length>0) {
        this.compruebaEstadoProyecto();
        //console.log(this.alumno);
      }
      else{

        this.noHayProyectos=true;
      }
      //console.log("ELSE",this.alumno.proyectos.length,this.noHayProyectos,this.estado);

     
    });


    //this.router.navigate(['/alumno']);

  }

  //Select num recursos tareas
  numRecursosMaximo=[];
  //Mira si no hay proyectos creados por ese alumno
  noHayProyectos=false;

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  //Averigua en que estado está el proyecto
  // CREADO: 'creado',
  // RECURSOS_VALIDADOS: 'recursosValidados',

  tareasGant1 = [];
  estado = null;
  hayRiesgos = false;
  proyectoSimulacion=null;
  proyectoComprobacionFinal;
  proyectoFin;
  botonFin;
  compruebaEstadoProyecto() {
    let lestado = -1;
    //console.log("COMPRUEBA ESTADO",proyecto);
    for (let proyecto of this.alumno.proyectos) {
      //console.log("ESTADOndel proyecto",proyecto.estado)
      if (proyecto.estado == "tareasCreadas") {
        if (lestado < 2) {
          lestado = 2;
          this.estado = "tareasCreadas";
          for (let tarea of proyecto.tareas) {
            //console.log("tarea",tarea);
            this.tareasGant1.push(tarea);
          }
          this.hayGant = true;
          this.hayRiesgos = true;
          this.proyectoPreRiesgos = proyecto;
          this.proyectoComprobacionFinal = proyecto;
          //this.proyectoSimulacion = this.creaProyectoSimulacion(proyecto);
          this.creaProyectoSimulacion(proyecto);
          //console.log("HOLA", this.proyectoSimulacion);
        }

      }
      else if (proyecto.estado == "recursosValidados") {
        if (lestado < 1) {
          lestado = 1;
          this.estado = "recursosValidados";
          this.proyectoTareas = proyecto;
          //console.log("poyectotareas",proyecto);
        }
      }

      else if (proyecto.estado == "creado"){
        //console.log("ESTOY EN CREADO");
        if(lestado < 0 ) {
          lestado = 0;
          this.estado = "creado";
        }
      }

      else if(proyecto.estado == this.ESTADOS.FIN){
        if (lestado < 3) {
          lestado=3;
          this.estado = this.ESTADOS.FIN;
          this.proyectoFin = proyecto;
          this.botonFin = true;
        }
      }
      //elseIf para el resto de estados y true lo que ello conlleva
    }
    //console.log("lestado",this.proyectoTareas.tareas);


    //console.log("tareasGant1", this.tareasGant1,this.estado);

  }
  prueba() {
    //console.log(this.proyectoTareas);
  }



  //fin = false;
  primerpaso = true;
  segundopaso = false;

  plantillas;
  plantillaSeleccionada;

  selectPlantilla() {
    this.primerpaso = false;
    this.segundopaso = true;
    let nombre = this.proyecto.nombre;
    let desc = this.proyecto.descripcion;
    this.proyecto = this.plantillas[this.plantillaSeleccionada];
    this.proyecto.nombre = nombre;
    this.proyecto.descripcion = desc;
  }

  nuevoProyecto() {

    if (this.alumno.proyectos.length>0) {
      alert("Ya tienes un proyecto en simulacion, no puedes crear más.");
      return;
    }

    this.proyecto = {
      nombre: null,
      descripcion: null,
      estado: 'creado',
      recursos: [],
      tareas: []
    };

    this.firestoreService.getPlantillas().subscribe((plantillas) => {


      this.plantillas = [];
      for (let plantilla of plantillas) {

        this.plantillas.push(plantilla.payload.doc.data());

      }

      //console.log('plantillas', this.plantillas);

    });

  }


  eliminarElemento(index,tipo){
    //i es el indice en el array de elementos
    //tipo es una cadena que representa el tipo de elemento a eliminar
    if(tipo=='recurso'){
      this.proyectoTareas.recursos.splice(index, 1);
    }
    if(tipo=='tarea'){
      this.proyectoTareas.tareas.splice(index, 1);
    }
  }
  mostrarTabla = false;
  addTarea() {
    this.mostrarTabla = true;
    if (this.proyectoTareas.tareas.length > 0 && (!this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].nombre || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].duracion || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].tipo)) {
      this.mostrarTabla = true;
      return;
    }


    this.proyectoTareas.tareas.push({
      nombre: null,
      duracion: null,
      dependencia: null,
      tipo: null,
      porcentaje: 0,
      pOptimo: null,
      pPesimo: null,
      inicio: 0,
      recursosMin: []
    })
    //console.log(this.proyectoTareas);

  }
  mostrarTablaRecursos = false;
  addRecurso() {
    //console.log("recursosssss", this.proyecto.recursos);
    if (this.proyecto.recursos.length > 0 && (!this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion)) {
      this.mostrarTablaRecursos = true;
      return;
    }
    //console.log("sdifhaisfhasjfn");
    this.proyecto.recursos.push({
      nombre: null,
      descripcion: null,
      cantidad: null,
      cantidadInicial: null,
      degradacion: null
    })
  }

  guardarProyecto() {

    if (this.proyecto.recursos.length > 0 && (!this.proyecto.nombre || !this.proyecto.descripcion || !this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion)) return;

    //Guardamos en DB
    if(confirm("¿Desea guardar el proyecto?")){
      alert("Datos guardados exitosamente");
    }else{
      return;
    }

    this.firestoreService.creaProyecto(this.proyecto);
    this.mostrarTablaRecursos = false;
    this.proyecto = false;
    this.segundopaso = false;

    this.proyecto = null;

  }
  async guardarProyectoInit() {
    this.proyecto.estado = this.ESTADOS.CREADO;

    if(confirm("¿Desea guardar el proyecto?")){
      alert("Datos guardados exitosamente");
    }else{
      return;
    }

    await this.firestoreService.creaProyecto(this.proyecto);
    this.mostrarTablaRecursos = false;
    this.proyecto = false;
    this.segundopaso = false;
    this.proyecto = null;
    location.reload();
  }

  hayGant = false;
  async guardarProyectoTareas() {
    this.gestionarRecursos = false;
    for(let tarea of this.proyectoTareas.tareas){
      for(let recurso of tarea.recursos){
        recurso.cantidadInicial=recurso.cantidad;
      }
    }

    //console.log("PROYECTO TAREAS", this.proyectoTareas);

    if (this.proyectoTareas.tareas.length == 0) return;

    // //Guardamos en DB
    //console.log("tareasmaximas", this.proyectoTareas);

    if(confirm("¿Desea guardar el proyecto?")){
      alert("Datos guardados exitosamente");
    }else{
      return;
    }

    let query = await this.firestoreService.creaProyecto(this.proyectoTareas);


    //this.gestionarRecursos = false;
    this.proyectoTareas = null;

    this.router.navigate(['/alumno']);

    location.reload(); 




  }


  //VENTANA CREAR TAREAS Y ASIGNAR RECURSOS
  gestionarRecursos;
  proyectoTareas;
  tipoTareas;
  muestraVentanaTareas(usuario) {
    let proyecto = this.proyectoTareas;
    this.tipoTareas = this.proyectoTareas.tareas;
    //console.log("PROYECTO EN estado",proyecto);
    this.proyecto = true;
    this.gestionarRecursos = true;
    this.proyectoTareas = {
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      estado: this.ESTADOS.TAREAS_CREADAS,
      recursos: proyecto.recursos,
      tareas: []
    };
    // this.registrarRecursos = false;
    // this.formularioRecursos = true;
    // this.alumnoMoment = a;
    // this.proyectoMoment = p;
    // this.recursosProyectoActual = r;
    // this.descripcionMoment = pd;
    // this.userId=id;

  }

  getCantidadRecurso(recurso, tareas, j) {

    //console.log(recurso,tareas,j);

    let c = recurso.cantidad;

    for (let tarea of tareas) {

      //console.log("ESTO", c, tarea);

      c -= tarea.recursos[j].cantidad;

    }

    return c;

  }

  asignarRecursos = false;
  asignarRecursosTareas() {
    if (this.proyectoTareas.tareas.length == 0) {
      alert("Es necesario añadir antes alguna tarea");
      return;
    }
    this.mostrarTabla = true;

    if (this.proyectoTareas.tareas.length > 0 && (!this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].nombre || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].duracion || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].tipo)) {
      this.mostrarTabla = true;
      return;
    }

    for (let tarea of this.tipoTareas) {
      for (let tar of this.proyectoTareas.tareas) {
        if (tarea.nombre == tar.tipo) {
          tar.pOptimo = tarea.pOptimo;
          tar.pPesimo = tarea.pPesimo;
          tar.recursosMin = tarea.recursosMin;

        }

      }
    }
    //console.log(this.proyectoTareas.tareas);
    this.asignarRecursos = true;
    this.gestionarRecursos = false;
    this.proyecto = false;

    for (let tarea of this.proyectoTareas.tareas) {

      tarea.recursos = [];

      for (let recurso of this.proyectoTareas.recursos) {

        //if (!recurso.validado) continue;

        tarea.recursos.push({
          nombre: recurso.nombre,
          descripcion: recurso.descripcion,
          cantidad: 0
        })

      }

    }
    //console.log("RECURSOS A CERO", this.proyectoTareas);

  }
  //DIAGRAMA DE GANT
  diagramaGant = false;


  nombresTareasDependencia = [];

  atrasGantt(): void {
    window.location.reload();
  }
  dibujaGant() {
    this.diagramaGant = true;

    google.charts.load('current', { 'packages': ['gantt'] });
    google.charts.setOnLoadCallback(() => {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'ID Tarea');
      data.addColumn('string', 'Tarea');
      data.addColumn('date', 'Inicio');
      data.addColumn('date', 'Fin');
      data.addColumn('number', 'Duracion');
      data.addColumn('number', 'Porcentaje Completado');
      data.addColumn('string', 'Dependencias');

      if( this.proyectoSimulacion!=null){
        this.tareasGant1= this.proyectoSimulacion.tareas;
      }

      //console.log("DIBUJANDO GANT",this.tareasGant1);

      for (let tarea of this.tareasGant1) {
        //console.log("DIBUJAR",tarea);
        // let parts = tarea.inicio.split("-");

        // let ano= parseInt(parts[0]);
        // let mes= parseInt(parts[1]);
        // let dia= parseInt(parts[2]);
        if(tarea.porcentaje>1){
          tarea.porcentaje=1;
        }
        
        this.nombresTareasDependencia.push(tarea.nombre);
        //console.log("AQUIESTA",tarea.nombre,tarea.nombre,new Date(ano,mes,dia),null,tarea.duracion,tarea.porcentaje,tarea.dependencia);
        //console.log("AQUI 222",'2014Spring', 'Spring 2014',new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null);

        if (!tarea.dependencia) {
          //--------------;
        }
        let hoy=null;
        if(tarea.inicio!==0 && !tarea.dependencia){
           hoy= new Date();
          let inicio =hoy.getDate() + tarea.inicio;
  
          hoy.setDate(inicio);
          //console.log(hoy);
        }
        
        
        /*if(tarea.dependencia){
          let diasPorDependencia=0;
          for(let tarea2 of this.tareasGant1){
            if(tarea.dependencia==tarea2.nombre){
              diasPorDependencia=tarea2.duracion;
              //console.log("HOY",diasPorDependencia);

            }
          }
          let inicioDep=hoy.getDate()+diasPorDependencia-1;
          
          console.log("HOY",inicioDep);

          hoy.setDate(inicioDep);

        }*/


        data.addRow([tarea.nombre, tarea.nombre, hoy, null, daysToMilliseconds(tarea.duracion), tarea.porcentaje*100, tarea.dependencia]);
      }


      var options = {
        height: 275
      };

      var chart = new google.visualization['Gantt'](document.getElementById('chart_div'));

      chart.draw(data, options);

    });

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

  }


  //------------RIESGOS---------------

  proyectoPreRiesgos;
  proyectoRiesgos;
  crearRiesgos = false;
  muestraVentanaRiesgos() {
    //console.log("preriesgos", this.proyectoPreRiesgos);
    this.crearRiesgos = true;
    let proyecto = this.proyectoPreRiesgos;
    this.proyectoRiesgos = {
      nombre: proyecto.nombre,
      descripcion: proyecto.descripcion,
      estado: this.ESTADOS.RIESGOS_CREADOS,
      recursos: proyecto.recursos,
      tareas: proyecto.tareas,
      riesgos: []
    };
    //console.log("PROYECTO EN estado", this.proyectoRiesgos);

  }


  mostrarTablaRiesgos = false;
  addRiesgo() {
    //console.log("riesgos null",this.proyectoRiesgos.riesgos.length);
    if (this.proyectoRiesgos.riesgos.length > 0 && (!this.proyectoRiesgos.riesgos[this.proyectoRiesgos.riesgos.length - 1].nombre || !this.proyectoRiesgos.riesgos[this.proyectoRiesgos.riesgos.length - 1].descripcion || !this.proyectoRiesgos.riesgos[this.proyectoRiesgos.riesgos.length - 1].porcentajeAparicion)) {
      //console.log("estoy");
      this.mostrarTablaRiesgos = true;
      return;
    }

    this.proyectoRiesgos.riesgos.push({
      nombre: null,
      descripcion: null,
      porcentajeAparicion: null,

    })
    //console.log("fuera", this.proyectoRiesgos);

  }
  guardarProyectoRiesgos() {

    if (this.proyectoRiesgos.riesgos.length == 0) return;

    //Guardamos en DB
    //console.log("tareasmaximas", this.proyectoTareas);
    this.firestoreService.creaProyecto(this.proyectoRiesgos);

    this.crearRiesgos = false;
    this.mostrarTablaRiesgos = false;
    this.proyectoRiesgos = null;
    this.proyectoPreRiesgos = null;

  }

  //------------------------SIMULACION----------------------------
  tiempoPesimoOptimo(tiempo, porcentaje, opt) {

    //option==true -> tiempo optimo
    //option==false -> tiempo pésimo
    //console.log("calculador",tiempo,porcentaje,opt);
    if (opt) {
      //console.log(tiempo-tiempo*porcentaje/100);
      return tiempo - tiempo * porcentaje / 100;
    }
    else {
      return tiempo + tiempo * porcentaje / 100;
    }

  }
  simulacionPantalla = false;
  simular() {
    this.simulacionPantalla = true;

    //console.log(this.proyectoPreRiesgos, "simulacion");
    let activities = {};

    for (let tarea of this.proyectoPreRiesgos.tareas) {
      //console.log("Tiempopesimo",tarea.duracion,tarea.pOptimo,this.tiempoPesimoOptimo(tarea.tiempo,tarea.pOptimo,true));
      if (!tarea.dependencia) {
        let actividad = {
          id: tarea.nombre,
          optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
          mostLikelyTime: tarea.duracion,
          pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
          predecessors: []
        };
        activities[actividad.id] = actividad;

      }
      else {
        let actividad = {
          id: tarea.nombre,
          optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
          mostLikelyTime: tarea.duracion,
          pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
          predecessors: [tarea.dependencia]
        };
        activities[actividad.id] = actividad;

      }

    }





    //console.log('PERTACTIVITIEs', activities);

    const pert = jsPERT(activities);

    //console.log('PERT', pert);

    const Pz = pertProbability(pert, 90);

    //console.log('P(x<22):', Pz);

    //console.log("proyectoSimulacion", this.proyectoSimulacion)

  }

  estadosSimulacion;
  creaProyectoSimulacion(proyecto) {




    this.firestoreService.getEstadoActual(localStorage.getItem('idusuario')).subscribe((estados) => {

      this.estadosSimulacion = [];

      for (let estadoSimulacion of estados) {

        this.estadosSimulacion.push(estadoSimulacion.payload.doc.data());

      }

      //console.log('estadosSimulacion', this.estadosSimulacion);


      //Si no hay proyecto simulado en BD

      if (!(this.estadosSimulacion.length > 0)) {
       //console.log("No hay");
        let p = {
          descripcion: proyecto.descripcion,
          estado: this.ESTADOS.SIMULACION,
          nombre: proyecto.nombre,
          diasTotalesProyecto: 0,
          replanificado: 0,
          recursos: proyecto.recursos,
          tareas: []
        }
        for (let tarea of proyecto.tareas) {
          tarea = {
            dependencia: tarea.dependencia,
            duracion: tarea.duracion,
            nombre: tarea.nombre,
            pOptimo: tarea.pOptimo,
            pPesimo: tarea.pPesimo,
            porcentaje: tarea.porcentaje,
            diasEmpleados: 0,
            inicio: tarea.inicio,
            estado: this.ESTADOSTAREAS.ESPERA,
            recursos: tarea.recursos,
            recursosMin: tarea.recursosMin
          }
          p.tareas.push(tarea);
        }
        //console.log("PROYECTO SIMULACION", p);

        this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), p);
        this.proyectoSimulacion = p;
        //this.tareasGant1=this.proyectoSimulacion.tareas;


      }


      //Si le hay

      else {
        //console.log("Si hay", this.estadosSimulacion);
        //Obtener el estado que nos interesa, el ultimo
        let numeroDias = -1;
        let numeroReplanificado = -1;
        for (let estado of this.estadosSimulacion) {
          /*if (estado.replanificado!=0) {
            if (estado.replanificado > numeroVeces) {
              numeroVeces = estado.replanificado;
              this.proyectoSimulacion = estado;
            }
          }
          else {*/
          if (estado.diasTotalesProyecto > numeroDias) {
            numeroDias = estado.diasTotalesProyecto;
            numeroReplanificado = estado.replanificado;
            this.proyectoSimulacion = estado;
          }
          //Mismos días replanificado
          else if(estado.diasTotalesProyecto==numeroDias){
            if(estado.replanificado>numeroReplanificado){
              //console.log(estado,"REP")
              this.proyectoSimulacion = estado;
              numeroReplanificado = estado.replanificado;
              numeroDias = estado.diasTotalesProyecto;

            }
          }
          //}
          //console.log(numeroDias,numeroReplanificado,estado,estado.diasTotalesProyecto==numeroDias)

        }
        //console.log("proyectoSimulacion", this.proyectoSimulacion)
      }

    });

    //console.log('estadosSimulacionFuera',this.estadosSimulacion);



  }

  numeroAsignado(recurso, tareas) {

    let asignados = 0;
    //console.log(tareas);
    for (let tarea of tareas) {
        for (let rec of tarea.recursos) {
          //if(this.estadosSimulacion.length>1){
            if(tarea.estado==this.ESTADOSTAREAS.COMENZADA){
              //console.log("En proceso")
              if (rec.nombre == recurso.nombre) {
                //console.log("RECURSOSSS",rec.nombre,recurso.nombre,tarea.recursos,rec.cantidad);
    
                asignados += rec.cantidad;
              }
            }
          //}
          //COMENTADO PARA SOLO TENER EN CUENTA LAS COMENZADAS
          // else{
          //   if (rec.nombre == recurso.nombre) {
          //     //console.log("RECURSOSSS",rec.nombre,recurso.nombre,tarea.recursos,rec.cantidad);
  
          //     asignados += rec.cantidad;
          //   }
          // }
          
        }
      
    }
    return asignados;
  }
  numeroAsignadoSimulacion(recurso, tareas) {

    let asignados = 0;

    for (let tarea of tareas) {
        for (let rec of tarea.recursos) {
          if(this.estadosSimulacion.length>1){
            if(tarea.estado==this.ESTADOSTAREAS.COMENZADA){
              if (rec.nombre == recurso.nombre) {
                //console.log("RECURSOSSS",rec.nombre,recurso.nombre,tarea.recursos,rec.cantidad);
    
                asignados += rec.cantidad;
              }
            }
          }
        }
      
    }
    return asignados;
  }



  tareasEnProceso = [];
  tareasFinalizadas = [];
  tareasQuePuedenComenzar = [];
  tareasEnEsperaPorDependencia = [];
  tareasQuePuedenAcabar = [];
  hayEvento = false;

  comprobacionMinRecursosAsignados() {

    //.log("ME HA LLAMAO LAMOOOOOO", this.tareasEnProceso)

    for (let tarea of this.tareasEnProceso) {

      for (let i = 0; i < tarea.recursos.length; i++) {
        //console.log("COMPROBACION", tarea.recursos[i].cantidad, tarea.recursosMin[i].cantidad);
        if (tarea.recursos[i].cantidad < tarea.recursosMin[i].cantidad) {
          //console.log("COMPROBACION", tarea.nombre, tarea.recursos[i].nombre, tarea.recursos[i].cantidad, tarea.recursosMin[i].cantidad, tarea.recursosMin[i].cantidad);
          
          //Restamos lo que habíamos sumado
          tarea.diasEmpleados--;
          this.proyectoSimulacion.diasTotalesProyecto--;

          let evento = {
            dia: this.proyectoSimulacion.diasTotalesProyecto,
            accion: 'Error mínimo recursos',
            tareaImplicacada: tarea.nombre,
            recursoImplicado: tarea.recursos[i].nombre
          }
          this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);


          alert("La tarea " + tarea.nombre + " no tiene suficientes " + tarea.recursos[i].nombre + " para ejecutarse. Replanifica por favor.");
          return false;
        }
      }
    }
    return true;
  }
  avanzarSimulacion() {
    this.hayEvento = false;

    //COmprobación sobreAsignación

    if(this.estadosSimulacion.length>1){
      for(let recurso of this.proyectoSimulacion.recursos){
        if((recurso.cantidad-this.numeroAsignadoSimulacion(recurso,this.proyectoSimulacion.tareas))<0){
          let evento = {
            dia: this.proyectoSimulacion.diasTotalesProyecto,
            accion: 'Error sobreasignacion',
            tareaImplicacada: 'No procede',
            recursoImplicado: 'No procede'
          }
          this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
          alert("Hay una sobreasignación de recursos, replanifica por favor");
          return;
        }
      }
    }
    while (!this.hayEvento) {
      this.proyectoSimulacion.diasTotalesProyecto++;
      //console.log("COMIENzO ITERACION", this.proyectoSimulacion.tareas);
      for (let tarea of this.proyectoSimulacion.tareas) {
        //console.log("COMIENzO tarea", "ITERACION", tarea);
        if (tarea.estado == this.ESTADOSTAREAS.ESPERA) {
          this.tareasQuePuedenComenzar.push(tarea)
        }
        if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
          tarea.diasEmpleados++;
          tarea.porcentaje=parseFloat((tarea.diasEmpleados/tarea.duracion).toFixed(2));
          //console.log("ESTOY AQUI)",tarea.porcentaje);

          this.tareasEnProceso.push(tarea);
        }
        if (tarea.estado == this.ESTADOSTAREAS.FINALIZADA) this.tareasFinalizadas.push(tarea);
      }


      //Comprobación min recursos

      /* PREVIO: comprobar que todas las tareas tienen su número de recursos necesarios
      
      1.CalculoPertComenzadas para ver cual puede finalizar en ese metodo se suma 1 a los dias totales
        si esa tarea depende de otra, hay que crear el arbol para calcular probabilidad total.
  
        2.Elegir la que acaba
  
        3.Actualizar Arrays
  
        4.Notificar al usuario Fuera del while
  
        5.Actualizar BD y realizar consulta de nuevo para coger proyecto actualizado
      */
      this.creaTareasEnProceso();

      if (!this.comprobacionMinRecursosAsignados()) {
        return;
      }



      /*for (let i = 0; i < this.tareasQuePuedenComenzar.length; i++) {
        if (this.tareasQuePuedenComenzar[i].estado==this.ESTADOSTAREAS.COMENZADA) {
          this.tareasQuePuedenComenzar.splice(i,1);
        }crE
      }*/

      this.calculoPertComenzadas();

      //console.log("FIN TAREA ", this.tareasQuePuedenComenzar, this.tareasEnProceso);

      this.tareasQuePuedenComenzar = [];
      this.tareasEnProceso = [];
      this.tareasFinalizadas = [];

      //if(cont==2)       
      //break;


    }
    let mayorProb = 0;
    let index = 0;

    //Probabilidad 2 de que acabe o se lance error
    let random = this.getRandom();

    this.probabilidades.sort(function (a, b) {
      return a - b;
    });

    //console.log(random, this.probabilidades, this.tareasQuePuedenAcabar);
    for (let i = 0; i < this.probabilidades.length; i++) {
      if (this.probabilidades[i] > random) {
        index = i;
        break;
      }
    }
    let eliminadas = this.tareasQuePuedenAcabar.splice(index, this.probabilidades.length - index);

    for (let i = 0; i < eliminadas.length; i++) {
      let evento = {
        dia: this.proyectoSimulacion.diasTotalesProyecto,
        accion: 'Fin de una tarea',
        tareaImplicacada: eliminadas[i].nombre,
        recursoImplicado: 'No procede'
      }
      let insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);

      eliminadas[i].estado = this.ESTADOSTAREAS.FINALIZADA;
      this.tareasFinalizadas.push(eliminadas[i]);
    }

    //Comprobación riesgo activado
    //console.log("ENTRE!PREVIO");

    for (let recurso of this.proyectoSimulacion.recursos) {
      //console.log("ENTRE!ANTES COMPROBACION", recurso.degradacion / 100, random);

      if ((recurso.degradacion / 100) > random) {
        //console.log("ENTRE!MAYOR");
        recurso.cantidad--;
        for (let tarea of this.proyectoSimulacion.tareas) {
          //console.log("ENTRE!1", tarea.estado);
          if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
           // console.log("ENTRE!");

            for (let recursoFallido of tarea.recursos) {
              if ((recursoFallido.nombre == recurso.nombre)) {
                recursoFallido.cantidad--;
                let evento = {
                  dia: this.proyectoSimulacion.diasTotalesProyecto,
                  accion: 'Error recurso ya no disponible',
                  tareaImplicacada: tarea.nombre,
                  recursoImplicado: recursoFallido.nombre
                }
                let insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
      
                alert("¡Ha sucedido algo inesperado! Un " + recursoFallido.nombre + " ha dejado de estar disponible, se ha eliminado uno de la tarea " + tarea.nombre + " Se recomienda comprobar.");
                break;
              }
            }
          }
        }
      }
    }


    this.tareasQuePuedenAcabar = [];
    this.probabilidades = [];
    //console.log("TAREAS FINALIZADAS",this.tareasFinalizadas,this.proyectoComprobacionFinal.tareas.length);
    if (this.getProyectoEsFinalizado()) {
      let evento = {
        dia: this.proyectoSimulacion.diasTotalesProyecto,
        accion: 'Fin de la simulación, el proyecto acabó',
        tareaImplicacada: 'No procede',
        recursoImplicado: 'No procede'
      }
      let insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);

      alert("Enhorabuena, el proyecto ha finalizado");
      this.proyectoSimulacion.estado = this.ESTADOS.FIN;
      //this.finalizacionProyecto();
      this.firestoreService.actualizarProyecto(localStorage.getItem('idusuario'), this.proyectoSimulacion);
    }
    else {
      alert("¡Ha acabado una tarea!");
    }


    //console.log("FIN",this.tareasQuePuedenComenzar, this.tareasEnProceso,this.tareasFinalizadas);
    //console.log("FIN",this.proyectoSimulacion);
    this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), this.proyectoSimulacion);
    



  }

  getProyectoEsFinalizado() {
    for (let tarea of this.proyectoSimulacion.tareas) {
      if (tarea.estado != this.ESTADOSTAREAS.FINALIZADA) {
        return false;
      }
    }
    return true;
  }

  creaTareasEnProceso() {

    for (let tarea of this.tareasQuePuedenComenzar) {
      //console.log("DIA DE COMIENZO",tarea.inicio);

      if (!tarea.dependencia && (this.proyectoSimulacion.diasTotalesProyecto>=tarea.inicio)) {
        //COMPROBAR SI RECURSOS DISPONIBLES ANTES DE COMENZARLA
        tarea.diasEmpleados++;
        tarea.estado = this.ESTADOSTAREAS.COMENZADA;
        this.tareasEnProceso.push(tarea);
        //console.log("NO DEPENDENCIA");
        this.tareasQuePuedenComenzar.splice(this.tareasQuePuedenComenzar.indexOf(tarea), 1);

        //this.tareasQuePuedenComenzar.shift();
        //ELIMINAR TAREAS cuando han comenzado de este array
      }

      else {
        //console.log("DEPENDENCIA");
        for (let finalizada of this.tareasFinalizadas) {
          //console.log("FINALIZADADEPENDENCIA", finalizada, tarea.dependencia, finalizada.nombre);
          if ((tarea.dependencia == finalizada.nombre) && (this.proyectoSimulacion.diasTotalesProyecto>=tarea.inicio)) {
            tarea.diasEmpleados++;
            tarea.estado = this.ESTADOSTAREAS.COMENZADA;
            this.tareasEnProceso.push(tarea);
            this.tareasQuePuedenComenzar.splice(this.tareasQuePuedenComenzar.indexOf(tarea), 1);

            //this.tareasQuePuedenComenzar.shift();
          }
        }
      }
    }

    //console.log("Pueden comenzar: ", this.tareasQuePuedenComenzar)

  }

  //Contiene las probabilidades que han superado el random
  probabilidades = [];
  calculoPertComenzadas() {

    let random = this.getRandom();

    for (let tarea of this.tareasEnProceso) {
      //tarea.porcentaje=tarea.diasEmpleados/tarea.duracion;
      //let dependencia = tarea.dependencia == null ? [] : [tarea.dependencia];
      //console.log(dependencia,"DEPENDENCIA");

      let activities = {};
      let actividad = {
        id: tarea.nombre,
        optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
        mostLikelyTime: tarea.duracion,
        pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
        predecessors: []
      };
      activities[actividad.id] = actividad;

      const pert = jsPERT(activities);

      const Pz = pertProbability(pert, tarea.diasEmpleados);

      //console.log("PROBABILIDAD DE CADA TAREA", Pz, tarea.nombre, tarea.diasEmpleados, tarea.pOptimo, tarea.pPesimo, tarea.duracion);
      //console.log("PROBABILIDAD DE CADA TAREA", Pz, random);

      if (Pz > random) {
        this.tareasQuePuedenAcabar.push(tarea);
        this.probabilidades.push(Pz);
        //console.log("PUEDE ACABAR",this.tareasQuePuedenAcabar,Pz,random,this.probabilidades);

      }

    }

    if (this.tareasQuePuedenAcabar.length > 0) {

      this.hayEvento = true;
      this.tareasQuePuedenComenzar = [];
      this.tareasEnProceso = [];
      this.tareasFinalizadas = [];


    }


    //console.log("RAndom", random, this.tareasQuePuedenAcabar);

  }

  getRandom() {
    return Math.random();
  }
  tareasNoFinalizadas = [];
  posicionesTareas = [];
  replanificar = false;
  modificarPlanificacion() {
    let index = 0;
    for (let tarea of this.proyectoSimulacion.tareas) {
      if (tarea.estado != this.ESTADOSTAREAS.FINALIZADA) {
        this.tareasNoFinalizadas.push(tarea);
        this.posicionesTareas.push(index);
      }
      index++;
    }
    //console.log("tareas no finalizadas",this.tareasNoFinalizadas,this.proyectoSimulacion.recursos);

    this.simulacionPantalla = false;
    this.replanificar = true;

  }

  async finReplanificacion() {
    let index = 0;
    for (let tarea of this.tareasNoFinalizadas) {
      this.proyectoSimulacion.tareas[this.posicionesTareas[index]].recursos = tarea.recursos;
      index++;
    }

    this.proyectoSimulacion.replanificado++;

    let evento = {
      dia: this.proyectoSimulacion.diasTotalesProyecto,
      accion: 'replanificacion',
      tareaImplicacada: 'No procede'
    }

    if(confirm("¿De verdad desea replanificar?")){
    }else{
      return;
    }

    let insert = await this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
    //console.log("REPLANIFICACION", this.proyectoSimulacion);
    let query = await this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), this.proyectoSimulacion);


    alert("Replanificado correctamente");

    location.reload();


  }

  // finalizacionProyecto(){

  // }


  //TABLAS CON RESULTADOS FINALES

  tablaFinal=false;
  eventos;

  tablaFin(){

    this.firestoreService.getEvento(localStorage.getItem('idusuario')).subscribe((eventos) => {


      this.eventos = [];
      for (let evento of eventos) {

        this.eventos.push(evento.payload.doc.data());

      }


      this.eventos.sort(function (a, b) {
        if (a.dia > b.dia) {
          return 1;
        }
        if (a.dia < b.dia) {
          return -1;
        }
        return 0;
      });
      //console.log('eventos', this.eventos);


    });

    this.tablaFinal=true;
  }

  downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});

    downloadLink = document.createElement("a");

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);
   
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();
}


exportTableToCSV() {
  var csv = [];
  var rows = document.querySelectorAll("table tr");
  
  for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length; j++) {
        row.push((<HTMLElement>cols[j]).innerText);
      }

      //PROBAR CON ;
      csv.push(row.join(";"));        
  }

  // Download CSV file
  //PONER EN NOMBRE EL NOMBRE DEL ALUMNO.

  this.downloadCSV(csv.join("\n"), "results.csv");
}


//DELETE PROYECTOS
async borrarProyectos(){
  //console.log("BORRANDO");
  if(confirm("¿Desea eliminar los datos?")){
    await this.firestoreService.deleteAll(localStorage.getItem('idusuario'));
  }else{
    return;
  }  
}

async borrarSimulacion(){
  //console.log("BORRANDO");
  if(confirm("¿Desea eliminar los datos?")){
    await this.firestoreService.deleteSimulacion(localStorage.getItem('idusuario'));
  }else{
    return;
  }  
  
}
async almacenarResultados(){
  //console.log(this.eventos,this.alumno);
  let data={
    eventos : this.eventos,
    usuario : this.alumno.usuario.data
  }
  if(confirm("¿Desea enviar los datos?")){
    await this.firestoreService.guardaResultados(data);
    alert("Resultados almacenados correctamente");
    //await this.firestoreService.deleteAll(localStorage.getItem('idusuario'));
  }else{
    return;
  }  
}


validateInput(numActual,numTotal,i,j){
  if(numActual>numTotal){
    this.proyectoTareas.tareas[i].recursos[j].cantidad=numTotal;
  }
  else if(numActual < 0){
    this.proyectoTareas.tareas[i].recursos[j].cantidad=0;
  }
}

validateInputReplanificacion(numActual){
  if(numActual.cantidad < 0){
    numActual.cantidad=0;
  }
}
validateInputTarea(i,num,caso){
  if (caso==0){
    if(num<0){
      this.proyectoTareas.tareas[i].inicio=0;
    }
  }
  else{
    if(num<0){
      this.proyectoTareas.tareas[i].duracion=1;
    }
  }
}

validateInputCrear(recurso){
  //console.log(recurso);
  if(recurso.cantidad<0){
    recurso.cantidad=0;
  }
}

}
