const cardsa = document.getElementById("assistir");
carregarcatalogo()

function carregarcatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if (dados == null){
        divcard.innerHTML = " <p> Nenhum item encontrado </p>";
        cards.appendChild(divcard);
        return null
    }


dados.forEach((elemento, indice) => {
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
}
)
}