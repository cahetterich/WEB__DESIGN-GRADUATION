package com.recrutaai.backend.controller;

import com.recrutaai.backend.model.User;
import com.recrutaai.backend.service.UserService;
import com.recrutaai.backend.repository.UserRepository;
import com.recrutaai.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*") // Configure conforme necessário
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(Authentication authentication) {
        String username = authentication.getName();
        User user = userService.getUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        // Evite retornar a senha
        user.setPassword(null);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateUserProfile(@RequestBody User updatedUser, Authentication authentication) {
        String username = authentication.getName();
        User user = userService.getUserByUsername(username)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());
        user.setPhone(updatedUser.getPhone());
        user.setCity(updatedUser.getCity());
        // Atualize outros campos conforme necessário

        userService.updateUserProfile(user.getId(), user);
        return ResponseEntity.ok("Perfil atualizado com sucesso");
    }
}
