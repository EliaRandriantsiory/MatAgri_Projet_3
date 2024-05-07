
package mg.inclusiv.cdan8.projet3.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import mg.inclusiv.cdan8.projet3.Entities.Commande;
import mg.inclusiv.cdan8.projet3.Servicies.CommandeService;
import mg.inclusiv.cdan8.projet3.Entities.Mutualisation;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/panier")
public class CommandeController {
    @Autowired
    private CommandeService commandeService;

    @GetMapping("/listePannier")
    public List<Commande> detailPannier(){
        List<Commande> DetailPannier = commandeService.getPannier();
        return DetailPannier;
    }


    @PostMapping("/mutualisation")
    public void mutualisation(@RequestBody Mutualisation mutualisation) {
        
        commandeService.mutualisation(mutualisation);
    }
    

}
