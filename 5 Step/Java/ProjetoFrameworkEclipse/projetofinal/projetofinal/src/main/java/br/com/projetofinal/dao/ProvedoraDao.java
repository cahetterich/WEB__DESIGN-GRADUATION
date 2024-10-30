package br.com.projetofinal.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinal.beans.Provedora;

public interface ProvedoraDao extends CrudRepository<Provedora, Integer> {
	
	List<Provedora> findByNomeStartingWith(String nome);

}
