var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var app = express() ;

var path = require('path');

var port = 1337;
var ip = 'localhost'

var PATH_TO_TEMPLATES = 'views';
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app,
    watch: true
} ) ;

app.use(express.static('public'));

var contents = {
    left:"Ir para Portal Banzai",
    mediun:"Encontre sua concessionaria",
    right:"Fale conosco",
    fraseum:"A EMOÇÃO DE DIRIGIR QUE LEVA MAIS LONGE",
    frasedois:"PRONTO PARA TER UM HONDA?",
    frasetres:"Conheça os ultimos grandes laçamentos da Honda.",
    frasequatro:"SIGA A BANZAI NAS REDES SOCIAIS",
    textoum:"O novo Civic Geração 10 traz um design único mudando a categoria de sedãs para sempre. Ele garante a melhor dirigibilidade com o máximo de sofisticação e conforto, atribuido pelo seu design interno.",
    textodois:"Sistema de estabilidade que reforça automaticamente o retorno da direção auxiliando o motorista em situações onde o carro estaameaçado de estabilidade.",
    textotres:'Todas as portas possuem vidro elétrico com função "um toque" e sistema de segurança antiesmagante.',
    textoquatro:"O câmbio com transmissão CVT com 7 velocidades com Paddle Shift (alertas) propociona conforto ao trocar de macha.",
    textocinco:"Novo Honda Accord a combinação perfeita de três atributos exigidos pelo o consumidor: elegância, luxo e alto desempenho.",
    textoseis:"O City está muito maIS moderno e esportivo. Com o design único e mais tecnológico do que nunca, ele vai conquistar olhares.",
    textosete:"Com seu design único e inconfudível o novo Honda Fit tráz novidaddes que vão surpreender a todos e atrair ainda mais fâs.",
    cenAten:"Central de Atendimento",
    telefone:"(31) 31231234",
    solicitar:"Solicitar um",
    contato:"CONTATO",
    tituloum:"Direção com Assistência",
    titulodois:"Vidro elétrico com subida",
    titulotres:"Cambio CVT com Paddle Shift",
    conheca:"CONHEÇA MAIS",
    encontre:"Encontre uma",
    concess:"CONCESSIONÁRIA",
    educacao:"Todos juntos fazem un trânsito melhor"
};

app.set( 'view engine','.njk');

app.get( '/', function( req, res ) {
    return res.render( 'index',contents) ;
} ) ;

app.listen(port, ip, function() {
    console.log('COPIE E COLE O LINK A SEGUI PARA TESTAR A PÁGINA -> https://'+ip+':'+port);
    console.log('Para encerrar tecle: ctrl + c');
  });
