package br.com.projetofinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetofinal.dao.UsuarioDao;
import br.com.projetofinal.beans.Usuario;


@RestController
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioDao dao;
	
	@GetMapping("/usuario")
	public ResponseEntity<List<Usuario>> listarTodos(
			@RequestParam(required = false) String nome,
			@RequestParam(required = false) String email){
		
		if((nome == null || nome.isEmpty()) || 
		    (email == null || email.isEmpty())) {
		
		List<Usuario> result = (List<Usuario>)dao.findAll();		
					
		return ResponseEntity.ok(result);		
	}
		else {
			List<Usuario> result = (List<Usuario>)dao.findByNomeContainingAndEmailContaining(nome, email);
		
			if(result.size()==0) {
				return ResponseEntity.status(404).build();
				}
			
			return ResponseEntity.ok(result);
		}
	}
	
	@GetMapping("/usuario/{codigo}")
	public ResponseEntity<Usuario> recuperarUsuario(@PathVariable int codigo) {
	
		Usuario result = dao.findById(codigo).orElse(null);
		
		if(result == null)
			return ResponseEntity.status(404).build();
		else
			return ResponseEntity.ok(result);
		
	}
	
	@PostMapping("/usuario")
	public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario) {
		try {
		Usuario result = dao.save(usuario);
		
		return ResponseEntity.ok(result);
	}
	catch (Exception e) {
		e.printStackTrace();
		return ResponseEntity.status(500).build();
	}
		
  }
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> efetuarLogin(@RequestBody Usuario usuario){
		Usuario result = dao.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		
		if(result == null)
			return ResponseEntity.status(404).build();
		else
			return ResponseEntity.ok(result);
	}
	
}