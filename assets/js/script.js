const mostrarFormularioBtn = document.getElementById("mostrarFormulario");
const formularioContainer = document.getElementById("formularioContainer");
const nombreInput = document.getElementById("nombre");
const ccInput = document.getElementById("cc");
const montoInput = document.getElementById("monto");
const contrasenaInput = document.getElementById("contrasena");
const miFormulario = document.getElementById("miFormulario");
const volver=document.getElementById('volver');
const registros = []; // Aquí almacenaremos los objetos con la información
const busquedaContainer = document.getElementById("busquedaContainer");
const buscarUsuarioForm = document.getElementById("buscarUsuarioForm");
const buscarCcInput = document.getElementById("buscarCc");
const buscarContrasenaInput = document.getElementById("buscarContrasena");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");
mostrarFormularioBtn.addEventListener("click", function () {
    busquedaContainer.style.display="none";
    volver.style.display="block";
    mostrarFormularioBtn.style.display="none";
    if (formularioContainer.style.display === "none") {
        formularioContainer.style.display = "block";
    } else {
        formularioContainer.style.display = "none";
    }
});
function Volver()
{
    busquedaContainer.style.display="block";
    formularioContainer.style.display="none";
    volver.style.display="none";
    mostrarFormularioBtn.style.display="block";
}
miFormulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario para que podamos manejar los datos

    // Validación del campo "nombre"
    const nombreValue = nombreInput.value.trim();
    if (nombreValue.length < 4 || nombreValue.length > 40) {
        alert("El nombre debe contener entre 4 y 40 caracteres.");
        return;
    }
    // Validación del campo "nombre" para que solo contenga letras
    const caracteresnombreValue = nombreInput.value.trim();
    if (!/^[A-Za-z ]+$/.test(caracteresnombreValue)) {
        alert("El campo 'nombre' debe contener solo letras.");
        return;
    }

    // Validación del campo "CC" (Cédula de Ciudadanía)
    const ccValue = ccInput.value.trim();
    if (!/^[0-9]{8,12}$/.test(ccValue)) {
        alert("La CC debe contener solo números y tener entre 8 y 12 dígitos.");
        return;
    }

    // Validación del campo "monto"
    const montoValue = montoInput.value.trim();
    if (!/^[0-9]+$/.test(montoValue) || parseInt(montoValue) < 100000) {
        alert("El monto debe ser un valor mayor o igual a 100,000.");
        return;
    }

    // Validación del campo "contrasena"
    const contrasenaValue = contrasenaInput.value.trim();
    if (!/^(?=.[a-zA-Z])(?=.[0-9])/.test(contrasenaValue) || contrasenaValue.length > 8) {
        alert("La contraseña debe contener letras y números, y no superar los 8 caracteres.");
        return;
    }

    // Si todas las validaciones son exitosas, creamos un objeto con los datos
    const nuevoRegistro = {
        nombre: nombreValue,
        cc: ccValue,
        monto: montoValue,
        contrasena: contrasenaValue
    };

    // Agregamos el objeto al arreglo de registros
    registros.push(nuevoRegistro);

    alert("La cuenta se ha creado exitosamente")

    // Limpiamos el formulario
    miFormulario.reset();

    formularioContainer.style.display = "none";
    busquedaContainer.style.display="block";

    // Puedes hacer lo que quieras con los datos guardados en el arreglo
    console.log("Nuevo registro:", nuevoRegistro);
    console.log("Registros guardados:", registros);
});



//***********login********** */

buscarUsuarioForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtenemos los valores de nombre y contraseña de búsqueda
    const buscarCcValue = buscarCcInput.value.trim();
    const buscarContrasenaValue = buscarContrasenaInput.value.trim();
    const mensajeInicial = document.getElementById("mensajeInicial");
    const botones = document.getElementById('botones');
    volver.style.display = 'none';



    // Buscamos una coincidencia en el arreglo de registros
    const usuarioEncontrado = registros.find((registro) => {
        return (
            registro.cc === buscarCcValue &&
            registro.contrasena === buscarContrasenaValue
        );
    });


    if (usuarioEncontrado) {


        // Muestra el mensaje de bienvenida
        mensajeBienvenida.style.display = "block";
        mensajeInicial.style.display = "none";

        // Habilita los botones
        document.getElementById("botonOpcion1").removeAttribute("disabled");
        document.getElementById("botonOpcion2").removeAttribute("disabled");
        document.getElementById("botonOpcion3").removeAttribute("disabled");
        document.getElementById("botonOpcion4").removeAttribute("disabled");
        busquedaContainer.style.display = 'none';
        botones.style.display = 'block';
    } else {
        // Si no se encuentra una coincidencia, muestra un mensaje de error y limpia el formulario
        alert("El usuario no existe.");
        buscarUsuarioForm.reset();

        // Deshabilita los botones
        document.getElementById("botonOpcion1").setAttribute("disabled", true);
        document.getElementById("botonOpcion2").setAttribute("disabled", true);
        document.getElementById("botonOpcion3").setAttribute("disabled", true);
        document.getElementById("botonOpcion4").setAttribute("disabled", true);
        
    }

});

