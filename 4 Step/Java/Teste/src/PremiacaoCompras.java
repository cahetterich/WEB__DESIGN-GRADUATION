import java.util.Scanner;

public class PremiacaoCompras {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double valorCompras;
        int frequencia;

        //Solicitação de informações ao cliente
        System.out.print("Informe o valor total das suas compras neste ano: ");
        valorCompras = scanner.nextDouble();

        System.out.print("Quantas vezes você realizou compras na loja neste ano? ");
        frequencia = scanner.nextInt();

        //Verificação para premiação dos clientes
        if (valorCompras >= 2000.0 && frequencia >= 10) {
            System.out.println("Parabéns! Você está na categoria VIP e ganhou um voucher de desconto.");
        } else if (valorCompras >= 1000.0) {
            System.out.println("Você está na categoria Ouro e ganhou pontos extras no programa de fidelidade.");
        } else if (valorCompras >= 500.0 || frequencia >= 5) {
            System.out.println("Você está na categoria Prata e ganhou um brinde especial");
        } else {
            System.out.println("Você está na categoria Bronze e não recebeu uma premiação especial!");
        }



    }
}
