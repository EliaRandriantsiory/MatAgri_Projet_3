package mg.inclusiv.cdan8.projet3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/materiels")
public class MaterielsRestController {

    @Autowired
    private MaterielsService materielsService;

    @PostMapping("/ajouter")
    public ResponseEntity<Materiels> ajouterMateriel(@RequestBody Materiels materiel) {
        Materiels nouveauMateriel = materielsService.addMateriel(materiel);
        return new ResponseEntity<>(nouveauMateriel, HttpStatus.CREATED);
    }

    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    ("/supprimer")
    public ResponseEntity<String> supprimerMateriel(@RequestParam("idMat") Long materielId ) {
        materielsService.deleteMateriel(materielId);
        return  ResponseEntity.ok("suppression materiel réussi");
    }

    
}
