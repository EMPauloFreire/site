document.addEventListener("DOMContentLoaded", function () {
  // Exibir o conteúdo inicial quando a página é carregada
  mostrarConteudo('conteudoInicial');
});

function mostrarConteudo(idConteudo, elementoSelecionado) {
  // Oculta todos os conteúdos
  const todosConteudos = document.querySelectorAll('.conteudo');
  todosConteudos.forEach(conteudo => {
    conteudo.style.display = 'none';
  });

  // Remove a classe 'selecionado' de todos os itens do menu
  const todosItensMenu = document.querySelectorAll('.menu li');
  todosItensMenu.forEach(item => {
    item.classList.remove('selecionado');
  });

  // Adiciona a classe 'selecionado' apenas ao item clicado
  if (elementoSelecionado) {
    elementoSelecionado.classList.add('selecionado');
  }

  // Exibe o conteúdo correspondente à opção selecionada
  const conteudoSelecionado = document.getElementById(idConteudo);
  conteudoSelecionado.style.display = 'block';
}
