import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../services/firestore/firestore.service';
import { ReactiveFormsModule, FormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { AutenticathionService } from '../services/authentication/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

import {Router} from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Formulario registro usuarios
  //public documentId = null;
  public loginUserForm: FormGroup;
  public usuarios = [];


  constructor(
    private firestoreService: FirestoreService,
    public form: FormBuilder,
    private authenticationService: AutenticathionService,
    private router:Router) { }

  ngOnInit() {

  //SESION
  localStorage.getItem('idusuario');
  localStorage.getItem('usuario');


    this.loginUserForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });

    this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
      this.usuarios = [];
      UsuariosSnapshot.forEach((alumnoData: any) => {
        this.usuarios.push({
          id: alumnoData.payload.doc.id,
          data: alumnoData.payload.doc.data()
        });
        //console.log(this.usuarios[1]);
      })
    });
  }


  password: string = null;
  email: string = null;


  loginError=false;
  login(form) {
    this.email = form.email;
    this.password = form.password;
    let result=this.authenticationService.loginWithEmail(this.email, this.password).then(
      (data) => {

        //console.log(this.tipoUsuario());
        if (this.tipoUsuario() == "Profesor") {
          //console.log(data);
          this.router.navigate(['admin']);
        }
        else if (this.tipoUsuario() == "Alumno"){
          //console.log(data);
          this.router.navigate(['alumno']);
        }
    }).catch((error) => {
          this.loginError=true;
          console.log("login error");

        });
  }


  tipoUsuario() {
    for (let usuario of this.usuarios) {
      if (usuario.data.email == this.email) {
        console.log(usuario);
        let id = usuario.id;
        //SESION
        localStorage.setItem('idusuario', id.toString());
        localStorage.setItem('usuario',JSON.stringify(usuario));

        //console.log(localStorage.getItem('usuario'));
        return usuario.data.rol;
      }
    }
    return null;
  }

}
