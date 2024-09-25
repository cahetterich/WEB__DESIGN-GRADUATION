public class PersonagemMagico {

    //classes
    String nome;

    int nivelEnergia;

    String poderMagico;

    HabilidadeEspecial habilidadeEspecial;

    //método implementado
    public PersonagemMagico(String nome, int nivelEnergia, String poderMagico) {
        this.nome = nome;
        this.nivelEnergia = nivelEnergia;
        this.poderMagico = poderMagico;
    }

    public PersonagemMagico(String nome){
        this.nome = nome;
    }

    public PersonagemMagico() {}

    public void atacar(String ataque) {
        if (nivelEnergia >= 10) {
            System.out.println(nome + " realizou um ataque: " + ataque + "!");
            nivelEnergia -= 10;
        } else {
            System.out.println(nome + " está sem energia para atacar.");
        }
    }

    public int aumentarEnergia(int energia){
        nivelEnergia = nivelEnergia + energia;
        return nivelEnergia;
    }

    public void ativarHabilidadeEspecial(){
        if (!habilidadeEspecial.habilitada){
            System.out.println("Habilidade especial não está ativada");
        } else if (nivelEnergia >= habilidadeEspecial.custoEnergia){
            System.out.println("Ativando a habilidade: " + habilidadeEspecial.nome);
            nivelEnergia -= habilidadeEspecial.custoEnergia;
        } else {
            System.out.println(nome + " está sem energia para a habilidade especial");
        }
    }

}
