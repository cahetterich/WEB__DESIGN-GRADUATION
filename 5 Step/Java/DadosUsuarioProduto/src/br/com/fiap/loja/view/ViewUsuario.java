package br.com.fiap.loja.view;

import br.com.fiap.loja.model.Usuario;

public class ViewUsuario {

    public static void main (String[] args) {

        Usuario us1 = new Usuario();
        Usuario us2 = new Usuario("Admin", "123");
        Usuario us3 = new Usuario("Admin", "123", "abc@gmail.com");
    }
}
