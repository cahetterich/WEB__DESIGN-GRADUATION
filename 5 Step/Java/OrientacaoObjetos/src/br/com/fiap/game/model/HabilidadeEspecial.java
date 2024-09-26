package br.com.fiap.game.model;

public class HabilidadeEspecial {

    String nome;

    int custoEnergia;

    boolean habilitada;

    public HabilidadeEspecial(String nome, int custoEnergia, boolean habilitada) {
        this.nome = nome;
        this.custoEnergia = custoEnergia;
        this.habilitada = habilitada;

    }

    public void ativarHabilidade(){
        habilitada = true;
    }

}
