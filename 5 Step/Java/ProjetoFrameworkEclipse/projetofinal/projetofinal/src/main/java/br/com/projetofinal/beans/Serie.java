package br.com.projetofinal.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="TB_SERIE")
public class Serie {
	
	@Column(name="id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private int id; 
	
	@Column(name="genero", length = 75)
	private String genero;
	
	@Column(name="titulo", length = 50)
	private String titulo;
	
	@Column(name="sinopse", length = 200)
	private String sinopse; 
	
	@Column(name="lancamento")
	private boolean lancamento;
	
	private Provedora provedora; 
	

}
