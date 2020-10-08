const showModalDeletar = function(id){
	$('#modalDeletar').modal('show')
	$('#id_deletar').val(id)	
}

const deletar = function(path){
	let id = $('#id_deletar').val()
	
	if (id !== 0){
		window.location.href='/' + path + '/delete/' + id	
	}	
}

const verificar = function(){
	let senha1 = $('#senha1').val() 
	let senha2 = $('#senha2').val()
	if (senha1 !== senha2){
		
		$("#msg-erro").slideDown(400).delay(2000).slideUp(400)
			
	}else{
		$("#msg-sucesso").slideDown(400).delay(2000).slideUp(400)
	
	}
}
const verificarForcaSenha = function(){
	let senha = document.getElementById('senhaForca').value;
	let forca = 0;
	document.getElementById("impSenha").innerHTML = "Senha " + senha;

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

	mostrarForca(forca);
}

function mostrarForca(forca){
	document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;

	if(forca < 30 ){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #ff0000'>Fraca</span>";
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #FFD700'>Média</span>";
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #7FFF00'>Forte</span>";
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca").innerHTML = "<span style='color: #008000'>Excelente</span>";
	}
}