package br.com.fiap.restaurante.model;

public class Bebida extends Produto {

    private Integer tamanho;

    public Bebida() {
        super();
    }

    public Bebida(String nome, String ingredientes, Double preco, Integer tamanho) {
        super(nome, ingredientes, preco);
        this.tamanho = tamanho;
    }

    @Override
    public String getResumo() {
        return "";
    }

    public Integer getTamanho() {
        return tamanho;
    }

    public void setTamanho(Integer tamanho) {
        this.tamanho = tamanho;
    }

}