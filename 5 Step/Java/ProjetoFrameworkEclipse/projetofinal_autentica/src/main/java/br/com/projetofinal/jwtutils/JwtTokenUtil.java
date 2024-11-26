package br.com.projetofinal.jwtutils;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import br.com.projetofinal.beans.Usuario;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtTokenUtil {
	public static final long JWT_TOKEN_VALIDITY = 5*60*60;

	private static final String secret = "qwertyuiopasdfghjklzxcvbnm123456";
	
	public String generateToken(Usuario usuario) {
		Map<String, Object> claims = new HashMap<>();
		return doGenerateToken(claims, usuario.getEmail());
	}

	private String doGenerateToken(Map<String, Object> claims, String subject) {
		
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");
		
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(subject)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY*1000))
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}

}