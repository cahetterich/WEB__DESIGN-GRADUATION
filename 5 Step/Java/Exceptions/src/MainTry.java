import java.util.Scanner;

public class MainTry {

    public static void main(String[] args) {
            double valorDigitado;
            Scanner leitor = new Scanner(System.in);
            try {
                valorDigitado = leitor.nextDouble();
                System.out.println("Valor " + valorDigitado);
            } catch (Exception e) {
                System.out.println("Algo errado ocorreu ao tentar armazenar esse valor. Verifique se ele é numérico.");
            }
            System.out.println("Finalizando o programa.");

    }
}