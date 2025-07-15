const link = document.getElementById("game");

//quando passar o mouse mudar de cor.
link.addEventListener("mouseover", function(){
    link.style.color = "red";
});

//quando tirar o mouse, voltar ao normal
link.addEventListener("mouseout",function(){
    link.style.color = "green";
}); 

const botao =document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

//quando clicar no botão aparecer a mensagem.
botao.addEventListener("click", function() {
    mensagem.textContent = "Seja Bem Vindo ao Site, é apenas o começo!";
})