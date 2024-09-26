package exemplos;

import br.com.fiap.game.model.PersonagemMagico;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        //Criando um objeto do tipo Personagem Mágico
        PersonagemMagico mago = new PersonagemMagico("Gandalf", 100, "Magia");

        //Atribuindo valores aos atributos do objeto
//        mago.nome = "Gandalf";
//        mago.nivelEnergia = 100;
//        mago.poderMagico = "Magia";

        //Exibindo valores dos atributos do objeto
        System.out.println(mago.nome + " Energia: " + mago.nivelEnergia + " Poder: " + mago.poderMagico);

        PersonagemMagico elfo = new PersonagemMagico("Legolas", 70, "Arco");

//        elfo.nome = "Legolas";
//        elfo.nivelEnergia = 70;
//        elfo.poderMagico = "Arco";

        System.out.println(elfo.nome + " Energia: " + elfo.nivelEnergia + " Poder: " + elfo.poderMagico);

        PersonagemMagico cavaleiro = new PersonagemMagico("Aragon", 90, "Espada");

        System.out.println(cavaleiro.nome + " Energia: " + cavaleiro.nivelEnergia + " Poder: " + cavaleiro.poderMagico);

    }
}