//public: pode ser acessado por qualquer outra classe
//default (sem modificador) pode ser acessado por qualquer classe que esteja no mesmo pacote
//protected: pode ser acessado por qualquer classe do mesmo pacote de classe ou por qualquer classe que herde da classe

import br.com.fiap.loja.model.Cliente;

public class Main {

        public static void main(String[] args) {
            Cliente cliente = new Cliente();
            cliente.setNome("Thiago");
            cliente.exibirDados();
            System.out.println(cliente.getNome());
        }
    }
