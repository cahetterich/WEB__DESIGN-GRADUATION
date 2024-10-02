package br.com.fiap.loja.exception;

public class EstoqueInsuficienteException extends  Exception {

    public EstoqueInsuficienteException() {
    }

    public EstoqueInsuficienteException(String message) {
        super(message);
    }
}