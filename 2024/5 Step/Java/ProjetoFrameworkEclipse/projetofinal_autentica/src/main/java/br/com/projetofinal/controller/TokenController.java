package br.com.projetofinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetofinal.beans.Usuario;
import br.com.projetofinal.dao.UsuarioDao;
import br.com.projetofinal.jwtutils.JwtTokenUtil;

@RestController
@CrossOrigin("*")
public class TokenController {
	
	@Autowired
	private UsuarioDao dao;
	
	@PostMapping("/token")
	public ResponseEntity<String> gerarToken(@RequestBody Usuario usuario) {
		
		Usuario result = dao.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		
		if(result == null) {
			return ResponseEntity.status(404).build();
		}
		
		JwtTokenUtil jwtUtil = new JwtTokenUtil();
		String token = jwtUtil.generateToken(usuario);
		
		return ResponseEntity.ok(token);
	
	}
}