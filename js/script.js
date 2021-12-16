document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
alert("Prontinho! você receberá as novidades por e-mail")
}else{
alert("Preencha os campos em branco")
}

}
