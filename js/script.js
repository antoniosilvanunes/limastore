document.addEventListener("DOMContentLoaded", function () {
    const cardsProdutos = document.querySelectorAll(".card");
  
    cardsProdutos.forEach((cardProduto) => {
      const overlayDiv = document.createElement("div");
      overlayDiv.classList.add("image-overlay");
  
      const coracaoImg = document.createElement("img");
      coracaoImg.classList.add("coracao");
      coracaoImg.src = "./fotos/ncurtido.png"; // Caminho correto da sua imagem inicial
      overlayDiv.appendChild(coracaoImg);
  
      cardProduto.appendChild(overlayDiv);
  
      overlayDiv.style.display = "none";
  
      coracaoImg.addEventListener("click", function () {
        // Lógica para curtir ou descurtir o produto aqui
        if (coracaoImg.src.includes("ncurtido.png")) {
          coracaoImg.src = "./fotos/curtido.png"; // Altera para "curtido.png"
        } else {
          coracaoImg.src = "./fotos/ncurtido.png"; // Altera para "ncurtido.png"
        }
      });
  
      cardProduto.addEventListener("mouseenter", function () {
        overlayDiv.style.display = "flex";
        cardProduto.style.opacity = "0.9"; // Altere a opacidade conforme necessário
        coracaoImg.style.opacity = "1"; // Opacidade da imagem do coração
      });
  
      cardProduto.addEventListener("mouseleave", function () {
        overlayDiv.style.display = "none";
        cardProduto.style.opacity = "1"; // Retorna à opacidade original
        coracaoImg.style.opacity = "1"; // Retorna à opacidade original
      });
    });
  });
  
  
  

$(document).ready(function(){
    $('#entrada').carousel({
        interval: 3000 // Tempo em milissegundos (2 segundos neste exemplo)
    });
});


// Adicione a função para exibir a imagem personalizada
function exibirImagemPersonalizada(caminhoImagem) {
    const imagemPersonalizada = document.createElement("img");
    imagemPersonalizada.classList.add("imagem-personalizada");
    imagemPersonalizada.src = caminhoImagem;

    // Adicione a imagem personalizada ao corpo do documento
    document.body.appendChild(imagemPersonalizada);
}

// Adicione a função para remover a imagem personalizada
function removerImagemPersonalizada() {
    const imagemPersonalizada = document.querySelector(".imagem-personalizada");
    if (imagemPersonalizada) {
        imagemPersonalizada.remove();
    }
}

//menu de categorias
document.addEventListener("DOMContentLoaded",function(){
    const menuHamburguer = document.getElementById("menu-hamburguer");
    const categorias = document.querySelector(".categorias");
 
    menuHamburguer.addEventListener("click",function(){
        //Alterna a visibilidade do menu de categorias
        categorias.style.display = (categorias.style.display === "block")?"none":"block";
    });
});
 
document.addEventListener("DOMContentLoaded", function(){
    //Seleciona todos os links âncora dentro da lista de categorias
    const linksCategoria = document.querySelectorAll(".categorias a");
 
    //Seleciona todos os cards que possuem a categoria "categoria-roupa"
    const cards = document.querySelectorAll(".categoria-roupa");
 
    //Itera sobre cada link de categoria na lista
    linksCategoria.forEach((link)=>{
        //Adiciona o reconhecimento de click a cada link de categoria
        link.addEventListener("click",function(event){
            event.preventDefault();//evita o comportamento padrão do link
 
            //Obtém a categoria selecionada a partir do atributo "data-categoria" do link 
            const categoriaSelecionada = this.getAttribute("data-categoria");
 
            //Oculta todos os cards
            cards.forEach((card) => {
                card.style.display = "none";
            });
 
            //Verifica se a categoria escolhida é "tudo", se for ele exibe todos os cards
            if(categoriaSelecionada === "tudo"){
                cards.forEach((card)=>{
                    card.style.display = "block"
                });
            }else{
                //Exibe apenas os cards da categoria selecionada
                cards.forEach((card)=>{
                    if(card.classList.contains(`categoria-${categoriaSelecionada}`)){
                        card.style.display = "block";
                    }
                });
            }
        });
    });
});
 
//Função para mostrar a janela de cadastro
function showCadastro(){
    //Cria um elemento de sobreposição no formulário cadastro
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
 
    //div que contém o formulário em si
    const cadastroForm = document.createElement('div')
    cadastroForm.classList.add('cadastro-form');
 
    //Adiciona os campos ao formulário
    cadastroForm.innerHTML = `
    <h2>Cadastro</h2>
    <form id="cadastroForm">
        <input type="text" placeholder="Nome" id="nome" required>
        <input type="email" placeholder="E-mail" id="email" required>
        <input type="password" placeholder="Senha" id="senha" required>
        <button type="button" onclick="cadastrar()">Cadastrar</button>
        <button type="button" onclick="fecharCadastro()">Fechar</button>
    </form>`;
 
    //Adiciona o formulário de cadastro a sobreposição
    overlay.appendChild(cadastroForm);
 
    //Adiciona a sobreposição de página
    document.body.appendChild(overlay);
}
 
