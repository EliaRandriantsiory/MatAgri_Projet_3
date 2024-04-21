package mg.inclusiv.cdan8.projet3.Servicies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import mg.inclusiv.cdan8.projet3.Entities.Fournisseur;
import mg.inclusiv.cdan8.projet3.Repositories.FournisseurRepository;

@Service
public class FournisseurService {


    @Autowired
    private FournisseurRepository fournisseurRepository;

    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurRepository.findAll();
    }

    public Fournisseur getFournisseurById(int id) {
        return fournisseurRepository.findById(id).orElse(null);
    }

    public Fournisseur saveFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public void deleteFournisseur(int id) {
        fournisseurRepository.deleteById(id);
    }
}