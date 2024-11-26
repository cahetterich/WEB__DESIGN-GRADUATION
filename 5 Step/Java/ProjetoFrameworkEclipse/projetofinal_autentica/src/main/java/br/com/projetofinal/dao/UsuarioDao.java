package br.com.projetofinal.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinal.beans.Usuario;

public interface  UsuarioDao extends CrudRepository<Usuario, Integer> {
	
	List<Usuario> findByNomeContainingAndEmailContaining(String nome, String email);
	
	Usuario findByEmailAndSenha(String email, String senha);

}
