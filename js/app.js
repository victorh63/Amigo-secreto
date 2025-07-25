function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    // caso a lista esteja vazia, apenas adiciona o nome
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        // caso tenha algum conteúdo, mantém o texto anterior, adiciona , e espaço, e o novo nome  
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    
    // limpeza do campo que preenche o nome no fim da função
    amigo.value = '';
};

function sortear() {};

function reiniciar() {};