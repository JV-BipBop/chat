const btn = document.getElementById("btnEnviar");
const newMsg = document.getElementById("envio");
const mensagens = document.getElementById("mensagens");

btn.onclick = enviar;

function enviar() {
    if(newMsg.value.trim() === "") {
        return;
    }

    let msgEnviar = document.createElement("article");
    msgEnviar.className = "self-end bg-green-600 p-3 rounded-xl max-w-[75%]";
    let text = document.createElement("p");

    text.innerText = newMsg.value;
    msgEnviar.appendChild(text);
    mensagens.appendChild(msgEnviar);
    newMsg.value = "";
    
    mensagens.scrollTop = mensagens.scrollHeight;
}