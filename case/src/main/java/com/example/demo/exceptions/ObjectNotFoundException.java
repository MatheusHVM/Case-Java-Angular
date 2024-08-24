package com.example.demo.exceptions;

public class ObjectNotFoundException extends RuntimeException {
    public ObjectNotFoundException(String mensagem) {
        super(mensagem);
    }
}
