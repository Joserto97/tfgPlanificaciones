(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light cursor\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n            aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n            (click)=\"toggleCollapsed()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\"\n            [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"reload()\">\n                        Inicio</div>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;ventanaSimulacion=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        previaCreacionPlantilla=false;collapsed=true;mensajeRegistro=0;registrarAlumno=false;registrarRecursos=true;\n                        mostrarProyectosValidacionRecursos();creacionPlantilla=false;ventanaSimulacion=false;verDetalleSimulacion=false;previaRegistro=false\">\n                        Validación de Recursos</div>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;verDetallePlantilla=false;collapsed=true;mensajeRegistro=0;nuevoProyecto();ventanaSimulacion=false;registrarAlumno=false;\n                        registrarRecursos=false;tercerpaso=false;cuartopaso=false;verDetalleSimulacion=false;creacionPlantilla=false;previaRegistro=false\">\n                        Ver/Crear plantillas</div>\n                </li>\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\" (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;mensajeRegistro=0;descargaProyectosSimulacion();creacionPlantilla=false;registrarAlumno=false;registrarRecursos=false;\n                        previaCreacionPlantilla=false;verDetalleSimulacion=false;previaRegistro=false\">\n                        Ver proyectos en simulación</div>\n                    <!-- <a class=\"nav-link\" href=\"#\">Link</a> -->\n                </li>\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\"\n                        (click)=\"verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;mensajeRegistro=0;creacionPlantilla=false;registrarAlumno=false;registrarRecursos=false;\n                        previaCreacionPlantilla=false;verDetalleSimulacion=false;previaRegistro=false;descargaProyectosFinalizados();ventanaSimulacion=false\">\n                        Ver proyectos finalizados</div>\n                    <!-- <a class=\"nav-link\" href=\"#\">Link</a> -->\n                </li>\n\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;registrarAlumno=false;previaRegistro=true;registrarRecursos=false;creacionPlantilla=false;\n                        ventanaSimulacion=false;previaCreacionPlantilla=false;verDetalleSimulacion=false;getUsuarios();\">\n                        Ver/Registrar Usuarios</div>\n                    <!-- <a class=\"nav-link disabled\" href=\"#\">Disabled</a> -->\n                </li>\n            </ul>\n\n            <div class=\"mx-auto\">\n                <a class=\"navbar-brand\">Panel del Profesor</a>\n            </div>\n            <div>\n                <ul class=\"form-inline my-2 my-lg-0\">\n                    <li class=\"nav-item\">\n                        <div class=\"nav-link\" (click)=\"logOut()\">Hola, {{profesor.data.nombre}} -> Cerrar Sesión</div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <!-- INICIO -->\n    <div *ngIf=\"!previaRegistro && !registrarAlumno && !proyecto && !previaCreacionPlantilla && !verDetallePlantilla\n    && !creacionPlantilla && !registrarRecursos && !formularioRecursos && !nuevosRecursos && !ventanaSimulacion\n     && !verDetalleSimulacion && !tablaFinal && !previaVistaResultados && !verDetalleResultado\">\n        <br>\n        <br>\n        <h6>\n            Hola {{profesor.data.nombre}}, bienvenido!!:\n        </h6>\n    </div>\n    <div>\n\n        <!-- LISTADO DE ALUMNOS -->\n       \n        <div *ngIf=\"previaRegistro && this.usuarios.length>0\">\n            <br>\n\n            <h6>Estos son los alumnos que actualmente están creados, para crear uno nuevo haz clic en crear al final de\n                esta lista.</h6>\n            <table class=\"table\">\n                <thead class=\"thead-dark\">\n                    <tr>\n\n                        <td>\n                            Grupo\n                        </td>\n                        <td>\n                            Componentes\n                        </td>\n                        <td>\n                            E-mail\n                        </td>\n                        <td>\n                            Rol\n                        </td>\n                        <td>\n                            Acción\n                        </td>\n\n\n                    </tr>\n                </thead>\n                <tr *ngFor=\"let  usuario of this.usuarios; let i = index\" >\n                    <td>\n                        {{usuario.nombre}}\n                    </td>\n                    <td>\n                        {{usuario.componentes}}\n                    </td>\n\n                    <td>\n                        {{usuario.email}}\n                    </td>\n                    <td>\n                        {{usuario.rol}}\n                    </td>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                            (click)=\"eliminarAlumno(usuario,i)\" [hidden]=\"usuario.email==profesor.data.email\">\n                    </td>\n\n                </tr>\n                <tr>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Usuario\"\n                        (click)=\"registrarAlumno=true;previaRegistro=false;\">\n                </tr>\n\n            </table>\n            <div>\n                <h5 *ngIf=\"mensajeRegistro==1\">El alumno ha sido registrado correctamente.</h5>\n                <h5 *ngIf=\"mensajeRegistro==2\">Se ha producido un error en el registro, inténtalo de nuevo.</h5>\n\n            </div>\n\n        </div>\n        <!-- FORMULARIO REGISTRO ALUMNOS -->\n\n\n\n        <form *ngIf=\"registrarAlumno\" (ngSubmit)=\"registrar(newUserForm.value)\" [formGroup]=\"newUserForm\">\n            <div class=\"form-group\">\n                <label>Nombre del Grupo/Profesor</label>\n                <input class=\"form-control\" id=\"nombre\" placeholder=\"Introduce el nombre completo del grupo*.\"\n                    formControlName=\"nombre\">\n            </div>\n            <div class=\"form-group\">\n                <label>Componentes/Profesor</label>\n                <input class=\"form-control\" id=\"componentes\"\n                    placeholder=\"Introduce el nombre de los componentes del grupo*.\" formControlName=\"componentes\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>E-mail</label>\n                <input class=\"form-control\" id=\"email\"\n                    placeholder=\"Introduce el email de uno de los usuarios del grupo.\" formControlName=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label>Contraseña</label>\n                <input type=\"password\" class=\"form-control\" id=\"contrasenia1\"\n                    placeholder=\"Introduce la contraseña que tendrá el alumno por defecto.\" formControlName=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <label>Tipo de usuario</label>\n                <select [(ngModel)]=\"rol\" class=\"form-control\" formControlName=\"rol\">\n                    <option value=\"0\">Selecciona una opción</option>\n                    <option *ngFor=\"let rol of roles\">\n                        {{rol}}\n                    </option>\n                </select>\n            </div>\n            <br>\n            <h6>*En caso de que el usuario a registrar sea un profesor, introducir aquí el nombre del profesor.</h6>\n            <br>\n            <table>\n                <tr>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" [disabled]=\"!newUserForm.valid\"\n                            value=\"Registrar\">\n\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                            (click)=\"registrarAlumno=false;previaRegistro=true;\">\n                    </td>\n                </tr>\n            </table>\n        </form>\n        <!-- <div>\n            <h5 *ngIf=\"mensajeRegistro==1\">El alumno ha sido registrado correctamente.</h5>\n            <h5 *ngIf=\"mensajeRegistro==2\">Se ha producido un error en el registro, inténtalo de nuevo.</h5>\n\n        </div> -->\n\n    </div>\n\n\n    <!-- Pantalla principal plantillas-->\n    <div *ngIf=\"proyecto && previaCreacionPlantilla\">\n        <br>\n\n        <h6>Estas son las plantillas que actualmente están creadas, para crear una nueva haz clic en crear al final de\n            esta lista.</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <td>\n                        Tipo\n                    </td>\n                    <td>\n                        Descripción\n                    </td>\n                    <td>\n                        Acción\n                    </td>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let plantilla of this.plantillas; let i = index\">\n                <td>\n                    {{plantilla.tipo}}\n                </td>\n                <td>\n                    {{plantilla.descripcion}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetallePlantilla=true;previaCreacionPlantilla=false;detallePlantillaActual=plantilla\">\n                </td>\n            </tr>\n            <tr>\n                <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Plantilla\"\n                    (click)=\"creacionPlantilla=true;previaCreacionPlantilla=false;introduccion=true\">\n            </tr>\n\n\n        </table>\n    </div>\n\n    <!-- DEtalle plantillas -->\n    <div *ngIf=\"verDetallePlantilla\">\n        <br>\n        <h5>Este es el detalle de la plantilla: {{detallePlantillaActual.tipo}}.\n        </h5>\n        <br>\n        <h6>A continuación podrás encontrar las tareas y recursos de los que está formada la plantilla.</h6>\n        <br>\n        <h6>TAREAS DE LA PLANTILLA</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DE TAREA:\n                    </td>\n                    <td>\n                        DESCRIPCION:\n                    </td>\n                    <td>\n                        PORCENTAJE ÓPTIMO:\n                    </td>\n                    <td>\n                        PORCENTAJE PÉSIMO:\n                    </td>\n                    <td>\n                        RECURSOS MÍNIMOS\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let tarea of detallePlantillaActual.tareas\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.descripcion}}</td>\n                <td>{{tarea.pOptimo}}</td>\n                <td>{{tarea.pPesimo}}</td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD NECESARIA</td>\n                        </tr>\n\n                        <tr *ngFor=\"let recurso of tarea.recursosMin; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{recurso.cantidad}}</td>\n                        </tr>\n                    </table>\n                </td>\n\n            </tr>\n\n        </table>\n\n        <br>\n        <h6>RECURSOS DE LA PLANTILLA</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DEL RECURSO:\n                    </td>\n                    <td>\n                        DESCRIPCION:\n                    </td>\n                    <td>\n                        % DEGRADACIÓN:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let recurso of detallePlantillaActual.recursos\">\n                <td>{{recurso.nombre}}</td>\n                <td>{{recurso.descripcion}}</td>\n                <td>{{recurso.degradacion}}</td>\n            </tr>\n\n            <tr>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                    (click)=\"verDetallePlantilla=false;previaCreacionPlantilla=true;detallePlantillaActual=null\">\n            </tr>\n\n        </table>\n\n\n\n    </div>\n\n    <!-- Creacion Plantilla -->\n    <div *ngIf=\"proyecto && creacionPlantilla\">\n        <h2>\n            Creación de una plantilla de proyecto.\n        </h2>\n        <br>\n        <div *ngIf=\"introduccion\">\n            <h6>\n                Para crear una plantilla de proyecto, deberás cumplimentar los siguientes formularios que constan de:\n            </h6>\n            <ol>\n                <li>\n                    Identificación.\n                </li>\n                <li>\n                    Recursos Tipo.\n                </li>\n                <li>\n                    Tareas Tipo.\n                </li>\n                <li>\n                    Asignación recursos mínimos de cada tarea.\n                </li>\n            </ol>\n            <br>\n            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Comenzar\"\n                (click)=\"identificacion=true;introduccion=false\">\n            <br>\n\n\n        </div>\n        <div *ngIf=\"identificacion\">\n            <h5>Identificación</h5>\n            <!-- Formulario creación del proyecto-->\n            <!-- Nombre, descripcion, [tipo de proyecto(software,general)], calendarizar, sin sabados ni domingos -->\n            <br>\n            <form *ngIf=\"proyecto && identificacion\">\n                <h6>Tipo de la plantilla del proyecto.</h6>\n                <input class=\"form-control\" placeholder=\"Tipo del proyecto.  Ej:Proyecto Software.\"\n                    [(ngModel)]=\"proyecto.tipo\" [ngModelOptions]=\"{standalone: true}\">\n                <br>\n                <h6>Descripción de la plantilla.</h6>\n                <input class=\"form-control\" placeholder=\"Descripción de la plantilla.\"\n                    [(ngModel)]=\"proyecto.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n                <br>\n                <input [disabled]=\"!proyecto.tipo || !proyecto.descripcion\" class=\"btn btn-outline-secondary\"\n                    type=\"button\" value=\"Siguiente\" (click)=\"primerpaso=true;identificacion=false;\">\n\n\n\n            </form>\n        </div>\n        <br>\n        <div *ngIf=\"primerpaso\">\n            <h5>Recursos</h5>\n            <h6>A continuación propón una lista de recursos que serán necesarios para realizar este tipo de proyecto.\n            </h6>\n            <form *ngIf=\"primerpaso\">\n                <table *ngIf=\"mostrarTablaRecursos\" class=\"table\">\n                    <tr>\n                        <td>\n\n                        </td>\n                        <td>\n                            NOMBRE\n                        </td>\n                        <td>\n                            DESCRIPCIÓN\n                        </td>\n                        <td>\n                            % FALLO\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let recurso of proyecto.recursos; let i = index\">\n                        <td>Recurso {{ i + 1 }}</td>\n\n                        <td>\n                            <input class=\"form-control\" placeholder=\"Nombre del Recurso.\" [(ngModel)]=\"recurso.nombre\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" placeholder=\"Descripción del Recurso.\"\n                                [(ngModel)]=\"recurso.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" placeholder=\"% fallo\" min=\"0\" max=\"100\" step=\"1\"\n                                [(ngModel)]=\"recurso.degradacion\" [ngModelOptions]=\"{standalone: true}\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                                (click)=\"eliminarElemento(i,'recurso')\">\n                        </td>\n\n\n                    </tr>\n\n                </table>\n                <br>\n\n                <table>\n                    <tr>\n\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir recurso\"\n                                (click)=\"newRecurso()\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                                (click)=\"primerpaso=false;identificacion=true;\">\n                        </td>\n\n                        <td>\n                            <input [disabled]=\"!hayUnRecurso()\" class=\"btn btn-outline-secondary\" type=\"button\"\n                                value=\"Siguiente\" (click)=\"primerpaso=false;segundopaso=false;tercerpaso=true;\">\n                        </td>\n                    </tr>\n                </table>\n\n\n            </form>\n        </div>\n        <div *ngIf=\"tercerpaso\">\n            <br>\n            <h6>\n                En este formulario deberás añadir las tareas básicas de las que constará la plantilla.\n\n            </h6>\n            <form>\n\n                <table class=\"table\" *ngIf=\"mostrarTabla\">\n                    <tr>\n                        <td>\n\n                        </td>\n                        <td>\n                            TAREAS\n                        </td>\n                        <td>\n                            DESCRIPCIÓN\n                        </td>\n                        <td>\n                            % OPTIMO\n                        </td>\n                        <td>\n                            % PESIMO\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let tarea of proyecto.tareas; let i = index\">\n                        <td>Tarea {{ i + 1 }}</td>\n                        <td>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Nombre tarea\"\n                                [(ngModel)]=\"tarea.nombre\" [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Descripción tarea\"\n                                [(ngModel)]=\"tarea.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"tarea.pOptimo\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"tarea.pPesimo\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                                (click)=\"eliminarElemento(i,'tarea')\">\n                        </td>\n\n\n\n                    </tr>\n                </table>\n                <br>\n                <table>\n                    <tr>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir tarea\"\n                                (click)=\"addTarea()\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                                (click)=\"primerpaso=true;tercerpaso=false;\">\n                        </td>\n                        <td>\n                            <input [disabled]=\"!hayUnaTarea()\" type=\"submit\" class=\"btn btn-outline-secondary\"\n                                value=\"Siguiente\" (click)=\"tercerpaso=false;cuartopaso=true;previaCreacionTareas()\">\n\n                        </td>\n\n\n                    </tr>\n                </table>\n            </form>\n\n\n        </div>\n\n        <div *ngIf=\"cuartopaso\">\n            <br>\n            <h6>A continuación introduce una cantidad de recursos mínimos necesarios para que la tarea se lleve a cabo.</h6>\n            <form>\n                <table class=\"table\">\n                    <tr>\n                        <td>\n                            NOMBRE DE LA TAREA\n                        </td>\n                        <td>\n                            RECURSOS\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let tarea of proyecto.tareas; let i = index\">\n                        <td>\n                            {{tarea.nombre}}\n                        </td>\n                        <td>\n                            <table>\n                                <tr>\n                                    <td>NOMBRE DEL RECURSO</td>\n                                    <td>CANTIDAD NECESARIA</td>\n                                </tr>\n\n                                <tr *ngFor=\"let recurso of proyecto.recursos; let j = index\">\n                                    <td>{{recurso.nombre}}</td>\n                                    <td><input min=\"0\" type=\"number\" [(ngModel)]=\"tarea.recursosMin[j].cantidad\"\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n                <table>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                            (click)=\"tercerpaso=true;primerpaso=false;cuartopaso=false\">\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\"\n                            (click)=\"guardarProyecto()\">\n                    </td>\n                </table>\n            </form>\n        </div>\n    </div>\n\n\n    <!-- Registro y administración de recursos para un proyecto -->\n    <div class=\"mx-auto\" *ngIf=\"registrarRecursos && alumnosconproyectos.length==0\">\n        <br>\n        <h6>\n            No hay ningún proyecto pendiente de validar sus recursos, puede haber ocurrido un error en la carga de la\n            página, recarga de nuevo o vuelve más tarde.\n        </h6>\n    </div>\n    <div class=\"mx-auto\" *ngIf=\"registrarRecursos && alumnosconproyectos.length>0\">\n        <br>\n        <h6>\n            A continuación se muestra una lista de proyectos pendientes de validar sus recursos.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        Nombre del alumno.\n                    </td>\n                    <td>\n                        Nombre del proyecto.\n                    </td>\n                    <td>\n                        Tipo del proyecto.\n                    </td>\n                    <td>\n                        Acción.\n                    </td>\n                </tr>\n            </thead>\n\n            <tr *ngFor=\"let user of alumnosconproyectos\">\n                <td>\n                    {{user.usuario.data.nombre}}\n                </td>\n                <td>\n                    {{user.proyectos.nombre}}\n                </td>\n                <td>\n                    {{user.proyectos.tipo}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Validar Recursos\"\n                        (click)=\"previaAsignacionRec(user.usuario.data.nombre,user.proyectos.nombre,user.proyectos.recursos,user.proyectos.descripcion,user.usuario.id,user.proyectos.tareas)\">\n                </td>\n            </tr>\n        </table>\n    </div>\n\n\n    <!-- Formulario recursos administracion -->\n    <div *ngIf=\"formularioRecursos && !nuevosRecursos\">\n        <br>\n        <h4>\n            VALIDACIÓN DE RECURSOS\n        </h4>\n        <br>\n        <h6>\n            Realiza los cambios oportunos. Si consideras que no es necesario realizar cambios deja los campos tal cuál.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    Nombre del recurso.\n                </td>\n                <td>\n                    Descripción.\n                </td>\n                <!-- <td>\n                        Validado.\n                    </td> -->\n\n            </tr>\n            <tr *ngFor=\"let recurso of recursosProyectoActual;let i = index\">\n                <td>\n                    {{recurso.nombre}}\n                </td>\n                <td>\n                    {{recurso.descripcion}}\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                        [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\"\n                        (ngModelChange)=\"validateInputRecursos(recurso)\">\n\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar Recurso\"\n                        (click)=\"eliminarElemento(i,'recursoValidacion')\">\n                </td>\n                <!-- <td>\n                         <select name=\"miselect\" [(ngModel)]=\"numSeleccionado\">\n                        <option [value]=\"0\" *ngFor=\"let num of numeroRecursos\">{{num}}</option>\n                    </select> \n                        <input type=\"checkbox\" [(ngModel)]=\"recurso.validado\" /><br>\n\n                    </td> -->\n\n            </tr>\n            <tr>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Registrar selección\"\n                        (click)=\"actualizarProyecto()\">\n                </td>\n                <td></td>\n                <td></td>\n                <td></td>\n\n            </tr>\n        </table>\n\n    </div>\n\n    <div *ngIf=\"formularioRecursos && nuevosRecursos\">\n        <br>\n        <h6>A continuación propón una lista de recursos a añadir a los validados.</h6>\n        <table>\n            <tr *ngFor=\"let recurso of recursosProyectoActual; let i = index\">\n                <td>\n                    <input class=\"form-control\" placeholder=\"Nombre del Recurso.\" [(ngModel)]=\"recurso.nombre\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </td>\n                <td>\n                    <input class=\"form-control\" placeholder=\"Descripción del Recurso.\" [(ngModel)]=\"recurso.descripcion\"\n                        [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                        [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n\n            </tr>\n            <tr>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro recurso\"\n                        (click)=\"addRecurso()\">\n\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Guardar\"\n                        (click)=\"actualizarProyecto()\">\n\n                </td>\n            </tr>\n        </table>\n\n        <br>\n    </div>\n\n    <!-- Pantalla principal alumnos y proyectos en simulacion -->\n    <!-- <div class=\"mx-auto\" *ngIf=\"ventanaSimulacion && alumnosConProyectosEnSimulacion.length==0\">\n        <br>\n        <h6>\n            No hay ningún proyecto en simulación, puede haber ocurrido un error en la carga de la página, recarga de nuevo o vuelve más tarde.\n        </h6>\n    </div> -->\n    <div class=\"mx-auto\" *ngIf=\"ventanaSimulacion && alumnosConProyectosEnSimulacion.lentgh!=0\">\n        <br>\n        <h6>\n            A continuación se muestra una lista de proyectos en estado de simulación, haz clic en ver detalle para más\n            infomación.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        Nombre del alumno.\n                    </td>\n                    <td>\n                        Email del alumno.\n                    </td>\n                    <td>\n                        Nombre del proyecto.\n                    </td>\n                    <td>\n                        Días empleados en el proyecto.\n                    </td>\n                    <td>\n                        Tareas completadas.\n                    </td>\n                    <td>\n                        Estado.\n                    </td>\n                    <td>\n                        Acción.\n                    </td>\n                </tr>\n            </thead>\n\n            <tr *ngFor=\"let user of alumnosConProyectosEnSimulacion\">\n                <td>\n                    {{user.alumno.data.nombre}}\n                </td>\n                <td>\n                    {{user.alumno.data.email}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.nombre}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.diasTotalesProyecto}}\n                </td>\n                <td>\n                    {{calculaAcabadas(user.alumno.id)}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.estado}}\n                </td>\n                <td>\n                    <input *ngIf=\"user.estadoSimulacion.estado=='simulando'\" class=\"btn btn-outline-secondary\"\n                        type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetalleSimulacion=true;ventanaSimulacion=false;detalleSimulacionActual=user\">\n                    <input *ngIf=\"user.estadoSimulacion.estado=='finalizado'\" class=\"btn btn-outline-secondary\"\n                        type=\"button\" value=\"Ver resultados\"\n                        (click)=\"ventanaSimulacion=false;tablaFin(user.alumno.id,user.alumno.data.nombre)\">\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"verDetalleSimulacion\">\n        <h6>Este es el estado de las tareas del proyecto del alumno.\n        </h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DE TAREA:\n                    </td>\n                    <td>\n                        ESTADO:\n                    </td>\n                    <td>\n                        DIAS EMPLEADOS*:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let tarea of detalleSimulacionActual.estadoSimulacion.tareas\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.estado}}</td>\n                <td>{{tarea.diasEmpleados}}</td>\n            </tr>\n\n        </table>\n        <br>\n        <h6>Dias totales de ejecución del plan:</h6>\n        <h6> {{detalleSimulacionActual.estadoSimulacion.diasTotalesProyecto}}</h6>\n        <br>\n        <h6>\n            *El número de días empleados se refiere a la cantidad de días que la tarea lleva en proceso o a la cantidad\n            de días que ha consumido para compeltarse en caso de que ya este finalizada.\n        </h6>\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n            (click)=\"verDetalleSimulacion=false;ventanaSimulacion=true\">\n\n\n    </div>\n\n    <div *ngIf=\"tablaFinal\"> <br>\n\n        <h6>Estos son los resultados del proyecto del alumno seleccionado.</h6>\n\n\n        <table class=\"table\">\n            <tr>\n                <td>\n                    DIA OCURRENCIA\n                </td>\n                <td>\n                    ACCIÓN\n                </td>\n                <td>\n                    RECURSO IMPLICADO\n                </td>\n                <td>\n                    TAREA IMPLICADA\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let evento of eventos; let i = index\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <table>\n            <td>\n                <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n                (click)=\"verDetalleSimulacion=false;ventanaSimulacion=true;tablaFinal=false\">\n    \n            </td>\n        </table>\n\n    </div>\n\n    <!-- Pantalla principal proyectos finalizados-->\n    <div *ngIf=\"previaVistaResultados\">\n        <br>\n\n        <h6>Estos son las simulaciones que actualmente están entregadas para evaluar, para ver el detalle de cada una\n            puedes hacer clic en Ver detalle.</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <td>\n                        Nombre Grupo\n                    </td>\n                    <td>\n                        Componentes\n                    </td>\n                    <td>\n                        E-mail\n                    </td>\n                    <td>\n                        Acción\n                    </td>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let proyecto of this.proyectosFinalizados; let i = index\">\n                <td>\n                    {{proyecto.usuario.nombre}}\n                </td>\n                <td>\n                    {{proyecto.usuario.componentes}}\n                </td>\n                <td>\n                    {{proyecto.usuario.email}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetalleResultado=true;previaVistaResultados=false;detalleProyectoActual=proyecto;\n                        nombreAlumnoResultados=proyecto.usuario.nombre\">\n                </td>\n            </tr>\n        </table>\n    </div>\n\n    <!-- Detalle resultados -->\n    <div *ngIf=\"verDetalleResultado\">\n        <br>\n        <h6>Estos son los resultados del alumno en el proyecto actual.\n        <br>\n        </h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        DIA OCURRENCIA:\n                    </td>\n                    <td>\n                        EVENTO:\n                    </td>\n                    <td>\n                        RECURSO IMPLICADO:\n                    </td>\n                    <td>\n                        TAREA IMPLICADA:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let evento of detalleProyectoActual.eventos\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <table>\n            <tr>\n                <td>         \n                    <input class=\"btn btn-outline-secondary\" (click)=\"exportTableToCSV()\"\n                        value=\"Descargar csv\" type=\"button\"> \n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n                    (click)=\"verDetalleResultado=false;previaVistaResultados=true\">\n        \n                </td>\n            </tr>\n        </table>\n       \n\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading\" *ngIf=\"cargando\">\n    <p>pepe</p>\n</div>\n<div class=\"container\">\n    <!-- Barra navegacion alumno -->\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light cursor\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n            aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n            (click)=\"toggleCollapsed()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\" (click)=\"nuevoProyecto();collapsed=true\">Crear un proyecto</div>\n                </li>\n\n            </ul>\n\n            <div class=\"mx-auto\">\n                <a class=\"navbar-brand\">Panel del Alumno</a>\n            </div>\n            <div>\n                <ul class=\"form-inline my-2 my-lg-0\">\n                    <li class=\"nav-item\">\n                        <div class=\"nav-link\" (click)=\"logOut()\">Cerrar Sesión</div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n\n    <!-- Formulario creación del proyecto-->\n    <div *ngIf=\"proyecto && !gestionarRecursos && plantillas\">\n        <h2>\n            Creación de un proyecto.\n        </h2>\n        <h4>\n            Para crear un proyecto cumplimenta el formulario siguiente sin saltarte ningún paso.\n        </h4>\n    </div>\n    <div>\n        <br>\n\n        <form *ngIf=\"proyecto && primerpaso  && !gestionarRecursos\">\n\n\n            <h6>\n                Define un nombre y da una descripción a tu proyecto.\n            </h6>\n            <br>\n            <input class=\"form-control\" placeholder=\"Nombre del proyecto.\" [(ngModel)]=\"proyecto.nombre\"\n                [ngModelOptions]=\"{standalone: true}\">\n            <input class=\"form-control\" placeholder=\"Descripcion del proyecto.\" [(ngModel)]=\"proyecto.descripcion\"\n                [ngModelOptions]=\"{standalone: true}\">\n            <br>\n            <h6>\n                Elige un tipo de proyecto predefinido.\n            </h6>\n\n            <select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"plantillaSeleccionada\">\n                <option value=\"{{i}}\" *ngFor=\"let plantilla of plantillas; let i = index\">{{plantilla.tipo}}</option>\n            </select>\n            <br>\n            <br>\n            <table>\n                <tr>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Siguiente\"\n                            (click)=\"selectPlantilla()\">\n                    </td>\n                </tr>\n            </table>\n\n        </form>\n        <form *ngIf=\"proyecto && segundopaso\">\n            <!-- <input class=\"form-control\" placeholder=\"Tipo del proyecto.  Ej:Proyecto Software.\"\n                [(ngModel)]=\"proyecto.tipo\" [ngModelOptions]=\"{standalone: true}\"> \n            class=\"table\"class=\"table\"-->\n\n\n            <br>\n            <h5>Recursos</h5>\n            <h6>A continuación propón una lista de recursos que crees que vas a usar para realizar este proyecto.</h6>\n            <table class=\"table\">\n                <tr>\n                    <th>Nombre del Recurso</th>\n                    <th>Descripcion del Recurso</th>\n                    <th>Unidades disponibles</th>\n                </tr>\n                <tr *ngFor=\"let recurso of proyecto.recursos; let i = index\">\n                    <td>\n                        {{recurso.nombre}}\n                    </td>\n                    <td>\n                        {{recurso.descripcion}}\n                    </td>\n                    <td>\n                        <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                            [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputCrear(recurso)\">\n                    </td>\n\n                </tr>\n\n            </table>\n\n            <!-- <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro recurso\" (click)=\"addRecurso()\"> -->\n            <br>\n\n            <table>\n                <tr>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                            (click)=\"primerpaso=true;segundopaso=false\">\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\"\n                            (click)=\"guardarProyectoInit()\">\n\n                    </td>\n                </tr>\n            </table>\n\n        </form>\n\n\n    </div>\n    <!-- Pagina inicio alumno -->\n\n    <!-- No hay Proyecto -->\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla && !asignarRecursos && !gestionarRecursos && noHayProyectos\">\n        <h6>\n            Hola {{alumno.usuario.data.nombre}}, no tienes proyectos activos, ¡Crea Uno!.\n\n        </h6>\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Proyecto\" (click)=\"nuevoProyecto()\">\n\n    </div>\n\n    <!-- Si hay proyecto -->\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla && !asignarRecursos && !gestionarRecursos && !noHayProyectos\">\n        <h6>\n            Hola {{alumno.usuario.data.nombre}}, este es tu proyecto abierto:\n        </h6>\n\n    </div>\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla  && !asignarRecursos && !gestionarRecursos && !noHayProyectos &&!tablaFinal &&!replanificar\">\n        <table class=\"table\">\n            <tr>\n                <td>\n                    {{alumno.proyectos[0].nombre}}\n                </td>\n                <!-- HAY QUE MIRAR EL ESTADO , CREAR METODO QUE LO HAGA -->\n                <td *ngIf=\"hayGant && !diagramaGant\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver estado\" (click)=\"dibujaGant()\">\n\n                </td>\n\n                <td *ngIf=\"hayGant && !diagramaGant && !botonFin\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Simular Planificación\"\n                        (click)=\"simular()\">\n                </td>\n\n                <td *ngIf=\"botonFin\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver Resultados\" (click)=\"tablaFin()\">\n                </td>\n\n\n\n                <!-- <td *ngIf=\"hayRiesgos\">\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir Riesgos\" (click)=\"muestraVentanaRiesgos()\">\n                    </td> -->\n                <td *ngIf=\"this.estado=='creado'\">\n                    Esperando validación del profesor\n\n                </td>\n                <td>\n\n                    <input *ngIf=\"this.estado=='recursosValidados'\" class=\"btn btn-outline-secondary\" type=\"button\"\n                        value=\"Añadir Tareas\" (click)=\"muestraVentanaTareas(alumno.usuario)\">\n\n                </td>\n\n                <td>\n                    <input *ngIf=\"botonFin||this.estado=='creado'||this.estado=='recursosValidados'||(hayGant && !diagramaGant && !botonFin\n                    ||(hayGant && !diagramaGant))\" class=\"btn btn-outline-secondary\" type=\"button\"\n                        value=\"Borrar Datos del Proyecto\" (click)=\"borrarProyectos()\">\n                </td>\n\n\n            </tr>\n        </table>\n\n        <h6 *ngIf=\"botonFin||this.estado=='creado'||this.estado=='recursosValidados'||(hayGant && !diagramaGant && !botonFin\n        ||(hayGant && !diagramaGant))\">*Al hacer click en Borrar Datos del Proyecto se eliminará todo lo relacionado\n            con este proyecto, tanto lo relacionado con\n            planificación como lo relacionado simulación si esta hubiera comenzado.</h6>\n    </div>\n\n    <!-- Inserccion tareas y gestion REcursos -->\n    <div *ngIf=\"gestionarRecursos\">\n\n        <div>\n            <br>\n            <h6>\n                Hola {{alumno.usuario.data.nombre}}, en este formulario deberás añadir las tareas de las que se\n                compondrá el proyecto:\n            </h6>\n        </div>\n        <br>\n        <form>\n\n            <table class=\"table\" *ngIf=\"mostrarTabla\">\n                <tr>\n                    <td>\n\n                    </td>\n                    <td>\n                        TIPO DE TAREA\n                    </td>\n                    <td>\n                        NOMBRE DE TAREA\n                    </td>\n                    <td>\n                        DÍA DE INICIO*\n                    </td>\n                    <td>\n                        DURACIÓN (DÍAS)\n                    </td>\n                    <td>\n                        DEPENDE DE:\n                    </td>\n                    <!-- <td>\n                        TIPO DE DEPENDENCIA:\n                    </td> -->\n                </tr>\n                <tr *ngFor=\"let tarea of proyectoTareas.tareas; let i = index\">\n                    <td>Tarea {{ i + 1 }}</td>\n                    <td>\n                        <select placeholder=\"Tipo de tarea:\" class=\"form-control\" [(ngModel)]=\"tarea.tipo\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"{{ tarea.nombre }}\" *ngFor=\"let tarea of tipoTareas; let j = index\">\n                                {{ tarea.nombre }}\n                            </option>\n                        </select>\n                    </td>\n\n                    <td>\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Nombre tarea\" [(ngModel)]=\"tarea.nombre\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                    </td>\n                    <td>\n                        <input class=\"form-control\" type=\"number\" min=\"0\" placeholder=\"Fecha Inicio.\"\n                            [(ngModel)]=\"tarea.inicio\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputTarea(i,tarea.inicio,0)\">\n                    </td>\n                    <td>\n                        <input class=\"form-control\" type=\"number\" min=\"0\" placeholder=\"Duración tarea\"\n                            [(ngModel)]=\"tarea.duracion\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputTarea(i,tarea.duracion,1)\">\n                    </td>\n\n                    <td>\n                        <select placeholder=\"Depende de:\" class=\"form-control\" [(ngModel)]=\"tarea.dependencia\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"{{ tarea.nombre }}\" [hidden]=\"j == i\"\n                                *ngFor=\"let tarea of proyectoTareas.tareas; let j = index\">\n                                {{ tarea.nombre }}\n                            </option>\n                        </select>\n                    </td>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                            (click)=\"eliminarElemento(i,'tarea')\">\n                    </td>\n\n                    <!-- <td>\n                        <select placeholder=\"Tipo de dependencia:\" class=\"form-control\"\n                            [(ngModel)]=\"tarea.dependenciaTipo\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let dependencia of dependenciaTipos; let j = index\">\n                                {{ dependencia }}\n                            </option>\n                        </select>\n                    </td> -->\n                </tr>\n            </table>\n            <br>\n            <h6 *ngIf=\"mostrarTabla\">*DIA DE INICIO: se refiere al día en el que podrá dar comienzo la tarea, siempre y\n                cuando las tareas de las que dependen estén finalizadas.</h6>\n            <br>\n            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otra tarea\" (click)=\"addTarea()\">\n            <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Asignar Recursos\"\n                (click)=\"asignarRecursosTareas()\">\n\n        </form>\n\n\n    </div>\n    <div *ngIf=\"asignarRecursos\">\n        <h6>A continuación realice una primera aproximación de los recursos que utilizará cada tarea.</h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE LA TAREA\n                </td>\n                <td>\n                    DURACIÓN DE LA TAREA\n                </td>\n                <td>\n                    RECURSOS\n                </td>\n            </tr>\n            <tr *ngFor=\"let tarea of proyectoTareas.tareas; let i = index\">\n                <td>\n                    {{tarea.nombre}}\n                </td>\n                <td>\n                    {{tarea.duracion}}\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD DISPONIBLE</td>\n                            <td>CANTIDAD SELECCIONADA</td>\n                        </tr>\n\n                        <!-- <tr *ngFor=\"let recurso of proyectoTareas.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{ getCantidadRecurso(recurso, proyectoTareas.tareas, j) }}</td>\n                            <td><input min=\"0\" [disabled]=\"getCantidadRecurso(recurso, proyectoTareas.tareas, j)==0\"\n                                    type=\"number\" [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\"></td>\n                        </tr> -->\n                        <tr *ngFor=\"let recurso of proyectoTareas.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{recurso.cantidad-tarea.recursos[j].cantidad}}</td>\n                            <!-- <td><input type=\"number\" min=\"0\" max=\"{{recurso.cantidad}}\"\n                                    [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    (ngModelChange)=\"validateInput(tarea.recursos[j].cantidad,recurso.cantidad,i,j)\"\n                                    class=\"form-control\">\n                            </td>  -->\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"j\"\n                                        *ngFor=\"let num of numRecursosMaximo | slice:0:recurso.cantidad+1; let j = index \">\n                                        {{ j }}\n                                    </option>\n                                </select>\n                            </td>\n\n                        </tr>\n\n                    </table>\n                </td>\n            </tr>\n        </table>\n        <table>\n            <td>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                    (click)=\"asignarRecursos=false;gestionarRecursos=true;mostrarTabla=true\">\n            </td>\n            <td>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\" (click)=\"guardarProyectoTareas()\">\n            </td>\n        </table>\n    </div>\n\n    <!-- muestra el estado de cada tarea en un diagrama de Gant-->\n\n    <div *ngIf=\"diagramaGant\">\n        <br>\n        <br>\n        <div id=\"chart_div\"></div>\n        <br>\n        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver al Inicio\" (click)=\"atrasGantt()\">\n    </div>\n\n\n    <!-- Creación de los riesgos por parte del alumno -->\n    <div *ngIf=\"crearRiesgos\">\n        <h5>Riesgos</h5>\n        <h6>A continuación propón una lista de riesgos que crees que pueden afectar al correcto desarrollo de este\n            proyecto.</h6>\n        <table *ngIf=\"mostrarTablaRiesgos\" class=\"table\">\n            <tr *ngFor=\"let riesgo of proyectoRiesgos.riesgos; let i = index\">\n                <td>\n                    <input class=\"form-control\" placeholder=\"Nombre del Riesgo.\" [(ngModel)]=\"riesgo.nombre\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </td>\n                <td>\n                    <input class=\"form-control\" placeholder=\"Descripción del Riesgo.\" [(ngModel)]=\"riesgo.descripcion\"\n                        [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Porcentaje aparición\"\n                        [(ngModel)]=\"riesgo.porcentajeAparicion\" [ngModelOptions]=\"{standalone: true}\">\n                </td>\n\n\n            </tr>\n\n        </table>\n\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro riesgo\" (click)=\"addRiesgo()\">\n        <br>\n\n        <table>\n            <tr>\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Guardar Proyecto\"\n                        (click)=\"guardarProyectoRiesgos()\">\n\n                </td>\n            </tr>\n        </table>\n    </div>\n\n\n    <!-- Pantalla de simulación -->\n\n    <div *ngIf=\"simulacionPantalla\">\n        <h5>¡Bienvenido a la pantalla de simulación!</h5>\n        <br>\n        <h6>Este es el estado de tus tareas, pincha en cualquiera de los botones bajo la tabla para realizar una acción.\n        </h6>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE TAREA:\n                </td>\n                <td>\n                    ESTADO:\n                </td>\n                <td>\n                    DIAS ESTIMADOS*:\n                </td>\n                <td>\n                    DIAS EMPLEADOS*:\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let tarea of proyectoSimulacion.tareas; let i = index\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.estado}}</td>\n                <td>{{tarea.duracion}}</td>\n                <td>{{tarea.diasEmpleados}}</td>\n            </tr>\n\n        </table>\n\n        <h6>Dias totales de ejecución del plan:</h6>\n        <h6>{{proyectoSimulacion.diasTotalesProyecto}}</h6>\n        <br>\n        <h6>\n            *El número de días estimados se refiere a la cantidad de días en los que la tarea finalizará según tu\n            estimación.\n        </h6>\n        <br>\n        <h6>\n            *El número de días empleados se refiere a la cantidad de días que la tarea lleva en proceso o a la cantidad\n            de días que ha consumido para compeltarse en caso de que ya este finalizada.\n        </h6>\n        <br>\n        <table *ngIf=\"this.estadosSimulacion.length>1\" class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE:\n                </td>\n                <td>\n                    DESCRIPCIÓN:\n                </td>\n                <td>\n                    CANTIDAD ASIGNADA:\n                </td>\n                <td>\n                    CANTIDAD LIBRE:\n                </td>\n\n\n            </tr>\n            <tr *ngFor=\"let recurso of proyectoSimulacion.recursos; let i = index\">\n                <td>{{recurso.nombre}}</td>\n                <td>{{recurso.descripcion}}</td>\n                <td>{{numeroAsignadoSimulacion(recurso,proyectoSimulacion.tareas)}}</td>\n                <td>{{recurso.cantidad-numeroAsignadoSimulacion(recurso,proyectoSimulacion.tareas)}}</td>\n            </tr>\n        </table>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *La cantidad de recursos asignada, se refiere al total asignado a las tareas actualmente activas.\n        </h6>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *Un número negativo en la cantidad libre indica la necesidad de contratar o añadir más recursos de ese tipo,\n            ya que en ese momento existe una sobreasignación.\n        </h6>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *Al hacer click en Borrar Datos del Proyecto se eliminará todo lo relacionado con este proyecto, tanto lo\n            relacionado con\n            planificación como lo relacionado simulación si esta hubiera comenzado.\n        </h6>\n        <br>\n        <table>\n            <tr>\n\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                        (click)=\"simulacionPantalla=false\">\n                </td>\n\n                <td>\n                    <input\n                        [disabled]=\"proyectoSimulacion.estado==ESTADOS.FIN\"\n                        type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Replanificar\"\n                        (click)=\"modificarPlanificacion()\">\n                        <!-- <input\n                        [disabled]=\"proyectoSimulacion.diasTotalesProyecto==0 || proyectoSimulacion.estado==ESTADOS.FIN\"\n                        type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Replanificar\"\n                        (click)=\"modificarPlanificacion()\"> -->\n\n                </td>\n                <td>\n                    <input [disabled]=\"proyectoSimulacion.estado==ESTADOS.FIN\" type=\"submit\"\n                        class=\"btn btn-outline-secondary\" value=\"Avanzar días\" (click)=\"avanzarSimulacion()\">\n                </td>\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Borrar datos de Simulación\"\n                        (click)=\"borrarSimulacion()\">\n                </td>\n            </tr>\n        </table>\n\n\n    </div>\n\n    <!-- Pantalla de replanificacion de proyectos -->\n    <div *ngIf=\"replanificar\">\n        <br>\n        <h6>En la siguiente tabla podrás modificar la cantidad de recursos asignados a cada tarea.</h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE LA TAREA\n                </td>\n                <td>\n                    DURACIÓN DE LA TAREA\n                </td>\n                <td>\n                    RECURSOS\n                </td>\n            </tr>\n            <tr *ngFor=\"let tarea of tareasNoFinalizadas; let i = index\" [hidden]=\"tarea.estado==ESTADOSTAREAS.ESPERA\">\n                <td>\n                    {{tarea.nombre}}\n                </td>\n                <td>\n                    {{tarea.duracion}}\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD TOTAL</td>\n                            <td>CANTIDAD DISPONIBLE</td>\n                            <td>CANTIDAD SELECCIONADA</td>\n                            <td>CANTIDAD INICIAL ESTIMADA</td>\n\n                        </tr>\n\n                        <!-- MIRAR QUE NO SE LLAME AL getCantidadREcursos() si no esta validado el recurso, da error!! -->\n                        <tr *ngFor=\"let recurso of proyectoSimulacion.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>\n                                <input min=\"0\" type=\"number\" [(ngModel)]=\"recurso.cantidad\" class=\"form-control\">\n                            </td>\n                            <td>{{ recurso.cantidad-numeroAsignado(recurso,proyectoSimulacion.tareas) }}</td>\n                            <!-- <td><input min=\"0\"\n                                    [disabled]=\"(recurso.cantidad-numeroAsignado(recurso,proyectoSimulacion.tareas))==0\"\n                                    type=\"number\" [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\">\n                            </td> -->\n                            <!-- <td>\n                                <input min=\"0\" max=\"{{recurso.cantidad}}\" type=\"number\"\n                                    [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\"\n                                    (ngModelChange)=\"validateInputReplanificacion(tarea.recursos[j])\">\n                            </td>  -->\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"j\"\n                                        *ngFor=\"let num of numRecursosMaximo | slice:0:recurso.cantidad+1; let j = index \">\n                                        {{ j }}\n                                    </option>\n                                </select>\n                            </td>\n                            <td>\n                                {{tarea.recursos[j].cantidadInicial}}\n                            </td>\n\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Modificar\" (click)=\"finReplanificacion()\">\n    </div>\n\n\n    <div *ngIf=\"tablaFinal\">\n\n        <table class=\"table\">\n            <tr>\n                <td>\n                    DIA OCURRENCIA\n                </td>\n                <td>\n                    ACCIÓN\n                </td>\n                <td>\n                    RECURSO IMPLICADO\n                </td>\n                <td>\n                    TAREA IMPLICADA\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let evento of eventos; let i = index\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <div>\n           \n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                        (click)=\"this.tablaFinal=false;\">\n                    \n                        <button class=\"btn btn-outline-secondary\" (click)=\"exportTableToCSV()\">Descargar tabla en\n                            formato csv</button>\n                    \n                        <button class=\"btn btn-outline-secondary\" (click)=\"almacenarResultados()\">Enviar Resultados</button>\n             \n        </div>\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"sidenav\">\n   <div class=\"login-main-text\">\n      <h6>Herramienta de Simulación de planificación de Proyectos</h6>\n      <p>TFG Jose Alberto del Val Acebes</p>\n      <p>Curso 2019/2020</p>\n\n   </div>\n</div>\n<div class=\"main\">\n   <div class=\"col-md-6 col-sm-12\">\n      <div class=\"login-form\">\n         <form (ngSubmit)=\"login(loginUserForm.value)\" [formGroup]=\"loginUserForm\">\n            <div class=\"form-group\">\n               <label>Email</label>\n               <input type=\"text\" class=\"form-control\" placeholder=\"Tu email\" formControlName=\"email\">\n            </div>\n            <div class=\"form-group\">\n               <label>Contraseña</label>\n               <input type=\"password\" class=\"form-control\" placeholder=\"Tu contraseña\" formControlName=\"password\">\n            </div>\n            <div>\n               <p class=\"loginFail\" *ngIf=\"loginError\">Usuario o contraseña incorrecta.</p>\n            </div>\n            <input type=\"submit\" class=\"btn btn-outline-secondary\" [disabled]=\"!loginUserForm.valid\" value=\"Acceder\">\n         </form>\n      </div>\n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5lbC9hZG1pbnBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5lbC9hZG1pbnBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/adminpanel/adminpanel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.component.ts ***!
  \****************************************************/
/*! exports provided: AdminpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function() { return AdminpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AdminpanelComponent = class AdminpanelComponent {
    constructor(firestoreService, form, authenticationService, router, auth) {
        this.firestoreService = firestoreService;
        this.form = form;
        this.authenticationService = authenticationService;
        this.router = router;
        this.auth = auth;
        this.ESTADOS = {
            CREADO: 'creado',
            RECURSOS_VALIDADOS: 'recursosValidados',
            TAREAS_CREADAS: 'tareasCreadas'
        };
        //Formulario registro usuarios
        this.documentId = null;
        this.primerpaso = false;
        this.segundopaso = false;
        this.dependenciaTipos = ['Comienzo-Fin', 'Comienzo-Comienzo', 'Fin-Comienzo', 'Fin-Fin'];
        this.creacionPlantilla = false;
        this.previaCreacionPlantilla = false;
        this.verDetallePlantilla = false;
        this.detallePlantillaActual = null;
        this.collapsed = true;
        this.mostrarTablaRecursos = false;
        this.introduccion = false;
        this.tercerpaso = false;
        this.mostrarTabla = false;
        this.cuartopaso = false;
        // getProyectos() {
        //   let alumnos = JSON.parse(localStorage.getItem('alumnos'));
        //   let proyectos = []
        //   console.log(alumnos);
        //   for (let alumno of alumnos) {
        //     let query2 =this.firestoreService.getProyectosUsuario(alumno.usuario.id).subscribe((usuario) => {
        //       //let proyectos = JSON.parse(localStorage.getItem('alumnosProyectos'));
        //       if (usuario.length > 0) {
        //         proyectos.push({
        //           id: alumno.usuario.id,
        //           data: usuario[0].payload.doc.data()
        //         });
        //         //     this.alumno.proyectos=usuario[0].payload.doc.data();
        //       }
        //       //localStorage.setItem('proyectos', JSON.stringify(usuario[0].payload.doc.data()));
        //     });
        //   }
        //   //localStorage.setItem('alumnosProyectos', JSON.stringify(this.alumnosProyectos));
        //   console.log("aqui", proyectos);
        //   return proyectos;
        // }
        this.alumnosconproyectos = [];
        this.nuevosRecursos = false;
        //BORRAR ESTAS VARIABLES
        this.tiposRecurso = ["Físicos", "Humanos", "Know How", "Contactos y Relaciones", "Financieros"];
        this.numeroRecursos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.formularioRecursos = false;
        this.recursosProyectoActual = [];
        //Variables selección pestañas
        this.registrarAlumno = false;
        this.registrarRecursos = false;
        //Registrar alumno
        this.rol = "";
        this.roles = ["Alumno", "Profesor"];
        this.email = null;
        this.password = null;
        this.mensajeRegistro = 0;
        this.alumnosConProyectosEnSimulacion = [];
        this.ventanaSimulacion = false;
        this.previaVistaResultados = false;
        this.verDetalleResultado = false;
        this.verDetalleSimulacion = false;
        this.detalleSimulacionActual = null;
        this.previaRegistro = false;
        //TABLAS CON RESULTADOS FINALES
        this.tablaFinal = false;
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    nuevoProyecto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //Consulta muestra plantillas
            let query = yield this.firestoreService.getPlantillas().subscribe((plantillas) => {
                this.previaCreacionPlantilla = true;
                this.plantillas = [];
                for (let plantilla of plantillas) {
                    this.plantillas.push(plantilla.payload.doc.data());
                }
                console.log('plantillas', this.plantillas);
            });
            //Creacion proyecto en blanco por si se quiere crear plantilla
            this.proyecto = {
                estado: null,
                recursos: [],
                tareas: [],
                descripcion: null
            };
            console.log(this.primerpaso, this.creacionPlantilla);
        });
    }
    hayUnRecurso() {
        if (!this.proyecto.tipo || !this.proyecto.descripcion) {
            return false;
        }
        if (this.proyecto.recursos.length <= 0) {
            return false;
        }
        for (let recurso of this.proyecto.recursos) {
            if (!recurso.nombre || !recurso.descripcion || recurso.degradacion == null) {
                return false;
            }
        }
        return true;
    }
    hayUnaTarea() {
        if (this.proyecto.tareas.length <= 0) {
            return false;
        }
        for (let tarea of this.proyecto.tareas) {
            if (!tarea.nombre || !tarea.descripcion || tarea.pPesimo == null || tarea.pOptimo == null) {
                return false;
            }
        }
        return true;
    }
    newRecurso() {
        console.log("recursosssss", this.proyecto.recursos);
        this.mostrarTablaRecursos = true;
        if (this.proyecto.recursos.length > 0 && (!this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion || this.proyecto.recursos[this.proyecto.recursos.length - 1].degradacion == null)) {
            this.mostrarTablaRecursos = true;
            return;
        }
        //console.log("sdifhaisfhasjfn");
        this.proyecto.recursos.push({
            nombre: null,
            descripcion: null,
            degradacion: null
        });
    }
    eliminarElemento(index, tipo) {
        //i es el indice en el array de elementos
        //tipo es una cadena que representa el tipo de elemento a eliminar
        if (tipo == 'recurso') {
            this.proyecto.recursos.splice(index, 1);
        }
        if (tipo == 'tarea') {
            this.proyecto.tareas.splice(index, 1);
        }
        if (tipo == 'recursoValidacion') {
            this.recursosProyectoActual.splice(index, 1);
            for (let tarea of this.tareasMoment) {
                tarea.recursosMin.splice(index, 1);
            }
        }
    }
    guardarProyecto() {
        if (this.proyecto.recursos.length > 0 && (!this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion) && (!this.proyecto.tareas[this.proyecto.tareas.length - 1].nombre || !this.proyecto.tareas[this.proyecto.tareas.length - 1].descripcion))
            return;
        //Guardamos en DB
        if (confirm("¿Desea guardar la plantilla?")) {
            alert("Datos guardados exitosamente");
        }
        else {
            return;
        }
        this.firestoreService.creaPlantilla(this.proyecto);
        this.mostrarTablaRecursos = false;
        this.cuartopaso = false;
        this.creacionPlantilla = false;
        this.proyecto = null;
    }
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
        });
    }
    previaCreacionTareas() {
        for (let tarea of this.proyecto.tareas) {
            tarea.recursosMin = [];
            for (let recurso of this.proyecto.recursos) {
                tarea.recursosMin.push({
                    nombre: recurso.nombre,
                    cantidad: 0
                });
            }
        }
        console.log("AQUI", this.proyecto);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            this.alumnos = JSON.parse(localStorage.getItem('alumnos'));
            //this.alumnosProyectos = await this.getProyectos();
            this.newUserForm = this.form.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                componentes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        });
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
    generaVistaSimulacion() {
        this.descargaProyectosSimulacion();
    }
    // alumno = {
    //   usuario:undefined,
    //   proyectos:undefined
    // };
    //Obtención de alumnos y sus proyectos.
    getAlumnos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
                this.alumnos = [];
                UsuariosSnapshot.forEach((alumnoData) => {
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
                });
                //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));
            });
        });
    }
    eliminarAlumno(usuario, index) {
        this.firestoreService.deteteAlumnoAuth(this.usuarios[index].email);
        this.usuarios.splice(index, 1);
        this.firestoreService.deleteAlumno(this.idsUsuarios[index]);
        console.log(this.usuarios, this.idsUsuarios, this.idsUsuarios[index]);
        this.idsUsuarios.splice(index, 1);
    }
    mostrarProyectosValidacionRecursos() {
        let alumnos = JSON.parse(localStorage.getItem('alumnos'));
        let proyectos = [];
        this.alumnosconproyectos = [];
        console.log(alumnos);
        for (let alumno of alumnos) {
            let query2 = this.firestoreService.getProyectosUsuario(alumno.usuario.id).subscribe((usuario) => {
                if (usuario.length == 1) {
                    let proyecto = {
                        id: alumno.usuario.id,
                        data: usuario[0].payload.doc.data()
                    };
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
        console.log(this.alumnos, this.alumnosProyectos);
        // if(this.alumnosProyectos==undefined || this.alumnos.length<1){
        //   location.reload();
        //   this.registrarRecursos=true;
        // }
        //console.log("conjuntoooaojdaoj", this.alumnosconproyectos);
    }
    cuentaTareas(tareas) {
        return tareas.length;
    }
    previaAsignacionRec(a, p, r, pd, id, t) {
        console.log("ESTOY");
        this.registrarRecursos = false;
        this.formularioRecursos = true;
        this.alumnoMoment = a;
        this.proyectoMoment = p;
        this.recursosProyectoActual = r;
        this.descripcionMoment = pd;
        this.tareasMoment = t;
        this.userId = id;
        console.log(this.recursosProyectoActual);
    }
    newAlumno(form, documentId = this.documentId) {
        let data = {
            nombre: form.nombre,
            componentes: form.componentes,
            email: form.email,
            password: form.password,
            rol: form.rol
        };
        console.log(data, "ALUMNO A REGISTRAR");
        this.firestoreService.creaAlumno(data).then(() => {
            console.log('Documento creado exitósamente!');
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
    finRegistro() {
        this.registrarAlumno = false;
        this.previaRegistro = true;
    }
    registrar(form) {
        if (confirm("¿Desea registrar al usuario?")) {
        }
        else {
            return;
        }
        this.email = form.email;
        this.password = form.password;
        this.authenticationService.registerWithEmail(this.email, this.password).then((data) => {
            this.mensajeRegistro = 1;
            this.registrarAlumno = false;
            this.previaRegistro = true;
            let al = {
                nombre: form.nombre,
                email: form.email,
                componentes: form.componentes,
                password: form.password,
                rol: form.rol
            };
            console.log(al, "ALUMNO A REGISTRAR");
            this.firestoreService.creaAlumno(al).then(() => {
                console.log('Documento creado exitósamente!');
                this.newUserForm.setValue({
                    nombre: '',
                    componentes: '',
                    email: '',
                    password: '',
                    rol: ''
                });
            }, (error) => {
                console.error(error);
            });
        }).catch((error) => {
            alert("Error en el registro, motivo: " + error.message);
            console.log("ERROR REGISTRO", error);
        });
    }
    // validacionRecurso() {
    //   if (confirm('¿Quieres asignar más recursos?')) {
    //     this.nuevosRecursos=true;
    //   } else {
    //     this.actualizarProyecto();
    //   }
    // this.alumnoMoment=a;
    // this.proyectoMoment=p;
    // this.recursosProyectoActual=r;
    //    this.descripcionMoment=pd;
    //}
    actualizarProyecto() {
        let proyecto = {
            nombre: this.proyectoMoment,
            descripcion: this.descripcionMoment,
            estado: this.ESTADOS.RECURSOS_VALIDADOS,
            recursos: this.recursosProyectoActual,
            tareas: this.tareasMoment
        };
        if (confirm("¿Desea guardar los datos?")) {
            alert("Datos guardados exitosamente");
        }
        else {
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
        });
    }
    descargaProyectosSimulacion() {
        //reseteo array cada vez que recargo.
        this.alumnosConProyectosEnSimulacion = [];
        this.getAlumnosSimulando();
        //SOLO SI HAY ALUMNOS CON PROYECTOS SIMULANDO, SINO MOSTRAR UN MENSAJE.
        this.ventanaSimulacion = true;
    }
    descargaProyectosFinalizados() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let query = yield this.firestoreService.getResultados().subscribe((resultados) => {
                this.previaVistaResultados = true;
                this.proyectosFinalizados = [];
                for (let resultado of resultados) {
                    this.proyectosFinalizados.push(resultado.payload.doc.data());
                }
                console.log('finalizados', this.proyectosFinalizados);
            });
        });
    }
    getAlumnosSimulando() {
        let alumnos = JSON.parse(localStorage.getItem('alumnos'));
        console.log('estadosSimulacionAlumnos', this.alumnosConProyectosEnSimulacion);
        this.alumnoEstado = {
            alumno: null,
            estadoSimulacion: null
        };
        //console.log(alumnos);
        for (let alumno of alumnos) {
            console.log(alumno.usuario.id);
            this.firestoreService.getEstadoActual(alumno.usuario.id).subscribe((estados) => {
                this.estadosSimulacion = [];
                for (let estadoSimulacion of estados) {
                    this.estadosSimulacion.push(estadoSimulacion.payload.doc.data());
                }
                console.log('estadosSimulacion', this.estadosSimulacion);
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
                    if (tarea.estado == "Finalizada")
                        cont++;
                }
            }
        }
        return cont;
    }
    getUsuarios() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
                this.previaRegistro = true;
                this.usuarios = [];
                this.idsUsuarios = [];
                UsuariosSnapshot.forEach((alumnoData) => {
                    this.alumno.usuario.id = alumnoData.payload.doc.id;
                    this.alumno.usuario.data = alumnoData.payload.doc.data();
                    this.usuarios.push(alumnoData.payload.doc.data());
                    this.idsUsuarios.push(alumnoData.payload.doc.id);
                });
                //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));
            });
        });
    }
    tablaFin(idusuario, nombre) {
        console.log(idusuario);
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
            console.log('eventos', this.eventos);
        });
        this.nombreAlumnoResultados = nombre;
        this.tablaFinal = true;
    }
    downloadCSV(csv) {
        var csvFile;
        var downloadLink;
        csvFile = new Blob([csv], { type: "text/csv" });
        downloadLink = document.createElement("a");
        downloadLink.download = this.nombreAlumnoResultados + '.csv';
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
    exportTableToCSV() {
        console.log("NIMBRE", this.nombreAlumnoResultados);
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++) {
                row.push(cols[j].innerText);
            }
            //PROBAR CON ;
            csv.push(row.join(";"));
        }
        // Download CSV file
        //PONER EN NOMBRE EL NOMBRE DEL ALUMNO.
        this.downloadCSV(csv.join("\n"));
    }
    validateInputRecursos(recurso) {
        console.log(recurso);
        if (recurso.cantidad < 0) {
            recurso.cantidad = 0;
        }
    }
    reload() {
        location.reload();
    }
};
AdminpanelComponent.ctorParameters = () => [
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AutenticathionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
AdminpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminpanel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminpanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminpanel.component.css */ "./src/app/adminpanel/adminpanel.component.css")).default]
    })
], AdminpanelComponent);



