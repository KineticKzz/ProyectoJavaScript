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
function Asignaciones(nombre, empresaytutor, tutorDocente, f_inicio, f_fin){
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
}
function abrirEmpresa(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "block";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "none";
}
function abrirProfesores(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "block";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "none";
}
function abrirAsignacion(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "block";
  document.getElementById("actividades").style.display= "none";
}
function abrirActividades(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignacion").style.display= "none";
  document.getElementById("actividades").style.display= "block";
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
  var x = (nombre + apellidos);
  var x = new Alumno (nombre, apellidos, curso, ciclo);
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
}
function enviarProfesor(){
  var nombre = document.getElementById("nombreProfesor").value;
  var apellidos = document.getElementById("apellidosProfesor").value; 
  var tabla = document.getElementById("tablaProfesor");
  var x = (nombre + apellidos);
  var x = new Profesor(nombre, apellidos);
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
function enviarActividades(){
  var dia1 = document.getElementById("dia1Actividades").value;
  var dia2 = document.getElementById("dia2Actividades").value;
  var mes = document.getElementById("mesActividades").value;
  var año = document.getElementById("añoActividades").value;
  var comprobacion = ComprobarDia(dia1,mes,año);
  var dias = dia2 - dia1;
  var verificacion1 = getVerificar1(comprobacion, dias);
  console.log(verificacion1);
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

console.log(Alumno.apellidos);