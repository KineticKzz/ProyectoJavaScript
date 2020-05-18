/*COMPROBAMOS QUE DIA DE LA SEMANA ES*/
function ComprobarDia(dia1,mes,año){
  var dias = ["dom","lun","mar","mie","jue","vie","sab"];
  var dt = new Date(mes+' '+dia1+', '+año+' 12:00:00');
  return(dias[dt.getDay()]);    
}
function getVerificar1(comprobacion, dias){
  if ( comprobacion != "lun" || dias != 7) {
    alert("El primer dia introducido no empieza por Lunes o no has puesto 7 dias en la semana");
    return 0;
    }else{
    return 1;
    }
}

function abrirMenu() {
  document.getElementById("menu-lateral").style.width = "250px";
  document.getElementById("cuerpo").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("contenido-principal").style.opacity = 0.2;
  
  document.getElementById("botonMenu").style.display = "none";
  document.getElementById("botonMenuAux").style.display = "none";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function cerrarMenu() {
  document.getElementById("menu-lateral").style.width = "0";
  document.getElementById("cuerpo").style.marginLeft = "0";
  document.body.style.backgroundColor = "#090933";
  document.getElementById("contenido-principal").style.opacity = 1;

  document.getElementById("botonMenu").style.display = "block";
  document.getElementById("botonMenuAux").style.display = "block";
}

function Alumno(nombre, apellidos, curso, ciclo){
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.curso = curso;
  this.ciclo = ciclo;
}
function Profesor(nombre, apellidos){
  this.nombre = nombre;
  this.apellidos = apellidos;
}
function Empresa(nombre, direccion, pagWeb, nomContacto, telContacto, emailContacto, tutor, telTutor, emailTutor){
  this.nombre = nombre;
  this.direccion = direccion;
  this.pagWeb = pagWeb;
  this.nomContacto = nomContacto;
  this.telContacto = telContacto;
  this.emailContacto = emailContacto;
  this.tutor = tutor;
  this.telTutor = telTutor;
  this.emailTutor = emailTutor;
}
function Asignacion(nombre, empresaytutor, tutorDocente, f_inicio, f_fin){
  this.nombre = nombre;
  this.empresaytutor = empresaytutor;
  this.tutorDocente = tutorDocente;
  this.f_inicio = f_inicio;
  this.f_fin = f_fin;
}
function Actividades(dia, actividades, horas){
  this.dia = dia;
  this.actividades = actividades;
  this.horas = horas;
}


function abrirAlumnos(){
  document.getElementById("alumnos").style.display= "block";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "none";
  document.getElementById("botonAux").style.display= "block";
}
function abrirEmpresa(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "block";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "none";
  document.getElementById("botonAux").style.display= "block";
}
function abrirProfesores(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "block";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "none";
  document.getElementById("botonAux").style.display= "block";
}
function abrirAsignacion(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "block";
  document.getElementById("actividades").style.display= "none";
  document.getElementById("botonAux").style.display= "block"
}
function abrirActividades(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "block";
  document.getElementById("botonAux").style.display= "none"
}

function AñadirEstudiante(){
  document.getElementById("modalEstudiante").style.display = "block";
}
function AñadirEmpresa(){
  document.getElementById("modalEmpresa").style.display = "block";
}
function AñadirProfesor(){
  document.getElementById("modalProfesor").style.display = "block";
}
function AñadirAsignacion(){
  document.getElementById("modalAsignacion").style.display = "block";
}
function AñadirActividad(){
  document.getElementById("modalActividades").style.display = "block";
}
function CerrarModalEstudiante(){
  /*var modal = document.getElementById("modalEstudiante")[0];
  modal.style.display = "none";*/
  document.getElementById("modalEstudiante").style.display = "none";
}
function CerrarModalEmpresa(){
  document.getElementById("modalEmpresa").style.display = "none";
}
function CerrarModalProfesor(){
  document.getElementById("modalProfesor").style.display = "none";
}
function CerrarModalAsignacion(){
  document.getElementById("modalAsignacion").style.display = "none";
}
function CerrarModalActividades(){
  document.getElementById("modalActividades").style.display = "none";
}
function enviarEstudiante(){
  var nombre = document.getElementById("nombreEstudiante").value;
  var apellidos = document.getElementById("apellidosEstudiante").value; 
  var curso = document.getElementById("cursoEstudiante").value; 
  var ciclo = document.getElementById("cicloEstudiante").value;

  var tabla = document.getElementById("tablaEstudiante");

  var x = (nombre +" "+ apellidos);
  var nuevoAlumno = new Alumno(nombre, apellidos, curso, ciclo);

  var nombreNodo = document.createTextNode(nombre);
  var apellidosNodo = document.createTextNode(apellidos);
  var cursoNodo = document.createTextNode(curso);
  var cicloNodo = document.createTextNode(ciclo);

  var etiquetaEstudiante = document.createElement("tr");
  var etiquetaNombre = document.createElement("td");
  var etiquetaApellidos = document.createElement("td");
  var etiquetaCurso = document.createElement("td");
  var etiquetaCiclo = document.createElement("td");

  etiquetaNombre.appendChild(nombreNodo);
  etiquetaApellidos.appendChild(apellidosNodo);
  etiquetaCiclo.appendChild(cicloNodo);
  etiquetaCurso.appendChild(cursoNodo);
  tabla.appendChild(etiquetaEstudiante);

  etiquetaEstudiante.appendChild(etiquetaNombre);
  etiquetaEstudiante.appendChild(etiquetaApellidos);
  etiquetaEstudiante.appendChild(etiquetaCurso);
  etiquetaEstudiante.appendChild(etiquetaCiclo);

  var nuevoOption = document.getElementById("alumnoActividades");
  var nodoAlumno = document.createTextNode(x);
  var etiquetaAlumno = document.createElement("option");
  etiquetaAlumno.appendChild(nodoAlumno);
  nuevoOption.appendChild(etiquetaAlumno);
}
function enviarProfesor(){
  var nombre = document.getElementById("nombreProfesor").value;
  var apellidos = document.getElementById("apellidosProfesor").value;
  var tabla = document.getElementById("tablaProfesor");

  var nuevoProfesor = new Profesor(nombre, apellidos);

  var nombreNodo = document.createTextNode(nombre);
  var apellidosNodo = document.createTextNode(apellidos);
  var etiquetaProfesor = document.createElement("tr");
  var etiquetaNombre = document.createElement("td");
  var etiquetaApellidos = document.createElement("td");

  etiquetaNombre.appendChild(nombreNodo);
  etiquetaApellidos.appendChild(apellidosNodo);
  tabla.appendChild(etiquetaProfesor);
  etiquetaProfesor.appendChild(etiquetaNombre);
  etiquetaProfesor.appendChild(etiquetaApellidos);
}
function enviarEmpresa(){
  var nombre = document.getElementById("nombreEmpresa").value;
  var direccion = document.getElementById("direccionEmpresa").value; 
  var pagWeb = document.getElementById("pagWeb").value; 
  var nomContacto = document.getElementById("nomContacto").value;
  var telContacto = document.getElementById("telContacto").value;
  var emailContacto = document.getElementById("emailContacto").value;
  var tutor = document.getElementById("tutor").value;
  var telTutor = document.getElementById("telTutor").value;
  var emailTutor = document.getElementById("emailTutor").value;

  var tabla = document.getElementById("tablaEmpresa");

  var nuevaEmpresa = new Empresa(nombre, direccion, pagWeb, nomContacto, telContacto, emailContacto, tutor, telTutor, emailTutor);
  console.log(nuevaEmpresa);

  var nombreNodo = document.createTextNode(nombre);
  var direccionNodo = document.createTextNode(direccion);
  var pagWebNodo = document.createTextNode(pagWeb);
  var nomContactoNodo = document.createTextNode(nomContacto);
  var telContactoNodo = document.createTextNode(telContacto);
  var emailContactoNodo = document.createTextNode(emailContacto);
  var tutorNodo = document.createTextNode(tutor);
  var telTutorNodo = document.createTextNode(telTutor);
  var emailTutorNodo = document.createTextNode(emailTutor);

  var etiquetaEmpresa = document.createElement("tr");
  var etiquetaNombre = document.createElement("td");
  var etiquetaDireccion = document.createElement("td");
  var etiquetaPagWeb = document.createElement("td");
  var etiquetaNomContacto = document.createElement("td");
  var etiquetaTelContacto = document.createElement("td");
  var etiquetaEmailContacto = document.createElement("td");
  var etiquetaTutor = document.createElement("td");
  var etiquetaTelTutor = document.createElement("td");
  var etiquetaEmailTutor = document.createElement("td");

  etiquetaNombre.appendChild(nombreNodo);
  etiquetaDireccion.appendChild(direccionNodo);
  etiquetaPagWeb.appendChild(pagWebNodo);
  etiquetaNomContacto.appendChild(nomContactoNodo);
  etiquetaTelContacto.appendChild(telContactoNodo);
  etiquetaEmailContacto.appendChild(emailContactoNodo);
  etiquetaTutor.appendChild(tutorNodo);
  etiquetaTelTutor.appendChild(telTutorNodo);
  etiquetaEmailTutor.appendChild(emailTutorNodo);


  tabla.appendChild(etiquetaEmpresa);

  etiquetaEmpresa.appendChild(etiquetaNombre);
  etiquetaEmpresa.appendChild(etiquetaDireccion);
  etiquetaEmpresa.appendChild(etiquetaPagWeb);
  etiquetaEmpresa.appendChild(etiquetaNomContacto);
  etiquetaEmpresa.appendChild(etiquetaTelContacto);
  etiquetaEmpresa.appendChild(etiquetaEmailContacto);
  etiquetaEmpresa.appendChild(etiquetaTutor);
  etiquetaEmpresa.appendChild(etiquetaTelTutor);
  etiquetaEmpresa.appendChild(etiquetaEmailTutor);
}
function comprobarFecha(){
  var dia1 = document.getElementById("dia1Actividades").value;
  var dia2 = document.getElementById("dia2Actividades").value;
  var mes = document.getElementById("mesActividades").value;
  var año = document.getElementById("añoActividades").value;
  var comprobacion = ComprobarDia(dia1,mes,año);
  var dias = dia2 - dia1;
  var verificacion1 = getVerificar1(comprobacion, dias);
}
function seguirActividades(){
  var alumno = document.getElementById("alumnoActividades").value
}


/* CRECION OBJETOS ALUMNO */
/* CRECION OBJETOS ALUMNO */
var Alumno01 = new Alumno ("Sergio", "Fernandez Martinez", "2º", "ASIR");
var Alumno02 = new Alumno ("Pepe", "Hidalgo Martinez", "2º", "ASIR");
var Alumno03 = new Alumno ("Cristian", "Callejas Fuentes", "2º", "ASIR");

/* CRECION OBJETOS PROFESOR */
/* CRECION OBJETOS PROFESOR */
var Profesor01 = new Profesor ("Guillermo",	"Salas Collado");
var Profesor02 = new Profesor ("Maria",	"Benitez Martinez");
var Profesor03 = new Profesor ("Alberto",	"Garcia Mejias");

/* CREACION DE EMPRESAS */
/* CREACION DE EMPRESAS */
var Empresa01 = new Empresa ("GFI Informatica","Edificio Inn Offices, Calle Leonardo da Vinci, 20, 41092 Sevilla","www.gfi.world","Raul Fernandez Perez","123125343","3333@gmail.com","Manolo Alcántara","563465443","44444@gmail.com");
var Empresa02 = new Empresa ("Fujistu","Av. San Francisco Javier, 20, 41018 Sevilla","www.fujitsu.com","Gabriel Aranda Martinez","123456789","11111@gmail.com","Antonio Fernandez","987654321","22222@gmail.com");
var Empresa03 = new Empresa ("App Informatica","Calle Real 20, 41120 Sevilla","www.appinformatica.com","Maria Jimenez","234654353","5555@gmail.com","Jose Perez","674332455","66666@gmail.com");

/* CREACION DE ASIGNACIONES */
/* CREACION DE ASIGNACIONES */
var Asignacion01 = new Asignacion (Alumno01.nombre + " " + Alumno01.apellidos, Empresa01.nombre + "(" + Empresa01.tutor + ")" , Profesor01.nombre + " " + Profesor01.apellidos, "16/02/2020", "21/06/2020");
var Asignacion02 = new Asignacion (Alumno02.nombre + " " + Alumno02.apellidos, Empresa02.nombre + "(" + Empresa02.tutor + ")" , Profesor02.nombre + " " + Profesor02.apellidos, "16/02/2020", "21/06/2020");
var Asignacion03 = new Asignacion (Alumno03.nombre + " " + Alumno03.apellidos, Empresa03.nombre + "(" + Empresa03.tutor + ")" , Profesor03.nombre + " " + Profesor03.apellidos, "16/02/2020", "21/06/2020");
var tablaAsignacion = document.getElementById("tablaAsignacion");
var nombreAsignacion01 = document.createTextNode(Asignacion01.nombre);
var empresaAsignacion01 = document.createTextNode(Asignacion01.empresaytutor);
var tutorDocenteAsignacion01 = document.createTextNode(Asignacion01.tutorDocente);
var f_inicioAsignacion01 = document.createTextNode(Asignacion01.f_inicio);
var f_finAsignacion01 = document.createTextNode(Asignacion01.f_fin);
var etiquetaAsignacion01 = document.createElement("tr");
var etiquetaNombreAsignacion01 = document.createElement("td");
var etiquetaEmpresaAsignacion01 = document.createElement("td");
var etiquetaTutorAsignacion01 = document.createElement("td");
var etiquetaF_inicioAsignacion01 = document.createElement("td");
var etiquetaF_finAsignacion01 = document.createElement("td");
etiquetaNombreAsignacion01.appendChild(nombreAsignacion01);
etiquetaEmpresaAsignacion01.appendChild(empresaAsignacion01);
etiquetaTutorAsignacion01.appendChild(tutorDocenteAsignacion01);
etiquetaF_inicioAsignacion01.appendChild(f_inicioAsignacion01);
etiquetaF_finAsignacion01.appendChild(f_finAsignacion01);
tablaAsignacion.appendChild(etiquetaAsignacion01);
etiquetaAsignacion01.appendChild(etiquetaNombreAsignacion01);
etiquetaAsignacion01.appendChild(etiquetaEmpresaAsignacion01);
etiquetaAsignacion01.appendChild(etiquetaTutorAsignacion01);
etiquetaAsignacion01.appendChild(etiquetaF_inicioAsignacion01);
etiquetaAsignacion01.appendChild(etiquetaF_finAsignacion01);
 
var tablaAsignacion = document.getElementById("tablaAsignacion");
var nombreAsignacion02 = document.createTextNode(Asignacion02.nombre);
var empresaAsignacion02 = document.createTextNode(Asignacion02.empresaytutor);
var tutorDocenteAsignacion02 = document.createTextNode(Asignacion02.tutorDocente);
var f_inicioAsignacion02 = document.createTextNode(Asignacion02.f_inicio);
var f_finAsignacion02 = document.createTextNode(Asignacion02.f_fin);
var etiquetaAsignacion02 = document.createElement("tr");
var etiquetaNombreAsignacion02 = document.createElement("td");
var etiquetaEmpresaAsignacion02 = document.createElement("td");
var etiquetaTutorAsignacion02 = document.createElement("td");
var etiquetaF_inicioAsignacion02 = document.createElement("td");
var etiquetaF_finAsignacion02 = document.createElement("td");
etiquetaNombreAsignacion02.appendChild(nombreAsignacion02);
etiquetaEmpresaAsignacion02.appendChild(empresaAsignacion02);
etiquetaTutorAsignacion02.appendChild(tutorDocenteAsignacion02);
etiquetaF_inicioAsignacion02.appendChild(f_inicioAsignacion02);
etiquetaF_finAsignacion02.appendChild(f_finAsignacion02);
tablaAsignacion.appendChild(etiquetaAsignacion02);
etiquetaAsignacion02.appendChild(etiquetaNombreAsignacion02);
etiquetaAsignacion02.appendChild(etiquetaEmpresaAsignacion02);
etiquetaAsignacion02.appendChild(etiquetaTutorAsignacion02);
etiquetaAsignacion02.appendChild(etiquetaF_inicioAsignacion02);
etiquetaAsignacion02.appendChild(etiquetaF_finAsignacion02);
 
var tablaAsignacion = document.getElementById("tablaAsignacion");
var nombreAsignacion03 = document.createTextNode(Asignacion03.nombre);
var empresaAsignacion03 = document.createTextNode(Asignacion03.empresaytutor);
var tutorDocenteAsignacion03 = document.createTextNode(Asignacion03.tutorDocente);
var f_inicioAsignacion03 = document.createTextNode(Asignacion03.f_inicio);
var f_finAsignacion03 = document.createTextNode(Asignacion03.f_fin);
var etiquetaAsignacion03 = document.createElement("tr");
var etiquetaNombreAsignacion03 = document.createElement("td");
var etiquetaEmpresaAsignacion03 = document.createElement("td");
var etiquetaTutorAsignacion03 = document.createElement("td");
var etiquetaF_inicioAsignacion03 = document.createElement("td");
var etiquetaF_finAsignacion03 = document.createElement("td");
etiquetaNombreAsignacion03.appendChild(nombreAsignacion03);
etiquetaEmpresaAsignacion03.appendChild(empresaAsignacion03);
etiquetaTutorAsignacion03.appendChild(tutorDocenteAsignacion03);
etiquetaF_inicioAsignacion03.appendChild(f_inicioAsignacion03);
etiquetaF_finAsignacion03.appendChild(f_finAsignacion03);
tablaAsignacion.appendChild(etiquetaAsignacion03);
etiquetaAsignacion03.appendChild(etiquetaNombreAsignacion03);
etiquetaAsignacion03.appendChild(etiquetaEmpresaAsignacion03);
etiquetaAsignacion03.appendChild(etiquetaTutorAsignacion03);
etiquetaAsignacion03.appendChild(etiquetaF_inicioAsignacion03);
etiquetaAsignacion03.appendChild(etiquetaF_finAsignacion03);
 



var y = document.getElementById("alumnoActividades");
var nodoAlumno01 = document.createTextNode(Alumno01.nombre +" "+ Alumno01.apellidos);
var etiquetaAlumno01 = document.createElement("option");
etiquetaAlumno01.appendChild(nodoAlumno01);
y.appendChild(etiquetaAlumno01);

var z = document.getElementById("alumnoActividades");
var nodoAlumno02 = document.createTextNode(Alumno02.nombre +" "+ Alumno02.apellidos);
var etiquetaAlumno02 = document.createElement("option");
etiquetaAlumno02.appendChild(nodoAlumno02);
z.appendChild(etiquetaAlumno02);

var v = document.getElementById("alumnoActividades");
var nodoAlumno03 = document.createTextNode(Alumno03.nombre +" "+ Alumno03.apellidos);
var etiquetaAlumno03 = document.createElement("option");
etiquetaAlumno03.appendChild(nodoAlumno03);
v.appendChild(etiquetaAlumno03);