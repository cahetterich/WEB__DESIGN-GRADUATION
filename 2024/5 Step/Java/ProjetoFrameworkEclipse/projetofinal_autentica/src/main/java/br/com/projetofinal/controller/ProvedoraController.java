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

import br.com.projetofinal.beans.Provedora;
import br.com.projetofinal.dao.ProvedoraDao;
import br.com.projetofinal.dto.ProvedoraFiltro;

@RestController
@CrossOrigin("*")
public class ProvedoraController {

	@Autowired
	private ProvedoraDao provedoraDao; 
	
	@GetMapping("/provedora")
	public ResponseEntity<List<Provedora>> listarTodasProvedoras(){
		
		List<Provedora> result = (List<Provedora>)provedoraDao.findAll();
		
		return ResponseEntity.ok(result);
		
	}
	
	@GetMapping("/provedora/{codigo}")
	public ResponseEntity<Provedora> buscarProvedora(@PathVariable int codigo) {
		
		Provedora result = provedoraDao.findById(codigo).orElse(null);
		
		if(result == null) {
			return ResponseEntity.status(404).build();
		}
		else {
			return ResponseEntity.ok(result);
			
		}	
	}
	
	@PostMapping("/provedora")
	public ResponseEntity<Provedora> salvarProvedora(@RequestBody Provedora provedora) {
		try {
			//System.out.println(provedora.getNome());
			Provedora result = provedoraDao.save(provedora);
		
			return ResponseEntity.ok(result);
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(500).build();
		}				
	}
	
	@PostMapping("/provedora/filter")
	public ResponseEntity<List<Provedora>> filtrarProvedoras(@RequestBody ProvedoraFiltro filtro){
		
		List<Provedora> result;
		if(filtro.getNome()!= null &&
			(filtro.getDataInicial() == null && filtro.getDataFinal() == null)) {
			 result = provedoraDao.findByNomeStartingWith(filtro.getNome());
		}
		else if(filtro.getNome() == null &&
				(filtro.getDataInicial() != null && filtro.getDataFinal() != null)) {
			    result = provedoraDao.findByFundacaoBetween(filtro.getDataInicial(), 
                                                            filtro.getDataFinal());
     	}
		else if(filtro.getNome() != null &&
				(filtro.getDataInicial() != null && filtro.getDataFinal() != null)) {
				 result = provedoraDao.findByNomeStartingWithAndFundacaoBetween
						(filtro.getNome(), filtro.getDataInicial(), filtro.getDataFinal());
		}
		else {
			return ResponseEntity.status(403).build();	
		}
		
		if(result.size() == 0) {
		return ResponseEntity.status(404).build();
		}
		else {
			return ResponseEntity.ok(result);
		}
	}
}
