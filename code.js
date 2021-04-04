
var xMinBotao = 160
var larguraBotao = 150
var xMaxBotao = xMinBotao + larguraBotao
var alturaBotao = 60
var yMinBotao1 = 250
var yMaxBotao1 = yMinBotao1 + alturaBotao
var yMinBotao2 = 320
var yMaxBotao2 = yMinBotao2 + alturaBotao
var yMinBotao3 = 180
var yMaxBotao3 = yMinBotao3 + alturaBotao
var yVoltar = 20;
var xVoltar = 20;
var larg = 52;
var alt = 30;
var imagemEducador;
var imagemProgramador;
var tela = 0;

function botaoVoltar(texto, xVoltar, yVoltar, larg, alt) {
    if(mouseX > xVoltar && mouseX < xVoltar + larg && mouseY > yVoltar && mouseY < yVoltar + alt){
        fill('#2b92b1');
            if(mouseIsPressed){
                tela = 0;
            }
    } else {
        noFill();
    }
    rect(xVoltar, yVoltar, larg, alt, );
    fill(255,255,255)
    textSize(15);
    textFont()
    fill(0);
    text(texto, xVoltar +7, yVoltar+23);

}

// Botões para o menu
function menuBotao(texto, yMin, yMax, opcao) {
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax) {
        fill('#2b92b1');
        if (mouseIsPressed) {
            tela = opcao;
        }
    }
    else {
        noFill();
    }
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, );
    fill(255,255,255)
    textSize(20);
    textFont()
    fill(0);
    text(texto, xMinBotao + 15, yMin + 40);
}

// Tela de instruções 
function telaInstrucoes() {
    // background('#836FFF');
    background(back_image);
    image(instrucoes_name, 0, -35 );

    textSize(16);
    text("* Use o mouse para selecionar as opções;", 20, 150, 460);
    fill(0);
    text("* Após aparecer o número na tela, selecione o conjunto que ele pertence;", 20, 200, 400);
    text("* O resultado final será apresentado após a última fase.", 20, 250, 400);
    image(imagemConj, 320, 320);

    text("R: reais", 90, 350, 400);
    text("N: naturais", 90, 365, 400);
    text("Z: inteiros", 90, 380, 400);
    text("Q: racionais", 90, 395, 400);
    text("IR: irracionais", 90, 410, 400);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    
}

// Tela de créditos
function telaCreditos() {

    background(back_image);
    image(creditos_name, 0, -35 );
 
    textSize(20);
    text("JEAN MAGNUS", 240, 210);
    textSize(16);
    text("Função: Programador", 230, 235);
    textSize(14);
    fill(0);
    text("Estudante do Bacharelado em Ciências e Tecnologia na UFRN e Técnico em Informática formado pelo IFRN.", 180, 255, 300)
    image(imagemProgramador, 20, 180);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
}

function preload() {
    imagemProgramador = loadImage("./imagens/foto_programador.jpg");
    imagemConj = loadImage("./imagens/conjuntos-numericos.jpg");
    back_image = loadImage("./imagens/game-background.jpeg");
    game_name = loadImage("./imagens/game_name.png");
    instrucoes_name = loadImage("./imagens/instrucoes_name.png");
    creditos_name = loadImage("./imagens/creditos_name.png");
    
}

function setup() {

    createCanvas(500, 500);
    
   
    
}

function draw() {
    if (tela == 0) {
        background(back_image);
        image(game_name, 0, -35 );
        textSize(32);
        fill(10);

        menuBotao("PLAY", yMinBotao3, yMaxBotao3, 3);

        menuBotao("INSTRUÇÕES", yMinBotao1, yMaxBotao1, 1);

        menuBotao("CRÉDITOS", yMinBotao2, yMaxBotao2, 2);

    }
    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }

    //FASE INICIAL
    if (tela == 3) {

        background(back_image);
        textSize(32);
        fill(10);
        text("Tela da fase inicial", 70, 50);
    }
    
}