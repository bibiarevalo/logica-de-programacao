let user, pass, result

function verificaLogin() {
    user = document.getElementById('usuario').value
    pass = document.getElementById('senha').value
    result = (user == 'Sergio' && pass === "1234") ? "Acesso concedido": "acesso negado"
    document.getElementById('msg').innerHTML = result + ", " + user
}