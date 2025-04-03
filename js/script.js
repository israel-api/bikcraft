const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){
    const url = location.href; // o objeto location (window.location) tem a informação da url
    const href = link.href;

   if (url.includes(href)) {
        link.classList.add("ativo");
   } // includes verifica se na url contém algo similar no href por exemplo uma palavra
}

links.forEach(ativarLink)