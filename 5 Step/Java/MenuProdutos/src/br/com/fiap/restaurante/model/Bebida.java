package br.com.fiap.restaurante.model;

public class Bebida extends Produto {

    private int tamanho;

    public Bebida() {
        super();
    }

    @Override
    public String getResumo() {
        return "Nome: " + this.getNome() + "\nIngredientes: " + this.getIngredientes() + "\nPreco: R$" + this.getPreco() + "\nQuantidade: " + this.getTamanho() + "ml";
    }

    public Bebida(String nome, String ingredientes, double preco, int tamanho) {
        super(nome, ingredientes, preco);
        this.tamanho = tamanho;
    }


    public int getTamanho() {
        return tamanho;
    }

    public void setTamanho(int tamanho) {
        this.tamanho = tamanho;
    }

}