//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Criando um objeto
        Calculadora objeto = new Calculadora();
        // Chamando o método e armazenando o resultado
        int resultado = objeto.calcularSoma(5, 3);
        // Exibindo o resultado
        System.out.println(resultado); //println - nl pula uma lina

        Doce brigadeiro = new Doce();
        brigadeiro.nome = "Brigadeiro de chocolate";
        brigadeiro.dizerNome();


    }
}