package tn.esprit.ruya.Fichier.service;

import tn.esprit.ruya.Fichier.repository.IFichierrepo;
import tn.esprit.ruya.models.Fichier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FichierServ implements IFichierser {

    @Autowired
    private IFichierrepo fichierRepo;

    @Override
    public List<Fichier> getAllFichiers() {
        return (List<Fichier>) fichierRepo.findAll();
    }

    @Override
    public Optional<Fichier> getFichierById(Long id) {
        return fichierRepo.findById(id);
    }

    @Override
    public Fichier createFichier(Fichier fichier) {
        return fichierRepo.save(fichier);
    }

    @Override
    public Fichier updateFichier(Long id, Fichier updatedFichier) {
        return fichierRepo.findById(id).map(fichier -> {
            fichier.setNomFichier(updatedFichier.getNomFichier());
            fichier.setNatureFichier(updatedFichier.getNatureFichier());
            fichier.setCodeValeur(updatedFichier.getCodeValeur());
            fichier.setUser(updatedFichier.getUser());
            return fichierRepo.save(fichier);
        }).orElse(null);
    }

    @Override
    public void deleteFichier(Long id) {
        fichierRepo.deleteById(id);
    }

}
