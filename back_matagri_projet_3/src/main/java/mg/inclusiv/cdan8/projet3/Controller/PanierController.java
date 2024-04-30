package mg.inclusiv.cdan8.projet3.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mg.inclusiv.cdan8.projet3.Entities.Commande;
import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Entities.PanierMat;
import mg.inclusiv.cdan8.projet3.Servicies.PanierMatService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/panierMat")
public class PanierController {
    @Autowired
    PanierMatService panierMatService;

    @GetMapping("/listePannier")
     public List<PanierMat> detailPannier(){
        List<PanierMat> listPannier = panierMatService.listPanier();
        return listPannier;
    }

    @PostMapping("addPanier")
    public ResponseEntity<String> addPanier(@RequestBody PanierMat panierMat) {
        panierMatService.addPanier(panierMat);
        
        return ResponseEntity.ok("Données reçues avec succès !");
    }
    
}