/***/ }),

/***/ "./src/app/alumnopanel/alumnopanel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/alumnopanel/alumnopanel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx1bW5vcGFuZWwvYWx1bW5vcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hbHVtbm9wYW5lbC9hbHVtbm9wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/alumnopanel/alumnopanel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/alumnopanel/alumnopanel.component.ts ***!
  \******************************************************/
/*! exports provided: AlumnopanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnopanelComponent", function() { return AlumnopanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var js_pert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-pert */ "./node_modules/js-pert/build/index.js");
/* harmony import */ var js_pert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_pert__WEBPACK_IMPORTED_MODULE_5__);







//import { of } from 'rxjs';
//import { randomBytes } from 'crypto';
let AlumnopanelComponent = class AlumnopanelComponent {
    constructor(firestoreService, router, gant) {
        this.firestoreService = firestoreService;
        this.router = router;
        this.gant = gant;
        this.ESTADOS = {
            CREADO: 'creado',
            RECURSOS_VALIDADOS: 'recursosValidados',
            TAREAS_CREADAS: 'tareasCreadas',
            RIESGOS_CREADOS: 'riesgosCreados',
            SIMULACION: 'simulando',
            FIN: 'finalizado'
        };
        this.ESTADOSTAREAS = {
            ESPERA: 'En espera',
            COMENZADA: 'En proceso',
            FINALIZADA: 'Finalizada',
            ERROR: 'ERROR, HAY QUE REPROGRAMAR',
            COMENZADA0: 'En espera de comienzo'
        };
        this.dependenciaTipos = ['Comienzo-Fin', 'Comienzo-Comienzo', 'Fin-Comienzo', 'Fin-Fin'];
        this.alumno = {
            usuario: undefined,
            proyectos: undefined
        };
        this.collapsed = true;
        //Select num recursos tareas
        this.numRecursosMaximo = [];
        //Mira si no hay proyectos creados por ese alumno
        this.noHayProyectos = false;
        //Averigua en que estado está el proyecto
        // CREADO: 'creado',
        // RECURSOS_VALIDADOS: 'recursosValidados',
        this.tareasGant1 = [];
        this.estado = null;
        this.hayRiesgos = false;
        this.proyectoSimulacion = null;
        //fin = false;
        this.primerpaso = true;
        this.segundopaso = false;
        this.mostrarTabla = false;
        this.mostrarTablaRecursos = false;
        this.hayGant = false;
        this.asignarRecursos = false;
        //DIAGRAMA DE GANT
        this.diagramaGant = false;
        this.nombresTareasDependencia = [];
        this.crearRiesgos = false;
        this.mostrarTablaRiesgos = false;
        this.simulacionPantalla = false;
        this.tareasEnProceso = [];
        this.tareasFinalizadas = [];
        this.tareasQuePuedenComenzar = [];
        this.tareasEnEsperaPorDependencia = [];
        this.tareasQuePuedenAcabar = [];
        this.hayEvento = false;
        //Contiene las probabilidades que han superado el random
        this.probabilidades = [];
        this.tareasNoFinalizadas = [];
        this.posicionesTareas = [];
        this.replanificar = false;
        // finalizacionProyecto(){
        // }
        //TABLAS CON RESULTADOS FINALES
        this.tablaFinal = false;
        //DELETE PROYECTOS
        this.cargando = false;
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    ngOnInit() {
        //Relleno array numerico
        for (let i = 0; i <= 100; i++) {
            this.numRecursosMaximo[i] = i;
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
            if (this.alumno.proyectos.length > 0) {
                this.compruebaEstadoProyecto();
                //console.log(this.alumno);
            }
            else {
                this.noHayProyectos = true;
            }
            //console.log("ELSE",this.alumno.proyectos.length,this.noHayProyectos,this.estado);
        });
        //this.router.navigate(['/alumno']);
    }
    logOut() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
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
            else if (proyecto.estado == "creado") {
                //console.log("ESTOY EN CREADO");
                if (lestado < 0) {
                    lestado = 0;
                    this.estado = "creado";
                }
            }
            else if (proyecto.estado == this.ESTADOS.FIN) {
                if (lestado < 3) {
                    lestado = 3;
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
        if (this.alumno.proyectos.length > 0) {
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
    eliminarElemento(index, tipo) {
        //i es el indice en el array de elementos
        //tipo es una cadena que representa el tipo de elemento a eliminar
        if (tipo == 'recurso') {
            this.proyectoTareas.recursos.splice(index, 1);
        }
        if (tipo == 'tarea') {
            this.proyectoTareas.tareas.splice(index, 1);
        }
    }
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
        });
        //console.log(this.proyectoTareas);
    }
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
        });
    }
    guardarProyecto() {
        if (this.proyecto.recursos.length > 0 && (!this.proyecto.nombre || !this.proyecto.descripcion || !this.proyecto.recursos[this.proyecto.recursos.length - 1].nombre || !this.proyecto.recursos[this.proyecto.recursos.length - 1].descripcion))
            return;
        //Guardamos en DB
        if (confirm("¿Desea guardar el proyecto?")) {
            alert("Datos guardados exitosamente");
        }
        else {
            return;
        }
        this.firestoreService.creaProyecto(this.proyecto);
        this.mostrarTablaRecursos = false;
        this.proyecto = false;
        this.segundopaso = false;
        this.proyecto = null;
    }
    guardarProyectoInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.proyecto.estado = this.ESTADOS.CREADO;
            if (confirm("¿Desea guardar el proyecto?")) {
                alert("Datos guardados exitosamente");
            }
            else {
                return;
            }
            yield this.firestoreService.creaProyecto(this.proyecto);
            this.mostrarTablaRecursos = false;
            this.proyecto = false;
            this.segundopaso = false;
            this.proyecto = null;
            location.reload();
        });
    }
    guardarProyectoTareas() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.gestionarRecursos = false;
            for (let tarea of this.proyectoTareas.tareas) {
                for (let recurso of tarea.recursos) {
                    recurso.cantidadInicial = recurso.cantidad;
                }
            }
            //console.log("PROYECTO TAREAS", this.proyectoTareas);
            if (this.proyectoTareas.tareas.length == 0)
                return;
            // //Guardamos en DB
            //console.log("tareasmaximas", this.proyectoTareas);
            if (confirm("¿Desea guardar el proyecto?")) {
                alert("Datos guardados exitosamente");
            }
            else {
                return;
            }
            let query = yield this.firestoreService.creaProyecto(this.proyectoTareas);
            //this.gestionarRecursos = false;
            this.proyectoTareas = null;
            this.router.navigate(['/alumno']);
            location.reload();
        });
    }
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
                });
            }
        }
        //console.log("RECURSOS A CERO", this.proyectoTareas);
    }
    atrasGantt() {
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
            if (this.proyectoSimulacion != null) {
                this.tareasGant1 = this.proyectoSimulacion.tareas;
            }
            //console.log("DIBUJANDO GANT",this.tareasGant1);
            for (let tarea of this.tareasGant1) {
                //console.log("DIBUJAR",tarea);
                // let parts = tarea.inicio.split("-");
                // let ano= parseInt(parts[0]);
                // let mes= parseInt(parts[1]);
                // let dia= parseInt(parts[2]);
                if (tarea.porcentaje > 1) {
                    tarea.porcentaje = 1;
                }
                this.nombresTareasDependencia.push(tarea.nombre);
                //console.log("AQUIESTA",tarea.nombre,tarea.nombre,new Date(ano,mes,dia),null,tarea.duracion,tarea.porcentaje,tarea.dependencia);
                //console.log("AQUI 222",'2014Spring', 'Spring 2014',new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null);
                if (!tarea.dependencia) {
                    //--------------;
                }
                let hoy = null;
                if (tarea.inicio !== 0 && !tarea.dependencia) {
                    hoy = new Date();
                    let inicio = hoy.getDate() + tarea.inicio;
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
                data.addRow([tarea.nombre, tarea.nombre, hoy, null, daysToMilliseconds(tarea.duracion), tarea.porcentaje * 100, tarea.dependencia]);
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
        });
        //console.log("fuera", this.proyectoRiesgos);
    }
    guardarProyectoRiesgos() {
        if (this.proyectoRiesgos.riesgos.length == 0)
            return;
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
        const pert = js_pert__WEBPACK_IMPORTED_MODULE_5___default()(activities);
        //console.log('PERT', pert);
        const Pz = Object(js_pert__WEBPACK_IMPORTED_MODULE_5__["pertProbability"])(pert, 90);
        //console.log('P(x<22):', Pz);
        //console.log("proyectoSimulacion", this.proyectoSimulacion)
    }
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
                };
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
                    };
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
                    else if (estado.diasTotalesProyecto == numeroDias) {
                        if (estado.replanificado > numeroReplanificado) {
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
                if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
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
                if (this.estadosSimulacion.length > 1) {
                    if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
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
                    };
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
        if (this.estadosSimulacion.length > 1) {
            for (let recurso of this.proyectoSimulacion.recursos) {
                if ((recurso.cantidad - this.numeroAsignadoSimulacion(recurso, this.proyectoSimulacion.tareas)) < 0) {
                    let evento = {
                        dia: this.proyectoSimulacion.diasTotalesProyecto,
                        accion: 'Error sobreasignacion',
                        tareaImplicacada: 'No procede',
                        recursoImplicado: 'No procede'
                    };
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
                    this.tareasQuePuedenComenzar.push(tarea);
                }
                if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
                    tarea.diasEmpleados++;
                    tarea.porcentaje = parseFloat((tarea.diasEmpleados / tarea.duracion).toFixed(2));
                    //console.log("ESTOY AQUI)",tarea.porcentaje);
                    this.tareasEnProceso.push(tarea);
                }
                if (tarea.estado == this.ESTADOSTAREAS.FINALIZADA)
                    this.tareasFinalizadas.push(tarea);
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
            };
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
                                };
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
            };
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
            if (!tarea.dependencia && (this.proyectoSimulacion.diasTotalesProyecto >= tarea.inicio)) {
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
                    if ((tarea.dependencia == finalizada.nombre) && (this.proyectoSimulacion.diasTotalesProyecto >= tarea.inicio)) {
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
            const pert = js_pert__WEBPACK_IMPORTED_MODULE_5___default()(activities);
            const Pz = Object(js_pert__WEBPACK_IMPORTED_MODULE_5__["pertProbability"])(pert, tarea.diasEmpleados);
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
    finReplanificacion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            };
            if (confirm("¿De verdad desea replanificar?")) {
            }
            else {
                return;
            }
            let insert = yield this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
            //console.log("REPLANIFICACION", this.proyectoSimulacion);
            let query = yield this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), this.proyectoSimulacion);
            alert("Replanificado correctamente");
            location.reload();
        });
    }
    tablaFin() {
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
        this.tablaFinal = true;
    }
    downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;
        csvFile = new Blob([csv], { type: "text/csv" });
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
                row.push(cols[j].innerText);
            }
            //PROBAR CON ;
            csv.push(row.join(";"));
        }
        // Download CSV file
        //PONER EN NOMBRE EL NOMBRE DEL ALUMNO.
        this.downloadCSV(csv.join("\n"), "results.csv");
    }
    borrarProyectos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log("BORRANDO");
            if (confirm("¿Desea eliminar los datos?")) {
                this.cargando = true;
                yield this.firestoreService.deleteAll(localStorage.getItem('idusuario'));
                this.cargando = false;
            }
            else {
                return;
            }
        });
    }
    borrarSimulacion() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log("BORRANDO");
            if (confirm("¿Desea eliminar los datos?")) {
                yield this.firestoreService.deleteSimulacion(localStorage.getItem('idusuario'));
            }
            else {
                return;
            }
        });
    }
    almacenarResultados() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(this.eventos,this.alumno);
            let data = {
                eventos: this.eventos,
                usuario: this.alumno.usuario.data
            };
            if (confirm("¿Desea enviar los datos?")) {
                yield this.firestoreService.guardaResultados(data);
                //await this.firestoreService.deleteAll(localStorage.getItem('idusuario'));
            }
            else {
                return;
            }
        });
    }
    validateInput(numActual, numTotal, i, j) {
        if (numActual > numTotal) {
            this.proyectoTareas.tareas[i].recursos[j].cantidad = numTotal;
        }
        else if (numActual < 0) {
            this.proyectoTareas.tareas[i].recursos[j].cantidad = 0;
        }
    }
    validateInputReplanificacion(numActual) {
        if (numActual.cantidad < 0) {
            numActual.cantidad = 0;
        }
    }
    validateInputTarea(i, num, caso) {
        if (caso == 0) {
            if (num < 0) {
                this.proyectoTareas.tareas[i].inicio = 0;
            }
        }
        else {
            if (num < 0) {
                this.proyectoTareas.tareas[i].duracion = 1;
            }
        }
    }
    validateInputCrear(recurso) {
        //console.log(recurso);
        if (recurso.cantidad < 0) {
            recurso.cantidad = 0;
        }
    }
};
AlumnopanelComponent.ctorParameters = () => [
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"] }
];
AlumnopanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alumnopanel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alumnopanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alumnopanel.component.css */ "./src/app/alumnopanel/alumnopanel.component.css")).default]
    })
], AlumnopanelComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
/* harmony import */ var _alumnopanel_alumnopanel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alumnopanel/alumnopanel.component */ "./src/app/alumnopanel/alumnopanel.component.ts");






