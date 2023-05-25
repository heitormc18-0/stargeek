const nomeObra = document.getElementById("nome");
const categoria = document.getElementById("icategoria");
const fotoa = document.getElementById("foto");
const descricao = document.getElementById("idescricao");
const botaocadastrar = document.querySelector(".btncadastrar");


botaocadastrar.onclick = (evento) =>{
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