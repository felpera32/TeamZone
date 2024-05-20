function validarlogin() {
    var username = document.getElementById("gmail").value;

    var password = document.getElementById("passw").value;

    if (username === "" || password === "") {
        alert("Por favor preencha os campos de email e senha");
        return false
    }
    return true
}