function cadastrar(){
    //Obter os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
 
    //Validação que verifica se nenhum campo está vazio
    if(!nome || !email || !senha){
        alert('Por favor, preencha todos os campos');
        return;
    }
 
    //Cria um array com os dados do usuário para a gravação posterior 
    const novoCadastro = {
        nome,
        email,
        senha
    };
 
    //Verifica se o armazenamento local é suportado pelo navegador
    if(typeof(Storage) !== "undefined"){
        //Recupera os cadastros existentes ou inicializa um array vazio
        let cadastrosExistentes = JSON.parse(localStorage.getItem('cadastros')) || [];
 
        //Verifica se o email já existe na base de dados
        const emailExistente = cadastrosExistentes.some(cadastro => cadastro.email === email);
 
        if(emailExistente){
            alert('Este E-mail já está cadastrado!');
            return;
        }
 
        //Adicionar o cadastro aos cadastros existentes
        cadastrosExistentes.push(novoCadastro);
 
        //Salvando o arquivo em diretório local
        localStorage.setItem('cadastros',JSON.stringify(cadastrosExistentes));
 
        alert('Cadastro realizado com sucesso!');
        fecharCadastro();   
    } else {
        alert('Desculpe, o armazenamento local não é suportado neste navegador')
    }
}
 
//Função para fechar a jenaela de cadastro
function fecharCadastro() {
    //Remove a sobreposição de tela do overlay
    const overlay = document.querySelector('.overlay');
    if(overlay){
        overlay.remove();
    }
}
 
//Função que mostra a jenela de login
function showLogin(){
    //Cria um elemento de sobreposição no formulário cadastro
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
 
    //div que contém o formulário em si
    const loginForm = document.createElement('div')
    loginForm.classList.add('login-form');
 
    //Adiciona os campos ao formulário
    loginForm.innerHTML = `
    <h2>Login</h2>
    <form id="loginForm">
        <input type="email" placeholder="E-mail" id="loginEmail" required>
        <input type="password" placeholder="Senha" id="loginSenha" required>
        <button type="button" onclick="fazerLogin()">Login</button>
        <button type="button" onclick="fecharLogin()">Fechar</button>
    </form>`;
 
    //Adiciona o formulário de cadastro a sobreposição
    overlay.appendChild(loginForm);
 
    //Adiciona a sobreposição de página
    document.body.appendChild(overlay);
}
 
function fazerLogin(){
    //Obtém o valor dos campos informados pelo usuário
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;
 
    //Recupera os cadastros existentes no armazenamento local
    const cadastrosExistentes = JSON.parse(localStorage.getItem('cadastros')) || [];
 
    //Varifica se as credenciais existem no arquivo local
    const cadastroCorrespondente = cadastrosExistentes.find(cadastro => cadastro.email === email && cadastro.senha === senha);
 
    if(cadastroCorrespondente){
        //Login bem sucedido
        alert(`Olá, ${cadastroCorrespondente.nome}! Você está logado.`);
 
        var NomeNav = document.getElementById('login-link');
        NomeNav.innerHTML = "Trocar usuário";
 
        fecharLogin()
    }else{
        //Credenciais inválidas
        alert('E-mail ou senha incorretos / inexistentes.');
    }
}
 
function fecharLogin(){
    //Remove a sobreposição de tela do overlay
    const overlay = document.querySelector('.overlay');
    if(overlay){
        overlay.remove();
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     var cardContainer = document.getElementById("cardContainer");
//     var cardWidth = 300; // Defina a largura do card (ajuste conforme necessário)
//     var cardCount = cardContainer.children.length;
//     var cardsPerPage = 4;
//     var currentSlide = 0;

//     document.getElementById("next").addEventListener("click", function () {
//         if (currentSlide < cardCount - cardsPerPage) {
//             currentSlide++;
//             updateCardsVisibility();
//         }
//     });

//     document.getElementById("prev").addEventListener("click", function () {
//         if (currentSlide > 0) {
//             currentSlide--;
//             updateCardsVisibility();
//         }
//     });

//     function updateCardsVisibility() {
//         var translateX = -currentSlide * cardWidth;
//         cardContainer.style.transform = 'translateX(' + translateX + 'px)';
//     }
// });

var mensagemCookies = document.getElementById('cookies-mensagem');

function aceito() {
    localStorage.pedidoCookies = "concordado";
    mensagemCookies.classList.remove('mostrarmensagem');
}

if(localStorage.pedidoCookies == 'concordado') {
    mensagemCookies.classList.remove('mostrarmensagem');
} else {
    mensagemCookies.classList.add('mostrarmensagem');
}

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function abrirPagina(event) {
    // Evita que o link execute a ação padrão (navegar para outra página)
    event.preventDefault();

    // Obtém a categoria do item clicado
    const categoria = event.target.getAttribute('data-categoria');

    // Verifica se a categoria é "Cupom"
    if (categoria === 'Cupom') {
        // Abre a página desejada (substitua 'caminho-do-seu-arquivo.html' pelo caminho correto)
        window.location.href = 'cupons.html';
    }
}


 
document.getElementById('cadastro-link').addEventListener('click',showCadastro);
document.getElementById('login-link').addEventListener('click',showLogin);