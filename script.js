const botao = document.getElementById('btn-comecar');

botao.addEventListener('click', function() {
    console.log('O jogo vai começar!');
    alert('Preparado para o desafio? O Quiz vai iniciar agora!');
    // Redireciona para a página do quiz
    window.location.href = "quiz.html";
});

