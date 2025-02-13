package br.com.helloWorld.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController;

public class Hello {

    @GetMapping ("/hello")
    public String dizerOla() {
        return "Olá Mundo!";
    }

}