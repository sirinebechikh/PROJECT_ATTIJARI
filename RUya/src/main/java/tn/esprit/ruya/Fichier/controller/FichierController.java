package tn.esprit.ruya.Fichier.controller;

import tn.esprit.ruya.Fichier.service.FichierServ;
import tn.esprit.ruya.models.Fichier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/fichiers")
public class FichierController {

    @Autowired
    private FichierServ fichierServ;

    // ✅ Get all fichiers
    @GetMapping
    public ResponseEntity<List<Fichier>> getAllFichiers() {
        return ResponseEntity.ok(fichierServ.getAllFichiers());
    }

    // ✅ Get fichier by ID
    @GetMapping("/{id}")
    public ResponseEntity<Fichier> getFichierById(@PathVariable Long id) {
        Optional<Fichier> fichier = fichierServ.getFichierById(id);
        return fichier.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Create new fichier
    @PostMapping
    public ResponseEntity<Fichier> createFichier(@RequestBody Fichier fichier) {
        Fichier created = fichierServ.createFichier(fichier);
        return ResponseEntity.ok(created);
    }

    // ✅ Update fichier by ID
    @PutMapping("/{id}")
    public ResponseEntity<Fichier> updateFichier(@PathVariable Long id, @RequestBody Fichier updatedFichier) {
        Fichier fichier = fichierServ.updateFichier(id, updatedFichier);
        if (fichier != null) {
            return ResponseEntity.ok(fichier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // ✅ Delete fichier by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFichier(@PathVariable Long id) {
        fichierServ.deleteFichier(id);
        return ResponseEntity.noContent().build();
    }
}
