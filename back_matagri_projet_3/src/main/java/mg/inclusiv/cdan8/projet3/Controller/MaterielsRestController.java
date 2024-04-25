package mg.inclusiv.cdan8.projet3.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import mg.inclusiv.cdan8.projet3.Entities.Materiels;
import mg.inclusiv.cdan8.projet3.Servicies.MaterielsService;


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
    @GetMapping("filter")
    public List<Materiels> getAllmat(){
        return materielsService.getAllMat();
    }
    
    
}
