package mg.inclusiv.cdan8.projet3.Controller;

import mg.inclusiv.cdan8.projet3.Entities.Fournisseur;
import mg.inclusiv.cdan8.projet3.Servicies.FournisseurService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fournisseurs")
public class FournisseurController {

    @Autowired
    private FournisseurService fournisseurService;

    // Endpoint pour créer un fournisseur
    @PostMapping("/liste")
    public Fournisseur createFournisseur(@RequestBody Fournisseur fournisseur) {
        return fournisseurService.saveFournisseur(fournisseur);
    }

    // Endpoint pour récupérer tous les fournisseurs
    @GetMapping("/liste")
    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurService.getAllFournisseurs();
    }

    // Endpoint pour récupérer un fournisseur par son ID
    @GetMapping("/{id}")
    public Fournisseur getFournisseurById(@PathVariable int id) {
        return fournisseurService.getFournisseurById(id);
    }

    // Endpoint pour mettre à jour un fournisseur
    @PutMapping("/{id}")
    public Fournisseur updateFournisseur(@PathVariable int id, @RequestBody Fournisseur fournisseur) {
        fournisseur.setId_fournisseur(id);
        return fournisseurService.saveFournisseur(fournisseur);
    }

    // Endpoint pour supprimer un fournisseur
    @DeleteMapping("/{id}")
    public void deleteFournisseur(@PathVariable int id) {
        fournisseurService.deleteFournisseur(id);
    }
}