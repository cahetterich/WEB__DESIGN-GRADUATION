package br.com.projetofinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetofinal.beans.Serie;
import br.com.projetofinal.dao.SerieDao;

@RestController
@CrossOrigin("*")
public class SerieController {
	
	@Autowired
	private SerieDao serieDao;
	
	@GetMapping("/serie")
	public ResponseEntity<List<Serie>> listarTodasSeries(){
		
		List<Serie> result = (List<Serie>)serieDao.findAll();
		
		return ResponseEntity.ok(result);
		
	}
	
	@GetMapping("/serie/{codigo}")
	public ResponseEntity<Serie> buscarSerie(@PathVariable int codigo) {
		
		Serie result = serieDao.findById(codigo).orElse(null);
		
		if(result == null) {
			return ResponseEntity.status(404).build();
		}
		else {
			return ResponseEntity.ok(result);
			
		}	
	}
	
	@PostMapping("/serie")
	public ResponseEntity<Serie> salvarSerie(@RequestBody Serie serie) {
		try {
			Serie result = serieDao.save(serie);
		
			return ResponseEntity.ok(result);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).build();
		}				
	}

}
