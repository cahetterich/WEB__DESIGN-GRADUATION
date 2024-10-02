package br.com.fiap.empresa.model;

import br.com.fiap.empresa.exception.PercentualInvalidoException;

public class Funcionario2 {

    private String nome;

    private double salario;

    public void aumentarSalario(int percentual) throws PercentualInvalidoException {
        if (percentual < 0)
            throw new PercentualInvalidoException("O valor percentual deve ser positivo");
        salario += salario * percentual / 100;
    }

    public Funcionario2() {}

    public Funcionario2(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }
}