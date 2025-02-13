package br.com.projetofinal; 

import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration; 
import org.springframework.http.HttpMethod; 
import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; 
import org.springframework.security.config.annotation.web.builders.HttpSecurity; 
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; 
import org.springframework.security.config.http.SessionCreationPolicy; 
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.security.web.SecurityFilterChain; 
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; 
import org.springframework.security.web.util.matcher.AntPathRequestMatcher; 

import br.com.projetofinal.jwtutils.JwtAuthorizationFilter; 

@Configuration 
@EnableWebSecurity 
public class SecurityConfigurations { 
	
	@Bean 
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception { 
		return http.csrf( 
			csrf -> csrf.ignoringRequestMatchers(AntPathRequestMatcher.antMatcher("/token/**"))) 
			.sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) 
			.authorizeHttpRequests(req -> { 
				req.requestMatchers(HttpMethod.POST, "/token").permitAll(); 
				req.requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.POST, "/token")).permitAll(); 
				req.anyRequest().authenticated(); 
			}) 
			.addFilterBefore(new JwtAuthorizationFilter() , UsernamePasswordAuthenticationFilter.class) 
			.build(); 
	} 
	
	@Bean 
	public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception{ 
		return configuration.getAuthenticationManager(); 
	} 
	
	@Bean 
	public PasswordEncoder passwordEncoder () { 
		return new BCryptPasswordEncoder(); 
	} 
}