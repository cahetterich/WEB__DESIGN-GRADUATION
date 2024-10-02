package br.com.fiap.loja.model;

import br.com.fiap.loja.exception.EstoqueInsuficienteException;

public class Produto {

    private int id;
    private String nome;
    private int estoque;

    public void adicionarEstoque(int quantidade){
        estoque += quantidade;
    }

    public void removerEstoque(int quantidade) throws EstoqueInsuficienteException {
        if (quantidade > estoque)
            throw new EstoqueInsuficienteException("Estoque insuficiente, quantidade disponível: " + estoque);
        estoque -= quantidade;
    }

    public Produto() {
    }

    public Produto(int id, String nome, int estoque) {
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getEstoque() {
        return estoque;
    }

}