package br.com.fiap.restaurante.view;

public class TesteHeranca {

    public static void main(String[] args) {
        Bebida bebida = new Bebida("Suco de Laranja","Água, laranja, açúcar, gelo",7.85,500);
        System.out.println("A bebida informada foi " + bebida.getNome());
        System.out.println(", é composta por " + bebida.getIngredientes());
        System.out.println(", custa R$" + bebida.getPreco());
        System.out.println(" e seu tamanho é de " + bebida.getTamanho() + "ml");
        System.out.println(bebida.getResumo());

        PratoQuente prato = new PratoQuente();
        prato.setNome("Omelete");
        prato.setIngredientes("Ovo, tomate, cebola e queijo");
        prato.setPreco(20);
        prato.setTamanho(2);
        System.out.println("O prato informado foi " + prato.getNome());
        System.out.println(", é composto por " + prato.getIngredientes());
        System.out.println(", custa R$" + prato.getPreco());
        System.out.println(" e serve " + prato.getTamanho() + "pessoas");
        System.out.println(prato.getResumo());

    }

}