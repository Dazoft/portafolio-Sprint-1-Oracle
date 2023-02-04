/*
fraseCod=fraseCod.replaceAll("e","enter")
fraseCod=fraseCod.replaceAll("i","imes")
fraseCod=fraseCod.replaceAll("a","ai")
fraseCod=fraseCod.replaceAll("o","ober")
fraseCod=fraseCod.replaceAll("u","ufat")*/

/*
/para separación
i: afecta a minúsculas y mayúsculas
g: es para toda la linea de la oración
m: es para que afecte a múltiples líneas o párrafos*/


function encriptar(){
    let fraseCod=document.getElementById("inputTexto").value.toLowerCase();
    
    fraseCod=fraseCod.replaceAll(/e/igm,"enter");
    fraseCod=fraseCod.replaceAll(/i/igm,"imes");
    fraseCod=fraseCod.replaceAll(/a/igm,"ai");
    fraseCod=fraseCod.replaceAll(/o/igm,"ober");
    fraseCod=fraseCod.replaceAll(/u/igm,"ufat");
/*.style.display = none
oculta un elemento en la pagina temporalmente*/
/*Para este caso se oculta la imgen derecha cuando se 
ejecute la orden de desencriptar o encriptar*/
    document.getElementById("imgDer")
/*lo mismo se hace en el área de texto*/
    document.getElementById("fraseCod")
/* .innerHTML
acceder o cambiar un contenido HTML
En este caso se cambia el contenido del texto de mensaje
abajo de ningún mensaje fue encontrado*/
    document.getElementById("text-mensaje").innerHTML=fraseCod;
/* .style.display= "show"
Muestra el contenido*/   
    document.getElementById("btn-copiar").style.display="show";
/* .style.display= "inherit"
hereda el contenido display de arriba*/    
    document.getElementById("btn-copiar").style.display= "inherit";
}

function desencriptar(){
    let fraseCod=document.getElementById("inputTexto").value.toLowerCase();
    
    fraseCod=fraseCod.replaceAll(/enter/igm,"e");
    fraseCod=fraseCod.replaceAll(/imes/igm,"i");
    fraseCod=fraseCod.replaceAll(/ai/igm,"a");
    fraseCod=fraseCod.replaceAll(/ober/igm,"o");
    fraseCod=fraseCod.replaceAll(/ufat/igm,"u");

/*.style.display = none
oculta un elemento en la pagina temporalmente*/
/*Para este caso se oculta la imgen derecha cuando se 
ejecute la orden de desencriptar o encriptar*/
document.getElementById("imgDer")
/*lo mismo se hace en el área de texto*/
    document.getElementById("fraseCod")
/* .innerHTML
acceder o cambiar un contenido HTML
En este caso se cambia el contenido del texto de mensaje
abajo de ningún mensaje fue encontrado*/
    document.getElementById("text-mensaje").innerHTML=fraseCod;
/* .style.display= "show"
Muestra el contenido*/   
    document.getElementById("btn-copiar").style.display="show";
/* .style.display= "inherit"
hereda el contenido display de arriba*/    
    document.getElementById("btn-copiar").style.display= "inherit";
}
/*
document.query.Selector("# o .") id o class
selecciona un elemento en una página y realiza alguna accion*/
/*
contenido.select()
para seleccionar contenido como si se hiciera con mouse*/
/*
document.execCommand("copy")
sirve para realizazr acciones como copiar, pegar, cortar, etc*/
function copiar(){
    let contenido=document.querySelector("#text-mensaje");
    contenido.select();
    document.execCommand("copy");
    Swal.fire({
        
        title: 'El texto se copió con éxito',
        text: 'Para desencriptar, debes borrar el texto en el "Area de texto", pegar y desencriptar',
        icon: 'success',
        
      //   footer: '<span id="rojo">Elaborado by Dazoft</span>',
        confirmButtonText:	'continua',
    })    
}

