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