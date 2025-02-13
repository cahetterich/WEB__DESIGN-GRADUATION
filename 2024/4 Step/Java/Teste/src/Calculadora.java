import java.util.Scanner;

public class Calculadora {

        public static void main(String[] args) {

                Scanner leitor = new Scanner(System.in);

                System.out.println("Digite o nome do aluno: ");
                String nome = leitor.nextLine();

                //Calcular a média de um aluno
                System.out.println("Digite a nota 1: ");
                float nota1 = leitor.nextFloat();

                System.out.println("Digite a nota 2: ");
                float nota2 = leitor.nextFloat();

                System.out.println("Digite a nota 3: ");
                float nota3 = leitor.nextFloat();

                float media = (nota1 + nota2 + nota3)/3;

                System.out.println("O aluno " + nome + " possui a média: " + media);

                leitor.close();

        }
}
