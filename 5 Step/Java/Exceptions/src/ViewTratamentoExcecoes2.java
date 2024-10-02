import java.util.Scanner;

public class ViewTratamentoExcecoes2 {

    public static void main(String[] args) {
        double notas[] = new double[3];
        double somaNotas = 0;
        int posicao = 0;
        Scanner leitor = new Scanner(System.in);

        for(int i=0; i < notas.length; i++) {
            System.out.println("Digite a nota da " + (i + 1) + "º avaliação:");
            notas[i] = leitor.nextDouble();
            somaNotas += notas[i];
        }

        while(posicao != -1) {
            System.out.println("Digite o número da avaliação para ver a nota, ou -1 para seguir o programa.");
//            posicao[i] = leitor.nextInt();
              posicao = leitor.nextInt();
              if (posicao != -1)
                 System.out.println("A nota da" + posicao + "º avaliação é" + notas[posicao - 1]);
        }

        System.out.println(" A média do aluno é " + somaNotas / notas.length);
        leitor.close();
        System.out.println("Finalizando o programa!");
    }
}