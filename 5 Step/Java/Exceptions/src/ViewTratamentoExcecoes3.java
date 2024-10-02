import java.util.InputMismatchException;
import java.util.Scanner;

public class ViewTratamentoExcecoes3 {
    public static void main(String[] args) {
        double notas[] = new double[3];
        double somaNotas=0;
        int posicao=0;
        Scanner leitor = new Scanner(System.in);
        try {
            for(int i=0;i<notas.length;i++) {
                System.out.println("Digite a nota da " + (i+1) + "º avaliação:");
                notas[i] = leitor.nextDouble();
                somaNotas += notas[i];
            }

            while(posicao!=-1) {
                System.out.println("Digite o número da avaliação para ver a nota, ou -1 para seguir o programa!");
                posicao=leitor.nextInt();
                if (posicao != -1)
                    System.out.println("A nota da " + posicao + "º avaliação é "  + notas[posicao - 1]);
            }

            System.out.println("A média do aluno é " + somaNotas/notas.length);
        }catch(InputMismatchException erro) {
            System.out.println("Foi digitado um valor inválido");
        }catch(ArrayIndexOutOfBoundsException erro) {
            System.out.println("O número da avaliação não existe.");
        } finally {
            leitor.close();
        }
        System.out.println("Finalizando o programa!");
    }
}