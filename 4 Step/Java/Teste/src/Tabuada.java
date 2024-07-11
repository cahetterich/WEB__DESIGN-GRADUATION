
public class Tabuada {
    public static void main(String[] args) {
        System.out.println("Tabela de Multiplicação:");

        for (int i = 1; i <= 10; i++) {
            System.out.println("\nTabuada do " + i + ":");

            for (int j = 1; j <= 10; j++) {
                int resultado = i * j;
                System.out.println(i + " x " + j + " = " + resultado);
            }
        }
    }
}