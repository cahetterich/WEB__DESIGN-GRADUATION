package br.com.fiap.empresa.view;

import br.com.fiap.empresa.model.Funcionario;
import java.util.Scanner;

public class FuncionarioView {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Funcionario fun = new Funcionario("Thiago", 1000);

        try {
            System.out.println("Qual o percentual para o aumento do salário?");
            int p = sc.nextInt();
            fun.aumentarSalario(p);
            System.out.println("Novo salário: " + fun.getSalario());
        } catch (Exception e) {
            System.err.println(e.getMessage());
        } finally {
            sc.close();
        }
    }
}