const btn = document.getElementById("btnEntrar");

btn.onclick = autenticar;

function autenticar() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    if (nome==="mimmarcelo" && senha==="Teste123"){
        window.location.replace("ctts.html");
    } else if (nome==="joao" && senha==="1903") {
        window.location.replace("ctts.html");
    } else if (nome==="joatan" && senha==="Goku") {
        window.location.replace("ctts.html");
    } else if (nome==="cleison" && senha==="123") {
        window.location.replace("ctts.html");
    } else if (nome==="cadu" && senha==="321") {
        window.location.replace("ctts.html");
    }
    else {
        alert("Usuário não encontrado");
    }
}