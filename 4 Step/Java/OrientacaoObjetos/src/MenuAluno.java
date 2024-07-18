import java.util.Scanner;

public class MenuAluno {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        DadosAluno aluno = new DadosAluno();
        int op;
        do {
            System.out.println("Escolha uma opção: \n1-Cadastrar Aluno \n2-Exibir Aluno \n0-Sair");
            op = sc.nextInt();

            switch (op) {
                case 1:
                    System.out.println("Digite o nome do Aluno:");
                    String nome = sc.next() + sc.nextLine();
                    System.out.println("Digite o endereço do Aluno:");
                    String endereco = sc.next() + sc.nextLine();
                    System.out.println("Digite o código do Aluno:"); //
                    int codigo = sc.nextInt();
                    aluno.nome = nome;
                    aluno.endereco = endereco;
                    aluno.codigo = codigo;
                    System.out.println("Digite o CEP:");
                    int cep = sc.nextInt();
                    System.out.println("Digite o número da casa:");
                    int numero = sc.nextInt();
                    System.out.println("Digite a Cidade:");
                    String cidade = sc.next() + sc.nextLine();
                    //Criando o objeto que representa a habilidade especial com os valores informados pelo usuário
                    EnderecoCompleto enderecoCompleto = new EnderecoCompleto(cep, numero, cidade);
                    //Atribuindo o objeto habilidade especial ao aluno
                    aluno.enderecoCompleto = enderecoCompleto;
                    break;
                case 2:
                    System.out.println("Nome: " + aluno.nome + ", Endereço: " + aluno.endereco + ", Código Cadastrado: " + aluno.codigo);

                    System.out.println("CEP: " + aluno.enderecoCompleto.cep + ", Número: " + aluno.enderecoCompleto.numero + ", Cidade: " + aluno.enderecoCompleto.cidade);
                    break;
                case 0:
                    System.out.println("Finalizando o programa");
                default:
                    System.out.println("Opção inválida");
            }
        }while(op != 0);

        sc.close();

    }
}