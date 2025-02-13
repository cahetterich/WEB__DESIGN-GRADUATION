package br.com.fiap.restaurante.model;

public class PratoQuente extends Produto {

    private int serve;
    public PratoQuente() {
        super();
    }

    @Override
    public String getResumo() {
        return "Nome: " + this.getNome() + "\nIngredientes: " + this.getIngredientes() + "\nPreco: R$" + this.getPreco() + "\nServe: " + this.getServe() + "pessoas";
    }

    public PratoQuente(String nome, String ingredientes, double preco, int serve) {
        super(nome, ingredientes, preco);
        this.serve = serve;
    }

    public int getServe() {
        return serve;
    }

    public void setServe(int serve) {
        this.serve = serve;
    }
}
