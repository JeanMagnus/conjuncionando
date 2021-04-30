
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
var escolhaFase = 0;
var randomN = 0;
var nivel = 1;
var score = 0;

//gerar numero aleatorio;
function gerarNumero(){
    randomN = Math.floor(Math.random() * 500) - 500;
    return randomN;
}

function gameOver(){
    background(back_image);
    image(dead_emoji, 0, 110)
    image(game_over, 0, 120 );
}

function endGame(){
    background(back_image);
    text(score, 310, 325)
    image(you_won, 0, 0 );
    textSize(60);
    textFont(font_rumble);

}

function mouseClicked(){
    if(tela == 3 && nivel == 1){
         if (escolhaFase == 1){
            score = score + 20;
            nivel = 2;
            
        } 
       if(escolhaFase == 3 || escolhaFase == 2 || escolhaFase == 4){
            tela = 4;
        }   
    } 
    else if(tela == 3 && nivel == 2 ){
        if(escolhaFase == 3){
            score = score + 40;
            nivel = 3;
            
        }
        if (escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 4){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 3){
        if(escolhaFase == 4){
            score = score + 60;
            nivel = 4;
            
        }
        if (escolhaFase == 3 || escolhaFase == 2 || escolhaFase == 1){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 4){
        if(escolhaFase == 1){
            score = score + 80;
            nivel = 5;
            
        }
        if (escolhaFase == 3 || escolhaFase == 2 || escolhaFase == 4){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 5){
        if(escolhaFase == 2){
            score = score + 100;
            nivel = 6;
            
        }
        if (escolhaFase == 3 || escolhaFase == 1 || escolhaFase == 4){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 6) {
        if(escolhaFase == 4){
            score = score + 120;
            nivel = 7;
            
        }
        if (escolhaFase == 3 || escolhaFase == 1 || escolhaFase == 2){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 7) {
        if(escolhaFase == 3){
            score = score + 160;
            nivel = 8;
            
        }
        if (escolhaFase == 4 || escolhaFase == 1 || escolhaFase == 2){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 8) {
        if(escolhaFase == 1){
            score = score + 200;
            nivel = 9;
            
        }
        if (escolhaFase == 3 || escolhaFase == 4 || escolhaFase == 2){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 9) {
        if(escolhaFase == 2){
            score = score + 260;
            nivel = 10;
            
        }
        if (escolhaFase == 3 || escolhaFase == 1 || escolhaFase == 4){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 10) {
        if(escolhaFase == 4){
            score = score + 320;
            nivel = 11;
            
        }
        if (escolhaFase == 3 || escolhaFase == 1 || escolhaFase == 2){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 11) {
        if(escolhaFase == 1){
             score = score + 380;
             nivel = 12;
           
        }
        if (escolhaFase == 3 || escolhaFase == 4 || escolhaFase == 2){
            tela = 4;
        }
    }
    else if(tela == 3 && nivel == 12) {
        if(escolhaFase == 3){
            score = score + 460;
            tela = 5;
            
        }
        if (escolhaFase == 4 || escolhaFase == 1 || escolhaFase == 2){
            tela = 4;
        }
    }
}
//Botões para opções no game
function opcaoBotao(texto, xMin, xMax, yMin, yMax, largura, altura, opcao){

    yMax = yMin + altura;
    xMax = xMin + largura;
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
        fill('#2b92b1');
        escolhaFase = opcao;
        console.log("escolha: ", escolhaFase);
    }
    else {
        noFill();
    }
    rect(xMin, yMin, largura, altura, );
    fill(255,255,255)
    textSize(20);
    fill(0);
    text(texto, xMin + 10, yMin + 30);
    
}

// Botão para voltar
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
    textFont();
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


// FASES DO JOGO

function fase1(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_724, 140, 150);

  //  text(gerarNumero(), 300, 250);
    opcaoBotao("N", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Z", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("Q", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("IR", 360, 200, 350, 300, 70, 50, 4);
}

function fase2(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_raiz_de_5, 140, 150);


    opcaoBotao("Q", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("N", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("IR", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}

function fase3(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_zero_p_9_calc, 140, 150);


    opcaoBotao("Z", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("IR", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("N", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Q", 360, 200, 350, 300, 70, 50, 4);
}

function fase4(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_neg_10, 140, 150);


    opcaoBotao("Z", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("IR", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("N", 360, 200, 350, 300, 70, 50, 4);
}

function fase5(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_84_div_6, 140, 150);


    opcaoBotao("IR", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("N", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}

function fase6(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_neg_37, 70, 135);


    opcaoBotao("N", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("IR", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}
function fase7(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_8504, 70, 135);


    opcaoBotao("Q", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("IR", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("N", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}
function fase8(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_09898, 70, 135);


    opcaoBotao("IR", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Z", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("Q", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("N", 360, 200, 350, 300, 70, 50, 4);
}
function fase9(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_34_35, 70, 135);


    opcaoBotao("N", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("IR", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}
function fase10(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_neg_40357, 70, 135);


    opcaoBotao("IR", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("N", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}
function fase11(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_pi, 70, 135);


    opcaoBotao("IR", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("N", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("Z", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Q", 360, 200, 350, 300, 70, 50, 4);
}
function fase12(){
    background(back_image);
    textSize(32);
    fill(10);
    image(qual_conj, 0, -10);
    botaoVoltar("Voltar", xVoltar, yVoltar, larg, alt, );
    image(calc_zero, 70, 135);


    opcaoBotao("IR", 60, 200, 350, 300, 70, 50, 1);
    opcaoBotao("Q", 160, 200, 350, 300, 70, 50, 2);
    opcaoBotao("N", 260, 200, 350, 300, 70, 50, 3);
    opcaoBotao("Z", 360, 200, 350, 300, 70, 50, 4);
}


function preload() {
    imagemProgramador = loadImage("./imagens/foto_programador.png");
    imagemConj = loadImage("./imagens/conjuntos-numericos.jpg");
    back_image = loadImage("./imagens/game-background.jpeg");
    game_name = loadImage("./imagens/game_name.png");
    instrucoes_name = loadImage("./imagens/instrucoes_name.png");
    creditos_name = loadImage("./imagens/creditos_name.png");
    qual_conj = loadImage("./imagens/qual_conj.png");
    game_over = loadImage("./imagens/game_over.png");
    dead_emoji = loadImage("./imagens/dead_emoji.png");
    calc_84_div_6 = loadImage("./imagens/84_div_6.png");
    calc_raiz_de_5 = loadImage("./imagens/raiz_de_5.png");
    calc_724 = loadImage("./imagens/calc_724.png");
    calc_neg_10 = loadImage("./imagens/neg_10_calc.png");
    calc_zero_p_9_calc = loadImage("./imagens/zero_p_9_calc.png");
    calc_zero = loadImage("./imagens/calc_zero.png");
    calc_pi = loadImage("./imagens/calc_pi.png");
    calc_neg_37 = loadImage("./imagens/calc_neg_37.png");
    calc_neg_40357 = loadImage("./imagens/calc_neg_40357.png");
    calc_09898 = loadImage("./imagens/calc_09898.png");
    calc_8504 = loadImage("./imagens/calc_8504.png");
    calc_34_35 = loadImage("./imagens/calc_34_35.png");  
    you_won = loadImage("./imagens/you_won.png");  
    heart_emoji = loadImage("./imagens/heart_emoji.png");
    heartface_emoji = loadImage("./imagens/heartface_emoji.png");    
    twohearts_emoji = loadImage("./imagens/twohearts_emoji.png");  
    party_emoji = loadImage("./imagens/party_emoji.png");  
    partyface_emoji = loadImage("./imagens/partyface_emoji.png"); 
    font_rumble = loadFont("./fonts/Rumble_Brave.otf");


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
        if(nivel == 1){
            fase1();
        }
        if(nivel == 2){
            fase2();
        }
        if(nivel == 3){
            fase3();
        }
        if(nivel == 4){
            fase4();
        }
        if(nivel == 5){
            fase5();
        }
        if(nivel == 6){
            fase6();
        }
        if(nivel == 7){
            fase7();
        }
        if(nivel == 8){
            fase8();
        }
        if(nivel == 9){
            fase9();
        }
        if(nivel == 10){
            fase10();
        }
        if(nivel == 11){
            fase11();
        }
        if(nivel == 12){
            fase12();
        }
    }
    if(tela == 4){
        gameOver();
    }
    if(tela == 5){
        endGame();
    }
    
}