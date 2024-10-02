package br.com.fiap.empresa.view;

import br.com.fiap.empresa.exception.PercentualInvalidoException;
import br.com.fiap.empresa.model.Funcionario;
import java.util.InputMismatchException;
import java.util.Scanner;

public class FuncionarioView2 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Funcionario fun = new Funcionario("Thiago", 1000);

        try {
            System.out.println("Qual o percentual para o aumento do salário?");
            int p = sc.nextInt();
            fun.aumentarSalario(p);
            System.out.println("Novo salário: " + fun.getSalario());
        } catch (PercentualInvalidoException e) {
            System.err.println("O percentual não pode ser negativo");
        } catch (InputMismatchException e){
            System.err.println("Valor percentual inválido");
        } finally {
            sc.close();
        }
    }
}