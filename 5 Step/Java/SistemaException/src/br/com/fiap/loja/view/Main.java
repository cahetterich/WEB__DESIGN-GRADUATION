package br.com.fiap.loja.view;

import br.com.fiap.loja.exception.EstoqueInsuficienteException;
import br.com.fiap.loja.model.Produto;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Produto produto = new Produto(1, "Produto Teste", 10);

        int op;
        do {
            System.out.println("Escolha:
                    1-Adicionar estoque
                    2-Remover estoque
                    0-Sair");
                    op = sc.nextInt();
            switch (op) {
                case 1:
                    try {
                        System.out.println("Digite a quantidade para adicionar:");
                        int qtd = sc.nextInt();
                        produto.adicionarEstoque(qtd);
                        System.out.println("Estoque atual: " + produto.getEstoque());
                    } catch (InputMismatchException e){
                        System.out.println("Valor digitado inválido para a quantidade");
                    }
                    break;
                case 2:
                    try {
                        System.out.println("Digite a quantidade para remover");
                        int qtd = sc.nextInt();
                        produto.removerEstoque(qtd);
                        System.out.println("Estoque atual: " + produto.getEstoque());
                    } catch (EstoqueInsuficienteException e) {
                        System.err.println(e.getMessage());
                    } catch (InputMismatchException e){
                        System.out.println("Valor digitado inválido para a quantidade");
                    }
                    break;
                case 0:
                    System.out.println("Finalizando o programa");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        } while (op != 0);
        sc.close();
    }
}