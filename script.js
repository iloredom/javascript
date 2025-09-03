const tablaUsuariosId = "tablaUsuarios";

const eventsId = Object.freeze({
  DOMContentLoaded: "DOMContentLoaded",
  click: "click",
});

const formUserIds = Object.freeze({
  name: "name",
  nameValidationError: "nameValidationError",
  addUser: "addUser",
});

class Usuario {
  constructor({ nombre }) {
    this.nombre = nombre;
  }
}

/**
 * @typedef {Usuario[]}
 **/
const usuarios = [];

document.addEventListener(eventsId.DOMContentLoaded, function () {});

document
  .getElementById(formUserIds.addUser)
  .addEventListener(eventsId.click, function (evento) {
    evento.preventDefault();
    agregar();
  });

function agregar() {
  const errorMessage = document.getElementById(formUserIds.nameValidationError);
  const nombre = document.getElementById(formUserIds.name).value;

  if (validarNombre(nombre)) {
    const usuario = new Usuario({ nombre: nombre });
    usuarios.push(usuario);
    agregarUsuarioEnLaTabla(usuario);
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = `El usuario ${nombre} ya existe`;
  }
}

function validarNombre(nombre) {
  const isValidName = nombre && nombre !== "";
  const userExist = usuarios.some((usuario) => usuario.nombre === nombre);
  return isValidName && !userExist;
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
}

function actualizar() {
  alert(`no se puede actualizar usuarios`);
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
}

function agregarUsuarioEnLaTabla(usuario) {
  const tabla = document.getElementById(tablaUsuariosId);
  const fila = tabla.insertRow();
  const celda = fila.insertCell();
  celda.textContent = usuario.nombre;
}
