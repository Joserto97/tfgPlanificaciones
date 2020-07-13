import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

import { ReactiveFormsModule, FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { AutenticathionService } from '../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  public ESTADOS = {
    CREADO: 'creado',
    RECURSOS_VALIDADOS: 'recursosValidados',
    TAREAS_CREADAS: 'tareasCreadas'
  }

  //Formulario registro usuarios
  public documentId = null;
  public newUserForm: FormGroup;




  constructor(
    private firestoreService: FirestoreService,
    public form: FormBuilder,
    private authenticationService: AutenticathionService,
    private router: Router,
    private auth: AngularFireAuth
  ) { }

  profesor;

  //Obtención de alumnos y sus proyectos 
  proyecto;
  primerpaso = false;
  segundopaso = false;

  alumno;

  alumnos;

  alumnosProyectos;


  public dependenciaTipos = ['Comienzo-Fin', 'Comienzo-Comienzo', 'Fin-Comienzo', 'Fin-Fin'];

  creacionPlantilla=false;
  previaCreacionPlantilla=false;
  verDetallePlantilla=false;
  detallePlantillaActual=null;

  plantillas;

  collapsed=true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  

  
  
  async nuevoProyecto() {

    //Consulta muestra plantillas


    let query = await this.firestoreService.getPlantillas().subscribe((plantillas) => {

      this.previaCreacionPlantilla=true;

      this.plantillas = [];
      for (let plantilla of plantillas) {

        this.plantillas.push(plantilla.payload.doc.data());

      }

      //console.log('plantillas', this.plantillas);

    });

    //Creacion proyecto en blanco por si se quiere crear plantilla

    this.proyecto = {
      estado: null,
      recursos: [],
      tareas: [],
      descripcion: null
    };
    //console.log(this.primerpaso,this.creacionPlantilla);

  }

  mostrarTablaRecursos = false;
  hayUnRecurso(){
    if(!this.proyecto.tipo || !this.proyecto.descripcion){
      return false;
    }
    if(this.proyecto.recursos.length<=0){
      return false;
    }
    for(let recurso of this.proyecto.recursos){
      if (!recurso.nombre || !recurso.descripcion || recurso.degradacion==null){
        return false;
      }
    }
    return true;
  }

  hayUnaTarea(){
    if(this.proyecto.tareas.length<=0){
      return false;
    }
    for(let tarea of this.proyecto.tareas){
      if (!tarea.nombre || !tarea.descripcion || tarea.pPesimo==null || tarea.pOptimo==null){
        return false;
      }
    }
    return true;
  }

  newRecurso() {
    //console.log("recursosssss", this.proyecto.recursos);
    this.mostrarTablaRecursos = true;

    if (this.proyecto.recursos.length > 0 && (!this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion || this.proyecto.recursos[this.proyecto.recursos.length - 1].degradacion==null)) {
      this.mostrarTablaRecursos = true;
      return;
    }
    //console.log("sdifhaisfhasjfn");
    this.proyecto.recursos.push({
      nombre: null,
      descripcion: null,
      degradacion: null
    })
  }

  introduccion=false;

  eliminarElemento(index,tipo){
    //i es el indice en el array de elementos
    //tipo es una cadena que representa el tipo de elemento a eliminar
    if(tipo=='recurso'){
      this.proyecto.recursos.splice(index, 1);
    }
    if(tipo=='tarea'){
      this.proyecto.tareas.splice(index, 1);
    }
    if(tipo=='recursoValidacion'){
      this.recursosProyectoActual.splice(index,1);
      for(let tarea of this.tareasMoment){
        tarea.recursosMin.splice(index,1);
      }
    }
  }

  tercerpaso = false;
  guardarProyecto() {

    if (this.proyecto.recursos.length > 0 && (!this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion) && (!this.proyecto.tareas[this.proyecto.tareas.length - 1].nombre || !this.proyecto.tareas[this.proyecto.tareas.length - 1].descripcion)) return;

    //Guardamos en DB
    if(confirm("¿Desea guardar la plantilla?")){
      alert("Datos guardados exitosamente");
    }else{
      return;
    }
    this.firestoreService.creaPlantilla(this.proyecto);
    this.mostrarTablaRecursos = false;
    this.cuartopaso = false;
    this.creacionPlantilla = false;

    this.proyecto = null;

  }

  mostrarTabla = false;
  addTarea() {

    this.mostrarTabla = true;

    if (this.proyecto.tareas.length > 0 && (!this.proyecto.tareas[this.proyecto.tareas.length - 1].nombre || !this.proyecto.tareas[this.proyecto.tareas.length - 1].descripcion || !this.proyecto.tareas[this.proyecto.tareas.length - 1].pPesimo || !this.proyecto.tareas[this.proyecto.tareas.length - 1].pOptimo)) {
      this.mostrarTabla = true;
      return;
    }

    this.proyecto.tareas.push({
      nombre: null,
      descripcion: null,
      pOptimo: null,
      pPesimo: null,
      recursosMin: null
    })

  }
  cuartopaso = false;
  previaCreacionTareas() {
    for (let tarea of this.proyecto.tareas) {

      tarea.recursosMin = [];

      for (let recurso of this.proyecto.recursos) {

        tarea.recursosMin.push({
          nombre: recurso.nombre,
          cantidad: 0
        })
      }
    }
    //console.log("AQUI", this.proyecto);
  }

  async ngOnInit() {

    let id = localStorage.getItem('idusuario');
    localStorage.getItem('proyectos');
    this.profesor = JSON.parse(localStorage.getItem('usuario'));
    //Seguridad de acceso

    if (!this.profesor) {
      this.router.navigate(['/']);
      return;
    }
    if (this.profesor.data.rol == 'Alumno') {
      this.router.navigate(['/alumno']);
      return;
    }
    //Obtención de todos los alumnos y proyectos
    localStorage.getItem('alumnos');
    localStorage.getItem('alumnosProyectos');

    this.getAlumnos();

    this.alumnos =  JSON.parse(localStorage.getItem('alumnos'));
    
    //this.alumnosProyectos = await this.getProyectos();

    this.newUserForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      componentes: ['', Validators.required],
      rol: ['', Validators.required]

    });

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  generaVistaSimulacion(){
    
    this.descargaProyectosSimulacion();
  }
  // alumno = {
  //   usuario:undefined,
  //   proyectos:undefined
  // };

  //Obtención de alumnos y sus proyectos.

  async getAlumnos() {
    await this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
      this.alumnos = [];
      UsuariosSnapshot.forEach((alumnoData: any) => {
        if (alumnoData.payload.doc.data().rol == "Alumno") {
          this.alumno = {
            usuario: {
              id: null,
              data: null
            }
          };
          this.alumno.usuario.id = alumnoData.payload.doc.id;
          this.alumno.usuario.data = alumnoData.payload.doc.data();
          this.alumnos.push(this.alumno);
        }

        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
      })

      //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));

    });

  }

  eliminarAlumno(usuario,index){
    this.firestoreService.deteteAlumnoAuth(this.usuarios[index].email);
    this.usuarios.splice(index, 1);
    this.firestoreService.deleteAlumno(this.idsUsuarios[index]);
    //console.log(this.usuarios,this.idsUsuarios,this.idsUsuarios[index]);
    this.idsUsuarios.splice(index, 1);
  }

  alumnosconproyectos = [];

  //Genera un array con objetos de alumnos junto a sus
  global;
  nuevosRecursos = false;
  mostrarProyectosValidacionRecursos() {

    let alumnos = JSON.parse(localStorage.getItem('alumnos'));
    let proyectos = []
    this.alumnosconproyectos = [];

    //console.log(alumnos);

    for (let alumno of alumnos) {
      let query2 =this.firestoreService.getProyectosUsuario(alumno.usuario.id).subscribe((usuario) => {
        if (usuario.length == 1) {
          let proyecto={
            id: alumno.usuario.id,
            data: usuario[0].payload.doc.data()
          }

          let global = {
            usuario: undefined,
            proyectos: undefined
      
          };
              if (proyecto.data.estado == "creado") {
                global.usuario = alumno.usuario;
                global.proyectos = proyecto.data;
                this.alumnosconproyectos.push({
                  usuario: alumno.usuario,
                  proyectos: proyecto.data
                });
              }
            
           
        }

        //localStorage.setItem('proyectos', JSON.stringify(usuario[0].payload.doc.data()));
      });


    }
    
    //console.log(this.alumnos,this.alumnosProyectos);
    // if(this.alumnosProyectos==undefined || this.alumnos.length<1){
    //   location.reload();
    //   this.registrarRecursos=true;
    // }
    
    //console.log("conjuntoooaojdaoj", this.alumnosconproyectos);

  }

  cuentaTareas(tareas) {
    return tareas.length;
  }
  //BORRAR ESTAS VARIABLES
  tiposRecurso = ["Físicos", "Humanos", "Know How", "Contactos y Relaciones", "Financieros"];
  numeroRecursos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numSeleccionado;
  formularioRecursos = false;

  alumnoMoment;
  proyectoMoment;
  descripcionMoment;
  recursosProyectoActual = [];
  userId;
  tareasMoment;
  previaAsignacionRec(a, p, r, pd, id, t) {
    //console.log("ESTOY");
    this.registrarRecursos = false;
    this.formularioRecursos = true;
    this.alumnoMoment = a;
    this.proyectoMoment = p;
    this.recursosProyectoActual = r;
    this.descripcionMoment = pd;
    this.tareasMoment = t;
    this.userId = id;
    //console.log(this.recursosProyectoActual);

  }

  //Variables selección pestañas
  registrarAlumno = false;
  registrarRecursos = false;


  //Registrar alumno

  rol = "";
  roles = ["Alumno", "Profesor"];

  public newAlumno(form, documentId = this.documentId) {
    let data = {
      nombre: form.nombre,
      componentes: form.componentes,
      email: form.email,
      password: form.password,
      rol: form.rol
    };

    //console.log(data, "ALUMNO A REGISTRAR")
    this.firestoreService.creaAlumno(data).then(() => {
      //console.log('Documento creado exitósamente!');
      this.newUserForm.setValue({
        nombre: '',
        usuario: '',
        password: ''
      });
    }, (error) => {
      alert("El usuario no se ha podido registrar.");
      console.error(error);
    });
  }

  finRegistro(){
    this.registrarAlumno=false;
    this.previaRegistro=true;
  }

  email: string = null;
  password: string = null;
  mensajeRegistro = 0;

  public registrar(form) {
    

    if(confirm("¿Desea registrar al usuario?")){
    }else{
      return;
    }

    this.email = form.email;
    this.password = form.password;
    this.authenticationService.registerWithEmail(this.email, this.password).then(
      (data) => {
        this.mensajeRegistro = 1;
        this.registrarAlumno=false;
        this.previaRegistro=true;
        let al = {
          nombre: form.nombre,
          email: form.email,
          componentes: form.componentes,
          password: form.password,
          rol: form.rol
        };
    
        //console.log(al, "ALUMNO A REGISTRAR")
        this.firestoreService.creaAlumno(al).then(() => {
          //console.log('Documento creado exitósamente!');
          this.newUserForm.setValue({
            nombre: '',
            componentes: '',
            email: '',
            password: '',
            rol: ''
          });
        }, (error) => {
          //console.error(error);
        });
      }).catch((error) => {
        alert("Error en el registro, motivo: "+error.message);
        //console.log("ERROR REGISTRO",error);
      });
      
   
  }


  

  actualizarProyecto() {

    let proyecto = {
      nombre: this.proyectoMoment,
      descripcion: this.descripcionMoment,
      estado: this.ESTADOS.RECURSOS_VALIDADOS,
      recursos: this.recursosProyectoActual,
      tareas: this.tareasMoment

    };

    if(confirm("¿Desea guardar los datos?")){
      alert("Datos guardados exitosamente");
    }else{
      return;
    }

    this.firestoreService.actualizarProyecto(this.userId, proyecto);
    this.formularioRecursos = false;
    this.nuevosRecursos = false;

  }


  addRecurso() {
    this.recursosProyectoActual.push({
      nombre: null,
      descripcion: null,
    })
  }

  alumnosConProyectosEnSimulacion = [];
  ventanaSimulacion = false;

  descargaProyectosSimulacion() {
    
    //reseteo array cada vez que recargo.
    this.alumnosConProyectosEnSimulacion=[];
    this.getAlumnosSimulando();

    //SOLO SI HAY ALUMNOS CON PROYECTOS SIMULANDO, SINO MOSTRAR UN MENSAJE.
    this.ventanaSimulacion = true;
  }

  proyectosFinalizados;
  previaVistaResultados = false;
  verDetalleResultado = false;
  async descargaProyectosFinalizados(){
    let query = await this.firestoreService.getResultados().subscribe((resultados) => {

      this.previaVistaResultados=true;

      this.proyectosFinalizados = [];
      for (let resultado of resultados) {

        this.proyectosFinalizados.push(resultado.payload.doc.data());

      }

      //console.log('finalizados', this.proyectosFinalizados);

    });


  }

  estadosSimulacion;
  alumnoEstado;

  getAlumnosSimulando() {
    let alumnos = JSON.parse(localStorage.getItem('alumnos'));
    //console.log('estadosSimulacionAlumnos', this.alumnosConProyectosEnSimulacion);

    this.alumnoEstado = {
      alumno: null,
      estadoSimulacion: null
    };

    //console.log(alumnos);

    for (let alumno of alumnos) {
      //console.log(alumno.usuario.id);

      this.firestoreService.getEstadoActual(alumno.usuario.id).subscribe((estados) => {

        this.estadosSimulacion = [];

        for (let estadoSimulacion of estados) {

          this.estadosSimulacion.push(estadoSimulacion.payload.doc.data());

        }

        //console.log('estadosSimulacion', this.estadosSimulacion);


        //Si el alumno tiene proyectos en simulacion

        if (this.estadosSimulacion.length > 0) {
          let numeroDias = -1;
          let proyectoSimulacion;
          for (let estado of this.estadosSimulacion) {
            if (estado.diasTotalesProyecto > numeroDias) {
              numeroDias = estado.diasTotalesProyecto;
              proyectoSimulacion = estado;
            }
          }
          this.alumnoEstado.alumno = alumno.usuario;
          this.alumnoEstado.estadoSimulacion = proyectoSimulacion;
          this.alumnosConProyectosEnSimulacion.push(this.alumnoEstado);
          this.alumnoEstado = {
            alumno: null,
            estadoSimulacion: null
          };

        }

      });

    }
  }


  calculaAcabadas(id) {
    let cont = 0;
    for (let alumno of this.alumnosConProyectosEnSimulacion) {
      if (alumno.alumno.id == id) {
        for (let tarea of alumno.estadoSimulacion.tareas) {
          if (tarea.estado == "Finalizada") cont++;
        }
      }
    }
    return cont;
  }

  verDetalleSimulacion = false;
  detalleSimulacionActual = null;




