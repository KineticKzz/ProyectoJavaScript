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
  document.getElementById("asignaciones").style.display= "none";
  document.getElementById("actividades").style.display= "none";
}
function abrirEmpresa(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "block";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignaciones").style.display= "none";
  document.getElementById("actividades").style.display= "none";
}
function abrirProfesores(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "block";
  document.getElementById("asignaciones").style.display= "none";
  document.getElementById("actividades").style.display= "none";
}
function abrirAsignaciones(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignaciones").style.display= "block";
  document.getElementById("actividades").style.display= "none";
}
function abrirActividades(){
  document.getElementById("alumnos").style.display= "none";
  document.getElementById("empresa").style.display= "none";
  document.getElementById("profesores").style.display= "none";
  document.getElementById("asignaciones").style.display= "none";
  document.getElementById("actividades").style.display= "block";
}

function AñadirActividad(){
  document.getElementById("myModal").style.display = "block";
}
function enviarActividades(){
  var dia1 = document.getElementById("dia1Actividades").value;
  var dia2 = document.getElementById("dia2Actividades").value;
  var mes = document.getElementById("mesActividades").value;
  var año = document.getElementById("añoActividades").value;
  var comprobacion = ComprobarDia(dia1,mes,año);
  var dias = dia2 - dia1;
  if ( comprobacion != "lun" || dias != 7) {
    alert("El primer dia introducido no empieza por Lunes o no has puesto 7 dias en la semana");
  }
}


/* VARIABLES PARA EL DIALOGO MODAL */
/* VARIABLES PARA EL DIALOGO MODAL */
/* VARIABLES PARA EL DIALOGO MODAL */
var modal = document.getElementById("myModal");
var btn = document.getElementById("AñadirActividad");
var span = document.getElementsByClassName("close")[0];
// cuando se clickea en la "x" se cierra el dialogo modal
span.onclick = function() {
  modal.style.display = "none";
}

// cuando se clickea en la ventana fuera del modal, se cierra el dialogo modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function ComprobarDia(dia1,mes,año){
  var dias = ["dom","lun","mar","mie","jue","vie","sab"];
  var dt = new Date(mes+' '+dia1+', '+año+' 12:00:00');
  return(dias[dt.getDay()]);    
}



/* CRECION OBJETOS ALUMNO */
/* CRECION OBJETOS ALUMNO */
/* CRECION OBJETOS ALUMNO */
var Alumno01 = new Alumno ("Sergio", "Fernandez Martinez", "2º", "ASIR");
var Alumno92 = new Alumno ("Pepe", "Hidalgo Martinez", "2º", "ASIR");
var Alumno03 = new Alumno ("Cristian", "Callejas Fuentes", "2º", "ASIR");

console.log(Alumno01)