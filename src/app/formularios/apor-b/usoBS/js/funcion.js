function mostrar()
{
    let nombre = document.getElementById("txtNombre").value; 
    let apellidos = document.getElementById("txtApellidos").value;
    let correo = document.getElementById("txtCorreo").value;

    let genero;
    let rbtGenero1 = document.getElementById("rbtGenero1").checked;
    let rbtGenero2 = document.getElementById("rbtGenero2").checked;
    let rbtGenero3 = document.getElementById("rbtGenero3").checked;

    if(rbtGenero1){
        genero="Masculino"
    }
    else if(rbtGenero2){
        genero="Femenino"
    }
    else if(rbtGenero3){
        genero="Otro"
    }

    let fn = document.getElementById("txtFN").value;
    let color = document.getElementById("txtColor").value;

    let msj= "Gracias, en breve contactaremos contigo"+"<br> Los datos que has propprcionado son:"
    +"<br> Nombre: "+nombre
    +"<br> Apellidos: "+apellidos
    +"<br> Correo: "+correo
    +"<br> Genero: "+genero
    +"<br> Fecha de nacimiento: "+fn
    +"<br> Color favorito: "+color


    document.getElementById("contenido").innerHTML= msj;
}