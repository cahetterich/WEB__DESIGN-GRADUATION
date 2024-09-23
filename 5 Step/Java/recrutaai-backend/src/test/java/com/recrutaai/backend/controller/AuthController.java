package com.recrutaai.backend.controller;

import com.recrutaai.backend.model.User;
import com.recrutaai.backend.service.UserService;
import com.recrutaai.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.recrutaai.backend.service.CustomUserDetailsService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Configure conforme necessário
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    // DTOs para requisição e resposta podem ser criados para melhor estrutura

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.getUserProfile(user.getId()).isPresent()) {
            return ResponseEntity.badRequest().body("Erro: Usuário já existe!");
        }
        User savedUser = userService.registerUser(user);
        return ResponseEntity.ok("Usuário registrado com sucesso!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Map<String, String> loginRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.get("username"), loginRequest.get("password"))
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("Erro: Credenciais inválidas");
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.get("username"));
        final String jwt = jwtUtil.generateToken(userDetails);

        Map<String, String> response = new HashMap<>();
        response.put("token", jwt);

        return ResponseEntity.ok(response);
    }
}
