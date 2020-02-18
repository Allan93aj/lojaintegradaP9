var textos = {
	header_text: "",
	header_subtext: "",
	header_paragraph: "",
	
	slide_text: "",
	slide_subtext: "",
	slide_paragraph: "",
	
	h_product_text:"SEU CABELO CRESCE",
	h_product_subtext:"MUITO MAIS RÁPIDO",
	h_product_paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim"
}

//Instancia o MiniCart
function instantiateMiniCart(){
	$.ajax({
	    type: 'POST',
	    url: 'https://tepeguei.lojaintegrada.com.br/carrinho/listar_produtos',
	    success: function(data){
	        $(".mini-cart").html(data);
	    },
	    error: function (xhr, ajaxOptions, thrownError) {
	            alert(xhr.status);
	            alert(thrownError);
	    }
	});
}

//Cria o botão de comprar nos produtos da home
function createButtonProduct(){
	var produtos = document.querySelectorAll(".trustvox-stars");

	produtos.forEach(function(item){
	    var idItem = item.dataset.trustvoxProductCode;
	    var href = item.parentNode.getElementsByTagName('a')[0].href;
	    $(item).next().after("<div class='botao-comprar'><a href='"+href+"'>Comprar</a></a>");
	});
}

//Ativa ou remove elemento
function setActive(IsVisible, className){
    if(IsVisible){
        $(className).css("display", "block");
    }else{
        $(className).remove();
    }
}

//Adicionar estilos
function addStyle(url){
    $('head').append('<link rel="stylesheet" href="'+url+'">');
}

function addScriptOnHead(url){
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = url;
    $('head',document).append(script);
}

function addScriptOnFooter(url){
    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.src = url;
    $('body').append(script);
}

//Adiciona background no navbar
function navigationBackground(){
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    if(scroll <= 89){
	    	$(".container-fluid.navigation").css("background-color", "transparent")
	    }else if(scroll > 89){
	    	$(".container-fluid.navigation").css("background-color", "#9D19BA")
	    }
	});
}

//Remove elementos do site
function removeElements(element){
	var elements = element.length;
	
	for(i=0; i < elements; i++){
		$(element[i]).remove();
	}
	
}

//Adicionar Classe em Objetos
function addClass(theClass, myClass){
	$(theClass).addClass(myClass);
}

//Cria Sliders
function createSlider(slider){
	var sliders = slider.length;
	
	for(i = 0; i < sliders; i++){
		$(slider[i]).flexslider({
			animation: "slide"
		});
	}
}

//Cria o background do corpo, seta os textos etc..
function createCorpoInfos(){
	$(".conteiner-principal #corpo").prepend("<div class='top-banner'><div class='textos'><h1>"+textos.h_product_text+"</h1><h2>"+textos.h_product_subtext+"</h2><p>"+textos.h_product_paragraph+"</p></div><div class='bottom-banner'></div></div>");
}

//Criar uma função para injetar um span na div .preco-produto > div "append" e pegar o valor do produto e dividir por 3 e mostrar dentro desse span

$(document).ready(function(){
	//Menu Mobile 
	$(".bar-menu").click(function(){
        $(".navigation-mobile-content").toggle("slow");
    });
    
    //Instancia Botão de pagar
    createButtonProduct();
	
	//Instancia MiniCart
	instantiateMiniCart();
	
	//Cria slidrs
	createSlider(['.show-foto']);
	
	//Adiciona Classe
	addClass(".listagem-linha", "flexslider");
	
	//Adiciona o fundo no menu
	navigationBackground();
	
	//Instancia o Corpo e suas funções
	createCorpoInfos();
	
	addStyle('https://fonts.googleapis.com/css?family=Josefin+Sans:100,400,700&display=swap');
	
	removeElements(['.barra-inicial','#cabecalho','.secao-banners','.institucional', '#barraTopo', '.pagamento-selos', '.bandeiras-produto']);
	
	
	

})
