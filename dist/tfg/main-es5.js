var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light cursor\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n            aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n            (click)=\"toggleCollapsed()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\"\n            [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"reload()\">\n                        Inicio</div>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;ventanaSimulacion=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        previaCreacionPlantilla=false;collapsed=true;mensajeRegistro=0;registrarAlumno=false;registrarRecursos=true;\n                        mostrarProyectosValidacionRecursos();creacionPlantilla=false;ventanaSimulacion=false;verDetalleSimulacion=false;previaRegistro=false\">\n                        Validación de Recursos</div>\n                </li>\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;verDetallePlantilla=false;collapsed=true;mensajeRegistro=0;nuevoProyecto();ventanaSimulacion=false;registrarAlumno=false;\n                        registrarRecursos=false;tercerpaso=false;cuartopaso=false;verDetalleSimulacion=false;creacionPlantilla=false;previaRegistro=false\">\n                        Ver/Crear plantillas</div>\n                </li>\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\" (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;mensajeRegistro=0;descargaProyectosSimulacion();creacionPlantilla=false;registrarAlumno=false;registrarRecursos=false;\n                        previaCreacionPlantilla=false;verDetalleSimulacion=false;previaRegistro=false\">\n                        Ver proyectos en simulación</div>\n                    <!-- <a class=\"nav-link\" href=\"#\">Link</a> -->\n                </li>\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\"\n                        (click)=\"verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;mensajeRegistro=0;creacionPlantilla=false;registrarAlumno=false;registrarRecursos=false;\n                        previaCreacionPlantilla=false;verDetalleSimulacion=false;previaRegistro=false;descargaProyectosFinalizados();ventanaSimulacion=false\">\n                        Ver proyectos finalizados</div>\n                    <!-- <a class=\"nav-link\" href=\"#\">Link</a> -->\n                </li>\n\n                <li class=\"nav-item\">\n                    <div class=\"nav-link\"\n                        (click)=\"previaVistaResultados=false;verDetalleResultado=false;tablaFinal=false;identificacion=false;primerpaso=false;tercerpaso=false;cuartopaso=false;identificacion=false;verDetallePlantilla=false;\n                        collapsed=true;registrarAlumno=false;previaRegistro=true;registrarRecursos=false;creacionPlantilla=false;\n                        ventanaSimulacion=false;previaCreacionPlantilla=false;verDetalleSimulacion=false;getUsuarios();\">\n                        Ver/Registrar Usuarios</div>\n                    <!-- <a class=\"nav-link disabled\" href=\"#\">Disabled</a> -->\n                </li>\n            </ul>\n\n            <div class=\"mx-auto\">\n                <a class=\"navbar-brand\">Panel del Profesor</a>\n            </div>\n            <div>\n                <ul class=\"form-inline my-2 my-lg-0\">\n                    <li class=\"nav-item\">\n                        <div class=\"nav-link\" (click)=\"logOut()\">Hola, {{profesor.data.nombre}} -> Cerrar Sesión</div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <!-- INICIO -->\n    <div *ngIf=\"!previaRegistro && !registrarAlumno && !proyecto && !previaCreacionPlantilla && !verDetallePlantilla\n    && !creacionPlantilla && !registrarRecursos && !formularioRecursos && !nuevosRecursos && !ventanaSimulacion\n     && !verDetalleSimulacion && !tablaFinal && !previaVistaResultados && !verDetalleResultado\">\n        <br>\n        <br>\n        <h6>\n            Hola {{profesor.data.nombre}}, bienvenido!!:\n        </h6>\n    </div>\n    <div>\n\n        <!-- LISTADO DE ALUMNOS -->\n       \n        <div *ngIf=\"previaRegistro && this.usuarios.length>0\">\n            <br>\n\n            <h6>Estos son los alumnos que actualmente están creados, para crear uno nuevo haz clic en crear al final de\n                esta lista.</h6>\n            <table class=\"table\">\n                <thead class=\"thead-dark\">\n                    <tr>\n\n                        <td>\n                            Grupo\n                        </td>\n                        <td>\n                            Componentes\n                        </td>\n                        <td>\n                            E-mail\n                        </td>\n                        <td>\n                            Rol\n                        </td>\n                        <td>\n                            Acción\n                        </td>\n\n\n                    </tr>\n                </thead>\n                <tr *ngFor=\"let  usuario of this.usuarios; let i = index\" >\n                    <td>\n                        {{usuario.nombre}}\n                    </td>\n                    <td>\n                        {{usuario.componentes}}\n                    </td>\n\n                    <td>\n                        {{usuario.email}}\n                    </td>\n                    <td>\n                        {{usuario.rol}}\n                    </td>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                            (click)=\"eliminarAlumno(usuario,i)\" [hidden]=\"usuario.email==profesor.data.email\">\n                    </td>\n\n                </tr>\n                <tr>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Usuario\"\n                        (click)=\"registrarAlumno=true;previaRegistro=false;\">\n                </tr>\n\n            </table>\n            <div>\n                <h5 *ngIf=\"mensajeRegistro==1\">El alumno ha sido registrado correctamente.</h5>\n                <h5 *ngIf=\"mensajeRegistro==2\">Se ha producido un error en el registro, inténtalo de nuevo.</h5>\n\n            </div>\n\n        </div>\n        <!-- FORMULARIO REGISTRO ALUMNOS -->\n\n\n\n        <form *ngIf=\"registrarAlumno\" (ngSubmit)=\"registrar(newUserForm.value)\" [formGroup]=\"newUserForm\">\n            <div class=\"form-group\">\n                <label>Nombre del Grupo/Profesor</label>\n                <input class=\"form-control\" id=\"nombre\" placeholder=\"Introduce el nombre completo del grupo*.\"\n                    formControlName=\"nombre\">\n            </div>\n            <div class=\"form-group\">\n                <label>Componentes/Profesor</label>\n                <input class=\"form-control\" id=\"componentes\"\n                    placeholder=\"Introduce el nombre de los componentes del grupo*.\" formControlName=\"componentes\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>E-mail</label>\n                <input class=\"form-control\" id=\"email\"\n                    placeholder=\"Introduce el email de uno de los usuarios del grupo.\" formControlName=\"email\">\n            </div>\n            <div class=\"form-group\">\n                <label>Contraseña</label>\n                <input type=\"password\" class=\"form-control\" id=\"contrasenia1\"\n                    placeholder=\"Introduce la contraseña que tendrá el alumno por defecto.\" formControlName=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <label>Tipo de usuario</label>\n                <select [(ngModel)]=\"rol\" class=\"form-control\" formControlName=\"rol\">\n                    <option value=\"0\">Selecciona una opción</option>\n                    <option *ngFor=\"let rol of roles\">\n                        {{rol}}\n                    </option>\n                </select>\n            </div>\n            <br>\n            <h6>*En caso de que el usuario a registrar sea un profesor, introducir aquí el nombre del profesor.</h6>\n            <br>\n            <table>\n                <tr>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" [disabled]=\"!newUserForm.valid\"\n                            value=\"Registrar\">\n\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                            (click)=\"registrarAlumno=false;previaRegistro=true;\">\n                    </td>\n                </tr>\n            </table>\n        </form>\n        <!-- <div>\n            <h5 *ngIf=\"mensajeRegistro==1\">El alumno ha sido registrado correctamente.</h5>\n            <h5 *ngIf=\"mensajeRegistro==2\">Se ha producido un error en el registro, inténtalo de nuevo.</h5>\n\n        </div> -->\n\n    </div>\n\n\n    <!-- Pantalla principal plantillas-->\n    <div *ngIf=\"proyecto && previaCreacionPlantilla\">\n        <br>\n\n        <h6>Estas son las plantillas que actualmente están creadas, para crear una nueva haz clic en crear al final de\n            esta lista.</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <td>\n                        Tipo\n                    </td>\n                    <td>\n                        Descripción\n                    </td>\n                    <td>\n                        Acción\n                    </td>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let plantilla of this.plantillas; let i = index\">\n                <td>\n                    {{plantilla.tipo}}\n                </td>\n                <td>\n                    {{plantilla.descripcion}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetallePlantilla=true;previaCreacionPlantilla=false;detallePlantillaActual=plantilla\">\n                </td>\n            </tr>\n            <tr>\n                <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Plantilla\"\n                    (click)=\"creacionPlantilla=true;previaCreacionPlantilla=false;introduccion=true\">\n            </tr>\n\n\n        </table>\n    </div>\n\n    <!-- DEtalle plantillas -->\n    <div *ngIf=\"verDetallePlantilla\">\n        <br>\n        <h5>Este es el detalle de la plantilla: {{detallePlantillaActual.tipo}}.\n        </h5>\n        <br>\n        <h6>A continuación podrás encontrar las tareas y recursos de los que está formada la plantilla.</h6>\n        <br>\n        <h6>TAREAS DE LA PLANTILLA</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DE TAREA:\n                    </td>\n                    <td>\n                        DESCRIPCION:\n                    </td>\n                    <td>\n                        PORCENTAJE ÓPTIMO:\n                    </td>\n                    <td>\n                        PORCENTAJE PÉSIMO:\n                    </td>\n                    <td>\n                        RECURSOS MÍNIMOS\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let tarea of detallePlantillaActual.tareas\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.descripcion}}</td>\n                <td>{{tarea.pOptimo}}</td>\n                <td>{{tarea.pPesimo}}</td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD NECESARIA</td>\n                        </tr>\n\n                        <tr *ngFor=\"let recurso of tarea.recursosMin; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{recurso.cantidad}}</td>\n                        </tr>\n                    </table>\n                </td>\n\n            </tr>\n\n        </table>\n\n        <br>\n        <h6>RECURSOS DE LA PLANTILLA</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DEL RECURSO:\n                    </td>\n                    <td>\n                        DESCRIPCION:\n                    </td>\n                    <td>\n                        % DEGRADACIÓN:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let recurso of detallePlantillaActual.recursos\">\n                <td>{{recurso.nombre}}</td>\n                <td>{{recurso.descripcion}}</td>\n                <td>{{recurso.degradacion}}</td>\n            </tr>\n\n            <tr>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                    (click)=\"verDetallePlantilla=false;previaCreacionPlantilla=true;detallePlantillaActual=null\">\n            </tr>\n\n        </table>\n\n\n\n    </div>\n\n    <!-- Creacion Plantilla -->\n    <div *ngIf=\"proyecto && creacionPlantilla\">\n        <h2>\n            Creación de una plantilla de proyecto.\n        </h2>\n        <br>\n        <div *ngIf=\"introduccion\">\n            <h6>\n                Para crear una plantilla de proyecto, deberás cumplimentar los siguientes formularios que constan de:\n            </h6>\n            <ol>\n                <li>\n                    Identificación.\n                </li>\n                <li>\n                    Recursos Tipo.\n                </li>\n                <li>\n                    Tareas Tipo.\n                </li>\n                <li>\n                    Asignación recursos mínimos de cada tarea.\n                </li>\n            </ol>\n            <br>\n            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Comenzar\"\n                (click)=\"identificacion=true;introduccion=false\">\n            <br>\n\n\n        </div>\n        <div *ngIf=\"identificacion\">\n            <h5>Identificación</h5>\n            <!-- Formulario creación del proyecto-->\n            <!-- Nombre, descripcion, [tipo de proyecto(software,general)], calendarizar, sin sabados ni domingos -->\n            <br>\n            <form *ngIf=\"proyecto && identificacion\">\n                <h6>Tipo de la plantilla del proyecto.</h6>\n                <input class=\"form-control\" placeholder=\"Tipo del proyecto.  Ej:Proyecto Software.\"\n                    [(ngModel)]=\"proyecto.tipo\" [ngModelOptions]=\"{standalone: true}\">\n                <br>\n                <h6>Descripción de la plantilla.</h6>\n                <input class=\"form-control\" placeholder=\"Descripción de la plantilla.\"\n                    [(ngModel)]=\"proyecto.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n                <br>\n                <input [disabled]=\"!proyecto.tipo || !proyecto.descripcion\" class=\"btn btn-outline-secondary\"\n                    type=\"button\" value=\"Siguiente\" (click)=\"primerpaso=true;identificacion=false;\">\n\n\n\n            </form>\n        </div>\n        <br>\n        <div *ngIf=\"primerpaso\">\n            <h5>Recursos</h5>\n            <h6>A continuación propón una lista de recursos que serán necesarios para realizar este tipo de proyecto.\n            </h6>\n            <form *ngIf=\"primerpaso\">\n                <table *ngIf=\"mostrarTablaRecursos\" class=\"table\">\n                    <tr>\n                        <td>\n\n                        </td>\n                        <td>\n                            NOMBRE\n                        </td>\n                        <td>\n                            DESCRIPCIÓN\n                        </td>\n                        <td>\n                            % FALLO\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let recurso of proyecto.recursos; let i = index\">\n                        <td>Recurso {{ i + 1 }}</td>\n\n                        <td>\n                            <input class=\"form-control\" placeholder=\"Nombre del Recurso.\" [(ngModel)]=\"recurso.nombre\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" placeholder=\"Descripción del Recurso.\"\n                                [(ngModel)]=\"recurso.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" placeholder=\"% fallo\" min=\"0\" max=\"100\" step=\"1\"\n                                [(ngModel)]=\"recurso.degradacion\" [ngModelOptions]=\"{standalone: true}\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                                (click)=\"eliminarElemento(i,'recurso')\">\n                        </td>\n\n\n                    </tr>\n\n                </table>\n                <br>\n\n                <table>\n                    <tr>\n\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir recurso\"\n                                (click)=\"newRecurso()\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                                (click)=\"primerpaso=false;identificacion=true;\">\n                        </td>\n\n                        <td>\n                            <input [disabled]=\"!hayUnRecurso()\" class=\"btn btn-outline-secondary\" type=\"button\"\n                                value=\"Siguiente\" (click)=\"primerpaso=false;segundopaso=false;tercerpaso=true;\">\n                        </td>\n                    </tr>\n                </table>\n\n\n            </form>\n        </div>\n        <div *ngIf=\"tercerpaso\">\n            <br>\n            <h6>\n                En este formulario deberás añadir las tareas básicas de las que constará la plantilla.\n\n            </h6>\n            <form>\n\n                <table class=\"table\" *ngIf=\"mostrarTabla\">\n                    <tr>\n                        <td>\n\n                        </td>\n                        <td>\n                            TAREAS\n                        </td>\n                        <td>\n                            DESCRIPCIÓN\n                        </td>\n                        <td>\n                            % OPTIMO\n                        </td>\n                        <td>\n                            % PESIMO\n                        </td>\n\n                    </tr>\n                    <tr *ngFor=\"let tarea of proyecto.tareas; let i = index\">\n                        <td>Tarea {{ i + 1 }}</td>\n                        <td>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Nombre tarea\"\n                                [(ngModel)]=\"tarea.nombre\" [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Descripción tarea\"\n                                [(ngModel)]=\"tarea.descripcion\" [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"tarea.pOptimo\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"form-control\" type=\"number\" min=\"0\" max=\"100\" [(ngModel)]=\"tarea.pPesimo\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                                (click)=\"eliminarElemento(i,'tarea')\">\n                        </td>\n\n\n\n                    </tr>\n                </table>\n                <br>\n                <table>\n                    <tr>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir tarea\"\n                                (click)=\"addTarea()\">\n\n                        </td>\n                        <td>\n                            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                                (click)=\"primerpaso=true;tercerpaso=false;\">\n                        </td>\n                        <td>\n                            <input [disabled]=\"!hayUnaTarea()\" type=\"submit\" class=\"btn btn-outline-secondary\"\n                                value=\"Siguiente\" (click)=\"tercerpaso=false;cuartopaso=true;previaCreacionTareas()\">\n\n                        </td>\n\n\n                    </tr>\n                </table>\n            </form>\n\n\n        </div>\n\n        <div *ngIf=\"cuartopaso\">\n            <br>\n            <h6>A continuación introduce una cantidad de recursos mínimos necesarios para que la tarea se lleve a cabo.</h6>\n            <form>\n                <table class=\"table\">\n                    <tr>\n                        <td>\n                            NOMBRE DE LA TAREA\n                        </td>\n                        <td>\n                            RECURSOS\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let tarea of proyecto.tareas; let i = index\">\n                        <td>\n                            {{tarea.nombre}}\n                        </td>\n                        <td>\n                            <table>\n                                <tr>\n                                    <td>NOMBRE DEL RECURSO</td>\n                                    <td>CANTIDAD NECESARIA</td>\n                                </tr>\n\n                                <tr *ngFor=\"let recurso of proyecto.recursos; let j = index\">\n                                    <td>{{recurso.nombre}}</td>\n                                    <td><input min=\"0\" type=\"number\" [(ngModel)]=\"tarea.recursosMin[j].cantidad\"\n                                            [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                </table>\n                <table>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                            (click)=\"tercerpaso=true;primerpaso=false;cuartopaso=false\">\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\"\n                            (click)=\"guardarProyecto()\">\n                    </td>\n                </table>\n            </form>\n        </div>\n    </div>\n\n\n    <!-- Registro y administración de recursos para un proyecto -->\n    <div class=\"mx-auto\" *ngIf=\"registrarRecursos && alumnosconproyectos.length==0\">\n        <br>\n        <h6>\n            No hay ningún proyecto pendiente de validar sus recursos, puede haber ocurrido un error en la carga de la\n            página, recarga de nuevo o vuelve más tarde.\n        </h6>\n    </div>\n    <div class=\"mx-auto\" *ngIf=\"registrarRecursos && alumnosconproyectos.length>0\">\n        <br>\n        <h6>\n            A continuación se muestra una lista de proyectos pendientes de validar sus recursos.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        Nombre del alumno.\n                    </td>\n                    <td>\n                        Nombre del proyecto.\n                    </td>\n                    <td>\n                        Tipo del proyecto.\n                    </td>\n                    <td>\n                        Acción.\n                    </td>\n                </tr>\n            </thead>\n\n            <tr *ngFor=\"let user of alumnosconproyectos\">\n                <td>\n                    {{user.usuario.data.nombre}}\n                </td>\n                <td>\n                    {{user.proyectos.nombre}}\n                </td>\n                <td>\n                    {{user.proyectos.tipo}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Validar Recursos\"\n                        (click)=\"previaAsignacionRec(user.usuario.data.nombre,user.proyectos.nombre,user.proyectos.recursos,user.proyectos.descripcion,user.usuario.id,user.proyectos.tareas)\">\n                </td>\n            </tr>\n        </table>\n    </div>\n\n\n    <!-- Formulario recursos administracion -->\n    <div *ngIf=\"formularioRecursos && !nuevosRecursos\">\n        <br>\n        <h4>\n            VALIDACIÓN DE RECURSOS\n        </h4>\n        <br>\n        <h6>\n            Realiza los cambios oportunos. Si consideras que no es necesario realizar cambios deja los campos tal cuál.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    Nombre del recurso.\n                </td>\n                <td>\n                    Descripción.\n                </td>\n                <!-- <td>\n                        Validado.\n                    </td> -->\n\n            </tr>\n            <tr *ngFor=\"let recurso of recursosProyectoActual;let i = index\">\n                <td>\n                    {{recurso.nombre}}\n                </td>\n                <td>\n                    {{recurso.descripcion}}\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                        [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\"\n                        (ngModelChange)=\"validateInputRecursos(recurso)\">\n\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar Recurso\"\n                        (click)=\"eliminarElemento(i,'recursoValidacion')\">\n                </td>\n                <!-- <td>\n                         <select name=\"miselect\" [(ngModel)]=\"numSeleccionado\">\n                        <option [value]=\"0\" *ngFor=\"let num of numeroRecursos\">{{num}}</option>\n                    </select> \n                        <input type=\"checkbox\" [(ngModel)]=\"recurso.validado\" /><br>\n\n                    </td> -->\n\n            </tr>\n            <tr>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Registrar selección\"\n                        (click)=\"actualizarProyecto()\">\n                </td>\n                <td></td>\n                <td></td>\n                <td></td>\n\n            </tr>\n        </table>\n\n    </div>\n\n    <div *ngIf=\"formularioRecursos && nuevosRecursos\">\n        <br>\n        <h6>A continuación propón una lista de recursos a añadir a los validados.</h6>\n        <table>\n            <tr *ngFor=\"let recurso of recursosProyectoActual; let i = index\">\n                <td>\n                    <input class=\"form-control\" placeholder=\"Nombre del Recurso.\" [(ngModel)]=\"recurso.nombre\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </td>\n                <td>\n                    <input class=\"form-control\" placeholder=\"Descripción del Recurso.\" [(ngModel)]=\"recurso.descripcion\"\n                        [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                        [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n\n            </tr>\n            <tr>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro recurso\"\n                        (click)=\"addRecurso()\">\n\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Guardar\"\n                        (click)=\"actualizarProyecto()\">\n\n                </td>\n            </tr>\n        </table>\n\n        <br>\n    </div>\n\n    <!-- Pantalla principal alumnos y proyectos en simulacion -->\n    <!-- <div class=\"mx-auto\" *ngIf=\"ventanaSimulacion && alumnosConProyectosEnSimulacion.length==0\">\n        <br>\n        <h6>\n            No hay ningún proyecto en simulación, puede haber ocurrido un error en la carga de la página, recarga de nuevo o vuelve más tarde.\n        </h6>\n    </div> -->\n    <div class=\"mx-auto\" *ngIf=\"ventanaSimulacion && alumnosConProyectosEnSimulacion.lentgh!=0\">\n        <br>\n        <h6>\n            A continuación se muestra una lista de proyectos en estado de simulación, haz clic en ver detalle para más\n            infomación.\n        </h6>\n        <br>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        Nombre del alumno.\n                    </td>\n                    <td>\n                        Email del alumno.\n                    </td>\n                    <td>\n                        Nombre del proyecto.\n                    </td>\n                    <td>\n                        Días empleados en el proyecto.\n                    </td>\n                    <td>\n                        Tareas completadas.\n                    </td>\n                    <td>\n                        Estado.\n                    </td>\n                    <td>\n                        Acción.\n                    </td>\n                </tr>\n            </thead>\n\n            <tr *ngFor=\"let user of alumnosConProyectosEnSimulacion\">\n                <td>\n                    {{user.alumno.data.nombre}}\n                </td>\n                <td>\n                    {{user.alumno.data.email}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.nombre}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.diasTotalesProyecto}}\n                </td>\n                <td>\n                    {{calculaAcabadas(user.alumno.id)}}\n                </td>\n                <td>\n                    {{user.estadoSimulacion.estado}}\n                </td>\n                <td>\n                    <input *ngIf=\"user.estadoSimulacion.estado=='simulando'\" class=\"btn btn-outline-secondary\"\n                        type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetalleSimulacion=true;ventanaSimulacion=false;detalleSimulacionActual=user\">\n                    <input *ngIf=\"user.estadoSimulacion.estado=='finalizado'\" class=\"btn btn-outline-secondary\"\n                        type=\"button\" value=\"Ver resultados\"\n                        (click)=\"ventanaSimulacion=false;tablaFin(user.alumno.id,user.alumno.data.nombre)\">\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"verDetalleSimulacion\">\n        <h6>Este es el estado de las tareas del proyecto del alumno.\n        </h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        NOMBRE DE TAREA:\n                    </td>\n                    <td>\n                        ESTADO:\n                    </td>\n                    <td>\n                        DIAS EMPLEADOS*:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let tarea of detalleSimulacionActual.estadoSimulacion.tareas\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.estado}}</td>\n                <td>{{tarea.diasEmpleados}}</td>\n            </tr>\n\n        </table>\n        <br>\n        <h6>Dias totales de ejecución del plan:</h6>\n        <h6> {{detalleSimulacionActual.estadoSimulacion.diasTotalesProyecto}}</h6>\n        <br>\n        <h6>\n            *El número de días empleados se refiere a la cantidad de días que la tarea lleva en proceso o a la cantidad\n            de días que ha consumido para compeltarse en caso de que ya este finalizada.\n        </h6>\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n            (click)=\"verDetalleSimulacion=false;ventanaSimulacion=true\">\n\n\n    </div>\n\n    <div *ngIf=\"tablaFinal\"> <br>\n\n        <h6>Estos son los resultados del proyecto del alumno seleccionado.</h6>\n\n\n        <table class=\"table\">\n            <tr>\n                <td>\n                    DIA OCURRENCIA\n                </td>\n                <td>\n                    ACCIÓN\n                </td>\n                <td>\n                    RECURSO IMPLICADO\n                </td>\n                <td>\n                    TAREA IMPLICADA\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let evento of eventos; let i = index\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <table>\n            <td>\n                <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n                (click)=\"verDetalleSimulacion=false;ventanaSimulacion=true;tablaFinal=false\">\n    \n            </td>\n        </table>\n\n    </div>\n\n    <!-- Pantalla principal proyectos finalizados-->\n    <div *ngIf=\"previaVistaResultados\">\n        <br>\n\n        <h6>Estos son las simulaciones que actualmente están entregadas para evaluar, para ver el detalle de cada una\n            puedes hacer clic en Ver detalle.</h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n\n                    <td>\n                        Nombre Grupo\n                    </td>\n                    <td>\n                        Componentes\n                    </td>\n                    <td>\n                        E-mail\n                    </td>\n                    <td>\n                        Acción\n                    </td>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let proyecto of this.proyectosFinalizados; let i = index\">\n                <td>\n                    {{proyecto.usuario.nombre}}\n                </td>\n                <td>\n                    {{proyecto.usuario.componentes}}\n                </td>\n                <td>\n                    {{proyecto.usuario.email}}\n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver detalle\"\n                        (click)=\"verDetalleResultado=true;previaVistaResultados=false;detalleProyectoActual=proyecto;\n                        nombreAlumnoResultados=proyecto.usuario.nombre\">\n                </td>\n            </tr>\n        </table>\n    </div>\n\n    <!-- Detalle resultados -->\n    <div *ngIf=\"verDetalleResultado\">\n        <br>\n        <h6>Estos son los resultados del alumno en el proyecto actual.\n        <br>\n        </h6>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <td>\n                        DIA OCURRENCIA:\n                    </td>\n                    <td>\n                        EVENTO:\n                    </td>\n                    <td>\n                        RECURSO IMPLICADO:\n                    </td>\n                    <td>\n                        TAREA IMPLICADA:\n                    </td>\n\n                </tr>\n            </thead>\n            <tr *ngFor=\"let evento of detalleProyectoActual.eventos\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <table>\n            <tr>\n                <td>         \n                    <input class=\"btn btn-outline-secondary\" (click)=\"exportTableToCSV()\"\n                        value=\"Descargar csv\" type=\"button\"> \n                </td>\n                <td>\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Atras\"\n                    (click)=\"verDetalleResultado=false;previaVistaResultados=true\">\n        \n                </td>\n            </tr>\n        </table>\n       \n\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading\" *ngIf=\"cargando\">\n    <p>pepe</p>\n</div>\n<div class=\"container\">\n    <!-- Barra navegacion alumno -->\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light cursor\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n            aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n            (click)=\"toggleCollapsed()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item\">\n                    <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n                    <div class=\"nav-link\" (click)=\"nuevoProyecto();collapsed=true\">Crear un proyecto</div>\n                </li>\n\n            </ul>\n\n            <div class=\"mx-auto\">\n                <a class=\"navbar-brand\">Panel del Alumno</a>\n            </div>\n            <div>\n                <ul class=\"form-inline my-2 my-lg-0\">\n                    <li class=\"nav-item\">\n                        <div class=\"nav-link\" (click)=\"logOut()\">Cerrar Sesión</div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n\n    <!-- Formulario creación del proyecto-->\n    <div *ngIf=\"proyecto && !gestionarRecursos && plantillas\">\n        <h2>\n            Creación de un proyecto.\n        </h2>\n        <h4>\n            Para crear un proyecto cumplimenta el formulario siguiente sin saltarte ningún paso.\n        </h4>\n    </div>\n    <div>\n        <br>\n\n        <form *ngIf=\"proyecto && primerpaso  && !gestionarRecursos\">\n\n\n            <h6>\n                Define un nombre y da una descripción a tu proyecto.\n            </h6>\n            <br>\n            <input class=\"form-control\" placeholder=\"Nombre del proyecto.\" [(ngModel)]=\"proyecto.nombre\"\n                [ngModelOptions]=\"{standalone: true}\">\n            <input class=\"form-control\" placeholder=\"Descripcion del proyecto.\" [(ngModel)]=\"proyecto.descripcion\"\n                [ngModelOptions]=\"{standalone: true}\">\n            <br>\n            <h6>\n                Elige un tipo de proyecto predefinido.\n            </h6>\n\n            <select [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"plantillaSeleccionada\">\n                <option value=\"{{i}}\" *ngFor=\"let plantilla of plantillas; let i = index\">{{plantilla.tipo}}</option>\n            </select>\n            <br>\n            <br>\n            <table>\n                <tr>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Siguiente\"\n                            (click)=\"selectPlantilla()\">\n                    </td>\n                </tr>\n            </table>\n\n        </form>\n        <form *ngIf=\"proyecto && segundopaso\">\n            <!-- <input class=\"form-control\" placeholder=\"Tipo del proyecto.  Ej:Proyecto Software.\"\n                [(ngModel)]=\"proyecto.tipo\" [ngModelOptions]=\"{standalone: true}\"> \n            class=\"table\"class=\"table\"-->\n\n\n            <br>\n            <h5>Recursos</h5>\n            <h6>A continuación propón una lista de recursos que crees que vas a usar para realizar este proyecto.</h6>\n            <table class=\"table\">\n                <tr>\n                    <th>Nombre del Recurso</th>\n                    <th>Descripcion del Recurso</th>\n                    <th>Unidades disponibles</th>\n                </tr>\n                <tr *ngFor=\"let recurso of proyecto.recursos; let i = index\">\n                    <td>\n                        {{recurso.nombre}}\n                    </td>\n                    <td>\n                        {{recurso.descripcion}}\n                    </td>\n                    <td>\n                        <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Unidades disponibles.\"\n                            [(ngModel)]=\"recurso.cantidad\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputCrear(recurso)\">\n                    </td>\n\n                </tr>\n\n            </table>\n\n            <!-- <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro recurso\" (click)=\"addRecurso()\"> -->\n            <br>\n\n            <table>\n                <tr>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Anterior\"\n                            (click)=\"primerpaso=true;segundopaso=false\">\n                    </td>\n                    <td>\n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\"\n                            (click)=\"guardarProyectoInit()\">\n\n                    </td>\n                </tr>\n            </table>\n\n        </form>\n\n\n    </div>\n    <!-- Pagina inicio alumno -->\n\n    <!-- No hay Proyecto -->\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla && !asignarRecursos && !gestionarRecursos && noHayProyectos\">\n        <h6>\n            Hola {{alumno.usuario.data.nombre}}, no tienes proyectos activos, ¡Crea Uno!.\n\n        </h6>\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Crear Proyecto\" (click)=\"nuevoProyecto()\">\n\n    </div>\n\n    <!-- Si hay proyecto -->\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla && !asignarRecursos && !gestionarRecursos && !noHayProyectos\">\n        <h6>\n            Hola {{alumno.usuario.data.nombre}}, este es tu proyecto abierto:\n        </h6>\n\n    </div>\n    <div\n        *ngIf=\"!proyecto && !diagramaGant && !simulacionPantalla  && !asignarRecursos && !gestionarRecursos && !noHayProyectos &&!tablaFinal &&!replanificar\">\n        <table class=\"table\">\n            <tr>\n                <td>\n                    {{alumno.proyectos[0].nombre}}\n                </td>\n                <!-- HAY QUE MIRAR EL ESTADO , CREAR METODO QUE LO HAGA -->\n                <td *ngIf=\"hayGant && !diagramaGant\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver estado\" (click)=\"dibujaGant()\">\n\n                </td>\n\n                <td *ngIf=\"hayGant && !diagramaGant && !botonFin\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Simular Planificación\"\n                        (click)=\"simular()\">\n                </td>\n\n                <td *ngIf=\"botonFin\">\n                    <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Ver Resultados\" (click)=\"tablaFin()\">\n                </td>\n\n\n\n                <!-- <td *ngIf=\"hayRiesgos\">\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir Riesgos\" (click)=\"muestraVentanaRiesgos()\">\n                    </td> -->\n                <td *ngIf=\"this.estado=='creado'\">\n                    Esperando validación del profesor\n\n                </td>\n                <td>\n\n                    <input *ngIf=\"this.estado=='recursosValidados'\" class=\"btn btn-outline-secondary\" type=\"button\"\n                        value=\"Añadir Tareas\" (click)=\"muestraVentanaTareas(alumno.usuario)\">\n\n                </td>\n\n                <td>\n                    <input *ngIf=\"botonFin||this.estado=='creado'||this.estado=='recursosValidados'||(hayGant && !diagramaGant && !botonFin\n                    ||(hayGant && !diagramaGant))\" class=\"btn btn-outline-secondary\" type=\"button\"\n                        value=\"Borrar Datos del Proyecto\" (click)=\"borrarProyectos()\">\n                </td>\n\n\n            </tr>\n        </table>\n\n        <h6 *ngIf=\"botonFin||this.estado=='creado'||this.estado=='recursosValidados'||(hayGant && !diagramaGant && !botonFin\n        ||(hayGant && !diagramaGant))\">*Al hacer click en Borrar Datos del Proyecto se eliminará todo lo relacionado\n            con este proyecto, tanto lo relacionado con\n            planificación como lo relacionado simulación si esta hubiera comenzado.</h6>\n    </div>\n\n    <!-- Inserccion tareas y gestion REcursos -->\n    <div *ngIf=\"gestionarRecursos\">\n\n        <div>\n            <br>\n            <h6>\n                Hola {{alumno.usuario.data.nombre}}, en este formulario deberás añadir las tareas de las que se\n                compondrá el proyecto:\n            </h6>\n        </div>\n        <br>\n        <form>\n\n            <table class=\"table\" *ngIf=\"mostrarTabla\">\n                <tr>\n                    <td>\n\n                    </td>\n                    <td>\n                        TIPO DE TAREA\n                    </td>\n                    <td>\n                        NOMBRE DE TAREA\n                    </td>\n                    <td>\n                        DÍA DE INICIO*\n                    </td>\n                    <td>\n                        DURACIÓN (DÍAS)\n                    </td>\n                    <td>\n                        DEPENDE DE:\n                    </td>\n                    <!-- <td>\n                        TIPO DE DEPENDENCIA:\n                    </td> -->\n                </tr>\n                <tr *ngFor=\"let tarea of proyectoTareas.tareas; let i = index\">\n                    <td>Tarea {{ i + 1 }}</td>\n                    <td>\n                        <select placeholder=\"Tipo de tarea:\" class=\"form-control\" [(ngModel)]=\"tarea.tipo\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"{{ tarea.nombre }}\" *ngFor=\"let tarea of tipoTareas; let j = index\">\n                                {{ tarea.nombre }}\n                            </option>\n                        </select>\n                    </td>\n\n                    <td>\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Nombre tarea\" [(ngModel)]=\"tarea.nombre\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                    </td>\n                    <td>\n                        <input class=\"form-control\" type=\"number\" min=\"0\" placeholder=\"Fecha Inicio.\"\n                            [(ngModel)]=\"tarea.inicio\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputTarea(i,tarea.inicio,0)\">\n                    </td>\n                    <td>\n                        <input class=\"form-control\" type=\"number\" min=\"0\" placeholder=\"Duración tarea\"\n                            [(ngModel)]=\"tarea.duracion\" [ngModelOptions]=\"{standalone: true}\"\n                            (ngModelChange)=\"validateInputTarea(i,tarea.duracion,1)\">\n                    </td>\n\n                    <td>\n                        <select placeholder=\"Depende de:\" class=\"form-control\" [(ngModel)]=\"tarea.dependencia\"\n                            [ngModelOptions]=\"{standalone: true}\">\n                            <option value=\"{{ tarea.nombre }}\" [hidden]=\"j == i\"\n                                *ngFor=\"let tarea of proyectoTareas.tareas; let j = index\">\n                                {{ tarea.nombre }}\n                            </option>\n                        </select>\n                    </td>\n                    <td>\n                        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Eliminar\"\n                            (click)=\"eliminarElemento(i,'tarea')\">\n                    </td>\n\n                    <!-- <td>\n                        <select placeholder=\"Tipo de dependencia:\" class=\"form-control\"\n                            [(ngModel)]=\"tarea.dependenciaTipo\" [ngModelOptions]=\"{standalone: true}\">\n                            <option *ngFor=\"let dependencia of dependenciaTipos; let j = index\">\n                                {{ dependencia }}\n                            </option>\n                        </select>\n                    </td> -->\n                </tr>\n            </table>\n            <br>\n            <h6 *ngIf=\"mostrarTabla\">*DIA DE INICIO: se refiere al día en el que podrá dar comienzo la tarea, siempre y\n                cuando las tareas de las que dependen estén finalizadas.</h6>\n            <br>\n            <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otra tarea\" (click)=\"addTarea()\">\n            <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Asignar Recursos\"\n                (click)=\"asignarRecursosTareas()\">\n\n        </form>\n\n\n    </div>\n    <div *ngIf=\"asignarRecursos\">\n        <h6>A continuación realice una primera aproximación de los recursos que utilizará cada tarea.</h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE LA TAREA\n                </td>\n                <td>\n                    DURACIÓN DE LA TAREA\n                </td>\n                <td>\n                    RECURSOS\n                </td>\n            </tr>\n            <tr *ngFor=\"let tarea of proyectoTareas.tareas; let i = index\">\n                <td>\n                    {{tarea.nombre}}\n                </td>\n                <td>\n                    {{tarea.duracion}}\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD DISPONIBLE</td>\n                            <td>CANTIDAD SELECCIONADA</td>\n                        </tr>\n\n                        <!-- <tr *ngFor=\"let recurso of proyectoTareas.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{ getCantidadRecurso(recurso, proyectoTareas.tareas, j) }}</td>\n                            <td><input min=\"0\" [disabled]=\"getCantidadRecurso(recurso, proyectoTareas.tareas, j)==0\"\n                                    type=\"number\" [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\"></td>\n                        </tr> -->\n                        <tr *ngFor=\"let recurso of proyectoTareas.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>{{recurso.cantidad-tarea.recursos[j].cantidad}}</td>\n                            <!-- <td><input type=\"number\" min=\"0\" max=\"{{recurso.cantidad}}\"\n                                    [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    (ngModelChange)=\"validateInput(tarea.recursos[j].cantidad,recurso.cantidad,i,j)\"\n                                    class=\"form-control\">\n                            </td>  -->\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"j\"\n                                        *ngFor=\"let num of numRecursosMaximo | slice:0:recurso.cantidad+1; let j = index \">\n                                        {{ j }}\n                                    </option>\n                                </select>\n                            </td>\n\n                        </tr>\n\n                    </table>\n                </td>\n            </tr>\n        </table>\n        <table>\n            <td>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                    (click)=\"asignarRecursos=false;gestionarRecursos=true;mostrarTabla=true\">\n            </td>\n            <td>\n                <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Crear\" (click)=\"guardarProyectoTareas()\">\n            </td>\n        </table>\n    </div>\n\n    <!-- muestra el estado de cada tarea en un diagrama de Gant-->\n\n    <div *ngIf=\"diagramaGant\">\n        <br>\n        <br>\n        <div id=\"chart_div\"></div>\n        <br>\n        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver al Inicio\" (click)=\"atrasGantt()\">\n    </div>\n\n\n    <!-- Creación de los riesgos por parte del alumno -->\n    <div *ngIf=\"crearRiesgos\">\n        <h5>Riesgos</h5>\n        <h6>A continuación propón una lista de riesgos que crees que pueden afectar al correcto desarrollo de este\n            proyecto.</h6>\n        <table *ngIf=\"mostrarTablaRiesgos\" class=\"table\">\n            <tr *ngFor=\"let riesgo of proyectoRiesgos.riesgos; let i = index\">\n                <td>\n                    <input class=\"form-control\" placeholder=\"Nombre del Riesgo.\" [(ngModel)]=\"riesgo.nombre\"\n                        [ngModelOptions]=\"{standalone: true}\">\n                </td>\n                <td>\n                    <input class=\"form-control\" placeholder=\"Descripción del Riesgo.\" [(ngModel)]=\"riesgo.descripcion\"\n                        [ngModelOptions]=\"{standalone: true}\">\n\n                </td>\n                <td>\n                    <input type=\"number\" min=\"1\" class=\"form-control\" placeholder=\"Porcentaje aparición\"\n                        [(ngModel)]=\"riesgo.porcentajeAparicion\" [ngModelOptions]=\"{standalone: true}\">\n                </td>\n\n\n            </tr>\n\n        </table>\n\n        <input class=\"btn btn-outline-secondary\" type=\"button\" value=\"Añadir otro riesgo\" (click)=\"addRiesgo()\">\n        <br>\n\n        <table>\n            <tr>\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Guardar Proyecto\"\n                        (click)=\"guardarProyectoRiesgos()\">\n\n                </td>\n            </tr>\n        </table>\n    </div>\n\n\n    <!-- Pantalla de simulación -->\n\n    <div *ngIf=\"simulacionPantalla\">\n        <h5>¡Bienvenido a la pantalla de simulación!</h5>\n        <br>\n        <h6>Este es el estado de tus tareas, pincha en cualquiera de los botones bajo la tabla para realizar una acción.\n        </h6>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE TAREA:\n                </td>\n                <td>\n                    ESTADO:\n                </td>\n                <td>\n                    DIAS ESTIMADOS*:\n                </td>\n                <td>\n                    DIAS EMPLEADOS*:\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let tarea of proyectoSimulacion.tareas; let i = index\">\n                <td>{{tarea.nombre}}</td>\n                <td>{{tarea.estado}}</td>\n                <td>{{tarea.duracion}}</td>\n                <td>{{tarea.diasEmpleados}}</td>\n            </tr>\n\n        </table>\n\n        <h6>Dias totales de ejecución del plan:</h6>\n        <h6>{{proyectoSimulacion.diasTotalesProyecto}}</h6>\n        <br>\n        <h6>\n            *El número de días estimados se refiere a la cantidad de días en los que la tarea finalizará según tu\n            estimación.\n        </h6>\n        <br>\n        <h6>\n            *El número de días empleados se refiere a la cantidad de días que la tarea lleva en proceso o a la cantidad\n            de días que ha consumido para compeltarse en caso de que ya este finalizada.\n        </h6>\n        <br>\n        <table *ngIf=\"this.estadosSimulacion.length>1\" class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE:\n                </td>\n                <td>\n                    DESCRIPCIÓN:\n                </td>\n                <td>\n                    CANTIDAD ASIGNADA:\n                </td>\n                <td>\n                    CANTIDAD LIBRE:\n                </td>\n\n\n            </tr>\n            <tr *ngFor=\"let recurso of proyectoSimulacion.recursos; let i = index\">\n                <td>{{recurso.nombre}}</td>\n                <td>{{recurso.descripcion}}</td>\n                <td>{{numeroAsignadoSimulacion(recurso,proyectoSimulacion.tareas)}}</td>\n                <td>{{recurso.cantidad-numeroAsignadoSimulacion(recurso,proyectoSimulacion.tareas)}}</td>\n            </tr>\n        </table>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *La cantidad de recursos asignada, se refiere al total asignado a las tareas actualmente activas.\n        </h6>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *Un número negativo en la cantidad libre indica la necesidad de contratar o añadir más recursos de ese tipo,\n            ya que en ese momento existe una sobreasignación.\n        </h6>\n        <br>\n        <h6 *ngIf=\"this.estadosSimulacion.length>1\">\n            *Al hacer click en Borrar Datos del Proyecto se eliminará todo lo relacionado con este proyecto, tanto lo\n            relacionado con\n            planificación como lo relacionado simulación si esta hubiera comenzado.\n        </h6>\n        <br>\n        <table>\n            <tr>\n\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                        (click)=\"simulacionPantalla=false\">\n                </td>\n\n                <td>\n                    <input\n                        [disabled]=\"proyectoSimulacion.estado==ESTADOS.FIN\"\n                        type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Replanificar\"\n                        (click)=\"modificarPlanificacion()\">\n                        <!-- <input\n                        [disabled]=\"proyectoSimulacion.diasTotalesProyecto==0 || proyectoSimulacion.estado==ESTADOS.FIN\"\n                        type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Replanificar\"\n                        (click)=\"modificarPlanificacion()\"> -->\n\n                </td>\n                <td>\n                    <input [disabled]=\"proyectoSimulacion.estado==ESTADOS.FIN\" type=\"submit\"\n                        class=\"btn btn-outline-secondary\" value=\"Avanzar días\" (click)=\"avanzarSimulacion()\">\n                </td>\n                <td>\n                    <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Borrar datos de Simulación\"\n                        (click)=\"borrarSimulacion()\">\n                </td>\n            </tr>\n        </table>\n\n\n    </div>\n\n    <!-- Pantalla de replanificacion de proyectos -->\n    <div *ngIf=\"replanificar\">\n        <br>\n        <h6>En la siguiente tabla podrás modificar la cantidad de recursos asignados a cada tarea.</h6>\n        <br>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    NOMBRE DE LA TAREA\n                </td>\n                <td>\n                    DURACIÓN DE LA TAREA\n                </td>\n                <td>\n                    RECURSOS\n                </td>\n            </tr>\n            <tr *ngFor=\"let tarea of tareasNoFinalizadas; let i = index\" [hidden]=\"tarea.estado==ESTADOSTAREAS.ESPERA\">\n                <td>\n                    {{tarea.nombre}}\n                </td>\n                <td>\n                    {{tarea.duracion}}\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <td>NOMBRE DEL RECURSO</td>\n                            <td>CANTIDAD TOTAL</td>\n                            <td>CANTIDAD DISPONIBLE</td>\n                            <td>CANTIDAD SELECCIONADA</td>\n                            <td>CANTIDAD INICIAL ESTIMADA</td>\n\n                        </tr>\n\n                        <!-- MIRAR QUE NO SE LLAME AL getCantidadREcursos() si no esta validado el recurso, da error!! -->\n                        <tr *ngFor=\"let recurso of proyectoSimulacion.recursos; let j = index\">\n                            <td>{{recurso.nombre}}</td>\n                            <td>\n                                <input min=\"0\" type=\"number\" [(ngModel)]=\"recurso.cantidad\" class=\"form-control\">\n                            </td>\n                            <td>{{ recurso.cantidad-numeroAsignado(recurso,proyectoSimulacion.tareas) }}</td>\n                            <!-- <td><input min=\"0\"\n                                    [disabled]=\"(recurso.cantidad-numeroAsignado(recurso,proyectoSimulacion.tareas))==0\"\n                                    type=\"number\" [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\">\n                            </td> -->\n                            <!-- <td>\n                                <input min=\"0\" max=\"{{recurso.cantidad}}\" type=\"number\"\n                                    [(ngModel)]=\"tarea.recursos[j].cantidad\" class=\"form-control\"\n                                    (ngModelChange)=\"validateInputReplanificacion(tarea.recursos[j])\">\n                            </td>  -->\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"tarea.recursos[j].cantidad\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                    <option [ngValue]=\"j\"\n                                        *ngFor=\"let num of numRecursosMaximo | slice:0:recurso.cantidad+1; let j = index \">\n                                        {{ j }}\n                                    </option>\n                                </select>\n                            </td>\n                            <td>\n                                {{tarea.recursos[j].cantidadInicial}}\n                            </td>\n\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Modificar\" (click)=\"finReplanificacion()\">\n    </div>\n\n\n    <div *ngIf=\"tablaFinal\">\n\n        <table class=\"table\">\n            <tr>\n                <td>\n                    DIA OCURRENCIA\n                </td>\n                <td>\n                    ACCIÓN\n                </td>\n                <td>\n                    RECURSO IMPLICADO\n                </td>\n                <td>\n                    TAREA IMPLICADA\n                </td>\n\n            </tr>\n            <tr *ngFor=\"let evento of eventos; let i = index\">\n                <td>{{evento.dia}}</td>\n                <td>{{evento.accion}}</td>\n                <td>{{evento.recursoImplicado}}</td>\n                <td>{{evento.tareaImplicacada}}</td>\n\n            </tr>\n\n        </table>\n        <div>\n           \n                        <input type=\"submit\" class=\"btn btn-outline-secondary\" value=\"Volver\"\n                        (click)=\"this.tablaFinal=false;\">\n                    \n                        <button class=\"btn btn-outline-secondary\" (click)=\"exportTableToCSV()\">Descargar tabla en\n                            formato csv</button>\n                    \n                        <button class=\"btn btn-outline-secondary\" (click)=\"almacenarResultados()\">Enviar Resultados</button>\n             \n        </div>\n\n    </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"sidenav\">\n   <div class=\"login-main-text\">\n      <h6>Herramienta de Simulación de planificación de Proyectos</h6>\n      <p>TFG Jose Alberto del Val Acebes</p>\n      <p>Curso 2019/2020</p>\n\n   </div>\n</div>\n<div class=\"main\">\n   <div class=\"col-md-6 col-sm-12\">\n      <div class=\"login-form\">\n         <form (ngSubmit)=\"login(loginUserForm.value)\" [formGroup]=\"loginUserForm\">\n            <div class=\"form-group\">\n               <label>Email</label>\n               <input type=\"text\" class=\"form-control\" placeholder=\"Tu email\" formControlName=\"email\">\n            </div>\n            <div class=\"form-group\">\n               <label>Contraseña</label>\n               <input type=\"password\" class=\"form-control\" placeholder=\"Tu contraseña\" formControlName=\"password\">\n            </div>\n            <div>\n               <p class=\"loginFail\" *ngIf=\"loginError\">Usuario o contraseña incorrecta.</p>\n            </div>\n            <input type=\"submit\" class=\"btn btn-outline-secondary\" [disabled]=\"!loginUserForm.valid\" value=\"Acceder\">\n         </form>\n      </div>\n   </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/adminpanel/adminpanel.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/adminpanel/adminpanel.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5lbC9hZG1pbnBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5lbC9hZG1pbnBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/adminpanel/adminpanel.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/adminpanel/adminpanel.component.ts ***!
          \****************************************************/
        /*! exports provided: AdminpanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelComponent", function () { return AdminpanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminpanelComponent = /** @class */ (function () {
                function AdminpanelComponent(firestoreService, form, authenticationService, router, auth) {
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
                AdminpanelComponent.prototype.toggleCollapsed = function () {
                    this.collapsed = !this.collapsed;
                };
                AdminpanelComponent.prototype.nuevoProyecto = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var query;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.firestoreService.getPlantillas().subscribe(function (plantillas) {
                                        var e_1, _a;
                                        _this.previaCreacionPlantilla = true;
                                        _this.plantillas = [];
                                        try {
                                            for (var plantillas_1 = __values(plantillas), plantillas_1_1 = plantillas_1.next(); !plantillas_1_1.done; plantillas_1_1 = plantillas_1.next()) {
                                                var plantilla = plantillas_1_1.value;
                                                _this.plantillas.push(plantilla.payload.doc.data());
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (plantillas_1_1 && !plantillas_1_1.done && (_a = plantillas_1.return)) _a.call(plantillas_1);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        console.log('plantillas', _this.plantillas);
                                    })];
                                case 1:
                                    query = _a.sent();
                                    //Creacion proyecto en blanco por si se quiere crear plantilla
                                    this.proyecto = {
                                        estado: null,
                                        recursos: [],
                                        tareas: [],
                                        descripcion: null
                                    };
                                    console.log(this.primerpaso, this.creacionPlantilla);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AdminpanelComponent.prototype.hayUnRecurso = function () {
                    var e_2, _a;
                    if (!this.proyecto.tipo || !this.proyecto.descripcion) {
                        return false;
                    }
                    if (this.proyecto.recursos.length <= 0) {
                        return false;
                    }
                    try {
                        for (var _b = __values(this.proyecto.recursos), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var recurso = _c.value;
                            if (!recurso.nombre || !recurso.descripcion || recurso.degradacion == null) {
                                return false;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return true;
                };
                AdminpanelComponent.prototype.hayUnaTarea = function () {
                    var e_3, _a;
                    if (this.proyecto.tareas.length <= 0) {
                        return false;
                    }
                    try {
                        for (var _b = __values(this.proyecto.tareas), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            if (!tarea.nombre || !tarea.descripcion || tarea.pPesimo == null || tarea.pOptimo == null) {
                                return false;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return true;
                };
                AdminpanelComponent.prototype.newRecurso = function () {
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
                };
                AdminpanelComponent.prototype.eliminarElemento = function (index, tipo) {
                    var e_4, _a;
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
                        try {
                            for (var _b = __values(this.tareasMoment), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var tarea = _c.value;
                                tarea.recursosMin.splice(index, 1);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                };
                AdminpanelComponent.prototype.guardarProyecto = function () {
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
                };
                AdminpanelComponent.prototype.addTarea = function () {
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
                };
                AdminpanelComponent.prototype.previaCreacionTareas = function () {
                    var e_5, _a, e_6, _b;
                    try {
                        for (var _c = __values(this.proyecto.tareas), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var tarea = _d.value;
                            tarea.recursosMin = [];
                            try {
                                for (var _e = (e_6 = void 0, __values(this.proyecto.recursos)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    var recurso = _f.value;
                                    tarea.recursosMin.push({
                                        nombre: recurso.nombre,
                                        cantidad: 0
                                    });
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    console.log("AQUI", this.proyecto);
                };
                AdminpanelComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id;
                        return __generator(this, function (_a) {
                            id = localStorage.getItem('idusuario');
                            localStorage.getItem('proyectos');
                            this.profesor = JSON.parse(localStorage.getItem('usuario'));
                            //Seguridad de acceso
                            if (!this.profesor) {
                                this.router.navigate(['/']);
                                return [2 /*return*/];
                            }
                            if (this.profesor.data.rol == 'Alumno') {
                                this.router.navigate(['/alumno']);
                                return [2 /*return*/];
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
                            return [2 /*return*/];
                        });
                    });
                };
                AdminpanelComponent.prototype.logOut = function () {
                    localStorage.clear();
                    this.router.navigate(['/']);
                };
                AdminpanelComponent.prototype.generaVistaSimulacion = function () {
                    this.descargaProyectosSimulacion();
                };
                // alumno = {
                //   usuario:undefined,
                //   proyectos:undefined
                // };
                //Obtención de alumnos y sus proyectos.
                AdminpanelComponent.prototype.getAlumnos = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.firestoreService.getUsuarios().subscribe(function (UsuariosSnapshot) {
                                        _this.alumnos = [];
                                        UsuariosSnapshot.forEach(function (alumnoData) {
                                            if (alumnoData.payload.doc.data().rol == "Alumno") {
                                                _this.alumno = {
                                                    usuario: {
                                                        id: null,
                                                        data: null
                                                    }
                                                };
                                                _this.alumno.usuario.id = alumnoData.payload.doc.id;
                                                _this.alumno.usuario.data = alumnoData.payload.doc.data();
                                                _this.alumnos.push(_this.alumno);
                                            }
                                            localStorage.setItem('alumnos', JSON.stringify(_this.alumnos));
                                        });
                                        //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AdminpanelComponent.prototype.eliminarAlumno = function (usuario, index) {
                    this.firestoreService.deteteAlumnoAuth(this.usuarios[index].email);
                    this.usuarios.splice(index, 1);
                    this.firestoreService.deleteAlumno(this.idsUsuarios[index]);
                    console.log(this.usuarios, this.idsUsuarios, this.idsUsuarios[index]);
                    this.idsUsuarios.splice(index, 1);
                };
                AdminpanelComponent.prototype.mostrarProyectosValidacionRecursos = function () {
                    var e_7, _a;
                    var _this = this;
                    var alumnos = JSON.parse(localStorage.getItem('alumnos'));
                    var proyectos = [];
                    this.alumnosconproyectos = [];
                    console.log(alumnos);
                    var _loop_1 = function (alumno) {
                        var query2 = this_1.firestoreService.getProyectosUsuario(alumno.usuario.id).subscribe(function (usuario) {
                            if (usuario.length == 1) {
                                var proyecto = {
                                    id: alumno.usuario.id,
                                    data: usuario[0].payload.doc.data()
                                };
                                var global = {
                                    usuario: undefined,
                                    proyectos: undefined
                                };
                                if (proyecto.data.estado == "creado") {
                                    global.usuario = alumno.usuario;
                                    global.proyectos = proyecto.data;
                                    _this.alumnosconproyectos.push({
                                        usuario: alumno.usuario,
                                        proyectos: proyecto.data
                                    });
                                }
                            }
                            //localStorage.setItem('proyectos', JSON.stringify(usuario[0].payload.doc.data()));
                        });
                    };
                    var this_1 = this;
                    try {
                        for (var alumnos_1 = __values(alumnos), alumnos_1_1 = alumnos_1.next(); !alumnos_1_1.done; alumnos_1_1 = alumnos_1.next()) {
                            var alumno = alumnos_1_1.value;
                            _loop_1(alumno);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (alumnos_1_1 && !alumnos_1_1.done && (_a = alumnos_1.return)) _a.call(alumnos_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    console.log(this.alumnos, this.alumnosProyectos);
                    // if(this.alumnosProyectos==undefined || this.alumnos.length<1){
                    //   location.reload();
                    //   this.registrarRecursos=true;
                    // }
                    //console.log("conjuntoooaojdaoj", this.alumnosconproyectos);
                };
                AdminpanelComponent.prototype.cuentaTareas = function (tareas) {
                    return tareas.length;
                };
                AdminpanelComponent.prototype.previaAsignacionRec = function (a, p, r, pd, id, t) {
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
                };
                AdminpanelComponent.prototype.newAlumno = function (form, documentId) {
                    var _this = this;
                    if (documentId === void 0) { documentId = this.documentId; }
                    var data = {
                        nombre: form.nombre,
                        componentes: form.componentes,
                        email: form.email,
                        password: form.password,
                        rol: form.rol
                    };
                    console.log(data, "ALUMNO A REGISTRAR");
                    this.firestoreService.creaAlumno(data).then(function () {
                        console.log('Documento creado exitósamente!');
                        _this.newUserForm.setValue({
                            nombre: '',
                            usuario: '',
                            password: ''
                        });
                    }, function (error) {
                        alert("El usuario no se ha podido registrar.");
                        console.error(error);
                    });
                };
                AdminpanelComponent.prototype.finRegistro = function () {
                    this.registrarAlumno = false;
                    this.previaRegistro = true;
                };
                AdminpanelComponent.prototype.registrar = function (form) {
                    var _this = this;
                    if (confirm("¿Desea registrar al usuario?")) {
                    }
                    else {
                        return;
                    }
                    this.email = form.email;
                    this.password = form.password;
                    this.authenticationService.registerWithEmail(this.email, this.password).then(function (data) {
                        _this.mensajeRegistro = 1;
                        _this.registrarAlumno = false;
                        _this.previaRegistro = true;
                        var al = {
                            nombre: form.nombre,
                            email: form.email,
                            componentes: form.componentes,
                            password: form.password,
                            rol: form.rol
                        };
                        console.log(al, "ALUMNO A REGISTRAR");
                        _this.firestoreService.creaAlumno(al).then(function () {
                            console.log('Documento creado exitósamente!');
                            _this.newUserForm.setValue({
                                nombre: '',
                                componentes: '',
                                email: '',
                                password: '',
                                rol: ''
                            });
                        }, function (error) {
                            console.error(error);
                        });
                    }).catch(function (error) {
                        alert("Error en el registro, motivo: " + error.message);
                        console.log("ERROR REGISTRO", error);
                    });
                };
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
                AdminpanelComponent.prototype.actualizarProyecto = function () {
                    var proyecto = {
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
                };
                AdminpanelComponent.prototype.addRecurso = function () {
                    this.recursosProyectoActual.push({
                        nombre: null,
                        descripcion: null,
                    });
                };
                AdminpanelComponent.prototype.descargaProyectosSimulacion = function () {
                    //reseteo array cada vez que recargo.
                    this.alumnosConProyectosEnSimulacion = [];
                    this.getAlumnosSimulando();
                    //SOLO SI HAY ALUMNOS CON PROYECTOS SIMULANDO, SINO MOSTRAR UN MENSAJE.
                    this.ventanaSimulacion = true;
                };
                AdminpanelComponent.prototype.descargaProyectosFinalizados = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var query;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.firestoreService.getResultados().subscribe(function (resultados) {
                                        var e_8, _a;
                                        _this.previaVistaResultados = true;
                                        _this.proyectosFinalizados = [];
                                        try {
                                            for (var resultados_1 = __values(resultados), resultados_1_1 = resultados_1.next(); !resultados_1_1.done; resultados_1_1 = resultados_1.next()) {
                                                var resultado = resultados_1_1.value;
                                                _this.proyectosFinalizados.push(resultado.payload.doc.data());
                                            }
                                        }
                                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                                        finally {
                                            try {
                                                if (resultados_1_1 && !resultados_1_1.done && (_a = resultados_1.return)) _a.call(resultados_1);
                                            }
                                            finally { if (e_8) throw e_8.error; }
                                        }
                                        console.log('finalizados', _this.proyectosFinalizados);
                                    })];
                                case 1:
                                    query = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AdminpanelComponent.prototype.getAlumnosSimulando = function () {
                    var e_9, _a;
                    var _this = this;
                    var alumnos = JSON.parse(localStorage.getItem('alumnos'));
                    console.log('estadosSimulacionAlumnos', this.alumnosConProyectosEnSimulacion);
                    this.alumnoEstado = {
                        alumno: null,
                        estadoSimulacion: null
                    };
                    var _loop_2 = function (alumno) {
                        console.log(alumno.usuario.id);
                        this_2.firestoreService.getEstadoActual(alumno.usuario.id).subscribe(function (estados) {
                            var e_10, _a, e_11, _b;
                            _this.estadosSimulacion = [];
                            try {
                                for (var estados_1 = (e_10 = void 0, __values(estados)), estados_1_1 = estados_1.next(); !estados_1_1.done; estados_1_1 = estados_1.next()) {
                                    var estadoSimulacion = estados_1_1.value;
                                    _this.estadosSimulacion.push(estadoSimulacion.payload.doc.data());
                                }
                            }
                            catch (e_10_1) { e_10 = { error: e_10_1 }; }
                            finally {
                                try {
                                    if (estados_1_1 && !estados_1_1.done && (_a = estados_1.return)) _a.call(estados_1);
                                }
                                finally { if (e_10) throw e_10.error; }
                            }
                            console.log('estadosSimulacion', _this.estadosSimulacion);
                            //Si el alumno tiene proyectos en simulacion
                            if (_this.estadosSimulacion.length > 0) {
                                var numeroDias = -1;
                                var proyectoSimulacion = void 0;
                                try {
                                    for (var _c = (e_11 = void 0, __values(_this.estadosSimulacion)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        var estado = _d.value;
                                        if (estado.diasTotalesProyecto > numeroDias) {
                                            numeroDias = estado.diasTotalesProyecto;
                                            proyectoSimulacion = estado;
                                        }
                                    }
                                }
                                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                                    }
                                    finally { if (e_11) throw e_11.error; }
                                }
                                _this.alumnoEstado.alumno = alumno.usuario;
                                _this.alumnoEstado.estadoSimulacion = proyectoSimulacion;
                                _this.alumnosConProyectosEnSimulacion.push(_this.alumnoEstado);
                                _this.alumnoEstado = {
                                    alumno: null,
                                    estadoSimulacion: null
                                };
                            }
                        });
                    };
                    var this_2 = this;
                    try {
                        //console.log(alumnos);
                        for (var alumnos_2 = __values(alumnos), alumnos_2_1 = alumnos_2.next(); !alumnos_2_1.done; alumnos_2_1 = alumnos_2.next()) {
                            var alumno = alumnos_2_1.value;
                            _loop_2(alumno);
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (alumnos_2_1 && !alumnos_2_1.done && (_a = alumnos_2.return)) _a.call(alumnos_2);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                };
                AdminpanelComponent.prototype.calculaAcabadas = function (id) {
                    var e_12, _a, e_13, _b;
                    var cont = 0;
                    try {
                        for (var _c = __values(this.alumnosConProyectosEnSimulacion), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var alumno = _d.value;
                            if (alumno.alumno.id == id) {
                                try {
                                    for (var _e = (e_13 = void 0, __values(alumno.estadoSimulacion.tareas)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var tarea = _f.value;
                                        if (tarea.estado == "Finalizada")
                                            cont++;
                                    }
                                }
                                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                    }
                                    finally { if (e_13) throw e_13.error; }
                                }
                            }
                        }
                    }
                    catch (e_12_1) { e_12 = { error: e_12_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_12) throw e_12.error; }
                    }
                    return cont;
                };
                AdminpanelComponent.prototype.getUsuarios = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.firestoreService.getUsuarios().subscribe(function (UsuariosSnapshot) {
                                        _this.previaRegistro = true;
                                        _this.usuarios = [];
                                        _this.idsUsuarios = [];
                                        UsuariosSnapshot.forEach(function (alumnoData) {
                                            _this.alumno.usuario.id = alumnoData.payload.doc.id;
                                            _this.alumno.usuario.data = alumnoData.payload.doc.data();
                                            _this.usuarios.push(alumnoData.payload.doc.data());
                                            _this.idsUsuarios.push(alumnoData.payload.doc.id);
                                        });
                                        //console.log("sesion",JSON.parse(localStorage.getItem('alumnos')));
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AdminpanelComponent.prototype.tablaFin = function (idusuario, nombre) {
                    var _this = this;
                    console.log(idusuario);
                    this.firestoreService.getEvento(idusuario).subscribe(function (eventos) {
                        var e_14, _a;
                        _this.eventos = [];
                        try {
                            for (var eventos_1 = __values(eventos), eventos_1_1 = eventos_1.next(); !eventos_1_1.done; eventos_1_1 = eventos_1.next()) {
                                var evento = eventos_1_1.value;
                                _this.eventos.push(evento.payload.doc.data());
                            }
                        }
                        catch (e_14_1) { e_14 = { error: e_14_1 }; }
                        finally {
                            try {
                                if (eventos_1_1 && !eventos_1_1.done && (_a = eventos_1.return)) _a.call(eventos_1);
                            }
                            finally { if (e_14) throw e_14.error; }
                        }
                        _this.eventos.sort(function (a, b) {
                            if (a.dia > b.dia) {
                                return 1;
                            }
                            if (a.dia < b.dia) {
                                return -1;
                            }
                            return 0;
                        });
                        console.log('eventos', _this.eventos);
                    });
                    this.nombreAlumnoResultados = nombre;
                    this.tablaFinal = true;
                };
                AdminpanelComponent.prototype.downloadCSV = function (csv) {
                    var csvFile;
                    var downloadLink;
                    csvFile = new Blob([csv], { type: "text/csv" });
                    downloadLink = document.createElement("a");
                    downloadLink.download = this.nombreAlumnoResultados + '.csv';
                    downloadLink.href = window.URL.createObjectURL(csvFile);
                    downloadLink.style.display = "none";
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                };
                AdminpanelComponent.prototype.exportTableToCSV = function () {
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
                };
                AdminpanelComponent.prototype.validateInputRecursos = function (recurso) {
                    console.log(recurso);
                    if (recurso.cantidad < 0) {
                        recurso.cantidad = 0;
                    }
                };
                AdminpanelComponent.prototype.reload = function () {
                    location.reload();
                };
                return AdminpanelComponent;
            }());
            AdminpanelComponent.ctorParameters = function () { return [
                { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AutenticathionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
            ]; };
            AdminpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-adminpanel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminpanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/adminpanel/adminpanel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminpanel.component.css */ "./src/app/adminpanel/adminpanel.component.css")).default]
                })
            ], AdminpanelComponent);
            /***/ 
        }),
        /***/ "./src/app/alumnopanel/alumnopanel.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/alumnopanel/alumnopanel.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx1bW5vcGFuZWwvYWx1bW5vcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hbHVtbm9wYW5lbC9hbHVtbm9wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/alumnopanel/alumnopanel.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/alumnopanel/alumnopanel.component.ts ***!
          \******************************************************/
        /*! exports provided: AlumnopanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnopanelComponent", function () { return AlumnopanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
            /* harmony import */ var js_pert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-pert */ "./node_modules/js-pert/build/index.js");
            /* harmony import */ var js_pert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(js_pert__WEBPACK_IMPORTED_MODULE_5__);
            //import { of } from 'rxjs';
            //import { randomBytes } from 'crypto';
            var AlumnopanelComponent = /** @class */ (function () {
                function AlumnopanelComponent(firestoreService, router, gant) {
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
                AlumnopanelComponent.prototype.toggleCollapsed = function () {
                    this.collapsed = !this.collapsed;
                };
                AlumnopanelComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //Relleno array numerico
                    for (var i = 0; i <= 100; i++) {
                        this.numRecursosMaximo[i] = i;
                    }
                    var id = localStorage.getItem('idusuario');
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
                    this.firestoreService.getProyectosUsuario(id).subscribe(function (usuario) {
                        var e_15, _a;
                        //console.log('getProyectos', usuario);
                        var proyectos = [];
                        try {
                            for (var usuario_1 = __values(usuario), usuario_1_1 = usuario_1.next(); !usuario_1_1.done; usuario_1_1 = usuario_1.next()) {
                                var proyecto = usuario_1_1.value;
                                proyectos.push(proyecto.payload.doc.data());
                            }
                        }
                        catch (e_15_1) { e_15 = { error: e_15_1 }; }
                        finally {
                            try {
                                if (usuario_1_1 && !usuario_1_1.done && (_a = usuario_1.return)) _a.call(usuario_1);
                            }
                            finally { if (e_15) throw e_15.error; }
                        }
                        _this.cantidadVersiones = proyectos.length - 1;
                        localStorage.setItem('proyectos', JSON.stringify(proyectos));
                        //Esto estaba fuera, asi se arregla para no tener que recargar:
                        _this.alumno.proyectos = JSON.parse(localStorage.getItem('proyectos'));
                        if (_this.alumno.proyectos.length > 0) {
                            _this.compruebaEstadoProyecto();
                            //console.log(this.alumno);
                        }
                        else {
                            _this.noHayProyectos = true;
                        }
                        //console.log("ELSE",this.alumno.proyectos.length,this.noHayProyectos,this.estado);
                    });
                    //this.router.navigate(['/alumno']);
                };
                AlumnopanelComponent.prototype.logOut = function () {
                    localStorage.clear();
                    this.router.navigate(['/']);
                };
                AlumnopanelComponent.prototype.compruebaEstadoProyecto = function () {
                    var e_16, _a, e_17, _b;
                    var lestado = -1;
                    try {
                        //console.log("COMPRUEBA ESTADO",proyecto);
                        for (var _c = __values(this.alumno.proyectos), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var proyecto = _d.value;
                            //console.log("ESTADOndel proyecto",proyecto.estado)
                            if (proyecto.estado == "tareasCreadas") {
                                if (lestado < 2) {
                                    lestado = 2;
                                    this.estado = "tareasCreadas";
                                    try {
                                        for (var _e = (e_17 = void 0, __values(proyecto.tareas)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                            var tarea = _f.value;
                                            //console.log("tarea",tarea);
                                            this.tareasGant1.push(tarea);
                                        }
                                    }
                                    catch (e_17_1) { e_17 = { error: e_17_1 }; }
                                    finally {
                                        try {
                                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                        }
                                        finally { if (e_17) throw e_17.error; }
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
                    }
                    catch (e_16_1) { e_16 = { error: e_16_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_16) throw e_16.error; }
                    }
                    //console.log("lestado",this.proyectoTareas.tareas);
                    //console.log("tareasGant1", this.tareasGant1,this.estado);
                };
                AlumnopanelComponent.prototype.prueba = function () {
                    //console.log(this.proyectoTareas);
                };
                AlumnopanelComponent.prototype.selectPlantilla = function () {
                    this.primerpaso = false;
                    this.segundopaso = true;
                    var nombre = this.proyecto.nombre;
                    var desc = this.proyecto.descripcion;
                    this.proyecto = this.plantillas[this.plantillaSeleccionada];
                    this.proyecto.nombre = nombre;
                    this.proyecto.descripcion = desc;
                };
                AlumnopanelComponent.prototype.nuevoProyecto = function () {
                    var _this = this;
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
                    this.firestoreService.getPlantillas().subscribe(function (plantillas) {
                        var e_18, _a;
                        _this.plantillas = [];
                        try {
                            for (var plantillas_2 = __values(plantillas), plantillas_2_1 = plantillas_2.next(); !plantillas_2_1.done; plantillas_2_1 = plantillas_2.next()) {
                                var plantilla = plantillas_2_1.value;
                                _this.plantillas.push(plantilla.payload.doc.data());
                            }
                        }
                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                        finally {
                            try {
                                if (plantillas_2_1 && !plantillas_2_1.done && (_a = plantillas_2.return)) _a.call(plantillas_2);
                            }
                            finally { if (e_18) throw e_18.error; }
                        }
                        //console.log('plantillas', this.plantillas);
                    });
                };
                AlumnopanelComponent.prototype.eliminarElemento = function (index, tipo) {
                    //i es el indice en el array de elementos
                    //tipo es una cadena que representa el tipo de elemento a eliminar
                    if (tipo == 'recurso') {
                        this.proyectoTareas.recursos.splice(index, 1);
                    }
                    if (tipo == 'tarea') {
                        this.proyectoTareas.tareas.splice(index, 1);
                    }
                };
                AlumnopanelComponent.prototype.addTarea = function () {
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
                };
                AlumnopanelComponent.prototype.addRecurso = function () {
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
                };
                AlumnopanelComponent.prototype.guardarProyecto = function () {
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
                };
                AlumnopanelComponent.prototype.guardarProyectoInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.proyecto.estado = this.ESTADOS.CREADO;
                                    if (confirm("¿Desea guardar el proyecto?")) {
                                        alert("Datos guardados exitosamente");
                                    }
                                    else {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.firestoreService.creaProyecto(this.proyecto)];
                                case 1:
                                    _a.sent();
                                    this.mostrarTablaRecursos = false;
                                    this.proyecto = false;
                                    this.segundopaso = false;
                                    this.proyecto = null;
                                    location.reload();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.guardarProyectoTareas = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a, _b, tarea, _c, _d, recurso, query;
                        var e_19, _e, e_20, _f;
                        return __generator(this, function (_g) {
                            switch (_g.label) {
                                case 0:
                                    this.gestionarRecursos = false;
                                    try {
                                        for (_a = __values(this.proyectoTareas.tareas), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            tarea = _b.value;
                                            try {
                                                for (_c = (e_20 = void 0, __values(tarea.recursos)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                                    recurso = _d.value;
                                                    recurso.cantidadInicial = recurso.cantidad;
                                                }
                                            }
                                            catch (e_20_1) { e_20 = { error: e_20_1 }; }
                                            finally {
                                                try {
                                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                                }
                                                finally { if (e_20) throw e_20.error; }
                                            }
                                        }
                                    }
                                    catch (e_19_1) { e_19 = { error: e_19_1 }; }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                        }
                                        finally { if (e_19) throw e_19.error; }
                                    }
                                    //console.log("PROYECTO TAREAS", this.proyectoTareas);
                                    if (this.proyectoTareas.tareas.length == 0)
                                        return [2 /*return*/];
                                    // //Guardamos en DB
                                    //console.log("tareasmaximas", this.proyectoTareas);
                                    if (confirm("¿Desea guardar el proyecto?")) {
                                        alert("Datos guardados exitosamente");
                                    }
                                    else {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.firestoreService.creaProyecto(this.proyectoTareas)];
                                case 1:
                                    query = _g.sent();
                                    //this.gestionarRecursos = false;
                                    this.proyectoTareas = null;
                                    this.router.navigate(['/alumno']);
                                    location.reload();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.muestraVentanaTareas = function (usuario) {
                    var proyecto = this.proyectoTareas;
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
                };
                AlumnopanelComponent.prototype.getCantidadRecurso = function (recurso, tareas, j) {
                    var e_21, _a;
                    //console.log(recurso,tareas,j);
                    var c = recurso.cantidad;
                    try {
                        for (var tareas_1 = __values(tareas), tareas_1_1 = tareas_1.next(); !tareas_1_1.done; tareas_1_1 = tareas_1.next()) {
                            var tarea = tareas_1_1.value;
                            //console.log("ESTO", c, tarea);
                            c -= tarea.recursos[j].cantidad;
                        }
                    }
                    catch (e_21_1) { e_21 = { error: e_21_1 }; }
                    finally {
                        try {
                            if (tareas_1_1 && !tareas_1_1.done && (_a = tareas_1.return)) _a.call(tareas_1);
                        }
                        finally { if (e_21) throw e_21.error; }
                    }
                    return c;
                };
                AlumnopanelComponent.prototype.asignarRecursosTareas = function () {
                    var e_22, _a, e_23, _b, e_24, _c, e_25, _d;
                    if (this.proyectoTareas.tareas.length == 0) {
                        alert("Es necesario añadir antes alguna tarea");
                        return;
                    }
                    this.mostrarTabla = true;
                    if (this.proyectoTareas.tareas.length > 0 && (!this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].nombre || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].duracion || !this.proyectoTareas.tareas[this.proyectoTareas.tareas.length - 1].tipo)) {
                        this.mostrarTabla = true;
                        return;
                    }
                    try {
                        for (var _e = __values(this.tipoTareas), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var tarea = _f.value;
                            try {
                                for (var _g = (e_23 = void 0, __values(this.proyectoTareas.tareas)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                    var tar = _h.value;
                                    if (tarea.nombre == tar.tipo) {
                                        tar.pOptimo = tarea.pOptimo;
                                        tar.pPesimo = tarea.pPesimo;
                                        tar.recursosMin = tarea.recursosMin;
                                    }
                                }
                            }
                            catch (e_23_1) { e_23 = { error: e_23_1 }; }
                            finally {
                                try {
                                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                }
                                finally { if (e_23) throw e_23.error; }
                            }
                        }
                    }
                    catch (e_22_1) { e_22 = { error: e_22_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                        }
                        finally { if (e_22) throw e_22.error; }
                    }
                    //console.log(this.proyectoTareas.tareas);
                    this.asignarRecursos = true;
                    this.gestionarRecursos = false;
                    this.proyecto = false;
                    try {
                        for (var _j = __values(this.proyectoTareas.tareas), _k = _j.next(); !_k.done; _k = _j.next()) {
                            var tarea = _k.value;
                            tarea.recursos = [];
                            try {
                                for (var _l = (e_25 = void 0, __values(this.proyectoTareas.recursos)), _m = _l.next(); !_m.done; _m = _l.next()) {
                                    var recurso = _m.value;
                                    //if (!recurso.validado) continue;
                                    tarea.recursos.push({
                                        nombre: recurso.nombre,
                                        descripcion: recurso.descripcion,
                                        cantidad: 0
                                    });
                                }
                            }
                            catch (e_25_1) { e_25 = { error: e_25_1 }; }
                            finally {
                                try {
                                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                                }
                                finally { if (e_25) throw e_25.error; }
                            }
                        }
                    }
                    catch (e_24_1) { e_24 = { error: e_24_1 }; }
                    finally {
                        try {
                            if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                        }
                        finally { if (e_24) throw e_24.error; }
                    }
                    //console.log("RECURSOS A CERO", this.proyectoTareas);
                };
                AlumnopanelComponent.prototype.atrasGantt = function () {
                    window.location.reload();
                };
                AlumnopanelComponent.prototype.dibujaGant = function () {
                    var _this = this;
                    this.diagramaGant = true;
                    google.charts.load('current', { 'packages': ['gantt'] });
                    google.charts.setOnLoadCallback(function () {
                        var e_26, _a;
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'ID Tarea');
                        data.addColumn('string', 'Tarea');
                        data.addColumn('date', 'Inicio');
                        data.addColumn('date', 'Fin');
                        data.addColumn('number', 'Duracion');
                        data.addColumn('number', 'Porcentaje Completado');
                        data.addColumn('string', 'Dependencias');
                        if (_this.proyectoSimulacion != null) {
                            _this.tareasGant1 = _this.proyectoSimulacion.tareas;
                        }
                        try {
                            //console.log("DIBUJANDO GANT",this.tareasGant1);
                            for (var _b = __values(_this.tareasGant1), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var tarea = _c.value;
                                //console.log("DIBUJAR",tarea);
                                // let parts = tarea.inicio.split("-");
                                // let ano= parseInt(parts[0]);
                                // let mes= parseInt(parts[1]);
                                // let dia= parseInt(parts[2]);
                                if (tarea.porcentaje > 1) {
                                    tarea.porcentaje = 1;
                                }
                                _this.nombresTareasDependencia.push(tarea.nombre);
                                //console.log("AQUIESTA",tarea.nombre,tarea.nombre,new Date(ano,mes,dia),null,tarea.duracion,tarea.porcentaje,tarea.dependencia);
                                //console.log("AQUI 222",'2014Spring', 'Spring 2014',new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null);
                                if (!tarea.dependencia) {
                                    //--------------;
                                }
                                var hoy = null;
                                if (tarea.inicio !== 0 && !tarea.dependencia) {
                                    hoy = new Date();
                                    var inicio = hoy.getDate() + tarea.inicio;
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
                        }
                        catch (e_26_1) { e_26 = { error: e_26_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_26) throw e_26.error; }
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
                };
                AlumnopanelComponent.prototype.muestraVentanaRiesgos = function () {
                    //console.log("preriesgos", this.proyectoPreRiesgos);
                    this.crearRiesgos = true;
                    var proyecto = this.proyectoPreRiesgos;
                    this.proyectoRiesgos = {
                        nombre: proyecto.nombre,
                        descripcion: proyecto.descripcion,
                        estado: this.ESTADOS.RIESGOS_CREADOS,
                        recursos: proyecto.recursos,
                        tareas: proyecto.tareas,
                        riesgos: []
                    };
                    //console.log("PROYECTO EN estado", this.proyectoRiesgos);
                };
                AlumnopanelComponent.prototype.addRiesgo = function () {
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
                };
                AlumnopanelComponent.prototype.guardarProyectoRiesgos = function () {
                    if (this.proyectoRiesgos.riesgos.length == 0)
                        return;
                    //Guardamos en DB
                    //console.log("tareasmaximas", this.proyectoTareas);
                    this.firestoreService.creaProyecto(this.proyectoRiesgos);
                    this.crearRiesgos = false;
                    this.mostrarTablaRiesgos = false;
                    this.proyectoRiesgos = null;
                    this.proyectoPreRiesgos = null;
                };
                //------------------------SIMULACION----------------------------
                AlumnopanelComponent.prototype.tiempoPesimoOptimo = function (tiempo, porcentaje, opt) {
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
                };
                AlumnopanelComponent.prototype.simular = function () {
                    var e_27, _a;
                    this.simulacionPantalla = true;
                    //console.log(this.proyectoPreRiesgos, "simulacion");
                    var activities = {};
                    try {
                        for (var _b = __values(this.proyectoPreRiesgos.tareas), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            //console.log("Tiempopesimo",tarea.duracion,tarea.pOptimo,this.tiempoPesimoOptimo(tarea.tiempo,tarea.pOptimo,true));
                            if (!tarea.dependencia) {
                                var actividad = {
                                    id: tarea.nombre,
                                    optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
                                    mostLikelyTime: tarea.duracion,
                                    pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
                                    predecessors: []
                                };
                                activities[actividad.id] = actividad;
                            }
                            else {
                                var actividad = {
                                    id: tarea.nombre,
                                    optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
                                    mostLikelyTime: tarea.duracion,
                                    pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
                                    predecessors: [tarea.dependencia]
                                };
                                activities[actividad.id] = actividad;
                            }
                        }
                    }
                    catch (e_27_1) { e_27 = { error: e_27_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_27) throw e_27.error; }
                    }
                    //console.log('PERTACTIVITIEs', activities);
                    var pert = js_pert__WEBPACK_IMPORTED_MODULE_5___default()(activities);
                    //console.log('PERT', pert);
                    var Pz = Object(js_pert__WEBPACK_IMPORTED_MODULE_5__["pertProbability"])(pert, 90);
                    //console.log('P(x<22):', Pz);
                    //console.log("proyectoSimulacion", this.proyectoSimulacion)
                };
                AlumnopanelComponent.prototype.creaProyectoSimulacion = function (proyecto) {
                    var _this = this;
                    this.firestoreService.getEstadoActual(localStorage.getItem('idusuario')).subscribe(function (estados) {
                        var e_28, _a, e_29, _b, e_30, _c;
                        _this.estadosSimulacion = [];
                        try {
                            for (var estados_2 = __values(estados), estados_2_1 = estados_2.next(); !estados_2_1.done; estados_2_1 = estados_2.next()) {
                                var estadoSimulacion = estados_2_1.value;
                                _this.estadosSimulacion.push(estadoSimulacion.payload.doc.data());
                            }
                        }
                        catch (e_28_1) { e_28 = { error: e_28_1 }; }
                        finally {
                            try {
                                if (estados_2_1 && !estados_2_1.done && (_a = estados_2.return)) _a.call(estados_2);
                            }
                            finally { if (e_28) throw e_28.error; }
                        }
                        //console.log('estadosSimulacion', this.estadosSimulacion);
                        //Si no hay proyecto simulado en BD
                        if (!(_this.estadosSimulacion.length > 0)) {
                            //console.log("No hay");
                            var p = {
                                descripcion: proyecto.descripcion,
                                estado: _this.ESTADOS.SIMULACION,
                                nombre: proyecto.nombre,
                                diasTotalesProyecto: 0,
                                replanificado: 0,
                                recursos: proyecto.recursos,
                                tareas: []
                            };
                            try {
                                for (var _d = __values(proyecto.tareas), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    var tarea = _e.value;
                                    tarea = {
                                        dependencia: tarea.dependencia,
                                        duracion: tarea.duracion,
                                        nombre: tarea.nombre,
                                        pOptimo: tarea.pOptimo,
                                        pPesimo: tarea.pPesimo,
                                        porcentaje: tarea.porcentaje,
                                        diasEmpleados: 0,
                                        inicio: tarea.inicio,
                                        estado: _this.ESTADOSTAREAS.ESPERA,
                                        recursos: tarea.recursos,
                                        recursosMin: tarea.recursosMin
                                    };
                                    p.tareas.push(tarea);
                                }
                            }
                            catch (e_29_1) { e_29 = { error: e_29_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                                }
                                finally { if (e_29) throw e_29.error; }
                            }
                            //console.log("PROYECTO SIMULACION", p);
                            _this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), p);
                            _this.proyectoSimulacion = p;
                            //this.tareasGant1=this.proyectoSimulacion.tareas;
                        }
                        //Si le hay
                        else {
                            //console.log("Si hay", this.estadosSimulacion);
                            //Obtener el estado que nos interesa, el ultimo
                            var numeroDias = -1;
                            var numeroReplanificado = -1;
                            try {
                                for (var _f = __values(_this.estadosSimulacion), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    var estado = _g.value;
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
                                        _this.proyectoSimulacion = estado;
                                    }
                                    //Mismos días replanificado
                                    else if (estado.diasTotalesProyecto == numeroDias) {
                                        if (estado.replanificado > numeroReplanificado) {
                                            //console.log(estado,"REP")
                                            _this.proyectoSimulacion = estado;
                                            numeroReplanificado = estado.replanificado;
                                            numeroDias = estado.diasTotalesProyecto;
                                        }
                                    }
                                    //}
                                    //console.log(numeroDias,numeroReplanificado,estado,estado.diasTotalesProyecto==numeroDias)
                                }
                            }
                            catch (e_30_1) { e_30 = { error: e_30_1 }; }
                            finally {
                                try {
                                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                                }
                                finally { if (e_30) throw e_30.error; }
                            }
                            //console.log("proyectoSimulacion", this.proyectoSimulacion)
                        }
                    });
                    //console.log('estadosSimulacionFuera',this.estadosSimulacion);
                };
                AlumnopanelComponent.prototype.numeroAsignado = function (recurso, tareas) {
                    var e_31, _a, e_32, _b;
                    var asignados = 0;
                    try {
                        //console.log(tareas);
                        for (var tareas_2 = __values(tareas), tareas_2_1 = tareas_2.next(); !tareas_2_1.done; tareas_2_1 = tareas_2.next()) {
                            var tarea = tareas_2_1.value;
                            try {
                                for (var _c = (e_32 = void 0, __values(tarea.recursos)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    var rec = _d.value;
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
                            catch (e_32_1) { e_32 = { error: e_32_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                                }
                                finally { if (e_32) throw e_32.error; }
                            }
                        }
                    }
                    catch (e_31_1) { e_31 = { error: e_31_1 }; }
                    finally {
                        try {
                            if (tareas_2_1 && !tareas_2_1.done && (_a = tareas_2.return)) _a.call(tareas_2);
                        }
                        finally { if (e_31) throw e_31.error; }
                    }
                    return asignados;
                };
                AlumnopanelComponent.prototype.numeroAsignadoSimulacion = function (recurso, tareas) {
                    var e_33, _a, e_34, _b;
                    var asignados = 0;
                    try {
                        for (var tareas_3 = __values(tareas), tareas_3_1 = tareas_3.next(); !tareas_3_1.done; tareas_3_1 = tareas_3.next()) {
                            var tarea = tareas_3_1.value;
                            try {
                                for (var _c = (e_34 = void 0, __values(tarea.recursos)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    var rec = _d.value;
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
                            catch (e_34_1) { e_34 = { error: e_34_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                                }
                                finally { if (e_34) throw e_34.error; }
                            }
                        }
                    }
                    catch (e_33_1) { e_33 = { error: e_33_1 }; }
                    finally {
                        try {
                            if (tareas_3_1 && !tareas_3_1.done && (_a = tareas_3.return)) _a.call(tareas_3);
                        }
                        finally { if (e_33) throw e_33.error; }
                    }
                    return asignados;
                };
                AlumnopanelComponent.prototype.comprobacionMinRecursosAsignados = function () {
                    var e_35, _a;
                    try {
                        //.log("ME HA LLAMAO LAMOOOOOO", this.tareasEnProceso)
                        for (var _b = __values(this.tareasEnProceso), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            for (var i = 0; i < tarea.recursos.length; i++) {
                                //console.log("COMPROBACION", tarea.recursos[i].cantidad, tarea.recursosMin[i].cantidad);
                                if (tarea.recursos[i].cantidad < tarea.recursosMin[i].cantidad) {
                                    //console.log("COMPROBACION", tarea.nombre, tarea.recursos[i].nombre, tarea.recursos[i].cantidad, tarea.recursosMin[i].cantidad, tarea.recursosMin[i].cantidad);
                                    //Restamos lo que habíamos sumado
                                    tarea.diasEmpleados--;
                                    this.proyectoSimulacion.diasTotalesProyecto--;
                                    var evento = {
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
                    }
                    catch (e_35_1) { e_35 = { error: e_35_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_35) throw e_35.error; }
                    }
                    return true;
                };
                AlumnopanelComponent.prototype.avanzarSimulacion = function () {
                    var e_36, _a, e_37, _b, e_38, _c, e_39, _d, e_40, _e;
                    this.hayEvento = false;
                    //COmprobación sobreAsignación
                    if (this.estadosSimulacion.length > 1) {
                        try {
                            for (var _f = __values(this.proyectoSimulacion.recursos), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var recurso = _g.value;
                                if ((recurso.cantidad - this.numeroAsignadoSimulacion(recurso, this.proyectoSimulacion.tareas)) < 0) {
                                    var evento = {
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
                        catch (e_36_1) { e_36 = { error: e_36_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                            }
                            finally { if (e_36) throw e_36.error; }
                        }
                    }
                    while (!this.hayEvento) {
                        this.proyectoSimulacion.diasTotalesProyecto++;
                        try {
                            //console.log("COMIENzO ITERACION", this.proyectoSimulacion.tareas);
                            for (var _h = (e_37 = void 0, __values(this.proyectoSimulacion.tareas)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var tarea = _j.value;
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
                        }
                        catch (e_37_1) { e_37 = { error: e_37_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                            }
                            finally { if (e_37) throw e_37.error; }
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
                    var mayorProb = 0;
                    var index = 0;
                    //Probabilidad 2 de que acabe o se lance error
                    var random = this.getRandom();
                    this.probabilidades.sort(function (a, b) {
                        return a - b;
                    });
                    //console.log(random, this.probabilidades, this.tareasQuePuedenAcabar);
                    for (var i = 0; i < this.probabilidades.length; i++) {
                        if (this.probabilidades[i] > random) {
                            index = i;
                            break;
                        }
                    }
                    var eliminadas = this.tareasQuePuedenAcabar.splice(index, this.probabilidades.length - index);
                    for (var i = 0; i < eliminadas.length; i++) {
                        var evento = {
                            dia: this.proyectoSimulacion.diasTotalesProyecto,
                            accion: 'Fin de una tarea',
                            tareaImplicacada: eliminadas[i].nombre,
                            recursoImplicado: 'No procede'
                        };
                        var insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
                        eliminadas[i].estado = this.ESTADOSTAREAS.FINALIZADA;
                        this.tareasFinalizadas.push(eliminadas[i]);
                    }
                    try {
                        //Comprobación riesgo activado
                        //console.log("ENTRE!PREVIO");
                        for (var _k = __values(this.proyectoSimulacion.recursos), _l = _k.next(); !_l.done; _l = _k.next()) {
                            var recurso = _l.value;
                            //console.log("ENTRE!ANTES COMPROBACION", recurso.degradacion / 100, random);
                            if ((recurso.degradacion / 100) > random) {
                                //console.log("ENTRE!MAYOR");
                                recurso.cantidad--;
                                try {
                                    for (var _m = (e_39 = void 0, __values(this.proyectoSimulacion.tareas)), _o = _m.next(); !_o.done; _o = _m.next()) {
                                        var tarea = _o.value;
                                        //console.log("ENTRE!1", tarea.estado);
                                        if (tarea.estado == this.ESTADOSTAREAS.COMENZADA) {
                                            try {
                                                // console.log("ENTRE!");
                                                for (var _p = (e_40 = void 0, __values(tarea.recursos)), _q = _p.next(); !_q.done; _q = _p.next()) {
                                                    var recursoFallido = _q.value;
                                                    if ((recursoFallido.nombre == recurso.nombre)) {
                                                        recursoFallido.cantidad--;
                                                        var evento = {
                                                            dia: this.proyectoSimulacion.diasTotalesProyecto,
                                                            accion: 'Error recurso ya no disponible',
                                                            tareaImplicacada: tarea.nombre,
                                                            recursoImplicado: recursoFallido.nombre
                                                        };
                                                        var insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
                                                        alert("¡Ha sucedido algo inesperado! Un " + recursoFallido.nombre + " ha dejado de estar disponible, se ha eliminado uno de la tarea " + tarea.nombre + " Se recomienda comprobar.");
                                                        break;
                                                    }
                                                }
                                            }
                                            catch (e_40_1) { e_40 = { error: e_40_1 }; }
                                            finally {
                                                try {
                                                    if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
                                                }
                                                finally { if (e_40) throw e_40.error; }
                                            }
                                        }
                                    }
                                }
                                catch (e_39_1) { e_39 = { error: e_39_1 }; }
                                finally {
                                    try {
                                        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
                                    }
                                    finally { if (e_39) throw e_39.error; }
                                }
                            }
                        }
                    }
                    catch (e_38_1) { e_38 = { error: e_38_1 }; }
                    finally {
                        try {
                            if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                        }
                        finally { if (e_38) throw e_38.error; }
                    }
                    this.tareasQuePuedenAcabar = [];
                    this.probabilidades = [];
                    //console.log("TAREAS FINALIZADAS",this.tareasFinalizadas,this.proyectoComprobacionFinal.tareas.length);
                    if (this.getProyectoEsFinalizado()) {
                        var evento = {
                            dia: this.proyectoSimulacion.diasTotalesProyecto,
                            accion: 'Fin de la simulación, el proyecto acabó',
                            tareaImplicacada: 'No procede',
                            recursoImplicado: 'No procede'
                        };
                        var insert = this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento);
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
                };
                AlumnopanelComponent.prototype.getProyectoEsFinalizado = function () {
                    var e_41, _a;
                    try {
                        for (var _b = __values(this.proyectoSimulacion.tareas), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            if (tarea.estado != this.ESTADOSTAREAS.FINALIZADA) {
                                return false;
                            }
                        }
                    }
                    catch (e_41_1) { e_41 = { error: e_41_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_41) throw e_41.error; }
                    }
                    return true;
                };
                AlumnopanelComponent.prototype.creaTareasEnProceso = function () {
                    var e_42, _a, e_43, _b;
                    try {
                        for (var _c = __values(this.tareasQuePuedenComenzar), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var tarea = _d.value;
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
                                try {
                                    //console.log("DEPENDENCIA");
                                    for (var _e = (e_43 = void 0, __values(this.tareasFinalizadas)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var finalizada = _f.value;
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
                                catch (e_43_1) { e_43 = { error: e_43_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                    }
                                    finally { if (e_43) throw e_43.error; }
                                }
                            }
                        }
                    }
                    catch (e_42_1) { e_42 = { error: e_42_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_42) throw e_42.error; }
                    }
                    //console.log("Pueden comenzar: ", this.tareasQuePuedenComenzar)
                };
                AlumnopanelComponent.prototype.calculoPertComenzadas = function () {
                    var e_44, _a;
                    var random = this.getRandom();
                    try {
                        for (var _b = __values(this.tareasEnProceso), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            //tarea.porcentaje=tarea.diasEmpleados/tarea.duracion;
                            //let dependencia = tarea.dependencia == null ? [] : [tarea.dependencia];
                            //console.log(dependencia,"DEPENDENCIA");
                            var activities = {};
                            var actividad = {
                                id: tarea.nombre,
                                optimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pOptimo, true),
                                mostLikelyTime: tarea.duracion,
                                pessimisticTime: this.tiempoPesimoOptimo(tarea.duracion, tarea.pPesimo, false),
                                predecessors: []
                            };
                            activities[actividad.id] = actividad;
                            var pert = js_pert__WEBPACK_IMPORTED_MODULE_5___default()(activities);
                            var Pz = Object(js_pert__WEBPACK_IMPORTED_MODULE_5__["pertProbability"])(pert, tarea.diasEmpleados);
                            //console.log("PROBABILIDAD DE CADA TAREA", Pz, tarea.nombre, tarea.diasEmpleados, tarea.pOptimo, tarea.pPesimo, tarea.duracion);
                            //console.log("PROBABILIDAD DE CADA TAREA", Pz, random);
                            if (Pz > random) {
                                this.tareasQuePuedenAcabar.push(tarea);
                                this.probabilidades.push(Pz);
                                //console.log("PUEDE ACABAR",this.tareasQuePuedenAcabar,Pz,random,this.probabilidades);
                            }
                        }
                    }
                    catch (e_44_1) { e_44 = { error: e_44_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_44) throw e_44.error; }
                    }
                    if (this.tareasQuePuedenAcabar.length > 0) {
                        this.hayEvento = true;
                        this.tareasQuePuedenComenzar = [];
                        this.tareasEnProceso = [];
                        this.tareasFinalizadas = [];
                    }
                    //console.log("RAndom", random, this.tareasQuePuedenAcabar);
                };
                AlumnopanelComponent.prototype.getRandom = function () {
                    return Math.random();
                };
                AlumnopanelComponent.prototype.modificarPlanificacion = function () {
                    var e_45, _a;
                    var index = 0;
                    try {
                        for (var _b = __values(this.proyectoSimulacion.tareas), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var tarea = _c.value;
                            if (tarea.estado != this.ESTADOSTAREAS.FINALIZADA) {
                                this.tareasNoFinalizadas.push(tarea);
                                this.posicionesTareas.push(index);
                            }
                            index++;
                        }
                    }
                    catch (e_45_1) { e_45 = { error: e_45_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_45) throw e_45.error; }
                    }
                    //console.log("tareas no finalizadas",this.tareasNoFinalizadas,this.proyectoSimulacion.recursos);
                    this.simulacionPantalla = false;
                    this.replanificar = true;
                };
                AlumnopanelComponent.prototype.finReplanificacion = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var index, _a, _b, tarea, evento, insert, query;
                        var e_46, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    index = 0;
                                    try {
                                        for (_a = __values(this.tareasNoFinalizadas), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            tarea = _b.value;
                                            this.proyectoSimulacion.tareas[this.posicionesTareas[index]].recursos = tarea.recursos;
                                            index++;
                                        }
                                    }
                                    catch (e_46_1) { e_46 = { error: e_46_1 }; }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_46) throw e_46.error; }
                                    }
                                    this.proyectoSimulacion.replanificado++;
                                    evento = {
                                        dia: this.proyectoSimulacion.diasTotalesProyecto,
                                        accion: 'replanificacion',
                                        tareaImplicacada: 'No procede'
                                    };
                                    if (confirm("¿De verdad desea replanificar?")) {
                                    }
                                    else {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.firestoreService.setEvento(localStorage.getItem('idusuario'), evento)];
                                case 1:
                                    insert = _d.sent();
                                    return [4 /*yield*/, this.firestoreService.actualizaEstado(localStorage.getItem('idusuario'), this.proyectoSimulacion)];
                                case 2:
                                    query = _d.sent();
                                    alert("Replanificado correctamente");
                                    location.reload();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.tablaFin = function () {
                    var _this = this;
                    this.firestoreService.getEvento(localStorage.getItem('idusuario')).subscribe(function (eventos) {
                        var e_47, _a;
                        _this.eventos = [];
                        try {
                            for (var eventos_2 = __values(eventos), eventos_2_1 = eventos_2.next(); !eventos_2_1.done; eventos_2_1 = eventos_2.next()) {
                                var evento = eventos_2_1.value;
                                _this.eventos.push(evento.payload.doc.data());
                            }
                        }
                        catch (e_47_1) { e_47 = { error: e_47_1 }; }
                        finally {
                            try {
                                if (eventos_2_1 && !eventos_2_1.done && (_a = eventos_2.return)) _a.call(eventos_2);
                            }
                            finally { if (e_47) throw e_47.error; }
                        }
                        _this.eventos.sort(function (a, b) {
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
                };
                AlumnopanelComponent.prototype.downloadCSV = function (csv, filename) {
                    var csvFile;
                    var downloadLink;
                    csvFile = new Blob([csv], { type: "text/csv" });
                    downloadLink = document.createElement("a");
                    downloadLink.download = filename;
                    downloadLink.href = window.URL.createObjectURL(csvFile);
                    downloadLink.style.display = "none";
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                };
                AlumnopanelComponent.prototype.exportTableToCSV = function () {
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
                };
                AlumnopanelComponent.prototype.borrarProyectos = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!confirm("¿Desea eliminar los datos?")) return [3 /*break*/, 2];
                                    this.cargando = true;
                                    return [4 /*yield*/, this.firestoreService.deleteAll(localStorage.getItem('idusuario'))];
                                case 1:
                                    _a.sent();
                                    this.cargando = false;
                                    return [3 /*break*/, 3];
                                case 2: return [2 /*return*/];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.borrarSimulacion = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!confirm("¿Desea eliminar los datos?")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.firestoreService.deleteSimulacion(localStorage.getItem('idusuario'))];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2: return [2 /*return*/];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.almacenarResultados = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    data = {
                                        eventos: this.eventos,
                                        usuario: this.alumno.usuario.data
                                    };
                                    if (!confirm("¿Desea enviar los datos?")) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.firestoreService.guardaResultados(data)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2: return [2 /*return*/];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                AlumnopanelComponent.prototype.validateInput = function (numActual, numTotal, i, j) {
                    if (numActual > numTotal) {
                        this.proyectoTareas.tareas[i].recursos[j].cantidad = numTotal;
                    }
                    else if (numActual < 0) {
                        this.proyectoTareas.tareas[i].recursos[j].cantidad = 0;
                    }
                };
                AlumnopanelComponent.prototype.validateInputReplanificacion = function (numActual) {
                    if (numActual.cantidad < 0) {
                        numActual.cantidad = 0;
                    }
                };
                AlumnopanelComponent.prototype.validateInputTarea = function (i, num, caso) {
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
                };
                AlumnopanelComponent.prototype.validateInputCrear = function (recurso) {
                    //console.log(recurso);
                    if (recurso.cantidad < 0) {
                        recurso.cantidad = 0;
                    }
                };
                return AlumnopanelComponent;
            }());
            AlumnopanelComponent.ctorParameters = function () { return [
                { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"] }
            ]; };
            AlumnopanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-alumnopanel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alumnopanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alumnopanel/alumnopanel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alumnopanel.component.css */ "./src/app/alumnopanel/alumnopanel.component.css")).default]
                })
            ], AlumnopanelComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminpanel/adminpanel.component */ "./src/app/adminpanel/adminpanel.component.ts");
            /* harmony import */ var _alumnopanel_alumnopanel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alumnopanel/alumnopanel.component */ "./src/app/alumnopanel/alumnopanel.component.ts");
            var routes = [
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
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'tfg';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body {\n    font-family: \"Lato\", sans-serif;\n}\n\n\n\n.main-head{\n    height: 150px;\n    background: #FFF;\n   \n}\n\n\n\n.sidenav {\n    height: 100%;\n    background-color: #000;\n    overflow-x: hidden;\n    padding-top: 20px;\n}\n\n\n\n.main {\n    padding: 0px 10px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n}\n\n\n\n@media screen and (max-width: 450px) {\n    .login-form{\n        margin-top: 10%;\n    }\n\n    .register-form{\n        margin-top: 10%;\n    }\n}\n\n\n\n@media screen and (min-width: 768px){\n    .main{\n        margin-left: 40%; \n    }\n\n    .sidenav{\n        width: 40%;\n        position: fixed;\n        z-index: 1;\n        top: 0;\n        left: 0;\n    }\n\n    .login-form{\n        margin-top: 80%;\n    }\n\n    .register-form{\n        margin-top: 20%;\n    }\n}\n\n\n\n.login-main-text{\n    margin-top: 20%;\n    padding: 60px;\n    color: #fff;\n}\n\n\n\n.login-main-text h2{\n    font-weight: 300;\n}\n\n\n\n.btn-black{\n    background-color: #000 !important;\n    color: #fff;\n}\n\n\n\n.loginFail{\n    color: darkred;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7OztBQUdBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7O0FBRUE7SUFDSSxVQUFVLGlCQUFpQixDQUFDO0FBQ2hDOzs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7Ozs7QUFHQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmOzs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi5tYWluLWhlYWR7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgXG59XG5cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cblxuLm1haW4ge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXG4gICAgfVxuXG4gICAgLnNpZGVuYXZ7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5sb2dpbi1mb3Jte1xuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyLWZvcm17XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG59XG5cblxuLmxvZ2luLW1haW4tdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgcGFkZGluZzogNjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLW1haW4tdGV4dCBoMntcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnRuLWJsYWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luRmFpbHtcbiAgICBjb2xvcjogZGFya3JlZDtcbiAgICBcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore/firestore.service */ "./src/app/services/firestore/firestore.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(firestoreService, form, authenticationService, router) {
                    this.firestoreService = firestoreService;
                    this.form = form;
                    this.authenticationService = authenticationService;
                    this.router = router;
                    this.usuarios = [];
                    this.password = null;
                    this.email = null;
                    this.loginError = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //SESION
                    localStorage.getItem('idusuario');
                    localStorage.getItem('usuario');
                    this.loginUserForm = this.form.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    this.firestoreService.getUsuarios().subscribe(function (UsuariosSnapshot) {
                        _this.usuarios = [];
                        UsuariosSnapshot.forEach(function (alumnoData) {
                            _this.usuarios.push({
                                id: alumnoData.payload.doc.id,
                                data: alumnoData.payload.doc.data()
                            });
                            //console.log(this.usuarios[1]);
                        });
                    });
                };
                LoginComponent.prototype.login = function (form) {
                    var _this = this;
                    this.email = form.email;
                    this.password = form.password;
                    var result = this.authenticationService.loginWithEmail(this.email, this.password).then(function (data) {
                        //console.log(this.tipoUsuario());
                        if (_this.tipoUsuario() == "Profesor") {
                            //console.log(data);
                            _this.router.navigate(['admin']);
                        }
                        else if (_this.tipoUsuario() == "Alumno") {
                            //console.log(data);
                            _this.router.navigate(['alumno']);
                        }
                    }).catch(function (error) {
                        _this.loginError = true;
                        console.log("login error");
                    });
                };
                LoginComponent.prototype.tipoUsuario = function () {
                    var e_48, _a;
                    try {
                        for (var _b = __values(this.usuarios), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var usuario = _c.value;
                            if (usuario.data.email == this.email) {
                                console.log(usuario);
                                var id = usuario.id;
                                //SESION
                                localStorage.setItem('idusuario', id.toString());
                                localStorage.setItem('usuario', JSON.stringify(usuario));
                                //console.log(localStorage.getItem('usuario'));
                                return usuario.data.rol;
                            }
                        }
                    }
                    catch (e_48_1) { e_48 = { error: e_48_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_48) throw e_48.error; }
                    }
                    return null;
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AutenticathionService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/services/authentication/authentication.service.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/services/authentication/authentication.service.ts ***!
          \*******************************************************************/
        /*! exports provided: AutenticathionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticathionService", function () { return AutenticathionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
            var AutenticathionService = /** @class */ (function () {
                function AutenticathionService(angularFireAuth) {
                    this.angularFireAuth = angularFireAuth;
                }
                AutenticathionService.prototype.loginWithEmail = function (email, password) {
                    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
                };
                AutenticathionService.prototype.registerWithEmail = function (email, password) {
                    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
                };
                AutenticathionService.prototype.getStatus = function () {
                    return this.angularFireAuth.authState;
                };
                AutenticathionService.prototype.logOut = function () {
                    return this.angularFireAuth.auth.signOut();
                };
                return AutenticathionService;
            }());
            AutenticathionService.ctorParameters = function () { return [
                { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
            ]; };
            AutenticathionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AutenticathionService);
            /***/ 
        }),
        /***/ "./src/app/services/firestore/firestore.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/services/firestore/firestore.service.ts ***!
          \*********************************************************/
        /*! exports provided: FirestoreService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function () { return FirestoreService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
            /* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
            /* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_firebase_functions__WEBPACK_IMPORTED_MODULE_4__);
            var FirestoreService = /** @class */ (function () {
                function FirestoreService(firestore) {
                    this.firestore = firestore;
                }
                //------------------ALUMNOS/USUARIOS-------------------
                //Crea un nuevo alumno
                FirestoreService.prototype.creaAlumno = function (data) {
                    return this.firestore.collection('alumnos').add(data);
                };
                //Obtiene un alumno determinado
                FirestoreService.prototype.getUsuario = function (documentId) {
                    return this.firestore.collection('alumnos').doc(documentId).snapshotChanges();
                };
                FirestoreService.prototype.getProyectosUsuario = function (documentId) {
                    return this.firestore.collection('alumnos').doc(documentId).collection('proyectos').snapshotChanges();
                };
                //Obtiene todos los alumnos
                FirestoreService.prototype.getUsuarios = function () {
                    return this.firestore.collection('alumnos').snapshotChanges();
                };
                //Actualiza un alumno (Cambnio contraseña por ejemplo)
                FirestoreService.prototype.updateAlumno = function (documentId, data) {
                    return this.firestore.collection('alumnos').doc(documentId).set(data);
                };
                FirestoreService.prototype.deleteAlumno = function (documentId) {
                    return this.firestore.collection('alumnos').doc(documentId).delete();
                };
                FirestoreService.prototype.deteteAlumnoAuth = function (email) {
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
                };
                //---------------TAREAS Y PROYECTOS--------------------
                //Crea un nuevo proyecto
                FirestoreService.prototype.creaProyecto = function (data) {
                    var idAlumno = localStorage.getItem('idusuario');
                    return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);
                };
                //Crea una nueva plantilla de proyecto
                FirestoreService.prototype.creaPlantilla = function (data) {
                    return this.firestore.collection('/plantillasProyectos').add(data);
                };
                //Obtiene todas las plantillas de proyectos
                FirestoreService.prototype.getPlantillas = function () {
                    return this.firestore.collection('plantillasProyectos').snapshotChanges();
                };
                //VALIDACION RECURSOS
                FirestoreService.prototype.actualizarProyecto = function (idAlumno, data) {
                    return this.firestore.collection('alumnos/' + idAlumno + '/proyectos').add(data);
                };
                //Proyecto almacenaje resultados
                FirestoreService.prototype.guardaResultados = function (data) {
                    return this.firestore.collection('resultados/').add(data);
                };
                FirestoreService.prototype.getResultados = function () {
                    return this.firestore.collection('resultados').snapshotChanges();
                };
                //PROYECTO DELETE
                FirestoreService.prototype.deleteAll = function (idAlumno) {
                    var path = 'alumnos/' + idAlumno + '/proyectos';
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
                };
                FirestoreService.prototype.deleteProyectos = function (idAlumno) {
                    var path = 'alumnos/' + idAlumno + '/proyectos';
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
                };
                FirestoreService.prototype.deleteSimulacion = function (idAlumno) {
                    var path = 'alumnos/' + idAlumno + '/estadoSimulacion';
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
                };
                //---------------SIMULACIÓN--------------------
                //Nuevo estado Simulacion
                FirestoreService.prototype.actualizaEstado = function (idAlumno, data) {
                    return this.firestore.collection('alumnos/' + idAlumno + '/estadoSimulacion').add(data);
                };
                //Get all estados sumulacion
                FirestoreService.prototype.getEstadoActual = function (documentId) {
                    return this.firestore.collection('alumnos').doc(documentId).collection('estadoSimulacion').snapshotChanges();
                };
                //Evento 
                FirestoreService.prototype.setEvento = function (idAlumno, data) {
                    return this.firestore.collection('alumnos/' + idAlumno + '/eventos').add(data);
                };
                FirestoreService.prototype.getEvento = function (documentId) {
                    return this.firestore.collection('alumnos').doc(documentId).collection('eventos').snapshotChanges();
                };
                return FirestoreService;
            }());
            FirestoreService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FirestoreService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/josealbertodelval/Desktop/proyectoPlanificacionee/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map