usuarios;
idsUsuarios;
previaRegistro=false;
  async getUsuarios() {
    await this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
      this.previaRegistro=true;

      this.usuarios = [];
      this.idsUsuarios = [];

      UsuariosSnapshot.forEach((alumnoData: any) => {
        
          this.alumno.usuario.id = alumnoData.payload.doc.id;
          this.alumno.usuario.data = alumnoData.payload.doc.data();
          this.usuarios.push(
            alumnoData.payload.doc.data()
            );
          this.idsUsuarios.push(alumnoData.payload.doc.id);
        
  
      })
  
      //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));
  
    });
  
  }



  //TABLAS CON RESULTADOS FINALES

  tablaFinal=false;
  eventos;
  nombreAlumnoResultados;

  tablaFin(idusuario,nombre){
    //console.log(idusuario);
    this.firestoreService.getEvento(idusuario).subscribe((eventos) => {


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

    this.nombreAlumnoResultados=nombre;
    this.tablaFinal=true;
  }

  downloadCSV(csv) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});

    downloadLink = document.createElement("a");

    downloadLink.download = this.nombreAlumnoResultados + '.csv';

    downloadLink.href = window.URL.createObjectURL(csvFile);
   
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();
}


exportTableToCSV() {
  //console.log("NIMBRE",this.nombreAlumnoResultados);
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

  this.downloadCSV(csv.join("\n"));
}

validateInputRecursos(recurso){
  //console.log(recurso);
  if(recurso.cantidad<0){
    recurso.cantidad=0;
  }
}


reload(){
  location.reload();
}





}



