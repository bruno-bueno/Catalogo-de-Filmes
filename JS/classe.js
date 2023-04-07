class Ator{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}
    
class Diretor{
    constructor(id, nome){
        this.nome=nome;
        this.id=id;
    }
}
 
class Filme{
    constructor(id,titulo,ano,genero,duracao,cartaz,sinopse,direcao,elenco,classificacao,avaliacao,btnDetalhes,){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero= genero;
        this.duracao= duracao;
        this.sinopse= sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes=null;
    }

    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
        let divGenero= document.createElement("div");
        divGenero.setAttribute("style","flex-grow:1;");
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao= document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;

      }

      setBtnDetalhes=()=>{
        this.btnDetalhes=document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btn btn-primary btnDetalhesFilme");
        this.btnDetalhes.setAttribute("style","display: flex; margin: 0 auto;")
        this.btnDetalhes.setAttribute("data-bs-toggle", "modal");
        this.btnDetalhes.setAttribute("data-bs-target", "#exampleModal");


      }

      getBtnDetalhes=()=>{

        return this.btnDetalhes;
      }

      getDetalhesFilme = () =>{

        let card = document.querySelector('#card-filme');

        let row = document.createElement('div');
        row.classList.add('row');

        let colbanner = document.createElement('div');
        colbanner.classList.add('col-md-4');

        let banner = document.createElement('img');
        banner.src = this.cartaz;
        banner.classList.add('img-fluid');
        banner.alt = 'Imagem do Filme';

        colbanner.appendChild(banner);

        let colDataElement = document.createElement('div');
        colDataElement.classList.add('col-md-8');

        let cardSinopse = document.createElement('p');
        cardSinopse.textContent = this.sinopse;

        let cardAvaliacao = document.createElement('p');
        cardAvaliacao.textContent = this.avaliacao;

        let cardDirecao = document.createElement('p');
        cardDirecao.textContent = this.direcao;

        let cardDuracao = document.createElement('p');
        cardDuracao.textContent = this.duracao;

        let cardGenero = document.createElement('p');
        cardGenero.textContent = this.genero;

        let cardClassificacao = document.createElement('p');
        cardClassificacao.textContent = this.classificacao;

        let cardAno = document.createElement('p');
        cardAno.textContent = this.ano;

        colDataElement.appendChild(cardSinopse);
        colDataElement.appendChild(cardAvaliacao);
        colDataElement.appendChild(cardDirecao);
        colDataElement.appendChild(cardDuracao);
        colDataElement.appendChild(cardGenero);
        colDataElement.appendChild(cardClassificacao);
        colDataElement.appendChild(cardAno);

        row.appendChild(colbanner);
        row.appendChild(colDataElement);

        card.appendChild(row);
      }

      

}
