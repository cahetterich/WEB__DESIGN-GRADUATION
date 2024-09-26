package exemplos;

public class DadosAluno {

    //classes
    String nome;

    int codigo;

    String endereco;

   EnderecoCompleto enderecoCompleto;

    //método implementado
    public DadosAluno(String nome, int codigo, String endereco) {
        this.nome = nome;
        this.codigo = codigo;
        this.endereco = endereco;
    }

    public DadosAluno(String nome){
        this.nome = nome;
    }

    public DadosAluno() {

    }

}
