const user = "admin";
const pass = "1234";
let saldo = 3000;

let usuario = prompt("Ingrese su nombre de usuario");

if (usuario !== "admin") {
    alert("El usuario ingresado no es valido, vuelva a intentarlo");
} else {
    let contraseña = parseInt(prompt("Ingrese su contraseña"));
} if (contraseña !== "1234") {
    alert("La contraseña es incorrecta, vuelva a intentarlo");
} else {
    let menu = parseInt(prompt("¿Que operacion desea realizar? \n 1-Ver saldo actual. \n 2-Retirar dinero. \n 3-Depositar dinero en su cuenta. \n 4-Cambiar su clave."));
}

switch (opciones) {
    case 1:
        alert("Su saldo actual es $" + saldo);
        break;
    case 2:
        let retirar = parseInt(prompt("¿Cuanto dinero desea retirar?"));
        if (retirar>saldo) {
            alert("Saldo insuficiente, por favor ingrese otro monto");
        }  else {
            alert("Usted retiro $" + retirar + ". Su saldo actual es $" + (saldo - retirar));
        }
        break;
    case 3:
        let deposito = parseInt(prompt("¿Cuanto dinero desea depositar?"));
        alert("Su saldo actual es $" + (saldo + deposito));
        break;
    case 4:
        let passnew = prompt("Ingrese su nueva clave");
        alert("Su clave ha sido modificada con éxito, su clave actual es " + passnew);
        break;
    default:
        alert("La opcion ingresada no es valida");            
}
