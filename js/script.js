//ativar links no menu

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    const url = location.href; // o objeto location (window.location) tem a informação da url
    const href = link.href;

   if (url.includes(href)) {
        link.classList.add("ativo");
   } // includes verifica se na url contém algo similar no href por exemplo uma palavra
}

links.forEach(ativarLink);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
     const pergunta = event.currentTarget;
     const controls = pergunta.getAttribute("aria-controls");
     const resposta = document.getElementById(controls)

     resposta.classList.toggle('ativa');
     const ativa = resposta.classList.contains('ativa');
     pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta){
     pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)