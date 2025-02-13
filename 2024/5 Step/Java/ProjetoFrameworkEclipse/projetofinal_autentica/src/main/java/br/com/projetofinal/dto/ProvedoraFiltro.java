package br.com.projetofinal.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

public class ProvedoraFiltro {
	
	private String nome;
	
	@JsonFormat(shape = Shape.STRING, pattern = "dd/mm/yyy")
	private Date dataInicial;
	
	@JsonFormat(shape = Shape.STRING, pattern = "dd/mm/yyy")
	private Date dataFinal;
	
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(Date dataInicial) {
		this.dataInicial = dataInicial;
	}

	public Date getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(Date dataFinal) {
		this.dataFinal = dataFinal;
	}

	
}
