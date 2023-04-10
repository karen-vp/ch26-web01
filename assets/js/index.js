
//Esta funcion cambia el saludo de la etiqueta h1
const changeGretting = () => {

    // TODO obtener nombre cliente
    const clientName = getNameOfClient();
    // TODO obtener referencia de label h1
    const greeting = getReferenceOfIdGreeting();
    // TODO cambiar el saludo
    greeting.innerText = `Hola ${clientName}`;
}
//Esta funcion obtiene el nombre del cliente
const getNameOfClient = () => {
    const clientName = prompt('Escriba su nombre');
    return clientName;
}

const getReferenceOfIdGreeting = () => {
    return document.querySelector('#greeting');
}