package br.com.fiap.empresa.model;
package br.com.fiap.empresa.model;

public class Funcionario {

    private String nome;

    private double salario;
    //THROWS
    public void aumentarSalario(int percentual) throws Exception {
        if (percentual < 0)
            throw new Exception("O valor percentual deve ser positivo");
        salario += salario * percentual / 100;
    }

    public Funcionario() {}

    public Funcionario(String nome, double salario) {
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