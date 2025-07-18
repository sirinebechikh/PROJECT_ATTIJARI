package tn.esprit.ruya.user.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import tn.esprit.ruya.models.ConfirmResetCodeDto;
import tn.esprit.ruya.models.RoleUser;
import tn.esprit.ruya.models.User;
import org.springframework.stereotype.Service;
import tn.esprit.ruya.user.repository.IUserRepo;

import java.util.*;


@RequiredArgsConstructor
@Service
public class UserServ implements IUserServ{
    private final IUserRepo userRepository;
    private final JavaMailSender mailSender;
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        user.setRole(RoleUser.SIMPLE_USER);
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setRole(updatedUser.getRole());
            return userRepository.save(user);
        }).orElse(null);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findByUsernameOrEmail(String input) {
        if (input.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            return userRepository.findByEmail(input);
        } else {
            return userRepository.findByUsername(input);
        }
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }


    // Mémoire temporaire (email -> code)
    private final Map<String, String> emailToResetCode = new HashMap<>();
    private final Map<String, String> codeToEmail = new HashMap<>();

    public ResponseEntity<?> generateAndSendResetCode(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Utilisateur non trouvé"));
        }

        // Générer un code à 6 chiffres
        String resetCode = String.format("%06d", new Random().nextInt(1_000_000));

        // Stocker dans les deux maps
        emailToResetCode.put(email, resetCode);
        codeToEmail.put(resetCode, email);

        // Envoyer par mail
        sendResetCodeByEmail(email, resetCode);

        return ResponseEntity.ok(Map.of(
                "message", "Code de réinitialisation envoyé"
        ));
    }

    public ResponseEntity<?> confirmResetCode(ConfirmResetCodeDto dto) {
        String email = codeToEmail.get(dto.getResetCode()); // ← récupère depuis la mémoire

        if (email == null || !emailToResetCode.get(email).equals(dto.getResetCode())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Code invalide ou expiré"));
        }

        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Utilisateur non trouvé"));
        }

        User user = optionalUser.get();
        user.setPassword(dto.getNewPassword()); // à encoder avec BCrypt
        userRepository.save(user);

        // Supprimer les codes
        emailToResetCode.remove(email);
        codeToEmail.remove(dto.getResetCode());

        return ResponseEntity.ok(Map.of("message", "Mot de passe réinitialisé avec succès"));
    }



    private void sendResetCodeByEmail(String to, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Code de réinitialisation - RU'ya");
        message.setText("Votre code de réinitialisation est : " + code + "\nIl est valable pendant 10 minutes.");
        mailSender.send(message);
    }
}
