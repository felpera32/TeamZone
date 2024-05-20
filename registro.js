function validaregistro() {
    var username = document.getElementById("nick").value;

    var email = document.getElementById("gmail").value;

    var password = document.getElementById("password").value;

    var confirmarpassword = document.getElementById("senha2").value;

    var nascimento = document.getElementById("nasc").value;

    if (username === "" || password === "" || email === "" || confirmarpassword === "" || nascimento === "") {
        alert("Por favor preencha todos os campos");
        return false
    }
    return true
}
// if (username === "" || password === "" || email === "" || confirmarpassword === "" || nascimento === "") { //
