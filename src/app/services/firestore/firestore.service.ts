import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from '@firebase/app';
import '@firebase/functions'



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }


  //------------------ALUMNOS/USUARIOS-------------------

  //Crea un nuevo alumno
  public creaAlumno(data: { nombre: string, email: string, password: string, rol: string }) {
    return this.firestore.collection('alumnos').add(data);
  }

  //Obtiene un alumno determinado
  public getUsuario(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).snapshotChanges();
  }

  public getProyectosUsuario(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).collection('proyectos').snapshotChanges();
  }

  //Obtiene todos los alumnos
  public getUsuarios() {
    return this.firestore.collection('alumnos').snapshotChanges();

  }


  //Actualiza un alumno (Cambnio contraseña por ejemplo)
  public updateAlumno(documentId: string, data: any) {
    return this.firestore.collection('alumnos').doc(documentId).set(data);
  }

  public deleteAlumno(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).delete();
  }
  public deteteAlumnoAuth(email) {
    var deleteFn = firebase.functions().httpsCallable('deleteUser');
    console.log(email, deleteFn);
    deleteFn({ email: email })
      .then(function (result) {
        console.log('Delete success: ' + JSON.stringify(result));
      })
      .catch(function (err) {
        console.log('Delete failed, see console,');
        console.warn(err);
      });
  }



  //---------------TAREAS Y PROYECTOS--------------------

  //Crea un nuevo proyecto
  public creaProyecto(data: Object) {

    let idAlumno = localStorage.getItem('idusuario');

    return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);
  }

  //Crea una nueva plantilla de proyecto
  public creaPlantilla(data: Object) {

    return this.firestore.collection('/plantillasProyectos').add(data);
  }

  //Obtiene todas las plantillas de proyectos
  public getPlantillas() {

    return this.firestore.collection('plantillasProyectos').snapshotChanges();
  }



  //VALIDACION RECURSOS

  public actualizarProyecto(idAlumno: string, data: Object) {

    return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);

  }

  //Proyecto almacenaje resultados

  guardaResultados(data: Object) {
    return this.firestore.collection('resultados/').add(data);
  }

  getResultados() {
    return this.firestore.collection('resultados').snapshotChanges();
  }
  //PROYECTO DELETE

  public deleteAll(idAlumno) {

    let path = 'alumnos/' + idAlumno + '/proyectos';
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    console.log(path, deleteFn);
    deleteFn({ path: path })
      .then(function (result) {
        console.log('Delete success: ' + JSON.stringify(result));
        path = 'alumnos/' + idAlumno + '/estadoSimulacion';
        var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
        console.log(path, deleteFn);
        deleteFn({ path: path })
          .then(function (result) {
            console.log('Delete success: ' + JSON.stringify(result));
            path = 'alumnos/' + idAlumno + '/eventos';
            var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
            console.log(path, deleteFn);
            deleteFn({ path: path })
              .then(function (result) {
                return;
                console.log('Delete success: ' + JSON.stringify(result));
              })
              .catch(function (err) {
                console.log('Delete failed, see console,');
                console.warn(err);
              });

            alert("Datos del proyecto eliminados correctamente");
          })
          .catch(function (err) {
            console.log('Delete failed, see console,');
            console.warn(err);
          });
      })
      .catch(function (err) {
        console.log('Delete failed, see console,');
        console.warn(err);
      });




  }
  async deleteProyectos(idAlumno) {
    let path = 'alumnos/' + idAlumno + '/proyectos';
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    console.log(path, deleteFn);
    deleteFn({ path: path })
      .then(function (result) {
        console.log('Delete success: ' + JSON.stringify(result));
      })
      .catch(function (err) {
        console.log('Delete failed, see console,');
        console.warn(err);
      });
  }

  async  deleteSimulacion(idAlumno) {
    let path = 'alumnos/' + idAlumno + '/estadoSimulacion';
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    console.log(path, deleteFn);
    deleteFn({ path: path })
      .then(function (result) {
        console.log('Delete success: ' + JSON.stringify(result));
      })
      .catch(function (err) {
        console.log('Delete failed, see console,');
        console.warn(err);
      });
    path = 'alumnos/' + idAlumno + '/eventos';
    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    console.log(path, deleteFn);
    deleteFn({ path: path })
      .then(function (result) {
        console.log('Delete success: ' + JSON.stringify(result));
      })
      .catch(function (err) {
        console.log('Delete failed, see console,');
        console.warn(err);
      });

    alert("Datos del proyecto eliminados correctamente");
    //location.reload();

  }




  //---------------SIMULACIÓN--------------------

  //Nuevo estado Simulacion
  public actualizaEstado(idAlumno: string, data: Object) {
    return this.firestore.collection('alumnos/' + idAlumno + '/estadoSimulacion').add(data);

  }


  //Get all estados sumulacion
  public getEstadoActual(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).collection('estadoSimulacion').snapshotChanges();

  }


  //Evento 
  public setEvento(idAlumno: string, data: Object) {
    return this.firestore.collection('alumnos/' + idAlumno + '/eventos').add(data);
  }

  public getEvento(documentId: string) {
    return this.firestore.collection('alumnos').doc(documentId).collection('eventos').snapshotChanges();
  }

}
