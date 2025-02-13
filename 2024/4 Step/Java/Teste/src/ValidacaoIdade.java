import java.util.Scanner;

public class ValidacaoIdade {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int idade;

        // Solicitação da idade ao usuário
        System.out.print("Digite sua idade: ");
        idade = scanner.nextInt();

        // Verificação da idade para determinar o acesso ao conteúdo
        if (idade >= 18) //{
            System.out.println("Acesso concedido!");
       // }
        else  //{
            System.out.println("Acesso negado!");
       // }
    }
}