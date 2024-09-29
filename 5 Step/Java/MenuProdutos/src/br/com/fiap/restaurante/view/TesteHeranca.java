package br.com.fiap.restaurante.view;

public class TesteHeranca {

    public static void main(String[] args) {
        Bebida bebida = new Bebida("Suco de Laranja", "Água, laranja, açúcar, gelo", 7.85, 500);
        System.out.print("A bebida informada foi " + bebida.getNome());
        System.out.print(", é composta por " + bebida.getIngredientes());
        System.out.print(", custa R$" + bebida.getPreco());
        System.out.print(" e seu tamanho é de " + bebida.getTamanho() + "ml");
        System.out.println(bebida.getResumo());
    }

}