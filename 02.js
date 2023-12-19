/*
Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique.
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

const simplificarRuta = (ruta) => {

 //Crear pila para guardar datos
 let stack = [];

 //Separar datos eliminando por barra /
 const parts = ruta.split('/')

 //Recorro cada parte
 for (const part of parts) {
  if(part === '..'){
    stack.pop()
  }
   else if(part !== '.' && part !== "")
    stack.push(part)
 }
 
 //Mostrar o devolver datos
 return parts;

}

// console.log(simplificarRuta("/home/"));
// console.log(simplificarRuta("/x/./y/../../z/"));
console.log(simplificarRuta("/../"));
console.log(simplificarRuta("/home//pruebas/.."));