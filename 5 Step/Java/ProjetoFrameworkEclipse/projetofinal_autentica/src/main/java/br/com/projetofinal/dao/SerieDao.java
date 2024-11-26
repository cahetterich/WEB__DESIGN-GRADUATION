package br.com.projetofinal.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinal.beans.Serie;

public interface SerieDao extends CrudRepository<Serie, Integer> {

}
