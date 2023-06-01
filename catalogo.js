const cardsa = document.getElementById("assistir");
const cardsl = document.getElementById("ler");
const cardso = document.getElementById("ouvir");

var emaillogado;
femailLogado();

carregarcatalogo();

        function carregarcatalogo(){
            let dados = JSON.parse(localStorage.getItem("catalogo"));
            let divcard = document.createElement("div");
            if (dados == null){
                divcard.innerHTML = " <p> Nenhum item encontrado </p>";
                cards.appendChild(divcard);
                return null
            }


        dados.forEach((elemento, indice) => {
            if(elemento.email == emaillogado){
            if(elemento.categoria == "A" || elemento.categoria == "F" || elemento.categoria == "S"){
            let divcard = document.createElement("div")
            divcard.setAttribute("class", "card")
            divcard.innerHTML = `
                        <img src="img/${elemento.foto}">

                        <div class="info">                   
                                <img src="imagens/lixeiringa.png" onclick="excluir(${indice})">
                                
                                <img src="imagens/mudar.png" onclick="editar(${indice})">
                            
                        </div>
            `
            
            cardsa.appendChild(divcard);
        }}
        }
        )
        };

        carregarcatalogo2()

        function carregarcatalogo2(){
            
            let dados = JSON.parse(localStorage.getItem("catalogo"));
            let divcard = document.createElement("div");
            if (dados == null){
                divcard.innerHTML = " <p> Nenhum item encontrado </p>";
                cardsl.appendChild(divcard);
                return null
            }


        dados.forEach((elemento, indice) => {
            if(elemento.email == emaillogado){
            if(elemento.categoria == "L"){
            let divcard = document.createElement("div")
            divcard.setAttribute("class", "card")
            divcard.innerHTML = `
                        <img src="img/${elemento.foto}">

                        <div class="info">                   
                                <img src="imagens/lixeiringa.png" onclick="excluir(${indice})">
                                
                                <img src="imagens/mudar.png" onclick="editar(${indice})">
                            
                        </div>
            `
            
            cardsl.appendChild(divcard);
        }}
        }
        )
        };

        carregarcatalogo3()

        function carregarcatalogo3(){
            let dados = JSON.parse(localStorage.getItem("catalogo"));
            let divcard = document.createElement("div");
            if (dados == null){
                divcard.innerHTML = " <p> Nenhum item encontrado </p>";
                cardso.appendChild(divcard);
                return null
            }


        dados.forEach((elemento, indice) => {
            if(elemento.email == emaillogado){
            if(elemento.categoria == "M"){
            let divcard = document.createElement("div")
            divcard.setAttribute("class", "card")
            divcard.innerHTML = `
                        <img src="img/${elemento.foto}">

                        <div class="info">                   
                                <img src="imagens/lixeiringa.png" onclick="excluir(${indice})">
                                
                                <img src="imagens/mudar.png" onclick="editar(${indice})">
                            
                        </div>
            `
            
            cardso.appendChild(divcard);
        }
        }}
        )
        };


function excluir(indice){
    if (confirm("Tem certeza de que deseja excluir?")) {
        let dados = JSON.parse(localStorage.getItem("catalogo"));
        dados.splice(indice,1);
        localStorage.setItem("catalogo", JSON.stringify(dados));
        window.location.reload();
    }
}

function editar(indice){
    var url ="cadastroitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}



editar.onclick = () =>{
    window.location.assign("cadastroitem.html");
}

function femailLogado(){
    let dados = sessionStorage.getItem("logado");
    if(dados == null){
        window.location.assign("login2.html");
    }
    else{
        emaillogado = dados;
    }
}