const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'admin',
        component: _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_4__["AdminpanelComponent"]
    },
    {
        path: 'alumno',
        component: _alumnopanel_alumnopanel_component__WEBPACK_IMPORTED_MODULE_5__["AlumnopanelComponent"]
    },
    {
        path: '**',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tfg';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _alumnopanel_alumnopanel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./alumnopanel/alumnopanel.component */ "./src/app/alumnopanel/alumnopanel.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_6__["AdminpanelComponent"],
            _alumnopanel_alumnopanel_component__WEBPACK_IMPORTED_MODULE_11__["AlumnopanelComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartsModule"]
        ],
        providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuth"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    font-family: \"Lato\", sans-serif;\n}\n\n\n\n.main-head{\n    height: 150px;\n    background: #FFF;\n   \n}\n\n\n\n.sidenav {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n\n\n\n.main {\n    padding: 0px 10px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n}\n\n\n\n@media screen and (max-width: 450px) {\n    .login-form{\n        margin-top: 10%;\n    }\n\n    .register-form{\n        margin-top: 10%;\n    }\n}\n\n\n\n@media screen and (min-width: 768px){\n    .main{\n        margin-left: 40%; \n    }\n\n    .sidenav{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form{\n        margin-top: 80%;\n    }\n\n    .register-form{\n        margin-top: 20%;\n    }\n}\n\n\n\n.login-main-text{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n\n\n\n.login-main-text h2{\n    font-weight: 300;\n}\n\n\n\n.btn-black{\n    background-color: #000 !important;\n    color: #fff;\n}\n\n\n\n.loginFail{\n    color: darkred;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7O0FBRUE7SUFDSSxVQUFVLGlCQUFpQixDQUFDO0FBQ2hDOzs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi5tYWluLWhlYWR7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgXG59XG5cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cblxuLm1haW4ge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXG4gICAgfVxuXG4gICAgLnNpZGVuYXZ7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG59XG5cblxuLmxvZ2luLW1haW4tdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMntcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luRmFpbHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(firestoreService, form, authenticationService, router) {
        this.firestoreService = firestoreService;
        this.form = form;
        this.authenticationService = authenticationService;
        this.router = router;
        this.usuarios = [];
        this.password = null;
        this.email = null;
        this.loginError = false;
    }
    ngOnInit() {
        //SESION
        localStorage.getItem('idusuario');
        localStorage.getItem('usuario');
        this.loginUserForm = this.form.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.firestoreService.getUsuarios().subscribe((UsuariosSnapshot) => {
            this.usuarios = [];
            UsuariosSnapshot.forEach((alumnoData) => {
                this.usuarios.push({
                    id: alumnoData.payload.doc.id,
                    data: alumnoData.payload.doc.data()
                });
                //console.log(this.usuarios[1]);
            });
        });
    }
    login(form) {
        this.email = form.email;
        this.password = form.password;
        let result = this.authenticationService.loginWithEmail(this.email, this.password).then((data) => {
            //console.log(this.tipoUsuario());
            if (this.tipoUsuario() == "Profesor") {
                //console.log(data);
                this.router.navigate(['admin']);
            }
            else if (this.tipoUsuario() == "Alumno") {
                //console.log(data);
                this.router.navigate(['alumno']);
            }
        }).catch((error) => {
            this.loginError = true;
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
                localStorage.setItem('usuario', JSON.stringify(usuario));
                //console.log(localStorage.getItem('usuario'));
                return usuario.data.rol;
            }
        }
        return null;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AutenticathionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AutenticathionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticathionService", function() { return AutenticathionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



let AutenticathionService = class AutenticathionService {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    loginWithEmail(email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }
    registerWithEmail(email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    getStatus() {
        return this.angularFireAuth.authState;
    }
    logOut() {
        return this.angularFireAuth.auth.signOut();
    }
};
AutenticathionService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AutenticathionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutenticathionService);



/***/ }),

