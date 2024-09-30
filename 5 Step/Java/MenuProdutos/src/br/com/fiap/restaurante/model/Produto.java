package br.com.fiap.restaurante.model;

public abstract class Produto {

    private String nome;
    private String ingredientes;
    private double preco;

    public Produto() {

    }

    public Produto(String nome, String ingredientes, double preco) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.preco = preco;
    }

    public abstract String getResumo(); //metodo abstrato não tem implementação '{ }'

    public String getNome() {
        return nome;
    } // metodo com implementação '{ }'

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}
