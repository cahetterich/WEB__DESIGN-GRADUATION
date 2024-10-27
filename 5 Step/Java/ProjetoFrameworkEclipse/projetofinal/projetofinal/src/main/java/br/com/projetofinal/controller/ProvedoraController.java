package br.com.projetofinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetofinal.dao.ProvedoraDao;

@RestController
@CrossOrigin("*")
public class ProvedoraController {

	@Autowired
	private ProvedoraDao provedoraDao; 
}
