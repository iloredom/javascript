debugger;

const usuarios = [];

function menu() {
  const eleccion = validarEleccion();
  switch (eleccion) {
    case "1":
      agregar();
      break;
    case "2":
      eliminar();
      break;
    case "3":
      actualizar();
      break;
    case "4":
      listar();
      break;
    default:
      if (confirm("¿salir del menu")) {
        alert("Fin del programa");
      } else {
        menu();
      }
      break;
  }
}

function validarEleccion() {
  const menu = `Backoffice de Usuarios
-------------
1 - Agregar 
2 - Eliminar
3 - Actualizar
4 - Listar
5 - Salir
-------------
Por favor, elija una opción:`;

  const eleccion = prompt(menu);
  if (["1", "2", "3", "4", "5"].includes(eleccion)) {
    return eleccion;
  } else {
    alert("opcion invalida");
    return validarEleccion();
  }
}

function agregar() {
  const nombre = validarNombre();
  if (usuarios.some((usuario) => usuario.nombre === nombre)) {
    alert(`El usuario ${nombre} ya existe`);
  } else {
    usuarios.push({
      nombre: nombre,
    });
    alert(`Se agrego a ${nombre}`);
  }
  menu();
}

function validarNombre() {
  const nombre = prompt("Ingrese el nombre del usuario:").trim();

  if (nombre && nombre !== "") {
    return nombre;
  }
  return validarNombre();
}

function eliminar() {
  const nombre = validarNombre();
  const index = usuarios.findIndex((usuario) => usuario.nombre === nombre);
  if (index === -1) {
    alert(`no se encuentra a ${nombre}`);
  } else {
    const usuarioEliminado = usuarios.splice(index, 1);
    alert(`Se elimino a ${usuarioEliminado[0].nombre}`);
  }
  menu();
}

function actualizar() {
  alert(`no se puede actualizar usuarios`);
  menu();
}

function listar() {
  if (usuarios.length === 0) {
    alert("No hay usuarios");
    console.log("No hay usuarios");
  } else {
    let lista = `Hay (${usuarios.length}) usuarios: \n`;
    lista += "-------------\n";
    for (let i = 0; i < usuarios.length; i++) {
      lista += `${i + 1} - ${usuarios[i].nombre}\n`;
    }
    lista += "-------------\n";
    alert(lista);
    console.log(lista);
  }
  menu();
}

menu();
