package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import mg.inclusiv.cdan8.projet3.Entities.Fournisseur;
import mg.inclusiv.cdan8.projet3.Repositories.FournisseurRepository;

@Service
public class FournisseurService {

    private final Fournisseur fournisseurRepository;

    @Autowired
    public FournisseurService(FournisseurRepository fournisseurRepository) {
        this.fournisseurRepository = (Fournisseur) fournisseurRepository;
    }

    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurRepository.findAll();
    }

    public List<Fournisseur> getFournisseurById(int id) {
        return fournisseurRepository.findById(id);
    }

    public Fournisseur saveFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public void deleteFournisseur(int id) {
        fournisseurRepository.deleteById(id);
    }
}