package br.com.fiap.loja.model;

public class Cliente {
    // DEFAULT - deve estar dentro da mesma herança/pasta
    protected String nome;
    protected String cpf;

    protected boolean ativo;

    public void exibirDados(){
        System.out.println(nome + " " + cpf + " " + formatarDado());
    }

    private String formatarDado(){
        if (ativo == true)
            return "Ativo";
        else
            return "Inativo";
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public boolean isAtivo() { // BOOLEAN usa is ou get
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }
}
