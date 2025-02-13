import java.util.ArrayList;
import java.util.Scanner;

// Classe Cliente
class Cliente {
    private String nome;
    private String cpf;
    private String email;

    public Cliente(String nome, String cpf, String email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

// Classe ContaBancaria
class ContaBancaria {
    private String agencia;
    private String numero;
    private double saldo;
    private Cliente cliente;

    public ContaBancaria(String agencia, String numero, Cliente cliente) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0.0; // Saldo inicial é 0
        this.cliente = cliente;
    }

    // Getters e Setters
    public String getAgencia() {
        return agencia;
    }

    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public double getSaldo() {
        return saldo;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito realizado com sucesso! Saldo atual: " + saldo);
        } else {
            System.out.println("Valor de depósito inválido!");
        }
    }

    public void sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
            System.out.println("Saque realizado com sucesso! Saldo atual: " + saldo);
        } else {
            System.out.println("Saldo insuficiente ou valor de saque inválido!");
        }
    }

    public void transferir(ContaBancaria contaDestino, double valor) {
        if (valor > 0 && saldo >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            System.out.println("Transferência realizada com sucesso!");
        } else {
            System.out.println("Saldo insuficiente ou valor de transferência inválido!");
        }
    }
}

// Classe principal
public class Banco {
    public static void main(String[] args) {
        ArrayList<ContaBancaria> contas = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1 - Cadastrar conta bancária");
            System.out.println("2 - Excluir conta bancária");
            System.out.println("3 - Depósito");
            System.out.println("4 - Saque");
            System.out.println("5 - Transferência");
            System.out.println("6 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    cadastrarConta(contas, scanner);
                    break;
                case 2:
                    excluirConta(contas, scanner);
                    break;
                case 3:
                    realizarDeposito(contas, scanner);
                    break;
                case 4:
                    realizarSaque(contas, scanner);
                    break;
                case 5:
                    realizarTransferencia(contas, scanner);
                    break;
                case 6:
                    System.out.println("Encerrando o sistema...");
                    break;
                default:
                    System.out.println("Opção inválida!");
                    break;
            }
        } while (opcao != 6);

        scanner.close();
    }

    // Função para cadastrar uma nova conta bancária
    public static void cadastrarConta(ArrayList<ContaBancaria> contas, Scanner scanner) {
        System.out.print("Nome do cliente: ");
        String nome = scanner.next();
        System.out.print("CPF do cliente: ");
        String cpf = scanner.next();
        System.out.print("Email do cliente: ");
        String email = scanner.next();

        Cliente cliente = new Cliente(nome, cpf, email);

        System.out.print("Agência: ");
        String agencia = scanner.next();
        System.out.print("Número da conta: ");
        String numero = scanner.next();

        ContaBancaria conta = new ContaBancaria(agencia, numero, cliente);
        contas.add(conta);
        System.out.println("Conta bancária cadastrada com sucesso!");
    }

    // Função para excluir uma conta bancária
    public static void excluirConta(ArrayList<ContaBancaria> contas, Scanner scanner) {
        System.out.print("Informe o número da conta que deseja excluir: ");
        String numero = scanner.next();
        boolean encontrada = false;

        for (ContaBancaria conta : contas) {
            if (conta.getNumero().equals(numero)) {
                contas.remove(conta);
                System.out.println("Conta bancária excluída com sucesso!");
                encontrada = true;
                break;
            }
        }

        if (!encontrada) {
            System.out.println("Conta não encontrada!");
        }
    }

    // Função para realizar um depósito
    public static void realizarDeposito(ArrayList<ContaBancaria> contas, Scanner scanner) {
        System.out.print("Informe o número da conta: ");
        String numero = scanner.next();
        boolean encontrada = false;

        for (ContaBancaria conta : contas) {
            if (conta.getNumero().equals(numero)) {
                System.out.print("Informe o valor do depósito: ");
                double valor = scanner.nextDouble();
                conta.depositar(valor);
                encontrada = true;
                break;
            }
        }

        if (!encontrada) {
            System.out.println("Conta não encontrada!");
        }
    }

    // Função para realizar um saque
    public static void realizarSaque(ArrayList<ContaBancaria> contas, Scanner scanner) {
        System.out.print("Informe o número da conta: ");
        String numero = scanner.next();
        boolean encontrada = false;

        for (ContaBancaria conta : contas) {
            if (conta.getNumero().equals(numero)) {
                System.out.print("Informe o valor do saque: ");
                double valor = scanner.nextDouble();
                conta.sacar(valor);
                encontrada = true;
                break;
            }
        }

        if (!encontrada) {
            System.out.println("Conta não encontrada!");
        }
    }

    // Função para realizar uma transferência
    public static void realizarTransferencia(ArrayList<ContaBancaria> contas, Scanner scanner) {
        System.out.print("Informe o número da conta de origem: ");
        String numeroOrigem = scanner.next();
        System.out.print("Informe o número da conta de destino: ");
        String numeroDestino = scanner.next();
        boolean encontradaOrigem = false, encontradaDestino = false;

        ContaBancaria contaOrigem = null, contaDestino = null;

        for (ContaBancaria conta : contas) {
            if (conta.getNumero().equals(numeroOrigem)) {
                contaOrigem = conta;
                encontradaOrigem = true;
            }
            if (conta.getNumero().equals(numeroDestino)) {
                contaDestino = conta;
                encontradaDestino = true;
            }
        }

        if (encontradaOrigem && encontradaDestino) {
            System.out.print("Informe o valor da transferência: ");
            double valor = scanner.nextDouble();
            contaOrigem.transferir(contaDestino, valor);
        } else {
            System.out.println("Conta de origem ou destino não encontrada!");
        }
    }
}
