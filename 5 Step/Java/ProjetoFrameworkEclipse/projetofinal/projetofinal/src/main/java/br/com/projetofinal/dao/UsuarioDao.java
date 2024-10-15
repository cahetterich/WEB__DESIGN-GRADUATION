package br.com.projetofinal.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinal.beans.Usuario;

public interface  UsuarioDao extends CrudRepository<Usuario, Integer> {

}
