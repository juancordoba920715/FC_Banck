let vista2 = document.getElementById('menu_transaccion')
let formulario = document.getElementById('formulario')


function login_in(){
    vista2.style.display = "block"            
    formulario.style.display ='none'
}

function Cierre_sesion(){
    vista2.style.display = "none"    
    formulario.style.display = "block";
}   

function consulta_saldo(){
    let saldo = document.getElementById('consulta_saldo')
    vista2.style.display ="none"
    saldo.style.display = "block"  

}