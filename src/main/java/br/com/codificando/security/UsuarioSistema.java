package br.com.codificando.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class UsuarioSistema extends User {

	private static final long serialVersionUID = -5044282898082672318L;
	private String nome;
	
	public UsuarioSistema(String nome, String login,String senha,
			Collection<? extends GrantedAuthority> autorizacoes) {
		super(login, senha,autorizacoes );
		this.nome = nome;
				
	}
	
	public String gatName() {
		return this.nome;
	}

}