/* *********************** */

document.getElementById("botonOpcion1").addEventListener("click", function () {
    // Oculta todos los formularios antes de mostrar uno
    document.getElementById("formularioOpcion1").style.display = "block";
    document.getElementById("formularioOpcion2").style.display = "none";
    document.getElementById("formularioOpcion3").style.display = "none";
    document.getElementById("formularioOpcion4").style.display = "none";
});

document.getElementById("botonOpcion2").addEventListener("click", function () {
    // Oculta todos los formularios antes de mostrar uno
    document.getElementById("formularioOpcion1").style.display = "none";
    document.getElementById("formularioOpcion2").style.display = "block";
    document.getElementById("formularioOpcion3").style.display = "none";
    document.getElementById("formularioOpcion4").style.display = "none";
});

document.getElementById("botonOpcion3").addEventListener("click", function () {
    // Oculta todos los formularios antes de mostrar uno
    document.getElementById("formularioOpcion1").style.display = "none";
    document.getElementById("formularioOpcion2").style.display = "none";
    document.getElementById("formularioOpcion3").style.display = "block";
    document.getElementById("formularioOpcion4").style.display = "none";
});

document.getElementById("botonOpcion4").addEventListener("click", function () {
    // Oculta todos los formularios antes de mostrar uno
    document.getElementById("formularioOpcion1").style.display = "none";
    document.getElementById("formularioOpcion2").style.display = "none";
    document.getElementById("formularioOpcion3").style.display = "none";
    document.getElementById("formularioOpcion4").style.display = "block";
});

//************consignacion*********** */
const consignacionForm = document.getElementById("consignacion");
const cuentaConsignacionInput = document.getElementById("cuentaConsignacion");
const valorConsinado = document.getElementById("valorConsinado");

const consignaciones = []; // Aquí almacenaremos las consignaciones

consignacionForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener el valor del campo "cuentaConsignacion" y el valor del campo "valorConsinado"
    const cuentaConsignacionValue = cuentaConsignacionInput.value.trim();
    const valorConsinadoValue = valorConsinado.value.trim();

    // Buscar una coincidencia en el arreglo "registros" para la cuenta de origen
    const buscarCcValue = document.getElementById("buscarCc").value.trim(); // Obtener buscarCcValue aquí

    const cuentaOrigen = registros.find((registro) => registro.cc === buscarCcValue); // Aquí se usa buscarCcValue

    // Buscar una coincidencia en el arreglo "registros" para la cuenta de destino
    const cuentaDestino = registros.find((registro) => registro.cc === cuentaConsignacionValue);

    if (!cuentaOrigen || !cuentaDestino) {
        alert("La cuenta de origen o la cuenta de destino no existe.");
    } else {
        // Validar el campo "valorConsinado" para asegurarse de que solo contenga números
        if (!/^[0-9]+$/.test(valorConsinadoValue)) {
            alert("El valor de consignación debe contener solo números.");
        } else {
            // Actualiza el saldo de la cuenta de destino en el arreglo "registros"
            cuentaDestino.monto = (parseInt(cuentaDestino.monto) || 0) + (parseInt(valorConsinadoValue) || 0);

            // Registra la consignación en el arreglo de consignaciones
            const nuevaConsignacion = {
                quienRealizo: cuentaOrigen,
                cuentaDestino: cuentaDestino,
                montoConsignado: valorConsinadoValue
            };
            consignaciones.push(nuevaConsignacion);

            // Limpia los campos del formulario
            cuentaConsignacionInput.value = '';
            valorConsinado.value = '';
            document.getElementById("formularioOpcion1").style.display = "none";    
            
            alert("Consignación realizada con éxito.");
            console.log("Consignación registrada:", nuevaConsignacion);

            document.getElementById('resultado').innerText="valor consignado:"+ valorConsinadoValue;
        }
    }
});

