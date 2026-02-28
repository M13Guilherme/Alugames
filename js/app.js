function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    imagem.classList.toggle('dashboard__item__img--rented');
    botao.classList.toggle('dashboard__item__button--return');
if (imagem.classList.contains('dashboard__item__img--rented')) {
    botao.textContent = 'Devolver';
} else {
    botao.textContent = 'Alugar';
}

} 

