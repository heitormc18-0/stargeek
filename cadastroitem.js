const nomeObra = document.getElementById("nome");
const categoria = document.getElementById("icategoria");
const foto = document.getElementById("foto");
const descricao = document.getElementById("idescricao");
const botaocadastrar = document.querySelector(".btncadastrar");

var url = new URL(window.location.href);
var peditar = url.searchParams.get("peditar");
var pindice = url.searchParams.get("indice");

if (peditar == "true"){
    editar(pindice);
}




botaocadastrar.onclick = (evento) =>{
    if((peditar != "true") || (peditar == null)){
    evento.preventDefault();
    fenvio()
    .then(result =>{
        if(result){
            let dados = JSON.parse(localStorage.getItem("catalogo")) || [];
            dados.push(
        {
            nome : nomeObra.value,
            descricao : descricao.value,
            foto  : nomeArq,    
            categoria : categoria.value    
        }
    )

    localStorage.setItem("catalogo", JSON.stringify(dados));
    window.location.assign("catalogo.html")
        }

        else{
            alert("Houve erro no envio do arquivo");
        }
    });
    }
    else{
        editarenvio(evento);
        
    }

}

var nomeArq;
async function fenvio() {
    const url = 'http://localhost:3005/upload';
    const arquivo = document.getElementById("foto").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(FormData));
    try{

            var resp = await fetch(url, {
                                            method: 'POST',
                                            body: formData
                                        }
                                    )

        if (resp.ok){
            let respText = await resp.text();
            nomeArq = respText;
            return true;
        }

        else{
            return false
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

function editar(indice){
    nomeObra.value = "";
    descricao.value = "";
    foto.files[0] = null; 
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    nomeObra.value = dados[indice].nome;
    descricao.value = dados[indice].descricao;
    fotoa = dados[indice].foto;
  }

var fotoa;

  function editarenvio(evento){
       evento.preventDefault();
      if ((fotoa != foto.value)&&(foto.value != "")){
   
      fenvio()
      .then(result =>{
                      if(result){
                        salvaEdicao(nomeArq);
                         }
                      });
     }
     else
     {
          salvaEdicao(foto);
     } 
  }
  
function salvaEdicao(pfoto){
  let dados = JSON.parse(localStorage.getItem("catalogo"));
  dados[pindice].nome = nomeObra.value;
  dados[pindice].descricao = descricao.value;
  dados[pindice].foto = pfoto;
  dados[pindice].categoria = categoria.value
  localStorage.setItem("catalogo", JSON.stringify(dados));
  window.location.assign("catalogo.html")

}
  