function ocultarFormularios() {
    document.getElementById("formularioOpcion1").style.display = "none";
    document.getElementById("formularioOpcion2").style.display = "none";
    document.getElementById("formularioOpcion3").style.display = "none";
    document.getElementById("formularioOpcion4").style.display = "none";
}
//***************transferencia*********** */
document.getElementById("transferenciaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    // Obtener el valor del campo "cuentaATransferir" y el valor del campo "valorATransferir"
    const cuentaDestinoValue = document.getElementById("cuentaATransferir").value.trim();
    const valorTransferenciaValue = document.getElementById("valorATransferir").value.trim();

    // Buscar una coincidencia en el arreglo "registros" para la cuenta de origen
    const buscarCcValue = document.getElementById("buscarCc").value.trim(); // Obtener buscarCcValue aquí

    const cuentaOrigen = registros.find((registro) => registro.cc === buscarCcValue); // Aquí se usa buscarCcValue

    // Buscar una coincidencia en el arreglo "registros" para la cuenta de destino
    const cuentaDestino = registros.find((registro) => registro.cc === cuentaDestinoValue);

    if (!cuentaOrigen || !cuentaDestino) {
        alert("La cuenta de origen o la cuenta de destino no existe.");
    } else {
        // Validar el campo "valorATransferir" para asegurarse de que solo contenga números
        if (!/^[0-9]+$/.test(valorTransferenciaValue)) {
            alert("El valor de transferencia debe contener solo números.");
        } else {
            // Realiza la transferencia de fondos
            const montoTransferencia = parseInt(valorTransferenciaValue);
            if (montoTransferencia > cuentaOrigen.monto) {
                alert("Fondos insuficientes para la transferencia.");

            } else if (cuentaOrigen.monto - montoTransferencia < 10000) {
                alert("No puedes dejar un saldo inferior a 10,000 en tu cuenta.")

            } else {

                
               

                // Actualiza los saldos de las cuentas de origen y destino
                cuentaOrigen.monto -= valorTransferenciaValue;
             
                cuentaDestino.monto = Number(cuentaDestino.monto)+ Number(valorTransferenciaValue);
                document.getElementById("formularioOpcion2").style.display = "none";

                alert("La Transferencia se realizo con éxito.");
                document.getElementById('resultado').innerText=" SALDO:\nCuenta de origen: $" + cuentaOrigen.monto + "\nValor transferido: $" + valorTransferenciaValue;
            }
        }
    }
});

//*************retiro*************** */

document.getElementById("Retirar").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const cuentaRetiroInput = document.getElementById("cuentaRetiro");
    const cuentaRetiroValue = cuentaRetiroInput.value.trim();

    // Busca la cuenta del usuario actual (ya identificado)
    const buscarCcValue = document.getElementById("buscarCc").value.trim();
    const usuarioActual = registros.find((registro) => registro.cc === buscarCcValue);

    // Valida que el valor de retiro sea un número y que no exceda el monto actual de la cuenta
    if (!/^[0-9]+$/.test(cuentaRetiroValue)) {
        alert("El campo del valor a retirar debe contener solo números.");
    } else {
        const montoRetiro = parseInt(cuentaRetiroValue);
        if (montoRetiro <= 0) {
            alert("El valor a retirar debe ser mayor que cero.");
        } else if (montoRetiro > usuarioActual.monto) {
            alert("Fondos insuficientes para el retiro.");
        } else if (usuarioActual.monto - montoRetiro < 10000) {
            alert("No puedes dejar un saldo inferior a 10,000 en tu cuenta.");
        } else {
            // Realiza la sustracción del monto
            usuarioActual.monto -= montoRetiro;

            const nuevoRetiro = {
                quienRealizo: buscarCcValue,                
                montoRetirado: montoRetiro
            };
            consignaciones.push(nuevoRetiro);

            // Limpia el campo de retiro
            cuentaRetiroInput.value = '';
            document.getElementById("formularioOpcion3").style.display = "none";

            alert("Retiro exitoso. Tu saldo actual es: " + usuarioActual.monto);
            console.log("Retiro registrado:", nuevoRetiro);

            document.getElementById('resultado').innerText="Monto retirado: "+ montoRetiro;
        }
    }
});

//**************consultarsaldo***** */
document.getElementById("botonOpcion4").addEventListener("click", function () {
    // Obtén el saldo de la cuenta del usuario actual
    const buscarCcValue = document.getElementById("buscarCc").value.trim();
    const usuarioActual = registros.find((registro) => registro.cc === buscarCcValue);

    // Verifica si se encontró al usuario
    if (usuarioActual) {
        // Actualiza el elemento <p> con el saldo
     
        document.getElementById('resultado').innerText="Saldo actual en tu cuenta: $" + usuarioActual.monto;
    } else {
        // Maneja el caso en el que el usuario no se encuentre
        alert("Usuario no encontrado. Inicia sesión primero.");        
    }
    
});

//************cerrarsesion**************/
const cerrarSesionBtn = document.getElementById("cerrarSesion");

cerrarSesionBtn.addEventListener("click", function () {
    // Habilita el botón para mostrar el formulario
    mostrarFormularioBtn.removeAttribute("disabled");

    // Oculta el contenedor de formulario
    formularioContainer.style.display = "none";
    busquedaContainer.style.display = 'block';
    mostrarFormularioBtn.style.display = 'block';

    // Limpia los campos de búsqueda
    buscarCcInput.value = "";
    buscarContrasenaInput.value = "";

    // Oculta el mensaje de bienvenida
    mensajeBienvenida.style.display = "none";
    mensajeInicial.style.display="block"
    botones.style.display="none"
    document.getElementById('resultado').innerText="" 
    
    // Deshabilita los botones de opciones
    document.getElementById("botonOpcion1").setAttribute("disabled", true);
    document.getElementById("botonOpcion2").setAttribute("disabled", true);
    document.getElementById("botonOpcion3").setAttribute("disabled", true);
    document.getElementById("botonOpcion4").setAttribute("disabled", true);
    // Oculta los formularios
    ocultarFormularios();
});