/***/ "./src/app/services/firestore/firestore.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/firestore/firestore.service.ts ***!
  \*********************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_functions__WEBPACK_IMPORTED_MODULE_4__);





let FirestoreService = class FirestoreService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    //------------------ALUMNOS/USUARIOS-------------------
    //Crea un nuevo alumno
    creaAlumno(data) {
        return this.firestore.collection('alumnos').add(data);
    }
    //Obtiene un alumno determinado
    getUsuario(documentId) {
        return this.firestore.collection('alumnos').doc(documentId).snapshotChanges();
    }
    getProyectosUsuario(documentId) {
        return this.firestore.collection('alumnos').doc(documentId).collection('proyectos').snapshotChanges();
    }
    //Obtiene todos los alumnos
    getUsuarios() {
        return this.firestore.collection('alumnos').snapshotChanges();
    }
    //Actualiza un alumno (Cambnio contraseña por ejemplo)
    updateAlumno(documentId, data) {
        return this.firestore.collection('alumnos').doc(documentId).set(data);
    }
    deleteAlumno(documentId) {
        return this.firestore.collection('alumnos').doc(documentId).delete();
    }
    deteteAlumnoAuth(email) {
        var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('deleteUser');
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
    creaProyecto(data) {
        let idAlumno = localStorage.getItem('idusuario');
        return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);
    }
    //Crea una nueva plantilla de proyecto
    creaPlantilla(data) {
        return this.firestore.collection('/plantillasProyectos').add(data);
    }
    //Obtiene todas las plantillas de proyectos
    getPlantillas() {
        return this.firestore.collection('plantillasProyectos').snapshotChanges();
    }
    //VALIDACION RECURSOS
    actualizarProyecto(idAlumno, data) {
        return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);
    }
    //Proyecto almacenaje resultados
    guardaResultados(data) {
        return this.firestore.collection('resultados/').add(data);
    }
    getResultados() {
        return this.firestore.collection('resultados').snapshotChanges();
    }
    //PROYECTO DELETE
    deleteAll(idAlumno) {
        let path = 'alumnos/' + idAlumno + '/proyectos';
        var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
        console.log(path, deleteFn);
        deleteFn({ path: path })
            .then(function (result) {
            console.log('Delete success: ' + JSON.stringify(result));
            path = 'alumnos/' + idAlumno + '/estadoSimulacion';
            var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
            console.log(path, deleteFn);
            deleteFn({ path: path })
                .then(function (result) {
                console.log('Delete success: ' + JSON.stringify(result));
                path = 'alumnos/' + idAlumno + '/eventos';
                var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
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
    deleteProyectos(idAlumno) {
        let path = 'alumnos/' + idAlumno + '/proyectos';
        var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
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
    deleteSimulacion(idAlumno) {
        let path = 'alumnos/' + idAlumno + '/estadoSimulacion';
        var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
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
        var deleteFn = _firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.functions().httpsCallable('recursiveDelete');
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
    actualizaEstado(idAlumno, data) {
        return this.firestore.collection('alumnos/' + idAlumno + '/estadoSimulacion').add(data);
    }
    //Get all estados sumulacion
    getEstadoActual(documentId) {
        return this.firestore.collection('alumnos').doc(documentId).collection('estadoSimulacion').snapshotChanges();
    }
    //Evento 
    setEvento(idAlumno, data) {
        return this.firestore.collection('alumnos/' + idAlumno + '/eventos').add(data);
    }
    getEvento(documentId) {
        return this.firestore.collection('alumnos').doc(documentId).collection('eventos').snapshotChanges();
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestoreService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBMd9pY-xb4WTfrNDzyIUPsI1HmDNXuESs",
        authDomain: "tfg-planificaciones.firebaseapp.com",
        databaseURL: "https://tfg-planificaciones.firebaseio.com",
        projectId: "tfg-planificaciones",
        storageBucket: "tfg-planificaciones.appspot.com",
        messagingSenderId: "105859117075",
        appId: "1:105859117075:web:e48c046d915f53f2580fe6"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josealbertodelval/Desktop/proyectoPlanificacionee/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map