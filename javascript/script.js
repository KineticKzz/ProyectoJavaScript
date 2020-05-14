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

function añadir(){
  var alumno1 = new Alumno("Pepe", "Jmenez Sanchez", "1º", "ASIR");
  var alumno2 = new Alumno("Federico", "Martinez Gonzalez", "1º", "ASIR");
  var alumno2 = new Alumno("Arturo", "Vidal Reina", "2º", "ASIR");
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
