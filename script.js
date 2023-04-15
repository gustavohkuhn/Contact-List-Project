// Função para adicionar um contato à lista
function adicionarContato(nome, telefone, email, endereco) {
  // Seleciona a tabela de contatos
  const tabelaContatos = document.querySelector('#contatos tbody');
  // Cria uma nova linha na tabela
  const novaLinha = document.createElement('tr');
  // Cria as células com os dados do contato
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${telefone}</td>
    <td>${email}</td>
    <td>${endereco}</td>
    <td><button class="excluir">X</button></td>
  `;
  // Adiciona a nova linha à tabela de contatos
  tabelaContatos.appendChild(novaLinha);
}

// Função para excluir um contato da lista
function excluirContato(event) {
  // Verifica se o elemento clicado é o botão de excluir
  if (event.target.classList.contains('excluir')) {
    // Seleciona a linha do contato a ser excluído
    const linhaContato = event.target.parentNode.parentNode;
    // Remove a linha da tabela de contatos
    linhaContato.remove();
  }
}

// Seleciona o formulário e adiciona um evento de submit
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();
  
  // Seleciona os campos do formulário
  const nome = document.querySelector('#nome').value;
  const telefone = document.querySelector('#telefone').value;
  const email = document.querySelector('#email').value;
  const endereco = document.querySelector('#endereco').value;
  
  // Adiciona o novo contato à lista
  adicionarContato(nome, telefone, email, endereco);
  
  // Limpa os campos do formulário
  formulario.reset();
});

// Seleciona a tabela de contatos e adiciona um evento de click
const tabelaContatos = document.querySelector('#contatos');
tabelaContatos.addEventListener('click', excluirContato);
