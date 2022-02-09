//menu hamburguer feito em JQuery
$(document).ready(function() {
    $("#barras-menu").click(function() {

        $("#menu").toggleClass("menu-ativo")

        /*  if ($("#menu").hasClass("menu-ativo")) {
             $("#menu").removeClass("menu-ativo")
         } else {
             $("#menu").addClass("menu-ativo")
         } */
    })
})




// menu hamburguer feito em JS puro
function mostrarMenu() {

    let menu = document.getElementById("menu");

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function cadastrarEmail() {
    let emailDigitado = document.getElementById("campo-email").value;
    console.log(emailDigitado);

}

function renderizarProdutos() {
    let espaco = document.getElementById("espaco-produtos")

    let listaProdutos = [{
            imagem: "../GameMania/imagens/xbox.jpg",
            titulo: "XBOX 360",
            descricao: "Console XBOX 360",
            valor: "R$ 2.000"
        },
        {
            imagem: "../GameMania/imagens/play5.png",
            titulo: "PLAYSTATION 5",
            descricao: "Playstation 5 Completo",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/nintendo.jpg",
            titulo: "NINTENDO SWITCH",
            descricao: "Baratinho",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/pcgamer.jpg",
            titulo: "PC GAMER",
            descricao: "Pc Gamer",
            valor: "R$ 10.000"
        }, {
            imagem: "../GameMania/imagens/xbox.jpg",
            titulo: "XBOX 360",
            descricao: "Console XBOX 360",
            valor: "R$ 2.000"
        },
        {
            imagem: "../GameMania/imagens/play5.png",
            titulo: "PLAYSTATION 5",
            descricao: "Playstation 5 Completo",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/nintendo.jpg",
            titulo: "NINTENDO SWITCH",
            descricao: "Baratinho",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/pcgamer.jpg",
            titulo: "PC GAMER",
            descricao: "Pc Gamer",
            valor: "R$ 10.000"
        },
        {
            imagem: "../GameMania/imagens/xbox.jpg",
            titulo: "XBOX 360",
            descricao: "Console XBOX 360",
            valor: "R$ 2.000"
        },
        {
            imagem: "../GameMania/imagens/play5.png",
            titulo: "PLAYSTATION 5",
            descricao: "Playstation 5 Completo",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/nintendo.jpg",
            titulo: "NINTENDO SWITCH",
            descricao: "Baratinho",
            valor: "R$ 6.000"
        },
        {
            imagem: "../GameMania/imagens/play5.png",
            titulo: "PLAYSTATION 5",
            descricao: "Playstation 5 Completo",
            valor: "R$ 6.000"
        }
    ]

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
        template +=
            `<div class="card" style="width: 14rem;>
            <div class="col">
              <div class="card h-100">
                <img src="${produto.imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${produto.titulo}</h5>
                  <p class="card-text">${produto.descricao}</p>
                  <p class="value-text">${produto.valor}</p>
                </div>
              </div>
            </div>
        </div>`

    }




    espaco.innerHTML = template
}