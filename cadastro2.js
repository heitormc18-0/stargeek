const msg = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const dataNascimento = document.getElementById("nascimento");
const email = document.getElementById("email");
const senha = document.getElementById("senha1");
const confirmeSenha = document.getElementById("senha2");
const celular = document.getElementById("celular");


function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}

formulario.onsubmit = (evento) =>{
   
    if (nome.value == ""){
        evento.preventDefault();
        msg.innerHTML = "coloque seu nome!";
        nome.focus();
        return null;
    }

    if(dataNascimento.value ==""){
        evento.preventDefault();
        msg.innerHTML = "Coloque sua data de nascimento!";
        dataNascimento.focus();
        return null;
    }

    if(email.value ==""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu e-mail!";
        email.focus();
        return null;
    }

    if(senha.value ==""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha!";
        senha.focus();
        return null;
    }

    if(confirmeSenha.value != senha.value || confirmeSenha == ""){
        evento.preventDefault();
        msg.innerHTML = "Senha diferente da criada anteriormente!"
        confirmeSenha.focus();
        return null;
    }
    
    

    if(celular.value ==""){
        evento.preventDefault();
        msg.innerHTML = "Coloque o número do seu celular!";
        celular.focus();
        return null;
    }
     
    verificarEmail(email.value, evento);
}

function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {
        nomecliente : nome.value,
        emailcliente : email.value,
        senhacliente : senha.value,
        celularcliente: celular.value
        }
    )

    localStorage.setItem("bd", JSON.stringify(dados));
    msg.innerHTML= "Usuário cadastrado com sucesso";
    evento.preventDefault();
    setTimeout(()=> {
        window.location.assign("login2.html");
    },2500)
}

