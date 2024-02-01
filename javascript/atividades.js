document.addEventListener("DOMContentLoaded", function () {
  // Exibir o conteúdo padrão quando a página é carregada
  mostrarConteudo('conteudoPadrao', document.querySelector('.opcoes li:first-child'));
});

function mostrarConteudo(idConteudo, elementoSelecionado) {
  // Oculta todos os conteúdos
  const todosConteudos = document.querySelectorAll('.conteudo');
  todosConteudos.forEach(conteudo => {
    conteudo.style.display = 'none';
  });

  // Remove a classe 'selected' de todos os itens do menu
  const todosItensMenu = document.querySelectorAll('.opcoes li');
  todosItensMenu.forEach(item => {
    item.classList.remove('selected');
  });

  // Adiciona a classe 'selected' apenas ao item clicado
  elementoSelecionado.classList.add('selected');

  // Exibe o conteúdo correspondente à opção selecionada
  const conteudoSelecionado = document.getElementById(idConteudo);
  conteudoSelecionado.style.display = 'block';
}
