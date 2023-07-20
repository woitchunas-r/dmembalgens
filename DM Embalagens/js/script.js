//alert("Testando se leu arquivo");

//Form01 - função escrever:
function escrever(){
	var nome = document.getElementById('nome').value;
	if(nome==''){ //Não permite o campo em branco
		alert('Campo em branco');
		document.getElementById('nome').focus(); //Marca o campo - cursor fica piscando
	}else{
		alert("Nome: "+nome);
	}
}




//Form02 - função validar():
function validarDados(){
	//Criamos variáveis e atribuimos valores através do getElementById() = pega um elemento através do id dado a ele. - Pega o valor dele.
	var nome = document.getElementById('nome').value;
	var cargo = document.getElementById('cargo').value;
	var div = document.getElementById('erro'); //Aqui não pega o value pois é div e não campo de form
	var erro; //Variável para colocar o erro específico 
	//Validamos se os campos estão com conteúdo:
	if(nome.length<3){ //Se contar os caracteres de nome e não tiver ao menos 3 caracteres - entra no if
		document.getElementById('nome').focus(); //Marca o campo - cursor fica piscando
		erro = 'ERRO! Preencha o campo nome.'; //Guarda esse erro na variável
	}else if(cargo.length<2){ //Se não se o cargo não tiver dois caracteres 
		document.getElementById('cargo').focus(); //marca o campo
		erro = 'ERRO! Preencha o cargo.'; //guarda essa mensagem
	}else{ //se não é porque não tem erro 
		erro = ''; //coloca vazio na variável
	}
	//Adicionar a mensagem de erro no container ou submiter submit o form:
	if(erro==''){ //Se não tiver erro 
		document.getElementById('form2').submit(); //envia para onde tiver action
	}else{ //senão
		div.innerHTML = erro; //mostra o erro na div - innerHTML significa adiciona no HTML
	}
}




//CORES - página cores.html 
//Alterandores cores fundo e texto:
function alterarCores(){
	var fundo = document.getElementById('cor1').value;
	var texto = document.getElementById('cor2').value;
	//Alterando a propriedade CSS fundo:
	document.body.style.backgroundColor = fundo; 
	document.body.style.color = texto;	
}
function resetarCores(){
	window.location.reload(); //Atualizar a página
}

//Botão para trabalhar com Array - Vetor:
function colecionar(){
	var frutas = ['Melancia','Morango','Abacaxi','Banana','Caju'];
	var totalFrutas = frutas.length;
	var todasFrutas = frutas;
	var primeiraFruta = frutas[0];
	var ultimaFruta = frutas[frutas.length-1];
	var ordenarFrutas = frutas.sort();
	alert('Cadastro de Frutas: \nTotal de Frutas: '+totalFrutas+
			'\nTodas as Frutas: '+todasFrutas+
			'\nPrimeira Fruta: '+primeiraFruta+
			'\nÚltima Fruta: '+ultimaFruta+
			'\nOrdem Alfabética: '+ordenarFrutas);
}




//Validando o form3:
function validar(){
	
	var nome = document.getElementById('nome').value;
	var sexo = document.form3.sexo;
	var estado = document.getElementById('estado').value;
	var alerta = document.getElementById('erro');
	
	if(nome.length<2){
		alerta.innerHTML = 'Preencha o nome corretamente.'
		document.getElementById('nome').focus();
		document.getElementById('n').style.color = 'red';
		return false;
	}else if(!sexo[0].checked && !sexo[1].checked){
		alerta.innerHTML = 'Selecione um sexo';
		document.getElementById('s').style.color = 'red';
		return false;
	}else if(estado=='vazio'){
		alerta.innerHTML = 'Selecione um estado.';
		document.getElementById('e').style.color = 'red';
		return false;
	}else{
		return true;
	}
}





