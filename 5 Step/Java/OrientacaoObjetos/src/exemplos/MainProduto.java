
import java.util.Scanner;

    public class MainProduto {
        public static void main(String[] args) {

            Scanner sc = new Scanner(System.in);
            Produto produto = new Produto();
            int op;

            do {
                System.out.println("Escolha uma opção: \n1-Cadastrar Produto \n2-Exibir Produto \n3-Comprar \n4-Adicionar Estoque \n5-Aplicar Desconto \n0-Sair");
                        op = sc.nextInt();

                switch (op) {
                    case 1:
                        System.out.println("Digite o nome do produto:");
                        String nome = sc.next() + sc.nextLine();
                        System.out.println("Digite o preço do produto:");
                        double preco = sc.nextDouble();
                        System.out.println("Digite a quantidade em estoque do produto:");
                        int estoque = sc.nextInt();
                        produto = new Produto(nome, preco, estoque);
                        break;
                    case 2:
                        produto.exibirInformacoes();
                        break;
                    case 3:
                        System.out.println("Digite a quantidade para compra:");
                        int qtd = sc.nextInt();
                        produto.comprar(qtd);
                        break;
                    case 4:
                        System.out.println("Digite a quantidade para adicionar no estoque:");
                        qtd = sc.nextInt(); // aproveitando a variavel qtd
                        produto.adicionarEstoque(qtd);
                        break;
                    case 5:
                        System.out.println("Digite a porcentagem de desconto:");
                        double desconto = sc.nextDouble();
                        produto.aplicarDesconto(desconto);
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
