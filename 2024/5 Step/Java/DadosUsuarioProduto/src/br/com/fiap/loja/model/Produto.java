package br.com.fiap.loja.model;

public class Produto {

    private String nome;

    private double preco;

    public Produto() {}

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public double calcularDesconto(double valorDesconto){
        return preco - valorDesconto;
    }

    public double calcularDesconto(String cupom){
        if (cupom.equals("FIAP20"))
            return preco * 0.8;
        return preco;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }
}